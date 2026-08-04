import { prisma } from "../lib/prisma.js";

/** JHI-09 — MokletHubin data CRUD (Industry Directory, Loker, Beasiswa, Lomba). */

export const partnersService = {
  list() {
    return prisma.partner.findMany({
      orderBy: [{ isFeatured: "desc" }, { name: "asc" }],
    });
  },
  getById(id: string) {
    return prisma.partner.findUnique({ where: { id } });
  },
  create(data: { name: string; logo: string; url?: string | null; isFeatured?: boolean }) {
    return prisma.partner.create({
      data: { name: data.name, logo: data.logo, url: data.url ?? null, isFeatured: data.isFeatured ?? false },
    });
  },
  update(id: string, data: Partial<{ name: string; logo: string; url: string | null; isFeatured: boolean }>) {
    return prisma.partner.update({ where: { id }, data });
  },
  remove(id: string) {
    return prisma.partner.delete({ where: { id } });
  },
};

export const lokerService = {
  list(includeUnpublished = false, programId?: string) {
    return prisma.jobVacancy.findMany({
      where: {
        ...(includeUnpublished ? {} : { isPublished: true }),
        ...(programId ? { programId } : {}),
      },
      orderBy: [{ applicationDeadline: "asc" }],
    });
  },
  getById(id: string) {
    return prisma.jobVacancy.findUnique({ where: { id } });
  },
  create(data: Record<string, unknown>) {
    return prisma.jobVacancy.create({
      data: {
        title: String(data.title),
        company: String(data.company),
        description: String(data.description),
        programId: (data.programId as string) ?? null,
        location: (data.location as string) ?? null,
        salaryRange: (data.salaryRange as string) ?? null,
        applicationDeadline: data.applicationDeadline ? new Date(data.applicationDeadline as string) : null,
        contact: (data.contact as string) ?? null,
        link: (data.link as string) ?? null,
        isPublished: (data.isPublished as boolean) ?? false,
      },
    });
  },
  update(id: string, data: Record<string, unknown>) {
    return prisma.jobVacancy.update({
      where: { id },
      data: {
        title: data.title !== undefined ? String(data.title) : undefined,
        company: data.company !== undefined ? String(data.company) : undefined,
        description: data.description !== undefined ? String(data.description) : undefined,
        programId: data.programId !== undefined ? (data.programId as string) : undefined,
        location: data.location !== undefined ? (data.location as string) : undefined,
        salaryRange: data.salaryRange !== undefined ? (data.salaryRange as string) : undefined,
        applicationDeadline:
          data.applicationDeadline !== undefined
            ? data.applicationDeadline
              ? new Date(data.applicationDeadline as string)
              : null
            : undefined,
        contact: data.contact !== undefined ? (data.contact as string) : undefined,
        link: data.link !== undefined ? (data.link as string) : undefined,
        isPublished: data.isPublished !== undefined ? (data.isPublished as boolean) : undefined,
      },
    });
  },
  remove(id: string) {
    return prisma.jobVacancy.delete({ where: { id } });
  },
};

export const beasiswaService = {
  list(includeUnpublished = false, programId?: string) {
    return prisma.scholarship.findMany({
      where: {
        ...(includeUnpublished ? {} : { isPublished: true }),
        ...(programId ? { programId } : {}),
      },
      orderBy: [{ deadline: "asc" }],
    });
  },
  getById(id: string) {
    return prisma.scholarship.findUnique({ where: { id } });
  },
  create(data: Record<string, unknown>) {
    return prisma.scholarship.create({
      data: {
        title: String(data.title),
        description: String(data.description),
        provider: String(data.provider),
        programId: (data.programId as string) ?? null,
        deadline: data.deadline ? new Date(data.deadline as string) : null,
        requirements: (data.requirements as object) ?? undefined,
        link: (data.link as string) ?? null,
        image: (data.image as string) ?? null,
        isPublished: (data.isPublished as boolean) ?? false,
      },
    });
  },
  update(id: string, data: Record<string, unknown>) {
    return prisma.scholarship.update({
      where: { id },
      data: {
        title: data.title !== undefined ? String(data.title) : undefined,
        description: data.description !== undefined ? String(data.description) : undefined,
        provider: data.provider !== undefined ? String(data.provider) : undefined,
        programId: data.programId !== undefined ? (data.programId as string) : undefined,
        deadline:
          data.deadline !== undefined
            ? data.deadline
              ? new Date(data.deadline as string)
              : null
            : undefined,
        requirements: data.requirements !== undefined ? (data.requirements as object) : undefined,
        link: data.link !== undefined ? (data.link as string) : undefined,
        image: data.image !== undefined ? (data.image as string) : undefined,
        isPublished: data.isPublished !== undefined ? (data.isPublished as boolean) : undefined,
      },
    });
  },
  remove(id: string) {
    return prisma.scholarship.delete({ where: { id } });
  },
};

export const lombaService = {
  list(includeUnpublished = false) {
    return prisma.competition.findMany({
      where: includeUnpublished ? {} : { isPublished: true },
      orderBy: [{ registrationDeadline: "asc" }],
    });
  },
  getById(id: string) {
    return prisma.competition.findUnique({ where: { id } });
  },
  create(data: Record<string, unknown>) {
    return prisma.competition.create({
      data: {
        title: String(data.title),
        description: String(data.description),
        organizer: (data.organizer as string) ?? null,
        location: (data.location as string) ?? null,
        registrationStart: data.registrationStart ? new Date(data.registrationStart as string) : null,
        registrationDeadline: data.registrationDeadline ? new Date(data.registrationDeadline as string) : null,
        date: data.date ? new Date(data.date as string) : null,
        level: (data.level as string) ?? null,
        source: (data.source as string) ?? "INTERNAL",
        link: (data.link as string) ?? null,
        image: (data.image as string) ?? null,
        isPublished: (data.isPublished as boolean) ?? false,
      },
    });
  },
  update(id: string, data: Record<string, unknown>) {
    return prisma.competition.update({
      where: { id },
      data: {
        title: data.title !== undefined ? String(data.title) : undefined,
        description: data.description !== undefined ? String(data.description) : undefined,
        organizer: data.organizer !== undefined ? (data.organizer as string) : undefined,
        location: data.location !== undefined ? (data.location as string) : undefined,
        registrationStart:
          data.registrationStart !== undefined
            ? data.registrationStart
              ? new Date(data.registrationStart as string)
              : null
            : undefined,
        registrationDeadline:
          data.registrationDeadline !== undefined
            ? data.registrationDeadline
              ? new Date(data.registrationDeadline as string)
              : null
            : undefined,
        date:
          data.date !== undefined
            ? data.date
              ? new Date(data.date as string)
              : null
            : undefined,
        level: data.level !== undefined ? (data.level as string) : undefined,
        source: data.source !== undefined ? (data.source as string) : undefined,
        link: data.link !== undefined ? (data.link as string) : undefined,
        image: data.image !== undefined ? (data.image as string) : undefined,
        isPublished: data.isPublished !== undefined ? (data.isPublished as boolean) : undefined,
      },
    });
  },
  remove(id: string) {
    return prisma.competition.delete({ where: { id } });
  },
};
