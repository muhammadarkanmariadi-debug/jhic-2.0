import { apiFetch } from "./api";

export interface FeedbackInput {
  context?: string;
  contextRefId?: string;
  rating?: number;
  comment?: string;
  contact?: string;
}

/** JHI-14 — MokletUlasan feedback client. */
export const feedbackApi = {
  submit: (data: FeedbackInput) =>
    apiFetch<{ id: string }>("/api/feedback", { method: "POST", body: data }),
};