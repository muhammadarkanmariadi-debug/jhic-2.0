# AGENTS.md — Backend (jhic2.0-backend)

Entry point for AI agents working in the **Express backend**.

> ✅ **Current status: implemented foundation.** The backend has `src/server.ts` (Express entry), a working Prisma 7 setup (`prisma/schema.prisma` + `prisma.config.ts`), a generated Prisma Client, RBAC middleware, and two implemented CRUD APIs (`featured-programs`, `program-umum`). The layered route/controller/service architecture described in `docs/ARCHITECTURE.md` is the **target** to build on.

## Read first (in order)

1. **`docs/ARCHITECTURE.md`** — target Express layered architecture, auth/RBAC flow, env vars.
2. **`docs/SCHEMA.md`** — the canonical, documented database schema (keep in sync with `prisma/schema.prisma`).
3. **`docs/SKILL.md`** — backend-specific agent skills (Express 5, Prisma 7, JWT/RBAC, bcrypt).
4. **`docs/RULE.md`** — backend-specific hard rules.
5. **Root `../docs/PRD.md`** — product scope (v2.0 modules like MokletKurikulum, MokletHubin, MokletSPMB) and the RBAC role list (`../docs/ARCHITECTURE.md` §4).

## Critical pointers

- **Stack (from `package.json`):** Express `^5.2.1`, Prisma `^7.9.1` + `@prisma/adapter-mariadb`, bcryptjs, cors, dotenv. Node 22, **ESM** (`"type": "module"`), dev via `tsx watch` (`npm run dev`), build via `tsc`.
- **Prisma 7 breaking changes are in effect:**
  - The datasource `url` no longer lives in `schema.prisma` — it is configured in **`prisma.config.ts`** (`datasource.url` from `DATABASE_URL`).
  - The generator is `prisma-client` (not `prisma-client-js`) with required `output` → `src/generated/prisma`. After changing the schema, run `npx prisma generate`.
  - `PrismaClient` must be constructed with a **driver adapter** (no automatic env URL): see `src/server.ts` — `new PrismaClient({ adapter: new PrismaMariaDb(process.env.DATABASE_URL) })`.
  - `migrate dev`/`db push` no longer auto-run generate or seed.
- **RBAC roles** are defined by the PRD (Super Admin, Admin Konten, Admin SPMB, Admin Support, Admin Kurikulum, Admin Hubin, Admin Humas, Admin Kesiswaan) — see root `../docs/ARCHITECTURE.md` §4. Seeded via `prisma/seed.ts` (run `npx prisma db seed`).
- **Implemented routes:** `src/routes/featuredPrograms.ts` (`/api/featured-programs`) and `src/routes/programUmum.ts` (`/api/program-umum`) — public GET + Admin Kurikulum CRUD guarded by `src/middleware/auth.ts` (`authenticate`, `requirePermission`, `requireDivision`).
