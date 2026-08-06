import {
  IndustryPartner,
  JobVacancyItem,
  ScholarshipItem,
  CompetitionItem,
} from "@/shared/types";
import {
  industryPartners,
  lokerItems,
  beasiswaItems,
  lombaItems,
} from "@/services/hubinData";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

async function fetchWithFallback<T>(path: string, fallback: T): Promise<T> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`${API_URL}${path}`, { signal: controller.signal, cache: "no-store" });
    clearTimeout(timeout);
    if (!res.ok) return fallback;
    const data = (await res.json()) as unknown;
    return Array.isArray(data) && data.length > 0 ? (data as T) : fallback;
  } catch {
    return fallback;
  }
}

// MokletHubin (JHI-08) — fetch with bundled static fallback.
export const hubinApi = {
  partners: () => fetchWithFallback<IndustryPartner[]>("/api/partners", industryPartners),
  loker: (programCode?: string) =>
    fetchWithFallback<JobVacancyItem[]>(
      `/api/loker${programCode ? `?programId=${programCode}` : ""}`,
      lokerItems
    ),
  beasiswa: (programCode?: string) =>
    fetchWithFallback<ScholarshipItem[]>(
      `/api/beasiswa${programCode ? `?programId=${programCode}` : ""}`,
      beasiswaItems
    ),
  lomba: () => fetchWithFallback<CompetitionItem[]>("/api/lomba", lombaItems),
};
