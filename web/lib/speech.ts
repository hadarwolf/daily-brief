"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { Lang } from "./types";

// Read-aloud with the phone's built-in voices (Web Speech API): free, offline-capable, no API.
// Hebrew needs a Hebrew voice on the device; iPhones and most Android phones have one.

// "iw" is Hebrew's legacy language code, still reported by some Android voices.
const LANG_PREFIXES: Record<Lang, string[]> = { en: ["en"], he: ["he", "iw"] };
// Some browsers cut off long utterances, so text is spoken in sentence-sized chunks.
const MAX_CHUNK = 220;

function synth(): SpeechSynthesis | null {
  return typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null;
}

function pickVoice(voices: SpeechSynthesisVoice[], lang: Lang): SpeechSynthesisVoice | null {
  const matching = voices.filter((v) => LANG_PREFIXES[lang].some((p) => v.lang.toLowerCase().startsWith(p)));
  return matching.find((v) => v.default) ?? matching.find((v) => v.localService) ?? matching[0] ?? null;
}

/** Markdown (Coffee / Deep bodies) to plain sentences a voice can read. */
export function toSpeech(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // [text](url) -> text
    .split("\n")
    .map((line) =>
      line
        .replace(/^\s*#{1,6}\s+/, "") // headings
        .replace(/^\s*>\s?/, "") // quotes
        .replace(/^\s*(?:[-*+]|\d+\.)\s+/, "") // list markers
        .replace(/[*_`]+/g, "") // emphasis
        .trim(),
    )
    .filter(Boolean)
    // A heading or list item has no full stop; add one so the voice pauses.
    .map((line) => (/[.!?:;…"”'’)]$/.test(line) ? line : `${line}.`))
    .join(" ");
}

function chunk(text: string): string[] {
  const sentences = text.match(/[^.!?…]+[.!?…]+["'”’)]*\s*|[^.!?…]+$/g) ?? [text];
  const chunks: string[] = [];
  let current = "";
  for (const sentence of sentences) {
    if (current && current.length + sentence.length > MAX_CHUNK) {
      chunks.push(current.trim());
      current = "";
    }
    current += sentence;
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

export function useSpeech() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => synth()?.getVoices() ?? []);
  const [speaking, setSpeaking] = useState(false);
  const run = useRef(0); // bumped on every start/stop so stale "ended" events are ignored
  const ownsSpeech = useRef(false);

  // Voices often load after the page does.
  useEffect(() => {
    const s = synth();
    if (!s) return;
    const update = () => setVoices(s.getVoices());
    s.addEventListener("voiceschanged", update);
    return () => s.removeEventListener("voiceschanged", update);
  }, []);

  // Stop talking if whatever started the speech goes away (e.g. switching sections).
  useEffect(() => {
    const owns = ownsSpeech;
    return () => {
      if (owns.current) synth()?.cancel();
    };
  }, []);

  const canSpeak = useCallback((lang: Lang) => pickVoice(voices, lang) !== null, [voices]);

  const stop = useCallback(() => {
    run.current += 1;
    ownsSpeech.current = false;
    synth()?.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string, lang: Lang) => {
      const s = synth();
      const voice = pickVoice(voices, lang);
      if (!s || !voice || !text.trim()) return;
      s.cancel();
      const thisRun = ++run.current;
      const done = () => {
        if (run.current !== thisRun) return;
        ownsSpeech.current = false;
        setSpeaking(false);
      };
      const parts = chunk(text);
      parts.forEach((part, i) => {
        const utterance = new SpeechSynthesisUtterance(part);
        utterance.voice = voice;
        utterance.lang = voice.lang;
        if (i === parts.length - 1) utterance.onend = done;
        utterance.onerror = done;
        s.speak(utterance);
      });
      ownsSpeech.current = true;
      setSpeaking(true);
    },
    [voices],
  );

  return { canSpeak, speak, stop, speaking };
}
