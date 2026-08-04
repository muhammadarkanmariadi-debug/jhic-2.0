import { prisma } from "../lib/prisma.js";
import { FeaturedProgram } from "../generated/prisma/client.js";

type FeaturedProgramInput = Omit<
  FeaturedProgram,
  "id" | "createdAt" | "updatedAt"
>;

/**
 * JHI-v2-05 — Program Unggulan CRUD, linked to curriculum (Program) data.
 * `programId` optionally references a Program (konsentrasi) record.
 */
export const featuredProgramService = {
  list(includeInactive = false) {
    return prisma.featuredProgram.findMany({
      where: includeInactive ? {} : { isActive: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
  },

  getById(id: string) {
    return prisma.featuredProgram.findUnique({ where: { id } });
  },

  getBySlug(slug: string) {
    return prisma.featuredProgram.findUnique({ where: { slug } });
  },

  create(data: FeaturedProgramInput) {
    return prisma.featuredProgram.create({ data });
  },

  update(id: string, data: Partial<FeaturedProgramInput>) {
    return prisma.featuredProgram.update({ where: { id }, data });
  },

  remove(id: string) {
    return prisma.featuredProgram.delete({ where: { id } });
  },
};
