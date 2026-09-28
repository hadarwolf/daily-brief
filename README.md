# ☀️ Daily Brief

A personal, mobile-first morning brief to replace phone scrolling with curated learning across
sports, world affairs and ideas. Every section reads in **30 seconds, 3 minutes or 10 minutes**,
in **English or Hebrew**.

| Section | Default language |
| --- | --- |
| Geopolitics: 1-2 world stories with context and second-order effects | English |
| Israeli Politics: factual, non-partisan | Hebrew |
| Business & Economics: one substantive story + markets strip (TA-35, S&P 500, USD/ILS, Brent, BTC); weekly concept deep-dive on Sundays | English |
| Sports: European soccer (Arsenal & Barça always), Inter Miami, NBA, Israeli players; jumps to the top on match days | English |
| Ideas: one essay or long read, summarized from its full text | Hebrew |
| Learn: word/concept of the day + on this day | English |

Plus a daily 3-question quiz on the day's content.

## How it works

No servers and no API bill: GitHub does the fetching, a scheduled Claude Code routine (on a
Claude Pro subscription) does the writing, and the app is static files.

```
05:00  GitHub Action    fetch ~30 sources -> prepare data/inbox/ -> commit       .github/workflows/fetch.yml
06:30  Claude routine   read inbox -> write drafts -> validate -> commit          ROUTINE.md
       Vercel           rebuilds the app with the new brief                       web/
       Phone            home-screen app (PWA), works offline
```

```
pipeline/   Python: fetch sources, prepare the routine's tasks, validate + publish drafts
web/        Next.js PWA that reads data/briefs/
data/
├── inbox/  today's tasks and inputs for the routine (overwritten daily)
└── briefs/ published briefs, one folder per day
ROUTINE.md  instructions the daily Claude routine follows
```

## Setup

- **Pipeline:** see [pipeline/README.md](pipeline/README.md) (`uv sync`, then copy `.env.example` to `.env`).
- **GitHub secrets** (Settings → Secrets and variables → Actions): `FOOTBALL_DATA_TOKEN`, `BALLDONTLIE_TOKEN`.
- **Claude routine:** daily at 03:30 UTC with the prompt *"Follow ROUTINE.md in the repo root to write and publish
  today's Daily Brief."* The Claude GitHub App needs access to this repo so the routine can push.
- **App:** import the repo on Vercel with **Root Directory = `web`**. Open the URL on your phone → *Add to Home Screen*.

Run the app locally with `cd web && npm install && npm run dev`.

## Built with

Python (async `httpx`, `feedparser`, Pydantic), Next.js + Tailwind (static export, PWA, RTL),
GitHub Actions, Claude Code routines, Vercel.
