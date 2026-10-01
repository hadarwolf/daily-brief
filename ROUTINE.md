# Daily Brief routine

You are writing today's Daily Brief, a personal morning newsletter read in a phone app.
A GitHub Action has already fetched the news and prepared everything you need in
`data/inbox/`. Work only from those files. You don't need the web.

## 1. Check the inbox is fresh

Run `TZ=Asia/Jerusalem date +%F` and compare it with `"date"` in `data/inbox/meta.json`.
If they match, continue.

If they differ, GitHub's cron scheduler ran the fetch workflow late or skipped it
(scheduled runs on low-activity repos are routinely delayed by hours). Don't give
up — self-heal:

1. Dispatch the fetch workflow via the GitHub MCP (`actions_run_trigger`,
   `method: run_workflow`, `workflow_id: fetch.yml`, `ref: main`). A
   `workflow_dispatch` run starts immediately and isn't subject to cron delay.
2. Poll the run (list workflow runs for `fetch.yml`, newest first; find your
   `workflow_dispatch` run) until `status: completed`. Expect ~2 minutes. If it
   isn't done, wait and check again — do not proceed on a half-finished fetch.
3. If it finishes with `conclusion: success`, run
   `git pull --rebase origin main` and verify `"date"` in
   `data/inbox/meta.json` now matches today. Then continue to step 2.
4. If the dispatch itself fails to queue, the run completes with
   `conclusion: failure`, or the inbox is still stale after a successful run,
   stop. End with `INBOX STALE: inbox=<inbox date>, today=<today>, fetch=<status>`
   and don't publish anything.

## 2. Write each section

1. Read `data/inbox/system.md`. Its rules apply to every section, especially the grounding rules.
2. For each section listed in `"sections"` in `meta.json`:
   1. Read `data/inbox/sections/<section>.md` (the task plus the input data) and `data/inbox/schemas/<section>.schema.json`.
   2. For `ideas`, pick the essay as instructed, then read its full text from `data/inbox/essays/`.
   3. Write `data/inbox/drafts/<section>.json`.
3. Write the quiz: follow `data/inbox/sections/quiz.md` and write `data/inbox/drafts/quiz.json`.

JSON rules:
- Write valid UTF-8 JSON, with Hebrew as plain text (no `\u` escapes).
- Inside strings, escape double quotes as `\"` and write paragraph breaks as `\n\n`.
- Every story needs both `en` and `he`, each with all four lengths.

## 3. Validate and publish

```bash
cd pipeline
uv run daily-brief assemble   # if uv is missing: pip install uv
```

If it reports errors, fix those drafts and run it again until it prints `OK`.
Don't publish a partial brief.

## 4. Commit and push

```bash
cd ..
git add data/briefs
git commit -m "Daily brief $(TZ=Asia/Jerusalem date +%F)"
git push origin HEAD:main
```

If the push is rejected because `main` moved, run `git pull --rebase origin main` and push again.
Never commit `data/inbox/drafts/`.

## 5. Finish

End with one line: the date, sections written, total stories, and anything that went wrong.
