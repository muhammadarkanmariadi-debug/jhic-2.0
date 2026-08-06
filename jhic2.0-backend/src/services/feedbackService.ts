import { prisma } from "../lib/prisma.js";

/** JHI-14 — MokletUlasan feedback persistence (Feedback model). */
export const feedbackService = {
  create(data: {
    context?: string | null;
    contextRefId?: string | null;
    rating?: number | null;
    comment?: string | null;
    contact?: string | null;
  }) {
    return prisma.feedback.create({
      data: {
        context: data.context ?? null,
        contextRefId: data.contextRefId ?? null,
        rating: data.rating ?? null,
        comment: data.comment ?? null,
        contact: data.contact ?? null,
        status: "NEW",
      },
    });
  },

  list() {
    return prisma.feedback.findMany({ orderBy: { createdAt: "desc" } });
  },

  updateStatus(id: string, status: string) {
    return prisma.feedback.update({ where: { id }, data: { status } });
  },
};