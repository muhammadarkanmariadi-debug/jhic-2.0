export type ScheduleBlock = { label: string; start: string; end?: string | null };
export type SchoolDay = { name: string; blocks: ScheduleBlock[] };

export interface SchoolScheduleRecord {
  id: string;
  title: string;
  description?: string | null;
  days: SchoolDay[];
  isActive: boolean;
  sortOrder: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

const stdDay = (name: string): SchoolDay => ({
  name,
  blocks: [
    { label: "Jam Masuk", start: "07:00" },
    { label: "Belajar", start: "07:15", end: "09:30" },
    { label: "Istirahat", start: "09:30", end: "09:50" },
    { label: "Belajar", start: "09:50", end: "12:00" },
    { label: "Istirahat & Sholat Dzuhur", start: "12:00", end: "12:40" },
    { label: "Belajar", start: "12:40", end: "15:00" },
    { label: "Pulang", start: "15:00" },
  ],
});

/** Default schedule — used as a fallback when the API is unreachable/empty. */
export const defaultSchedules: SchoolScheduleRecord[] = [
  {
    id: "default-schedule",
    title: "Jadwal Belajar Reguler",
    description:
      "Jam kegiatan belajar mengajar hari Senin–Sabtu. Jumat lebih singkat untuk Sholat Jumat.",
    days: [
      stdDay("Senin"),
      stdDay("Selasa"),
      stdDay("Rabu"),
      stdDay("Kamis"),
      {
        name: "Jumat",
        blocks: [
          { label: "Jam Masuk", start: "07:00" },
          { label: "Belajar", start: "07:15", end: "10:30" },
          { label: "Sholat Jumat", start: "11:00", end: "12:00" },
          { label: "Pulang", start: "12:00" },
        ],
      },
      {
        name: "Sabtu",
        blocks: [
          { label: "Jam Masuk", start: "07:00" },
          { label: "Kegiatan Ekstrakurikuler", start: "07:15", end: "11:00" },
          { label: "Pulang", start: "11:00" },
        ],
      },
    ],
    isActive: true,
    sortOrder: 0,
  },
];

/**
 * Fetches active Jadwal Sekolah records from `/api/schedule`.
 * Falls back to `defaultSchedules` when the API is unreachable or empty.
 */
export async function getActiveSchedules(): Promise<SchoolScheduleRecord[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`${API_URL}/api/schedule`, {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);

    if (!res.ok) return defaultSchedules;
    const data = (await res.json()) as SchoolScheduleRecord[];
    if (!Array.isArray(data) || data.length === 0) return defaultSchedules;

    return data
      .filter((d) => d.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((d) => ({
        ...d,
        days: Array.isArray(d.days) ? d.days : [],
      }));
  } catch {
    return defaultSchedules;
  }
}