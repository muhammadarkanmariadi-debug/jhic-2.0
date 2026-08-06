import { apiFetch } from "./api";
import { ContentSection } from "@/shared/types";

export interface ProgramUmumRecord {
  id: string;
  key: string;
  label: string;
  intro?: string | null;
  icon?: string | null;
  sections: ContentSection[];
  isActive: boolean;
  sortOrder: number;
  updatedBy?: string | null;
  updatedAt: string;
}

export interface ProgramUmumInput {
  key: string;
  label: string;
  intro?: string | null;
  icon?: string | null;
  sections: ContentSection[];
  isActive?: boolean;
  sortOrder?: number;
}

/** Admin client for the Program Umum CRUD API (Bearer-token guarded). */
export const programUmumAdminApi = {
  listAll: (token: string) =>
    apiFetch<ProgramUmumRecord[]>("/api/program-umum/all", { token }),

  getById: (token: string, id: string) =>
    apiFetch<ProgramUmumRecord>(`/api/program-umum/${id}`, { token }),

  create: (token: string, data: ProgramUmumInput) =>
    apiFetch<ProgramUmumRecord>("/api/program-umum", { method: "POST", body: data, token }),

  update: (token: string, id: string, data: Partial<ProgramUmumInput>) =>
    apiFetch<ProgramUmumRecord>(`/api/program-umum/${id}`, { method: "PUT", body: data, token }),

  remove: (token: string, id: string) =>
    apiFetch<void>(`/api/program-umum/${id}`, { method: "DELETE", token }),
};
