<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Frontend (jhic2.0-frontend)

Entry point for AI agents working in the **Next.js frontend**. Read this before writing any frontend code.

## Read first (in order)

1. **`AGENTS.md`** (this file) — the critical Next.js 16 warning above + this router.
2. **`ARCHITECTURE.md`** — the fixed Feature-Sliced Design (FSD) structure, real routing map, and data flow.
3. **`DESIGN.md`** — the design system (tokens from `src/app/globals.css`, component inventory).
4. **`RULE.md`** — frontend-specific hard rules.
5. **`SKILL.md`** — frontend-specific agent skills (Next 16, Tailwind v4, RHF/Zod, Recharts).
6. **`README.md`** — quickstart only (install/build/lint/CI).

For product scope, roles, and the v2.0 sitemap, see the **root** `../PRD.md` and `../ARCHITECTURE.md`.

## Critical pointers

- **Tailwind v4 is CSS-first.** There is **no `tailwind.config.js`** — tokens and theme live in `src/app/globals.css` (`@theme` block). Do not create a JS config.
- **Route structure** lives under `src/app/`, mostly inside the `(main)` route group.
- **Types are centralized** in `src/shared/types/index.ts` — add shared types there, not ad-hoc.
- **Data access** goes through `src/services/` (currently mock data); don't hardcode large datasets inside pages.
- **Design tokens** must be used from `globals.css` — never hardcode colors/shadows.

> `CLAUDE.md` simply points to `@AGENTS.md`.
