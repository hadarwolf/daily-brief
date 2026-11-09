"use client";

import { useSpeech } from "@/lib/speech";
import type { Lang } from "@/lib/types";

const LABELS: Record<Lang, { listen: string; stop: string }> = {
  en: { listen: "Listen", stop: "Stop" },
  he: { listen: "האזנה", stop: "עצירה" },
};

/** Reads `text` aloud. Hidden when the phone has no voice for `lang`. Remount it (via `key`)
 * when the text changes: unmounting stops any speech it started. */
export function ListenButton({ text, lang }: { text: string; lang: Lang }) {
  const { canSpeak, speak, stop, speaking } = useSpeech();
  if (!canSpeak(lang)) return null;
  return (
    <button
      onClick={() => (speaking ? stop() : speak(text, lang))}
      className={`rounded-full px-3 py-1 text-sm font-medium ring-1 transition-colors ${
        speaking ? "bg-accent text-accent-fg ring-accent" : "ring-line"
      }`}
      aria-pressed={speaking}
    >
      {speaking ? `■ ${LABELS[lang].stop}` : `▶ ${LABELS[lang].listen}`}
    </button>
  );
}
