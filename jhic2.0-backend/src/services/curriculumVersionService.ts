import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

/** JHI-10 — CurriculumVersion CRUD (MokletKurikulum versioning per academic year). */
export type CurriculumVersionInput = {
  programId: string;
  label: string;
  academicYear: string;
  version?: number;
  isActive?: boolean;
  subjectStructure: unknown;
  competencyDetails?: unknown;
  publishedAt?: Date | null;
  lastUpdatedBy?: string | null;
};

export const curriculumVersionService = {
  list({
    includeInactive = false,
    programId,
    academicYear,
  }: {
    includeInactive?: boolean;
    programId?: string;
    academicYear?: string;
  } = {}) {
    return prisma.curriculumVersion.findMany({
      where: {
        ...(includeInactive ? {} : { isActive: true }),
        ...(programId ? { programId } : {}),
        ...(academicYear ? { academicYear } : {}),
      },
      orderBy: [{ academicYear: "desc" }, { version: "desc" }],
      include: { program: { select: { code: true, title: true } } },
    });
  },

  getById(id: string) {
    return prisma.curriculumVersion.findUnique({
      where: { id },
      include: { program: { select: { code: true, title: true } } },
    });
  },

  async create(data: CurriculumVersionInput) {
    if (data.isActive) {
      // Deactivate other versions of the same program when publishing a new active one.
      await prisma.curriculumVersion.updateMany({
        where: { programId: data.programId, isActive: true },
        data: { isActive: false },
      });
    }
    return prisma.curriculumVersion.create({
      data: {
        programId: data.programId,
        label: data.label,
        academicYear: data.academicYear,
        version: data.version ?? 1,
        isActive: data.isActive ?? false,
        subjectStructure: data.subjectStructure as Prisma.InputJsonValue,
        competencyDetails: (data.competencyDetails as Prisma.InputJsonValue) ?? undefined,
        publishedAt: data.publishedAt ?? null,
        lastUpdatedBy: data.lastUpdatedBy ?? null,
      },
    });
  },

  async update(id: string, data: Partial<CurriculumVersionInput>) {
    if (data.isActive === true) {
      const existing = await prisma.curriculumVersion.findUnique({ where: { id } });
      if (existing) {
        await prisma.curriculumVersion.updateMany({
          where: { programId: existing.programId, isActive: true, NOT: { id } },
          data: { isActive: false },
        });
      }
    }
    return prisma.curriculumVersion.update({
      where: { id },
      data: {
        programId: data.programId,
        label: data.label,
        academicYear: data.academicYear,
        version: data.version,
        isActive: data.isActive,
        subjectStructure: data.subjectStructure as Prisma.InputJsonValue | undefined,
        competencyDetails: data.competencyDetails as Prisma.InputJsonValue | undefined,
        publishedAt: data.publishedAt,
        lastUpdatedBy: data.lastUpdatedBy,
      },
    });
  },

  remove(id: string) {
    return prisma.curriculumVersion.delete({ where: { id } });
  },
};
