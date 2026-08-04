import { CurriculumTab } from "@/shared/types";
import { programUmumTabs as staticTabs } from "@/services/programUmumData";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

interface ProgramUmumRecord {
  id: string;
  key: string;
  label: string;
  intro?: string | null;
  icon?: string | null;
  sections: unknown;
  isActive: boolean;
  sortOrder: number;
}

/**
 * Fetches the Program Umum tabs from the backend (`/api/program-umum`).
 * Falls back to the bundled static data when the API is unreachable or empty,
 * so the page never breaks in dev/static mode.
 */
export async function getProgramUmumTabs(): Promise<CurriculumTab[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`${API_URL}/api/program-umum`, {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);

    if (!res.ok) return staticTabs;
    const data = (await res.json()) as ProgramUmumRecord[];
    if (!Array.isArray(data) || data.length === 0) return staticTabs;

    return data
      .filter((d) => d.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((d) => ({
        key: d.key,
        label: d.label,
        intro: d.intro ?? undefined,
        icon: d.icon ?? undefined,
        sections: Array.isArray(d.sections) ? (d.sections as CurriculumTab["sections"]) : [],
      }));
  } catch {
    return staticTabs;
  }
}
