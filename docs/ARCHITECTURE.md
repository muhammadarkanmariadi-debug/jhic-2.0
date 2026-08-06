# Architecture — JHIC 2.0 Monorepo (Common Rules & Knowledge Map)

This document defines the **global architecture** shared by both sub-projects and — critically — **where to find knowledge** in this repository. AI agents must consult this before working in any part of the codebase.

---

## 1. Repository Layout

```
jhic-2.0/                     # Repository root (this document lives here)
├── AGENTS.md                 # Entry-point router for AI agents
├── README.md                 # Thin index pointing to the docs
├── docs/                     # Global documentation
│   ├── README.md             # Global docs index
│   ├── ARCHITECTURE.md       # THIS FILE — global architecture & knowledge map
│   ├── DESIGN.md             # Global design context (brand-level, not token-specific)
│   ├── RULE.md               # Universal agent rules (both apps)
│   ├── SKILL.md              # Common/universal agent skills
│   └── PRD.md                # Product Requirements v2.0 (Moklet SIGAP) — canonical product source
├── .github/workflows/        # CI pipeline (frontend build check)
├── jhic2.0-frontend/         # Next.js web application
│   ├── AGENTS.md             # Agent entry point (+ Next.js 16 warning)
│   ├── README.md             # Quickstart only
│   └── docs/                 # ARCHITECTURE / DESIGN / RULE / SKILL
└── jhic2.0-backend/          # Express REST API (currently a stub / planning phase)
    ├── AGENTS.md             # Agent entry point
    └── docs/                 # ARCHITECTURE / SCHEMA / SKILL / RULE
```

---

## 2. Where to Get Knowledge (source hierarchy)

Read in this order; **lower rows are the ground truth when docs and code disagree**:

| Priority | Source | Purpose |
|---|---|---|
| 1 | **PRD.md** (root) | Product requirements, feature scope, sitemap, roles. Canonical for *what* we build. |
| 2 | **Sub-project ARCHITECTURE.md** | Fixed, consistent technical structure per app. |
| 3 | **Sub-project SKILL.md** | Domain-specific skills and library conventions per app. |
| 4 | **Sub-project DESIGN.md / RULE.md / SCHEMA.md** | Design system, hard rules, database schema. |
| 5 | **Actual code** | The single source of truth. Docs drift — **always verify against code** before asserting anything. |

> **Drift warning:** the implemented codebase reflects **v1** (e.g. `ppdb`, `tes-minat-bakat`, `trial-class` routes; no Kurikulum/Bot/Ulasan yet), while **PRD.md** defines the **v2.0 target** (SPMB rename, MokletKurikulum, MokletKarir, expanded MokletHubin, MokletBot, MokletUlasan, Division-Based RBAC). Do not claim a feature exists just because it is in the PRD — check the code first.

---

## 3. Global Architecture Overview

- **Client-Server split.** The frontend is a hybrid (SSR + CSR) Next.js App Router application; the backend is a RESTful Node.js/Express API.
- **Database.** SQL database accessed through Prisma ORM (type-safe).
- **Authentication.** Stateless JWT; passwords hashed with bcryptjs. Authorization is role-based (RBAC).
- **CI.** `.github/workflows/build-check.yml` runs `npm run build` in `jhic2.0-frontend` on every push/PR to `main`. Lint is intentionally decoupled from CI (enforced locally via `npm run lint`).

### 3.1 Tech Stack (verified against `package.json`)

| Layer | Primary | Supporting |
|---|---|---|
| Frontend | Next.js 16 (App Router) | React 19, TypeScript, Tailwind CSS v4 (CSS-first config), Lucide React, Recharts, react-hook-form + Zod, react-paginate |
| Backend | Express.js (Node 20) | Prisma ORM, JWT, bcryptjs, CORS, dotenv |
| Database | MySQL / PostgreSQL | Relational schema, migrations via Prisma CLI |

---

## 4. Role-Based Access Control (RBAC) — Global Model

The canonical role list comes from **PRD v2.0 §3.11**. The system utilizes a **per-division granularity** to ensure sections are managed by their respective departments, avoiding centralized bottlenecks.

