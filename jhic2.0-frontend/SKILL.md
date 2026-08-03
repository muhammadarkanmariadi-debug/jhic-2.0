# SKILL — Frontend Agent Skills (jhic2.0-frontend)

Frontend-specific skills and library conventions for AI agents. Common/monorepo skills are in the root `../SKILL.md`.

> Versions are current and breaking — **always verify against the installed packages** and `node_modules/next/dist/docs/`.

---

## 1. Core Stack Skills

### Next.js 16 (App Router)
- Pages are `page.tsx`; layouts are `layout.tsx`; route groups like `(main)` group pages without adding URL segments.
- Dynamic routes use folder segments (`informasi/berita/[slug]/page.tsx`).
- Default to React Server Components; opt into client components with `"use client"`.
- **Read the vendored docs** (`node_modules/next/dist/docs/`) before using unfamiliar APIs — conventions differ from older Next.js versions.

### React 19
- Client components used for interactivity: Header (scroll/dropdown), forms (`kotak-pertanyaan`), carousels, charts.

### Tailwind CSS v4 (CSS-first)
- Config lives in `src/app/globals.css` (`@theme`), **not** a JS config file.
- Custom utilities via `@layer utilities`; base styles via `@layer base`.
- Use the tokens: `accent`, `surface`, `bg-main`, `text-muted`, `shadow-accent`, `rounded-pill`, `animate-marquee`, etc.

### TypeScript
- Central types in `src/shared/types/index.ts`: `NewsItem`, `EkskulItem`, `FasilitasItem`, `PrestasiItem`, `TestimonialItem`, `PartnerItem`, `FAQItem`, `ServiceDeskItem`, `JurusanData`/`JurusanDetail`, `TeacherProfile`, `ProgramDetail`, `QuizQuestion`, `LivingCost`, `KosRecommendation`, `FoodRecommendation`, `TelkomProduct`, `MexpoEvent`, `UserEventRole`.
- Import via `@/shared/types`.

## 2. Forms & Validation (react-hook-form + zod)

- `react-hook-form` manages form state; `zod` defines schemas; `@hookform/resolvers` bridges them (`zodResolver`).
- Use for `hubungi-kami/kotak-pertanyaan` and future PPDB/SPMB forms.

## 3. Data Visualization (recharts)

- Used on `alumni/profil-sebaran` (alumni distribution analytics).
- Keep chart components inside the relevant widget (`widgets/alumni/AlumniDistribution.tsx`).

## 4. Data Layer (`src/services/`)

- `trialClassData.ts` — Mexpo Trial Class events (`MexpoEvent[]`), matching the `mexpo.id` API contract.
- `dummyData.ts` / `productData.ts` — mock data for pages until the backend API exists.
- **Target:** replace mock data with real API calls through this layer (see root `PRD.md` §3.9 for the Mexpo integration).

## 5. UI & Design

- Full token system and component inventory → `DESIGN.md`.
- Compose with `shared/ui` components; place page-specific blocks in `widgets/<domain>/`.

## 6. Known Gaps / Pending Decisions

- **WYSIWYG editor** (`react-quill` / `tiptap`) is recommended for the Admin CMS but **not installed**.
- **Framer Motion** appears in older docs but is **not** in `package.json` — use CSS transitions/animations from `globals.css` instead.
- **Backend API** does not exist yet — all data is mock.

## 7. Verification Checklist

Before finishing frontend work:
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes (Turbopack).
- [ ] Routes/types/components you referenced actually exist in `src/`.
- [ ] You used design tokens and existing `shared/ui` components.
- [ ] Docs updated if structure/design changed (`ARCHITECTURE.md` / `DESIGN.md`).
