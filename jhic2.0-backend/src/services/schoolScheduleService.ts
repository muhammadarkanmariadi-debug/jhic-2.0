import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

/**
 * Jadwal Sekolah (school-hours timetable) CRUD.
 * `days` is stored as JSON so multiple day rows (Senin..Sabtu) each hold
 * an ordered list of blocks (Jam Masuk, Istirahat, Sholat, Pulang, ...)
 * without schema churn — mirroring the Program Umum `sections` JSON approach.
 */

export type ScheduleBlock = {
  label: string;
  start: string; // HH:MM
  end?: string | null; // HH:MM (null for open-ended entries)
};

export type SchoolDay = {
  name: string; // e.g. "Senin"
  blocks: ScheduleBlock[];
};

export type SchoolScheduleInput = {
  title: string;
  description?: string | null;
  days: unknown;
  isActive?: boolean;
  sortOrder?: number;
  updatedBy?: string | null;
};

export const schoolScheduleService = {
  list(includeInactive = false) {
    return prisma.schoolSchedule.findMany({
      where: includeInactive ? {} : { isActive: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    });
  },

  getById(id: string) {
    return prisma.schoolSchedule.findUnique({ where: { id } });
  },

  create(data: SchoolScheduleInput) {
    return prisma.schoolSchedule.create({
      data: {
        title: data.title,
        description: data.description ?? null,
        days: data.days as Prisma.InputJsonValue,
        isActive: data.isActive ?? true,
        sortOrder: data.sortOrder ?? 0,
        updatedBy: data.updatedBy ?? null,
      },
    });
  },

  update(id: string, data: Partial<SchoolScheduleInput>) {
    return prisma.schoolSchedule.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        days: data.days as Prisma.InputJsonValue | undefined,
        isActive: data.isActive,
        sortOrder: data.sortOrder,
        updatedBy: data.updatedBy,
      },
    });
  },

  remove(id: string) {
    return prisma.schoolSchedule.delete({ where: { id } });
  },
};