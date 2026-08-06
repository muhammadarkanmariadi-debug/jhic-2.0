# Scrum & Sprint Plan — JHIC 2.0

This document outlines the detailed Scrum methodology and Sprint plan for the development of JHIC 2.0 (Moklet SIGAP).

## Roadmap ←→ PHASE.md

The site is currently a **prototype** (PHASE.md **Stage 0**). `PHASE.md` explains the stages in plain language; the sprints below are how we execute them:

| PHASE.md stage | What it means | Where it lives in this doc | Status |
|---|---|---|---|
| Stage 0 — First draft | static prototype (current) | all public pages | ✅ live as prototype |
| Stage 1 — Consistent look | shared design system & UI | Design Consistency (DC-01..10) | ✅ mostly done |
| Stage 2 — The engine | storage + sign-in + rules | Backend Core (JHI-01/02) + CMS-2 | 🟡 code done, DB off |
| Stage 3 — Staff edit content | editing screens per feature | Epic: Content CMS v2 (CMS-v1..3) | 🔵 in progress |
| Stage 4 — Show latest info | wire pages to the content | Epic: Content CMS v2 — Sprint CMS-3 | 🔵 planned |
| Stage 5 — Interactive features | bot / feedback / quiz / grad-check / PPDB | JHI-03/12..14 + SPMB epic | 🟡 partial |
| Stage 6 — Check & launch | QA, E2E, go live | JHI-15 + final pass | ⚪ pending |

## Team Roles

The development team consists of 5 developers, each able to work both frontend and backend, and each owning separate features:
- **Haikal**: Kurikulum & Program content
- **Akira**: News / Berita & Kelulusan
- **Alfara**: Hubin (loker, beasiswa, lomba, partner)
- **Iqbal**: "Orang" content (guru, fasilitas, prestasi, ekskul, testimoni, FAQ, org chart)
- **Arkan**: Academic-Life (akomodasi, produk, trial class, quiz)

## Epic: Curriculum Team v2 Revisions (High Priority)

**Goal:** Implement the new structural constraints and requirements based on the curriculum team meeting. This epic takes precedence over standard Sprint tasks.

| Task ID | Description | Assignee | Story Points | Priority | Status |
|---|---|---|---|---|---|
| JHI-v2-01 | Sebagai pengguna, saya ingin melihat profil guru dalam bentuk dan layout yang mengambil referensi dari https://smktelkom-sda.sch.id/profil-guru yaitu dalam bentuk card | Dev 5 | 3 | P0 | Done |
| JHI-v2-02 | Sebagai calon siswa, saya ingin melihat partner sinkronisasi kurikulum (field tahun ajaran), expertise, dan sertifikasi | Dev 1 | 5 | P0 | Done |
| JHI-v2-03 | Sebagai pengguna, saya ingin menu Program terbagi jelas (setingkat): Profil Konsentrasi Keahlian, ICP, Reguler, Kokurikuler, Sertifikasi | Dev 3 | 3 | P0 | Done |
| JHI-v2-04 | Sebagai calon siswa, saya ingin halaman ICP dan Reguler punya struktur konsisten (template sama) tapi konten beda | Dev 3 | 5 | P0 | Done |
| JHI-v2-05 | Sebagai admin, saya ingin CRUD Program Unggulan yang terhubung ke data kurikulum | Dev 2 | 3 | P0 | Done |
| JHI-v2-06 | Sebagai pengguna, saya tetap bisa mengakses Program CCP tanpa perubahan | Dev 3 | 1 | P0 | Done |
| JHI-v2-07 | **[BLOCKED]** Keputusan status halaman TS 2.1 (mandiri vs dipecah ke expertise) | Product | - | P0 | Blocked |
| JHI-v2-08 | Sebagai calon siswa/ortu, saya ingin menu Akomodasi (kos, makan, biaya hidup) | Dev 5 | 3 | P1 | Done |
| JHI-v2-09 | Sebagai pengguna, saya ingin menu Informasi terpisah (pengumuman, status kelulusan, dll) | Dev 4 | 3 | P1 | Done |
| JHI-v2-10 | Sebagai admin tiap divisi, saya ingin akses terbatas sesuai role saya (RBAC) | Dev 2 | 5 | P1 | Done |
| JHI-v2-11 | Sebagai pengguna, saya ingin halaman Organisasi terpisah dari Ekstra, dengan CTA Moklet Org | Dev 4 | 2 | P1 | Done |
| JHI-v2-12 | Sebagai pengguna, saya ingin Trial Class sebagai menu tersendiri | Dev 5 | 2 | P2 | Done |

