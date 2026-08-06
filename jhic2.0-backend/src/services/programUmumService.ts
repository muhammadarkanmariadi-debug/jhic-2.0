import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

/**
 * JHI-v2 — Program Umum content CRUD.
 * Sections are stored as JSON (ContentSection[]) so tabs can hold any
 * section type (paragraph, checklist, cards, steps, gallery, table,
 * accordion, testimonials, badges, partners) without schema churn.
 */
export type ProgramUmumInput = {
  key: string;
  label: string;
  intro?: string | null;
  icon?: string | null;
  sections: unknown;
  isActive?: boolean;
  sortOrder?: number;
  updatedBy?: string | null;
};

export const programUmumService = {
  list(includeInactive = false) {
    return prisma.programUmumProgram.findMany({
      where: includeInactive ? {} : { isActive: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    });
  },

  getByKey(key: string) {
    return prisma.programUmumProgram.findUnique({ where: { key } });
  },

  getById(id: string) {
    return prisma.programUmumProgram.findUnique({ where: { id } });
  },

  create(data: ProgramUmumInput) {
    return prisma.programUmumProgram.create({
      data: {
        key: data.key,
        label: data.label,
        intro: data.intro ?? null,
        icon: data.icon ?? null,
        sections: data.sections as Prisma.InputJsonValue,
        isActive: data.isActive ?? true,
        sortOrder: data.sortOrder ?? 0,
        updatedBy: data.updatedBy ?? null,
      },
    });
  },

  update(id: string, data: Partial<ProgramUmumInput>) {
    return prisma.programUmumProgram.update({
      where: { id },
      data: {
        key: data.key,
        label: data.label,
        intro: data.intro,
        icon: data.icon,
        sections: data.sections as Prisma.InputJsonValue | undefined,
        isActive: data.isActive,
        sortOrder: data.sortOrder,
        updatedBy: data.updatedBy,
      },
    });
  },

  remove(id: string) {
    return prisma.programUmumProgram.delete({ where: { id } });
  },
};