| Role | Scope |
|---|---|
| **Super Admin** | Absolute access: user management, system settings, all modules |
| **Admin Konten** | CRUD on general News, Announcements, Achievements, Facilities gallery |
| **Admin SPMB** | Manages SPMB landing page content (batch info, requirements, redirect link). *Not* registrant data (that lives in the Foundation's system). |
| **Admin Support** | Reads/answers Inquiry Box, Service Desk, and escalations from MokletBot |
| **Admin Kurikulum** | Manages MokletKurikulum content, Program Unggulan, and curriculum versioning |
| **Admin Hubin** | Manages MokletLoker, MokletBeasiswa, and Industry Directories |
| **Admin Kesiswaan** *(v2, new)* | Manages Ekstrakurikuler, Organisasi, and related student activity content |
| **Admin Humas** *(v2, new)* | Manages Akomodasi, Informasi (Lomba, Brochures), Profil Guru profile cards, and Partner Sinkronisasi Kurikulum |
| **Siswa / Alumni** *(future)* | Personal portal (SIS extension) — not yet in scope |

Backend permission checks are intended to be implemented with custom Express middleware (optionally `@casl/ability`).

---

## 5. Data Flow (global)

```
Visitor (browser)
   │  SSR/CSR rendered by Next.js frontend
   ▼
Next.js App (jhic2.0-frontend)
   │  services/ layer (today: mock/dummy data)
   │  future: REST calls to backend
   ▼
Express REST API (jhic2.0-backend)   ← JWT-authenticated where required
   │  route → controller → service → Prisma
   ▼
SQL Database (MySQL/PostgreSQL) via Prisma ORM
```

---

## 6. Schema Entities (v2 — status)

Entities defined in `jhic2.0-backend/docs/SCHEMA.md` and modeled in `prisma/schema.prisma`. ✅ = implemented in schema; ⏳ = still a proposal.

1. ✅ **`TeacherProfile`** (extends the existing model): Manages "Profil Guru" as **profile cards** (layout reference: https://smktelkom-sda.sch.id/profil-guru) with `level`/`category`/`division` for grouping/filtering in the card grid.
2. ✅ **`CurriculumSyncPartner`**: Tied to `Konsentrasi Keahlian` with a required `academicYear` field for versioning (differs from general recruitment partners).
3. ✅ **`Expertise` & `Certification`**: Entities linked to a `Konsentrasi Keahlian` (via `programCode`).
4. ⏳ **`Accommodation`**: Structured data for local Kos recommendations, Catering/Food spots, and an estimated living cost calculator (frontend `/akomodasi` exists with mock data; DB entity not yet modeled).
5. ⏳ **`InformationCategory`**: To cleanly separate News, Graduation Announcements, Pass Status, Brochures, and Competitions.
6. ✅ **`FeaturedProgram`**: For "Program Unggulan", dynamically linked to the existing curriculum structure; CRUD API in `jhic2.0-backend/src/routes/featuredPrograms.ts`.
7. ✅ **`ProgramUmumProgram`**: Program Umum tab content (`key`, `label`, `intro`, `icon`, `sections` JSON, `isActive`, `sortOrder`); CRUD API in `jhic2.0-backend/src/routes/programUmum.ts`. Admin edits via a **structured block editor (plain text)** — see `docs/SCRUM.md` **JHI-16**.

---

## 7. Cross-Cutting Conventions

- **Documentation language:** English for all docs in this repository (PRD.md is a translation of the original Indonesian v2.0 spec).
- **Naming:** internal feature names use the `Moklet[NamaUnik]` prefix (see PRD §1); UI/navigation labels are plain descriptive Indonesian.
- **No feature removal:** PRD v2.0 explicitly carries over all v1 features. Do not delete features without an explicit decision.
- **Docs-code sync:** any change to the database model must update `jhic2.0-backend/docs/SCHEMA.md`; any change to design tokens must update `jhic2.0-frontend/docs/DESIGN.md` and `globals.css`.