### Epic Division Notes (dependencies & sequencing)

- **Load per dev (epic pts):** Dev 1 = 5 · Dev 2 = 8 · Dev 3 = 9 · Dev 4 = 5 · Dev 5 = 8 (total 35; excludes blocked JHI-v2-07).
- **JHI-v2-02 → Dev 1** owns new schema entities `CurriculumSyncPartner` (with `academic_year`), `Expertise`, `Certification` + their APIs. Frontend rendering of this data lands on the Konsentrasi page under **JHI-v2-03/v2-04 (Dev 3)**.
- **JHI-v2-05 → Dev 2** CRUD depends on a new `FeaturedProgram` entity (Dev 1, prerequisite) and division RBAC (**JHI-v2-10**, Dev 2) for Admin Kurikulum.
- **JHI-v2-10 → Dev 2** (division-based RBAC) is the unlock for admin maintenance on JHI-v2-01 (Admin Humas) and JHI-v2-05 (Admin Kurikulum).
- **JHI-v2-03 → Dev 3** (flat Program nav) is foundational for JHI-v2-06 (CCP no-regression, Dev 3), JHI-v2-11 (Org split, Dev 4), and JHI-v2-12 (Trial Class standalone, Dev 5).
- **Proposed P0 execution order:** JHI-v2-03 → JHI-v2-04 (Dev 3) · JHI-v2-02 (Dev 1) · JHI-v2-05 (Dev 2, after schema+RBAC) · JHI-v2-01 (Dev 5).

> **Decisions (Program Umum CMS):** Program Umum content is edited via a **structured block editor** (plain-text fields per section type — paragraph, checklist, cards, tracks, steps, gallery, table, accordion, testimonials, badges, partners). **No rich-text/WYSIWYG** for Program Umum (structured JSON, no XSS surface). The WYSIWYG HTML editor (`react-quill` / `tiptap`) is reserved for the **News** admin. See **JHI-16**.

## Sprint 1: Core Foundation & High Priority Refactors

**Goal:** Establish the backend structure, authentication, and handle the most critical frontend refactors (SPMB landing page & Curriculum module).

| Task ID | Description | Assignee | Story Points | Priority | Status |
|---|---|---|---|---|---|
| JHI-01 | Initialize Backend (Node.js/Express) & Prisma Schema | Dev 1 | 5 | High | Done |
| JHI-02 | Setup JWT Auth & RBAC (Super Admin, Konten, SPMB, dll) | Dev 2 | 3 | High | Done |
| JHI-03 | Revamp PPDB to SPMB Landing Page (Remove forms, add yayasan redirect) | Dev 3 | 3 | High | Done |
| JHI-05 | Setup MokletKarir UI Components (Profile placeholders) | Dev 5 | 3 | Medium | Done |
| JHI-16 | Program Umum Admin CMS (structured block editor, plain text) — `/admin` shell + guard, `/admin/program-umum` list/new/edit, per-type section editor, CRUD wiring to existing `/api/program-umum` endpoints, add backend `GET /api/program-umum/:id`, DB migration + seed of 6 default tabs | Dev 4 | 5 | Medium | Done |

> **JHI-16 depends on** JHI-02 (JWT auth/RBAC) — admin routes must be protected and CRUD calls require a Bearer token. The Program Umum CRUD API (`/api/program-umum`) and Prisma `ProgramUmumProgram` model are already implemented.
>
> **Note (JHI-04):** MokletKurikulum page revision was **removed from the sprint** by decision — the curriculum microsite (`/program/profil-konsentrasi-keahlian`, `/program/konsentrasi/[slug]`, `/program/program-umum`, `/program/persiapan-kelulusan`) covers the content.
>
> **Sprint 1 E2E pending:** `prisma migrate dev` + `prisma db seed` require a live `DATABASE_URL`. Auth (JHI-02) and Admin CMS (JHI-16) code is complete and compiles/validates but can only be exercised end-to-end once a database is connected and seeded.

## Sprint 2: Feature Expansion (Karir & Hubin)

**Goal:** Integrate career portals, build timelines, and expand the Hubungan Industri (Hubin) module with full backend support.

| Task ID | Description | Assignee | Story Points | Priority | Status |
|---|---|---|---|---|---|
| JHI-06 | Integrate Career Portal to MokletKarir (API/Links) | Dev 1 | 5 | High | Done |
| JHI-07 | Build Timeline Belajar Component (Interactive UI) | Dev 5 | 2 | Medium | Done |
| JHI-08 | Expand MokletHubin Frontend (Lomba, Loker, Beasiswa views) | Dev 4 | 8 | High | Done |
| JHI-09 | Implement Backend CRUD APIs for Hubin data | Dev 2 | 5 | High | Done |
| JHI-10 | Implement Backend CRUD APIs for Kurikulum versions | Dev 3 | 5 | Medium | Done |

