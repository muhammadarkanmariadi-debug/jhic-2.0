# SKILL — Common Skills for AI Agents (Repo Root)

This file describes the **common/universal skills** an AI agent needs to work effectively in the JHIC 2.0 monorepo. It is intentionally generic; app-specific skills live in `jhic2.0-frontend/docs/SKILL.md` and `jhic2.0-backend/docs/SKILL.md`.

---

## 1. Orienting Yourself

1. **Start with the entry router** (`AGENTS.md`) — it maps which document answers which kind of question.
2. **Read the PRD first** for anything product-related (scope, sitemap, roles, naming): `docs/PRD.md`.
3. **Read the architecture docs** for structural questions: root `docs/ARCHITECTURE.md`, then the per-app `docs/ARCHITECTURE.md`.
4. **Consult `docs/RULE.md`** for the hard constraints you must never violate.
5. **Only then read code.** Code is the ground truth and may differ from the docs (v1 implemented vs v2 target).

## 2. Navigating the Monorepo

| Task | Where to look |
|---|---|
| Product scope / features / sitemap | `docs/PRD.md` |
| What's actually implemented | `jhic2.0-frontend/src/app/` (routes), `package.json` (deps) |
| Design tokens & components | `jhic2.0-frontend/docs/DESIGN.md`, `jhic2.0-frontend/src/app/globals.css` |
| Frontend conventions | `jhic2.0-frontend/docs/{AGENTS,SKILL,RULE,ARCHITECTURE}.md` |
| Backend & database | `jhic2.0-backend/docs/{SKILL,RULE,ARCHITECTURE,SCHEMA}.md` |
| CI behavior | `.github/workflows/build-check.yml` |

## 3. Working Style Skills

- **Verify before asserting.** Check routes, types, and dependencies in code before making claims or changes.
- **Respect the version gap.** This repo uses very new tooling (Next.js 16, React 19, Tailwind v4, Express 5, Prisma 7). API shapes may differ from older training knowledge — read the installed package docs.
- **Prefer the established structure.** Follow the documented architecture and shared components rather than introducing parallel patterns.
- **Sync docs with code.** Any structural/design/schema change must update the matching documentation (see root `docs/RULE.md` §3).

## 4. Loading App-Specific Skills

When the task is confined to one app, load that app's skill set:

- **Frontend tasks** → `jhic2.0-frontend/docs/SKILL.md` (Next.js App Router, Tailwind v4, RHF/Zod, Recharts, FSD).
- **Backend tasks** → `jhic2.0-backend/docs/SKILL.md` (Express 5, Prisma 7, JWT/RBAC, bcrypt).
- **Cross-cutting tasks** (design system, DB schema, RBAC) → consult both plus root `docs/ARCHITECTURE.md` §4.

## 5. When You're Stuck

1. Re-read the relevant `ARCHITECTURE.md` — it lists the knowledge source hierarchy.
2. Grep the actual code for the feature/route/type in question.
3. If a decision is ambiguous, ask the maintainer rather than guessing (see root `docs/RULE.md` §5).
