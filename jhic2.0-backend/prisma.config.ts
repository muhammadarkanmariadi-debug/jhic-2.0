import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  // Lenient on purpose: `prisma generate` runs fine without a DB; only
  // migrate/db commands need an actual DATABASE_URL value.
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
