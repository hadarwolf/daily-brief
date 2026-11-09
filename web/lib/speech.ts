"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { Lang } from "./types";

// Read-aloud with the phone's built-in voices (Web Speech API): free, offline-capable, no API.
// Hebrew needs a Hebrew voice on the device; iPhones and most Android phones have one.

// "iw" is Hebrew's legacy language code, still reported by some Android voices.
const LANG_PREFIXES: Record<Lang, string[]> = { en: ["en"], he: ["he", "iw"] };
// Text is spoken in sentence-sized chunks: some browsers cut off long utterances, and chunks
// are also what the player's position, skipping and resuming are measured in.
const MAX_CHUNK = 160;

export function synth(): SpeechSynthesis | null {
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

export function chunkText(text: string): string[] {
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

/** The voices installed on this device; they often load after the page does. */
export function useVoices() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => synth()?.getVoices() ?? []);
  useEffect(() => {
    const s = synth();
    if (!s) return;
    const update = () => setVoices(s.getVoices());
    s.addEventListener("voiceschanged", update);
    return () => s.removeEventListener("voiceschanged", update);
  }, []);
  return useCallback((lang: Lang) => pickVoice(voices, lang), [voices]);
}

/** One-shot speech, e.g. pronouncing a single word. */
export function useSpeech() {
  const voiceFor = useVoices();
  const ownsSpeech = useRef(false);

  // Stop talking if whatever started the speech goes away.
  useEffect(() => {
    const owns = ownsSpeech;
    return () => {
      if (owns.current) synth()?.cancel();
    };
  }, []);

  const canSpeak = useCallback((lang: Lang) => voiceFor(lang) !== null, [voiceFor]);

  const speak = useCallback(
    (text: string, lang: Lang) => {
      const s = synth();
      const voice = voiceFor(lang);
      if (!s || !voice || !text.trim()) return;
      s.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.lang = voice.lang;
      utterance.onend = utterance.onerror = () => {
        ownsSpeech.current = false;
      };
      ownsSpeech.current = true;
      s.speak(utterance);
    },
    [voiceFor],
  );

  return { canSpeak, speak };
}
