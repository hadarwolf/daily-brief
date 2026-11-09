"use client";

import { useState } from "react";

import { formatClock, SPEEDS, useReader } from "@/lib/reader";
import type { Lang } from "@/lib/types";

const LABELS: Record<Lang, { listen: string; resume: string; pause: string }> = {
  en: { listen: "Listen", resume: "Resume", pause: "Pause" },
  he: { listen: "האזנה", resume: "המשך", pause: "השהיה" },
};

const SKIP_SECONDS = 15;

/**
 * "Listen" button for a section, plus a player bar pinned to the bottom of the screen once
 * started: position bar with time, back/forward 15 s, play/pause and speed. The listening
 * position is saved per `id`, so it resumes where you stopped.
 * Hidden when the phone has no voice for `lang`. Remount it (via `key`) when the text changes.
 */
export function ListenPlayer({ id, text, lang }: { id: string; text: string; lang: Lang }) {
  const reader = useReader(id, text, lang);
  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState<number | null>(null); // seconds, while the slider is held
  if (!reader.available) return null;

  const label = LABELS[lang];
  const shown = dragging ?? reader.position;
  const nextSpeed = SPEEDS[(SPEEDS.indexOf(reader.rate) + 1) % SPEEDS.length] ?? 1;
  const toggle = () => (reader.playing ? reader.pause() : reader.play());
  const commitDrag = () => {
    if (dragging === null) return;
    reader.seek(dragging);
    setDragging(null);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          toggle();
        }}
        className={`rounded-full px-3 py-1 text-sm font-medium ring-1 transition-colors ${
          reader.playing ? "bg-accent text-accent-fg ring-accent" : "ring-line"
        }`}
        aria-pressed={reader.playing}
      >
        {reader.playing ? (
          `❚❚ ${label.pause}`
        ) : reader.resumable ? (
          <>
            ▶ {label.resume} <span dir="ltr">{formatClock(reader.position)}</span>
          </>
        ) : (
          `▶ ${label.listen}`
        )}
      </button>

      {open && (
        <div
          dir="ltr"
          className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-bg/95 px-4 pt-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] backdrop-blur"
        >
          <div className="mx-auto max-w-xl">
            <input
              type="range"
              min={0}
              max={Math.max(1, Math.round(reader.total))}
              step={1}
              value={Math.round(shown)}
              onChange={(e) => setDragging(Number(e.target.value))}
              onPointerUp={commitDrag}
              onKeyUp={commitDrag}
              className="w-full accent-accent"
              aria-label="Position"
            />
            <div className="flex justify-between text-xs tabular-nums text-muted">
              <span>{formatClock(shown)}</span>
              <span>{formatClock(reader.total)}</span>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <button
                onClick={() => reader.setRate(nextSpeed)}
                className="w-14 rounded-full py-1.5 text-sm font-semibold tabular-nums ring-1 ring-line"
                aria-label={`Speed ${reader.rate}x, tap for ${nextSpeed}x`}
              >
                {reader.rate}×
              </button>
              <button
                onClick={() => reader.skip(-SKIP_SECONDS)}
                className="rounded-full px-3 py-2 text-sm font-medium"
                aria-label={`Back ${SKIP_SECONDS} seconds`}
              >
                ↺ {SKIP_SECONDS}
              </button>
              <button
                onClick={toggle}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg text-accent-fg"
                aria-label={reader.playing ? "Pause" : "Play"}
              >
                {reader.playing ? "❚❚" : "▶"}
              </button>
              <button
                onClick={() => reader.skip(SKIP_SECONDS)}
                className="rounded-full px-3 py-2 text-sm font-medium"
                aria-label={`Forward ${SKIP_SECONDS} seconds`}
              >
                {SKIP_SECONDS} ↻
              </button>
              <button
                onClick={() => {
                  reader.pause();
                  setOpen(false);
                }}
                className="w-14 rounded-full py-1.5 text-sm ring-1 ring-line"
                aria-label="Close player"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