> **Sprint 2 notes:** JHI-07 was delivered with JHI-05 (Sprint 1) via `shared/ui/Timeline.tsx` used on `/karir`. JHI-06 uses a placeholder career-portal URL (`https://www.smktelkom-mlg.sch.id`) — swap via `NEXT_PUBLIC_CAREER_PORTAL_URL` / `Program.careerPortalUrl` once the real portal is known. All Hubin + curriculum-version endpoints are code-complete and return 500 only because no DB is connected; run `prisma migrate dev` + `prisma db seed` to exercise end-to-end.

## Sprint 3: Interactive Services & Stabilization

**Goal:** Introduce the chatbot, feedback loop, and conduct comprehensive end-to-end testing.

| Task ID | Description | Assignee | Story Points | Priority | Status |
|---|---|---|---|---|---|
| JHI-11 | Develop MokletBot Chatbot UI (Floating widget) | Dev 1 | 3 | Medium | Done |
| JHI-12 | Integrate MokletBot with backend dialog logic | Dev 2 | 5 | Medium | Done |
| JHI-13 | Develop MokletUlasan Feedback Form (Modal/Page) | Dev 3 | 3 | Low | Done |
| JHI-14 | Connect MokletUlasan to database for data persistence | Dev 4 | 2 | Low | Done |
| JHI-15 | E2E Testing, UI Polish, and Bug Fixing across all modules | Dev 5 | 8 | High | Done |

> **Sprint 3 notes:**
> - **MokletBot** is a floating widget on all public pages (`(main)` layout); `POST /api/bot/chat` + `GET /api/bot/intents` proxied with a local keyword-fallback when the API is down.
> - **MokletUlasan** (`/hubungi-kami/ulasan`) submits via `POST /api/feedback` (public); review via `GET /api/feedback/all` (Admin Support, `SUPPORT_REPLY`).
> - **JHI-15 polish:** fixed all `Hero.tsx` + `Header.tsx` lint warnings (unused imports, missing effect dep, stray `process` import). Added `npm run smoke` (`scripts/smoke.mjs`) — boots the server and asserts every public endpoint returns non-404. Current run: **13/13 OK** (500 = no DB; `/api/health` = 503 graceful).
> - **E2E pending DB:** `prisma migrate dev` + `prisma db seed` (which also seeds role/permission, Super Admin, and MokletBot intents).

**Sprint 3 manual E2E checklist** (run after a DB is connected + seeded):
- [ ] Login as Super Admin at `/login` (default `admin@smktelkom-mlg.sch.id` / `Admin123!`) → redirected to `/admin`.
- [ ] Admin: create/edit/delete a Program Umum tab; verify it appears on `/program/program-umum`.
- [ ] Open MokletBot on any page → ask "pendaftaran", "beasiswa", "kurikulum" → relevant answers; verify fallback message for unknown input.
- [ ] Submit a feedback via `/hubungi-kami/ulasan` → appears in `GET /api/feedback/all` (Admin Support).
- [ ] Verify `/loker`, `/beasiswa`, `/informasi/lomba`, `/karir` render from API data.
- [ ] `npm run smoke` (backend) and `npm run build`+`npm run lint` (frontend) pass.

## Scrum Ceremonies

1. **Sprint Planning:** Conducted at the start of every sprint (2-week cadence).
2. **Daily Standup:** 15-minute sync daily to discuss progress, plan for the day, and flag blockers.
3. **Sprint Review:** End of sprint demo for stakeholders (School administration).
4. **Sprint Retrospective:** Post-sprint analysis on team efficiency and process improvements.

## Design Consistency Revisions

### [DC-01] Adopt a single shared `Card` primitive across all card islands
- **Page(s):** LombaList, LokerList, BeasiswaList, EkskulGrid, JurusanTabs, CurriculumSyncSections, ContentSections, ProgramTemplate, NewsGrid, AlumniDistribution, FasilitasGrid, FeaturedPrograms, TestimonialMarquee, PPDB*
- **Issue:** Card island `bg-white rounded-2xl/3xl border border-border-light shadow-sm` hand-rolled across 20+ widgets; `Card` (rounded-xl=26px) and `ContentCard` (rounded-2xl=16px) already disagree.
- **Fix:** Extract one `Card` primitive on a radius token (map 2xl/3xl→radius-lg/xl), unify `Card`/`ContentCard`, and migrate the widget islands to it.
- **Severity:** High
- **Effort:** Low

