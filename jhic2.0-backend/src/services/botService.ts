import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

const FALLBACK_REPLY =
  "Maaf, saya belum memahami pertanyaan Anda. Silakan hubungi layanan kami, atau pilih salah satu topik bantuan di bawah ini.";

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

/** JHI-12 — MokletBot dialog logic: keyword-matches user input to BotIntent. */
export const botService = {
  async intents() {
    return prisma.botIntent.findMany({
      where: { isActive: true },
      select: { id: true, intent: true, answer: true, escalateTo: true },
      orderBy: { createdAt: "asc" },
    });
  },

  async matchIntent(message: string) {
    const text = normalize(message);
    const intents = await prisma.botIntent.findMany({ where: { isActive: true } });
    let best: (typeof intents)[number] | null = null;
    let bestScore = 0;
    for (const intent of intents) {
      const keywords = (intent.keywords as unknown as string[]) ?? [];
      let score = 0;
      for (const kw of keywords) {
        if (kw && text.includes(kw.toLowerCase())) score += 1;
      }
      if (score > bestScore) {
        bestScore = score;
        best = intent;
      }
    }
    return best;
  },

  async chat({ message, sessionId }: { message: string; sessionId?: string }) {
    const intent = await this.matchIntent(message);
    const reply = intent?.answer ?? FALLBACK_REPLY;
    const result = {
      reply,
      intent: intent?.intent ?? null,
      escalateTo: intent?.escalateTo ?? null,
    };

    if (sessionId) {
      await this.persist(sessionId, message, reply, !!intent?.escalateTo);
    }
    return result;
  },

  async persist(sessionId: string, userMessage: string, botReply: string, escalated: boolean) {
    const turn = [
      { from: "user", text: userMessage },
      { from: "bot", text: botReply },
    ] as Prisma.InputJsonValue;

    const latest = await prisma.botConversation.findFirst({ where: { sessionId }, orderBy: { createdAt: "desc" } });
    if (latest) {
      const messages = ((latest.messages as unknown as unknown[]) ?? []) as { from: string; text: string }[];
      messages.push(...(turn as unknown as { from: string; text: string }[]));
      await prisma.botConversation.update({
        where: { id: latest.id },
        data: { messages: messages as unknown as Prisma.InputJsonValue, escalated: latest.escalated || escalated },
      });
    } else {
      await prisma.botConversation.create({
        data: { sessionId, messages: turn, escalated },
      });
    }
  },
};