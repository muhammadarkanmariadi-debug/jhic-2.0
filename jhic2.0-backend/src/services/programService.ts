import { prisma } from "../lib/prisma.js";

/** JHI-06 — public program list exposing the career portal link (MokletKarir). */
export const programService = {
  listPublic() {
    return prisma.program.findMany({
      where: { isActive: true },
      select: {
        id: true,
        code: true,
        title: true,
        careerPortalUrl: true,
        image: true,
      },
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
    });
  },
};