### [DC-02] Adopt the shared `Button` component (currently 0 imports)
- **Page(s):** all public pages + login + admin/program-umum (Hero, Programs, PPDBCta, Login, FeedbackForm, K3Table, TrialClass, hubs, ...)
- **Issue:** `shared/ui/Button` is dead code; every CTA is inline `bg-accent hover:bg-accent-hover ... rounded-xl px-4/8 py-3.5/4 text-white` with inconsistent size/radius/shadow.
- **Fix:** Replace inline CTAs with `<Button variant size>`; make primary = `rounded-pill` + `shadow-accent` per DESIGN.md §5.
- **Severity:** High
- **Effort:** L

### [DC-03] Add neutral-gray and semantic tokens to `globals.css`
- **Page(s):** Header, Footer, all content sections (design-wide)
- **Issue:** No neutral gray scale or success/error/warning tokens exist → 100+ raw `text-gray-*`/`bg-gray-*`/`border-gray-*` and raw `emerald-*`/`red-*` values.
- **Fix:** Define `--color-neutral-*` and `--color-success/error/warning` in `globals.css` + DESIGN.md; replace raw grays with neutral tokens.
- **Severity:** High
- **Effort:** M

### [DC-04] Replace raw `text-white` / `bg-white` with existing inverse/surface tokens
- **Page(s):** design-wide (~100 occurrences each)
- **Issue:** `text-white` and `bg-white` bypass `text-text-inverse`/`text-accent-text`/`bg-surface` which already exist as tokens.
- **Fix:** Swap to token names; reserve `text-white` only for accent-glass overlays if needed after tokens added.
- **Severity:** High
- **Effort:** M

### [DC-05] Enforce radius scale (off-scale `rounded-2xl/3xl/[N]px`)
- **Page(s):** design-wide (~100 occurrences)
- **Issue:** only radius-sm/md/lg/xl/pill are defined; code uses `rounded-2xl`(16px), `rounded-3xl`(24px), `rounded-[24px/20px/32px/10px]`.
- **Fix:** Map straight to radius tokens (2xl/3xl→lg/xl); ban `rounded-[Npx]`.
- **Severity:** High
- **Effort:** M

### [DC-06] Typography scale discipline (arbitrary `text-[Npx]` + `4xl/5xl/6xl`)
- **Page(s):** Header, Footer, Features, Headmaster, Partners, Testimonials, Hero, News, JurusanTabs, Prestasi, akreditasi, PPDBCta, EkskulGrid, ...
- **Issue:** tokens cap at `text-3xl`; code uses `text-[10..80px]` (~60+) and `text-4xl/5xl/6xl` (raw Tailwind).
- **Fix:** Extend documented display tokens above 3xl and replace arbitrary sizes with scale steps.
- **Severity:** High
- **Effort:** M

### [DC-07] Semantic status pattern for errors/success/warnings
- **Page(s):** login (76), GraduationCheck (72), FasilitasGrid (162), K3Table (62), etc.
- **Issue:** each page invents its own status colors (red-50/red-200/red-700 vs emerald-500/600) with no shared token/component.
- **Fix:** Add `success/error/warning` tokens + a status/alert component; use for login error, graduation result, callouts, clickout errors.
- **Severity:** High
- **Effort:** S

### [DC-08] Route section eyebrows + section spacing through `SectionHeader`
- **Page(s):** Features, Headmaster, Partners, Testimonials, akomodasi, karir, ccp, program-*, berita
- **Issue:** eyebrow pill `rounded-full bg-accent/10 px-4 py-1.5 text-4xl font-bold text-accent` copy-pasted (4+ places) instead of `SectionHeader` (1 import); section `py-16|<py-20/...>` inconsistent.
- **Fix:** adopt `SectionHeader` across sections; align section vertical rhythm to one spacing step.
- **Severity:** Medium
- **Effort:** M

### [DC-09] Standardize container width handling
- **Page(s):** berita/[slug] (`max-w-7xl`), struktur-organisasi (`max-w-[1150px]`), PageHeader (`max-w-[1200px]`), CTA (`max-w-[720px]`)
- **Issue:** no token-backed container class; each page guesses.
- **Fix:** expose `container-max/hero` tokens + a `Container` helper receiving `max-w-[1200px]`/`max-w-7xl`.
- **Severity:** Medium
- **Effort:** S

