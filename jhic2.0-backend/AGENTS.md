# AGENTS.md — Backend (jhic2.0-backend)

Entry point for AI agents working in the **Express backend**.

> ⚠️ **Current status: stub / planning phase.** This directory contains only `package.json` and planning docs — there is **no `src/`, no `schema.prisma`, no server code yet**. Do not assume backend code exists. These docs define the **target** architecture and schema to be implemented.

## Read first (in order)

1. **`ARCHITECTURE.md`** — target Express layered architecture, auth/RBAC flow, env vars.
2. **`SCHEMA.md`** — the canonical, documented database schema (planned; to be implemented in Prisma).
3. **`SKILL.md`** — backend-specific agent skills (Express 5, Prisma 7, JWT/RBAC, bcrypt).
4. **`RULE.md`** — backend-specific hard rules.
5. **Root `../PRD.md`** — product scope (v2.0 modules like MokletKurikulum, MokletHubin, MokletSPMB) and the RBAC role list (`../ARCHITECTURE.md` §4).

## Critical pointers

- **Stack (from `package.json`):** Express `^5.2.1`, Prisma `^7.9.0`, bcryptjs, cors, dotenv. Node 20, CommonJS (`"type": "commonjs"`).
- ⚠️ `package.json` includes a suspicious dependency `"prisma-client": "^0.0.0"` — verify/remove it before implementing.
- **No schema yet.** `SCHEMA.md` is the agreed design; `prisma/schema.prisma` must be created from it.
- **RBAC roles** are defined by the PRD (Super Admin, Admin Konten, Admin SPMB, Admin Support, Admin Kurikulum, Admin Hubin) — see root `ARCHITECTURE.md` §4.
