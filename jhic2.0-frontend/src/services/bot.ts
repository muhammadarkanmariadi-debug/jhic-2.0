import { botIntents, botDefaultReply, matchLocalIntent, BotIntent } from "./botData";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export type { BotIntent };

export interface BotChatResult {
  reply: string;
  intent: string | null;
  escalateTo: string | null;
}

async function fetchWithTimeout(path: string, init?: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    return await fetch(`${API_URL}${path}`, { ...init, signal: controller.signal, cache: "no-store" });
  } finally {
    clearTimeout(timeout);
  }
}

/** JHI-11/12 — MokletBot client. Falls back to local keyword matching when the API is down. */
export async function getBotIntents(): Promise<BotIntent[]> {
  try {
    const res = await fetchWithTimeout("/api/bot/intents");
    if (res.ok) {
      const data = (await res.json()) as { intent: string; answer: string; escalateTo?: string | null }[];
      if (Array.isArray(data) && data.length > 0) {
        return data.map((d) => {
          const local = botIntents.find((i) => i.intent === d.intent);
          return {
            intent: d.intent,
            label: local?.label ?? d.intent,
            keywords: local?.keywords ?? [],
            answer: d.answer,
            escalateTo: d.escalateTo ?? null,
          };
        });
      }
    }
  } catch {
    // fall through to static
  }
  return botIntents;
}

export async function sendBotMessage(message: string, sessionId?: string): Promise<BotChatResult> {
  try {
    const res = await fetchWithTimeout("/api/bot/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }),
    });
    if (res.ok) return (await res.json()) as BotChatResult;
  } catch {
    // fall through to local
  }
  const intent = matchLocalIntent(message);
  return {
    reply: intent?.answer ?? botDefaultReply,
    intent: intent?.intent ?? null,
    escalateTo: intent?.escalateTo ?? null,
  };
}