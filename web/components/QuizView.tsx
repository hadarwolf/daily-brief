"use client";

import { useStored } from "@/lib/storage";
import type { Lang, Quiz } from "@/lib/types";

const COPY: Record<
  Lang,
  {
    title: string;
    sub: (date: string) => string;
    score: (n: number, total: number) => string;
    again: string;
    pick: string;
  }
> = {
  en: {
    title: "Quiz",
    sub: (date) => `From the brief of ${date}. What stuck?`,
    score: (n, total) => `You got ${n} of ${total}`,
    again: "Try again",
    pick: "Tap an answer",
  },
  he: {
    title: "חידון",
    sub: (date) => `על הסקירה מ-${date}. מה נשאר לך בראש?`,
    score: (n, total) => `ענית נכון על ${n} מתוך ${total}`,
    again: "לנסות שוב",
    pick: "בחרו תשובה",
  },
};

const LETTERS = ["A", "B", "C", "D"];

export function QuizView({
  quiz,
  dateLabel,
}: {
  quiz: Quiz;
  dateLabel: string;
}) {
  const [lang, setLang] = useStored<Lang>("quiz-lang", "en");
  // question id -> index of the option picked. Kept per quiz date so each day starts fresh.
  const [answers, setAnswers] = useStored<Record<string, number>>(
    `quiz-answers:${quiz.date}`,
    {},
  );

  const t = COPY[lang];
  const total = quiz.questions.length;
  const answered = quiz.questions.filter(
    (q) => answers[q.id] !== undefined,
  ).length;
  const correct = quiz.questions.filter(
    (q) => answers[q.id] === q.answer_index,
  ).length;

  return (
    <div dir={lang === "he" ? "rtl" : "ltr"} lang={lang}>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold tracking-tight">{t.title}</h2>
        <button
          onClick={() => setLang(lang === "he" ? "en" : "he")}
          className="rounded-full px-3 py-1 text-sm font-medium ring-1 ring-line"
          aria-label="Switch language"
        >
          {lang === "he" ? "English" : "עברית"}
        </button>
      </div>
      <p className="mt-1 text-sm text-muted">{t.sub(dateLabel)}</p>

      <ol className="mt-4 space-y-4">
        {quiz.questions.map((q, qi) => {
          const text = q[lang];
          const picked = answers[q.id];
          const done = picked !== undefined;
          return (
            <li key={q.id} className="rounded-2xl bg-card p-5 ring-1 ring-line">
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                <span dir="ltr">
                  {qi + 1} / {total}
                </span>
              </p>
              <h3 className="mt-1.5 text-[1.1rem] font-semibold leading-snug text-balance">
                {text.question}
              </h3>

              <ul className="mt-3 space-y-2">
                {text.options.map((option, oi) => {
                  const isRight = oi === q.answer_index;
                  const isPicked = oi === picked;
                  let style = "ring-line";
                  if (done && isRight) style = "ring-up bg-up/10";
                  else if (done && isPicked) style = "ring-down bg-down/10";
                  else if (done) style = "ring-line opacity-60";
                  return (
                    <li key={oi}>
                      <button
                        disabled={done}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, [q.id]: oi }))
                        }
                        className={`flex w-full items-start gap-3 rounded-xl px-3.5 py-3 text-start ring-1 transition-colors disabled:cursor-default ${style}`}
                      >
                        <span
                          className="mt-px text-xs font-semibold text-muted"
                          dir="ltr"
                        >
                          {LETTERS[oi]}
                        </span>
                        <span className="flex-1 leading-snug">{option}</span>
                        {done && isRight && (
                          <span aria-label="correct" className="text-up">
                            ✓
                          </span>
                        )}
                        {done && isPicked && !isRight && (
                          <span aria-label="wrong" className="text-down">
                            ✗
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {done && (
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {text.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-5 rounded-2xl bg-card p-5 text-center ring-1 ring-line">
        {answered < total ? (
          <p className="text-muted">{t.pick}</p>
        ) : (
          <>
            <p className="text-lg font-semibold">{t.score(correct, total)}</p>
            <button
              onClick={() => setAnswers({})}
              className="mt-2 text-sm font-medium text-accent underline-offset-2 hover:underline"
            >
              {t.again}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
