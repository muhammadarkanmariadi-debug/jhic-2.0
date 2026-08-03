# AGENTS.md — Entry Point for AI Agents (JHIC 2.0)

Welcome. This is the entry router for AI agents working in the **JHIC 2.0** monorepo (SMK Telkom Malang's web portal). Read this file first, then follow the pointers below.

---

## Read first (in order)

1. **`docs/PRD.md`** — Product Requirements v2.0 (Moklet SIGAP). Canonical for features, sitemap, and roles. **Start here for anything product-related.**
2. **`docs/ARCHITECTURE.md`** — Global architecture, repository layout, and the knowledge-source hierarchy (which doc answers which question).
3. **`docs/RULE.md`** — Universal hard rules every agent must obey.
4. **`docs/DESIGN.md`** — Global design context (brand-level).
5. **`docs/SKILL.md`** — Common agent skills for working in this repo.

> `README.md` is a thin index — use it to navigate, not as a source of truth. All detailed knowledge lives in `docs/`.

---

## Which file answers which question

| If you are... | Read |
|---|---|
| Deciding what a feature should do | `docs/PRD.md` |
| Understanding how the repo is structured | `docs/ARCHITECTURE.md` (root) |
| Working in the **frontend** | `jhic2.0-frontend/AGENTS.md` → `jhic2.0-frontend/docs/{SKILL,DESIGN,RULE,ARCHITECTURE}.md` |
| Working in the **backend** | `jhic2.0-backend/AGENTS.md` → `jhic2.0-backend/docs/{SKILL,RULE,ARCHITECTURE,SCHEMA}.md` |
| Styling / visual design | `jhic2.0-frontend/docs/DESIGN.md` + `jhic2.0-frontend/src/app/globals.css` |
| Database / data models | `jhic2.0-backend/docs/SCHEMA.md` |
| Knowing hard constraints | `docs/RULE.md` (root) + app-specific `docs/RULE.md` |

---

## Critical warnings

- **This is NOT the Next.js you know.** The frontend uses Next.js 16 / React 19 — APIs, conventions, and file structure may differ from your training data. See `jhic2.0-frontend/AGENTS.md` before writing frontend code.
- **Docs drift.** The implemented code reflects v1; `docs/PRD.md` defines v2.0. Always verify against the actual code.
- **Backend is a stub.** `jhic2.0-backend/` currently contains only `package.json` and planning docs — there is no `src/` or Prisma schema yet. Do not assume backend code exists.
