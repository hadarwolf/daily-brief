"use client";

import { useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";

import { loadSection } from "@/lib/data";
import { useSpeech } from "@/lib/speech";
import { useStored } from "@/lib/storage";
import type { Story } from "@/lib/types";

// Flashcards built from the Learn section of every brief the app has (the last 14 days):
// tap to reveal the meaning, then "Got it" retires the card or "Again" sends it to the back.

type Kind = "word" | "concept";

interface Card {
  id: string; // date + story id, stable across reloads
  date: string;
  kind: Kind;
  term: string;
  hebrew: string;
  definition: string;
  explanation: string;
}

const HEBREW = /[֐-׿]/;

/** "Runway (זמן עד אזילת המזומן)" -> term "Runway", hebrew "זמן עד אזילת המזומן". */
function splitHeadline(story: Story): { term: string; hebrew: string } {
  const match = story.en.headline.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
  if (match && HEBREW.test(match[2])) return { term: match[1], hebrew: match[2] };
  return { term: story.en.headline, hebrew: story.he.headline };
}

async function loadCards(dates: string[]): Promise<Card[]> {
  const learn = await Promise.all(dates.map((date) => loadSection(date, "learn")));
  const seen = new Set<string>();
  const cards: Card[] = [];
  learn.forEach((section, i) => {
    for (const story of section?.stories ?? []) {
      if (story.kind !== "word" && story.kind !== "concept") continue;
      const { term, hebrew } = splitHeadline(story);
      const key = term.toLowerCase();
      if (seen.has(key)) continue; // newest first, so a repeated term keeps its latest version
      seen.add(key);
      cards.push({
        id: `${dates[i]}:${story.id}`,
        date: dates[i],
        kind: story.kind,
        term,
        hebrew,
        definition: story.en.scroll,
        explanation: story.en.coffee,
      });
    }
  });
  return cards;
}

function shortDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export function VocabView({ dates }: { dates: string[] }) {
  const [cards, setCards] = useState<Card[] | null>(null);
  const [known, setKnown] = useStored<Record<string, true>>("vocab-known", {});
  const [kind, setKind] = useStored<Kind>("vocab-kind", "word");
  const [deferred, setDeferred] = useState<string[]>([]); // "Again" cards, in the order they were sent back
  const [flipped, setFlipped] = useState(false);
  const { canSpeak, speak } = useSpeech();

  useEffect(() => {
    loadCards(dates).then(setCards);
  }, [dates]);

  const ofKind = useMemo(() => (cards ?? []).filter((c) => c.kind === kind), [cards, kind]);
  const queue = useMemo(() => {
    const pending = ofKind.filter((c) => !known[c.id]);
    const back = new Set(deferred);
    return [...pending.filter((c) => !back.has(c.id)), ...deferred.map((id) => pending.find((c) => c.id === id)).filter((c): c is Card => Boolean(c))];
  }, [ofKind, known, deferred]);

  if (cards === null) return <p className="py-10 text-center text-muted">Collecting your phrases…</p>;

  const current = queue[0];
  const counts = { word: cards.filter((c) => c.kind === "word").length, concept: cards.filter((c) => c.kind === "concept").length };

  const next = () => setFlipped(false);
  const gotIt = () => {
    setKnown((prev) => ({ ...prev, [current.id]: true }));
    setDeferred((prev) => prev.filter((id) => id !== current.id));
    next();
  };
  const again = () => {
    setDeferred((prev) => [...prev.filter((id) => id !== current.id), current.id]);
    next();
  };
  const reviewAgain = () => {
    setKnown((prev) => Object.fromEntries(Object.entries(prev).filter(([id]) => !ofKind.some((c) => c.id === id))));
    setDeferred([]);
    next();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">Vocab</h2>
      <p className="mt-1 text-sm text-muted">Phrases and concepts from the last two weeks.</p>

      <div className="mt-4 flex gap-2" role="radiogroup" aria-label="Card type">
        {(["word", "concept"] as const).map((k) => (
          <button
            key={k}
            role="radio"
            aria-checked={kind === k}
            onClick={() => {
              setKind(k);
              next();
            }}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 transition-colors ${
              kind === k ? "bg-fg text-bg ring-fg" : "ring-line text-muted"
            }`}
          >
            {k === "word" ? "Phrases" : "Concepts"} <span className="opacity-70">{counts[k]}</span>
          </button>
        ))}
      </div>

      {ofKind.length === 0 ? (
        <p className="mt-8 text-center text-muted">Nothing here yet. New ones arrive with each morning&apos;s brief.</p>
      ) : !current ? (
        <div className="mt-6 rounded-2xl bg-card p-6 text-center ring-1 ring-line">
          <p className="text-lg font-semibold">All caught up</p>
          <p className="mt-1 text-muted">
            You know all {ofKind.length} {kind === "word" ? "phrases" : "concepts"} from the last two weeks.
          </p>
          <button onClick={reviewAgain} className="mt-3 text-sm font-medium text-accent underline-offset-2 hover:underline">
            Review them again
          </button>
        </div>
      ) : (
        <>
          <p className="mt-4 text-sm text-muted">
            {queue.length} left · {ofKind.length - queue.length} known
          </p>
          <article className="mt-2 rounded-2xl bg-card p-5 ring-1 ring-line">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {current.kind === "word" ? "Phrase" : "Concept"} · {shortDate(current.date)}
              </p>
              {canSpeak("en") && (
                <button
                  onClick={() => speak(current.term, "en")}
                  className="rounded-full px-2.5 py-1 text-sm ring-1 ring-line"
                  aria-label={`Pronounce ${current.term}`}
                >
                  🔊
                </button>
              )}
            </div>
            <h3 className="mt-2 text-2xl font-semibold leading-snug text-balance">{current.term}</h3>

            {!flipped ? (
              <button
                onClick={() => setFlipped(true)}
                className="mt-5 w-full rounded-xl py-3 text-center font-medium ring-1 ring-line"
              >
                Show meaning
              </button>
            ) : (
              <>
                <p className="mt-2 text-lg font-medium text-accent" dir="rtl" lang="he">
                  {current.hebrew}
                </p>
                <p className="mt-3 font-medium leading-relaxed">{current.definition}</p>
                <div className="prose-brief mt-3 text-muted">
                  <Markdown>{current.explanation}</Markdown>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button onClick={again} className="rounded-xl py-3 font-medium ring-1 ring-line">
                    Again
                  </button>
                  <button onClick={gotIt} className="rounded-xl bg-accent py-3 font-medium text-accent-fg">
                    Got it ✓
                  </button>
                </div>
              </>
            )}
          </article>
        </>
      )}
    </div>
  );
}
