import type { Brief, BriefMeta, Quiz, Section } from "./types";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(path, { cache: "no-cache" });
  if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

export async function loadIndex(): Promise<{ latest: string | null; dates: string[] }> {
  return getJson("/briefs/index.json");
}

export async function loadBrief(date: string): Promise<Brief> {
  const meta = await getJson<BriefMeta>(`/briefs/${date}/brief.json`);
  const sections = await Promise.all(meta.sections.map((s) => getJson<Section>(`/briefs/${date}/${s.file}`)));
  return { meta, sections };
}

/** One section of a given day's brief, or null if that day doesn't have it. */
export async function loadSection(date: string, section: string): Promise<Section | null> {
  try {
    return await getJson<Section>(`/briefs/${date}/${section}.json`);
  } catch {
    return null;
  }
}

export async function loadQuiz(date: string): Promise<Quiz | null> {
  try {
    return await getJson<Quiz>(`/briefs/${date}/quiz.json`);
  } catch {
    return null;
  }
}
