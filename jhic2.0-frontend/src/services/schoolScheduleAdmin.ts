import { apiFetch } from "./api";
import { SchoolDay } from "./schoolSchedule";

export interface SchoolScheduleRecord {
  id: string;
  title: string;
  description?: string | null;
  days: SchoolDay[];
  isActive: boolean;
  sortOrder: number;
  updatedBy?: string | null;
  updatedAt: string;
}

export interface SchoolScheduleInput {
  title: string;
  description?: string | null;
  days: SchoolDay[];
  isActive?: boolean;
  sortOrder?: number;
}

/** Admin client for the Jadwal Sekolah CRUD API (Bearer-token guarded). */
export const schoolScheduleAdminApi = {
  listAll: (token: string) =>
    apiFetch<SchoolScheduleRecord[]>("/api/schedule/all", { token }),

  getById: (token: string, id: string) =>
    apiFetch<SchoolScheduleRecord>(`/api/schedule/${id}`, { token }),

  create: (token: string, data: SchoolScheduleInput) =>
    apiFetch<SchoolScheduleRecord>("/api/schedule", { method: "POST", body: data, token }),

  update: (token: string, id: string, data: Partial<SchoolScheduleInput>) =>
    apiFetch<SchoolScheduleRecord>(`/api/schedule/${id}`, { method: "PUT", body: data, token }),

  remove: (token: string, id: string) =>
    apiFetch<void>(`/api/schedule/${id}`, { method: "DELETE", token }),
};