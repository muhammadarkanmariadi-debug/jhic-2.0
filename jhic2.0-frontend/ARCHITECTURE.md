# Architecture — Frontend (jhic2.0-frontend)

The fixed and consistent architecture for the **Next.js** frontend. This document describes the **current implemented structure** (v1) and the **planned targets** (v2, per the root `PRD.md`).

> **Verify against code:** route/type/component lists below are generated from the actual `src/` tree. If you change routes or structure, update this document too.

---

## 1. Tech Stack (verified against `package.json`)

| Concern | Choice |
|---|---|
| Framework | Next.js **16.2.12** (App Router), Turbopack build |
| UI library | React **19.2.4** / React DOM 19.2.4, TypeScript |
| Styling | Tailwind CSS **v4** via `@tailwindcss/postcss` (CSS-first config — no JS config) |
| Icons | `lucide-react` |
| Forms & validation | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Charts | `recharts` |
| Pagination | `react-paginate` |
| Fonts | `next/font/google` — Plus Jakarta Sans |

> **Not installed (planned/recommended):** WYSIWYG editor for Admin CMS — `react-quill` or `tiptap` (see root `PRD.md` §3.10). Framer Motion is mentioned in older docs but is **not** in `package.json`.

---

## 2. Directory Structure (Feature-Sliced Design)

The project uses **Feature-Sliced Design (FSD)**. Current state of `src/`:

```
src/
├── app/          # Next.js App Router: routes, (main) route group, layout, globals.css
├── services/     # Data layer: dummy/mock data + future API integration
├── shared/       # Reusable primitives
│   ├── types/    #   Central TypeScript interfaces (index.ts)
│   └── ui/       #   Atomic UI components (Button, Card, ...)
└── widgets/      # Self-contained UI blocks by domain (layout, school, program, ...)
```

**Planned FSD slices (not yet present — add only when a real need arises):**
`features/` (user-interaction modules), `entities/` (core business entities), `configs/`, `templates/`, `stores/` (global state).

### Layer responsibilities

| Layer | Responsibility | Examples |
|---|---|---|
| `app/` | Routing, layouts, page composition | `(main)/page.tsx`, `(main)/layout.tsx` (Header+Footer shell) |
| `widgets/` | Complex, self-contained UI blocks | `layout/Header.tsx`, `layout/Footer.tsx`, `school/Hero.tsx`, `news/NewsGrid.tsx`, `ppdb/PPDBCta.tsx` |
| `shared/ui/` | Atomic reusable components | `Button`, `Card`, `ContentCard`, `PageHeader`, `SectionHeader`, `Accordion`, `Modal`, `Pagination`, `Timeline`, `Breadcrumbs`, `AutoCarousel`, `OrgNode` |
| `shared/types/` | Central TypeScript contracts | `NewsItem`, `EkskulItem`, `FasilitasItem`, `PrestasiItem`, `TestimonialItem`, `PartnerItem`, `FAQItem`, `ServiceDeskItem`, `JurusanData`, `ProgramDetail`, `TeacherProfile`, `MexpoEvent`, ... |
| `services/` | Data fetching & mock data | `trialClassData.ts` (Mexpo events), `dummyData.ts`, `productData.ts` |

---

## 3. Routing Map (current, from `src/app/`)

Most public pages live in the `(main)` route group (shared Header/Footer layout):

```
/                                   Home (Beranda)
/(main)/tentang-kami/
    profil-sejarah, visi-misi, struktur-organisasi, akreditasi,
    fasilitas, prestasi, hubungan-industri, learning-culture
/(main)/program/
    jurusan, program-ts, icp, ccp, ekstrakurikuler,
    tes-minat-bakat, trial-class
/(main)/alumni/
    profil-sebaran, testimoni
/(main)/informasi/
    berita (list + [slug] detail), pengumuman-kelulusan,
    penerapan-k3, akomodasi, produk
/(main)/hubungi-kami/
    faq, kotak-pertanyaan, service-desk
/(main)/ppdb                          (→ v2 target: SPMB landing, see PRD)
```

**v2 target additions** (not yet implemented — from `PRD.md` §2): `kurikulum`, `hubungan-industri/{lomba,loker,beasiswa}`, `hubungi-kami/{bot,ulasan}`, and renaming `ppdb` → `spmb`.

---

## 4. Data Flow

```
Page (src/app/...)  →  Widget (src/widgets/...)  →  shared/ui + shared/types
                          │
                          ▼
                  services/ (mock/dummy data today)
                          │
                          ▼
              future: REST API (jhic2.0-backend)
```

- **Today:** pages/widgets consume mock data from `services/` (`dummyData.ts`, `productData.ts`, `trialClassData.ts`).
- **Target:** `services/` becomes the only place that calls the backend API; page components should not fetch directly.

---

## 5. Conventions

- **Path alias:** `@/` → `src/` (e.g. `@/widgets/layout/Header`, `@/shared/ui/Button`, `@/shared/types`).
- **Client components** (`"use client"`): interactive widgets — Header, forms (`kotak-pertanyaan`), carousels, charts.
- **Server components**: static content pages by default (App Router RSC).
- **Central types:** shared interfaces are defined in `src/shared/types/index.ts` and re-used across pages/widgets. Do not define duplicate ad-hoc interfaces.
- **Design tokens:** always use tokens from `src/app/globals.css` (see `DESIGN.md`); never hardcode raw values.

---

## 6. Cross-References

- Design system & tokens → `DESIGN.md`
- Frontend rules → `RULE.md`
- Frontend skills → `SKILL.md`
- Global architecture, RBAC, knowledge hierarchy → `../ARCHITECTURE.md`
- Product scope & v2 sitemap → `../PRD.md`
