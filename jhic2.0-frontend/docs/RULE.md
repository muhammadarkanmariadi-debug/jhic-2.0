# Rules — Frontend (jhic2.0-frontend)

Specific rules for AI agents working on the **Next.js frontend**. These add to — never override — the universal rules in the root `../docs/RULE.md`.

---

## 1. Design System Rules

1. **Use design tokens only.** Style with the theme from `src/app/globals.css` (e.g. `accent`, `surface`, `text-muted`, `shadow-md`, `rounded-pill`). **Never hardcode hex colors, shadows, or radius** outside `globals.css`.
2. **Reuse `src/shared/ui/` components** (`Button`, `Card`, `PageHeader`, `SectionHeader`, `Pagination`, ...). Do not re-inline the same pattern; extend via props/className when needed.
3. **Keep tokens in sync.** Changing `globals.css` requires updating `DESIGN.md` (and vice versa).

## 2. Architecture & Structure Rules

4. **Follow Feature-Sliced Design** as documented in `ARCHITECTURE.md`. Add `features/`/`entities/`/etc. only when a genuine need appears — don't create empty slices.
5. **Centralize shared types** in `src/shared/types/index.ts`. No ad-hoc duplicate interfaces scattered across pages.
6. **Data access goes through `src/services/`.** Do not hardcode large datasets inside page components; mock data belongs in `services/`.
7. **Respect route structure.** New public pages go inside the `(main)` route group unless there's a clear reason not to.

## 3. React / Next.js Rules

8. **"use client" discipline.** Mark components as client components only when they need interactivity (state, effects, event handlers, hooks). Default to server components.
9. **Next.js 16 is not your training data.** Read `node_modules/next/dist/docs/` before using unfamiliar App Router APIs (see `AGENTS.md`).
10. **Tailwind v4 is CSS-first.** No `tailwind.config.js` — configure via `@theme` in CSS. Don't create a JS config.
11. **TypeScript strictness.** Types come first; avoid `any`; use the `@/` alias (`@/shared/...`, `@/widgets/...`).

## 4. Navigation & Featured Program Rules

12. **Never hardcode program links in `Header.tsx`.** Static nav items (Profil Jurusan, Kurikulum, Ekstrakurikuler, Trial Class) stay hardcoded. Special programs (TS/ICP/CCP/etc.) must come from the featured-programs API via the server layout — not as hardcoded `<Link>` items.
13. **Featured programs are server-fetched.** The `(main)/layout.tsx` fetches featured programs server-side with ISR + `revalidateTag("nav-programs")`. Do not add client-side fetches to `Header`.
14. **Revalidate on mutation.** After any program create/update/delete in the admin CMS, call `revalidateTag("nav-programs")` to bust the nav cache. Never rely on TTL alone for admin-triggered changes.
15. **Graceful degradation.** If the featured-programs fetch fails, `Header` receives `[]` and renders only static items. Never let the nav break because of a backend error.

## 5. Quality Rules

16. **Keep the build green.** CI runs `npm run build` on `main`; keep `npm run lint` clean locally.
17. **No dead links/routes.** If you rename a route, update every `<Link>`/`href` and the routing map in `ARCHITECTURE.md`.
18. **Accessibility.** Preserve focus-visible rings, semantic HTML, and `aria-label`s on icon-only buttons (see Footer social links pattern).
19. **Design-consistent behavior.** Match the interaction conventions in `DESIGN.md` §5 (hover lift, accent glow, focus rings).
