# Scrum & Sprint Plan — JHIC 2.0

This document outlines the detailed Scrum methodology and Sprint plan for the development of JHIC 2.0 (Moklet SIGAP).

## Team Roles

The development team consists of 5 developers:
- **Dev 1**: Backend Infrastructure & Core Integrations
- **Dev 2**: Security (Auth), RBAC, & Backend Feature Logic
- **Dev 3**: Frontend Architecture & UI Restructuring (SPMB, Kurikulum)
- **Dev 4**: Data Integration, External APIs & Feedback UI
- **Dev 5**: UI Components, Interactive Elements & QA

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
| JHI-11 | Develop MokletBot Chatbot UI (Floating widget) | Dev 1 | 3 | Medium | To Do |
| JHI-12 | Integrate MokletBot with backend dialog logic | Dev 2 | 5 | Medium | To Do |
| JHI-13 | Develop MokletUlasan Feedback Form (Modal/Page) | Dev 3 | 3 | Low | To Do |
| JHI-14 | Connect MokletUlasan to database for data persistence | Dev 4 | 2 | Low | To Do |
| JHI-15 | E2E Testing, UI Polish, and Bug Fixing across all modules | Dev 5 | 8 | High | To Do |

## Scrum Ceremonies

1. **Sprint Planning:** Conducted at the start of every sprint (2-week cadence).
2. **Daily Standup:** 15-minute sync daily to discuss progress, plan for the day, and flag blockers.
3. **Sprint Review:** End of sprint demo for stakeholders (School administration).
4. **Sprint Retrospective:** Post-sprint analysis on team efficiency and process improvements.
