"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { chunkText, synth, useVoices } from "./speech";
import { readStored, writeStored } from "./storage";
import type { Lang } from "./types";

// A small audio player on top of the phone's built-in voice. The voice can't report a length
// or jump into the middle of a sentence, so the text is played one sentence-sized chunk at a
// time: the position is "which chunk", times are estimated from text length, and skipping or
// dragging lands on the start of a chunk.

export const SPEEDS = [0.75, 1, 1.25, 1.5, 1.75, 2];

// Starting guess for how fast the voice reads, in characters per second at 1x. Every chunk that
// plays to the end refines it, so the clock is accurate after a few sentences on any phone.
const DEFAULT_CPS: Record<Lang, number> = { en: 14, he: 11 };
const CPS_KEY = "speech-cps";
const SPEED_KEY = "listen-speed";
const POSITIONS_KEY = "listen-positions";
const MAX_SAVED_POSITIONS = 60;

function savedPosition(id: string): number {
  return readStored<Record<string, number>>(POSITIONS_KEY, {})[id] ?? 0;
}

function savePosition(id: string, index: number): void {
  const all = readStored<Record<string, number>>(POSITIONS_KEY, {});
  delete all[id]; // re-insert so it counts as the newest entry
  all[id] = index;
  writeStored(POSITIONS_KEY, Object.fromEntries(Object.entries(all).slice(-MAX_SAVED_POSITIONS)));
}

export function formatClock(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/** Plays `text` aloud; `id` identifies it so the listening position survives closing the app. */
export function useReader(id: string, text: string, lang: Lang) {
  const voiceFor = useVoices();
  const chunks = useMemo(() => chunkText(text), [text]);
  const [index, setIndex] = useState(() => {
    const saved = savedPosition(id);
    return saved < chunks.length ? saved : 0;
  });
  const [playing, setPlaying] = useState(false);
  const [rate, setRateState] = useState(() => readStored(SPEED_KEY, 1));
  const [cps, setCps] = useState<Record<Lang, number>>(() => ({ ...DEFAULT_CPS, ...readStored(CPS_KEY, {}) }));
  const [chunkStartedAt, setChunkStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const run = useRef(0); // bumped on every start/stop so events from an old run are ignored
  const ownsSpeech = useRef(false);
  const utterance = useRef<SpeechSynthesisUtterance | null>(null); // kept so it isn't garbage-collected mid-speech

  // Estimated seconds per chunk at the current speed, and where each chunk starts.
  const timeline = useMemo(() => {
    const perSecond = cps[lang] * rate;
    const durations = chunks.map((c) => c.length / perSecond);
    const starts: number[] = [];
    let total = 0;
    for (const d of durations) {
      starts.push(total);
      total += d;
    }
    return { durations, starts, total };
  }, [chunks, cps, lang, rate]);

  // Tick the clock while playing.
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(timer);
  }, [playing]);

  // Stop talking if the player goes away (switching section, language or length).
  useEffect(() => {
    const runRef = run;
    const owns = ownsSpeech;
    return () => {
      if (owns.current) {
        runRef.current += 1;
        synth()?.cancel();
      }
    };
  }, []);

  const calibrate = useCallback(
    (chars: number, seconds: number, atRate: number) => {
      if (seconds < 1) return; // too short to measure reliably
      setCps((prev) => {
        const measured = chars / (seconds * atRate);
        const next = { ...prev, [lang]: prev[lang] * 0.7 + measured * 0.3 };
        writeStored(CPS_KEY, next);
        return next;
      });
    },
    [lang],
  );

  const stopSpeech = useCallback(() => {
    run.current += 1;
    ownsSpeech.current = false;
    synth()?.cancel();
  }, []);

  const playFrom = useCallback(
    (start: number, atRate: number) => {
      const s = synth();
      const voice = voiceFor(lang);
      if (!s || !voice) return;
      const token = ++run.current;
      s.cancel();
      ownsSpeech.current = true;
      setPlaying(true);

      const speakChunk = (k: number) => {
        if (run.current !== token) return;
        if (k >= chunks.length) {
          // Finished: the next Listen starts from the top.
          ownsSpeech.current = false;
          setPlaying(false);
          setChunkStartedAt(null);
          setIndex(0);
          savePosition(id, 0);
          return;
        }
        setIndex(k);
        setChunkStartedAt(null);
        savePosition(id, k);
        const u = new SpeechSynthesisUtterance(chunks[k]);
        u.voice = voice;
        u.lang = voice.lang;
        u.rate = atRate;
        let startedAt = 0;
        u.onstart = () => {
          if (run.current !== token) return;
          startedAt = Date.now();
          setChunkStartedAt(startedAt);
          setNow(startedAt);
        };
        u.onend = () => {
          if (run.current !== token) return;
          if (startedAt) calibrate(chunks[k].length, (Date.now() - startedAt) / 1000, atRate);
          speakChunk(k + 1);
        };
        u.onerror = (e) => {
          if (run.current !== token || e.error === "interrupted" || e.error === "canceled") return;
          ownsSpeech.current = false;
          setPlaying(false);
        };
        utterance.current = u;
        s.speak(u);
      };
      // Chrome sometimes drops a speak() issued right after cancel().
      setTimeout(() => speakChunk(start), 50);
    },
    [calibrate, chunks, id, lang, voiceFor],
  );

  const play = useCallback(() => playFrom(index, rate), [index, playFrom, rate]);

  const pause = useCallback(() => {
    stopSpeech();
    setPlaying(false);
    setChunkStartedAt(null);
  }, [stopSpeech]);

  const elapsedInChunk =
    playing && chunkStartedAt ? Math.min(Math.max(0, (now - chunkStartedAt) / 1000), timeline.durations[index] ?? 0) : 0;
  const position = (timeline.starts[index] ?? 0) + elapsedInChunk;

  const goToChunk = useCallback(
    (target: number) => {
      const k = Math.max(0, Math.min(target, chunks.length - 1));
      if (playing) {
        playFrom(k, rate);
      } else {
        setIndex(k);
        savePosition(id, k);
      }
    },
    [chunks.length, id, playFrom, playing, rate],
  );

  /** The chunk whose start is closest to `seconds` (chunks are ~10 s, so this is the best fit). */
  const nearestChunk = useCallback(
    (seconds: number) => {
      let best = 0;
      timeline.starts.forEach((start, i) => {
        if (Math.abs(start - seconds) < Math.abs(timeline.starts[best] - seconds)) best = i;
      });
      return best;
    },
    [timeline],
  );

  const seek = useCallback((seconds: number) => goToChunk(nearestChunk(seconds)), [goToChunk, nearestChunk]);

  const skip = useCallback(
    (delta: number) => {
      let target = nearestChunk(position + delta);
      if (delta > 0) {
        target = Math.max(target, index + 1); // forward always moves forward
      } else {
        // Back always moves back: to the previous chunk if we're near the start of this one.
        const intoChunk = position - (timeline.starts[index] ?? 0);
        target = Math.min(target, intoChunk < 3 ? index - 1 : index);
      }
      goToChunk(target);
    },
    [goToChunk, index, nearestChunk, position, timeline],
  );

  const setRate = useCallback(
    (next: number) => {
      setRateState(next);
      writeStored(SPEED_KEY, next);
      if (playing) playFrom(index, next);
    },
    [index, playFrom, playing],
  );

  return {
    available: voiceFor(lang) !== null,
    playing,
    play,
    pause,
    seek,
    skip,
    position,
    total: timeline.total,
    rate,
    setRate,
    resumable: index > 0,
  };
}
