# AGENTS.md — Entry Point for AI Agents (JHIC 2.0)

Welcome. This is the entry router for AI agents working in the **JHIC 2.0** monorepo (SMK Telkom Malang's web portal). Read this file first, then follow the pointers below.

---

## Read first (in order)

1. **`PRD.md`** — Product Requirements v2.0 (Moklet SIGAP). Canonical for features, sitemap, and roles. **Start here for anything product-related.**
2. **`ARCHITECTURE.md`** — Global architecture, repository layout, and the knowledge-source hierarchy (which doc answers which question).
3. **`RULE.md`** — Universal hard rules every agent must obey.
4. **`DESIGN.md`** — Global design context (brand-level).
5. **`SKILL.md`** — Common agent skills for working in this repo.

> `README.md` is a thin index — use it to navigate, not as a source of truth.

---

## Which file answers which question

| If you are... | Read |
|---|---|
| Deciding what a feature should do | `PRD.md` |
| Understanding how the repo is structured | `ARCHITECTURE.md` (root) |
| Working in the **frontend** | `jhic2.0-frontend/AGENTS.md` → `SKILL.md`, `DESIGN.md`, `RULE.md`, `ARCHITECTURE.md` |
| Working in the **backend** | `jhic2.0-backend/AGENTS.md` → `SKILL.md`, `RULE.md`, `ARCHITECTURE.md`, `SCHEMA.md` |
| Styling / visual design | `jhic2.0-frontend/DESIGN.md` + `src/app/globals.css` |
| Database / data models | `jhic2.0-backend/SCHEMA.md` |
| Knowing hard constraints | `RULE.md` (root) + app-specific `RULE.md` |

---

## Critical warnings

- **This is NOT the Next.js you know.** The frontend uses Next.js 16 / React 19 — APIs, conventions, and file structure may differ from your training data. See `jhic2.0-frontend/AGENTS.md` before writing frontend code.
- **Docs drift.** The implemented code reflects v1; `PRD.md` defines v2.0. Always verify against the actual code.
- **Backend is a stub.** `jhic2.0-backend/` currently contains only `package.json` and planning docs — there is no `src/` or Prisma schema yet. Do not assume backend code exists.