### [DC-10] Sync DESIGN.md token docs with `globals.css`
- **Page(s):** root `jhic2.0-frontend/docs/DESIGN.md` + root `docs/DESIGN.md`
- **Issue:** DESIGN.md lists token names (`bg-main`, `surface`, `text-muted`, `border-light`) that do not match actual utilities (`bg-bg-main`, `bg-surface`, `text-text-muted`, `border-border-light`); also missing neutral/semantic/display/container tokens and the note that `rounded-xl`=26px is a token override.
- **Fix:** align doc names to real utility names and document new tokens added in DC-03/DC-06/DC-09.
- **Severity:** Medium
- **Effort:** S

## Epic: Content CMS v2 (Admin Customizable)

**Goal:** make every public content list admin-editable (backend + admin CMS + public fetch). Each feature is owned **end-to-end by one dev** (frontend + backend). Shared types live in `src/shared/types/index.ts` (see CMS-v2 type tasks). The backend `schema.prisma` already models most content (News, Facility, Achievement, Extracurricular, TeacherProfile, Testimonial, FaqItem, ServiceDeskStatus, Partner, CurriculumSyncPartner, Expertise, Certification, FeaturedProgram, ProgramUmumProgram, SchoolSchedule, Competition, JobVacancy, Scholarship, BotIntent, MexpoEvent, Feedback); tasks below wire the missing routes/admin/public.

### Sprint CMS-1 · Foundation & Types (all devs, parallel)

| Task ID | Dev | Feature | Scope | Points | Priority | Status |
|---|---|---|---|---|---|---|
| CMS-v2-01 | Haikal | Kurikulum | index.ts: `KonsentrasiCard`, `KonsentrasiProgramMeta`, `KarirContent`, `KarirProspek`, `TimelineEvent` | 2 | High | Done |
| CMS-v2-02 | Akira | News & Kelulusan | index.ts: realign `NewsItem` (slug/categoryLabel/badgeColor/content[]) | 2 | High | Done |
| CMS-v2-03 | Alfara | Hubin | annotate `hubinData` with shared `JobVacancyItem`/`ScholarshipItem`/`CompetitionItem`/`IndustryPartner` | 1 | High | Planned |
| CMS-v2-04 | Iqbal | People | index.ts: realign `TestimonialItem`, `FAQItem`, `ServiceDeskItem`, add `OrgChartNode` | 2 | High | Done |
| CMS-v2-05 | Arkan | Academic-Life | annotate `dummyData` (akomodasi/produk/trial/quiz) with shared types | 2 | Medium | Planned |

### Sprint CMS-2 · Backend + Admin CRUD (parallel)

| ID | Dev | Feature | Scope | Points | Priority | Status |
|---|---|---|---|---|---|---|
| CMS-v2-06 | Haikal | Kurikulum CMS | Prisma models (Konsentrasi, Karir) + routes/serv + admin konsentrasi | 8 | High | Planned |
| CMS-v2-07 | Akira | Berita CMS | News API (model exists) + admin berita editor | 5 | High | Planned |
| CMS-v2-08 | Alfara | Hubin admin | admin loker/beasiswa/lomba/partner UI (routes exist) | 5 | High | Planned |
| CMS-v2-09 | Iqbal | Orang CMS | admin guru/fasilitas/prestasi/ekskul/testimoni/faq/service/org chart | 8 | High | Planned |
| CMS-v2-10 | Arkan | Academic-Life CMS | Prisma models (Product, Akomodasi, Quiz) + routes + admin | 5 | Medium | Planned |

### Sprint CMS-3 · Public wiring + QA (parallel)

| ID | Dev | Content | Scope | Points | Priority | Status |
|---|---|---|---|---|---|---|
| CMS-v2-11 | Haikal | Wire public kurikulum/karir to API | service + page fetch + token | 3 | High | Planned |
| CMS-v2-12 | Akira | Wire public berita + persiapan-kelulusan to API | service + SSG from API | 3 | High | Planned |
| CMS-v2-13 | Alfara | Wire public loker/beasiswa/lomba to API | replace fallback with live CRUD | 2 | High | Planned |
| CMS-v2-14 | Iqbal | Wire public people pages to API | guru, fasilitas, prestasi, testimoni, faq, org | 3 | High | Planned |
| CMS-v2-15 | Arkan | Wire public akomodasi/produk/trial/quiz to API | service + page fetch | 3 | Medium | Planned |

> Note: this replaces the generic Dev1–5 assignees in the older epics with the real team (Haikal, Akira, Alfara, Iqbal, Arkan). The `## Design Consistency Revisions` section above is untouched.
