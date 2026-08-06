# SCHEMA — Backend Database Schema (jhic2.0-backend)

The **canonical, documented** database schema for JHIC 2.0.

> **Status: PLANNED.** The backend is a stub — `prisma/schema.prisma` does not exist yet. This document is the agreed design that must be implemented in Prisma, and it is the **living contract**: every change to `prisma/schema.prisma` must update this file, and vice versa.

**Conventions**
- All tables use `String` UUID `id` (`@default(uuid())`), `createdAt`/`updatedAt` audit fields.
- Soft-delete-friendly: destructive admin actions may use a `deletedAt` column.
- Money/numbers as `Int` (IDR rupiah) unless noted.
- Roles/permissions follow the root `../docs/PRD.md` §3.10 and `../docs/ARCHITECTURE.md` §4.
- Naming follows Prisma style: `snake_case` for `@map` columns, camelCase for fields.

---

## 1. Auth & RBAC

### `User`
| Field | Type | Notes |
|---|---|---|
| id | String @id | uuid |
| email | String @unique | login credential |
| passwordHash | String | bcryptjs hash — never plaintext |
| fullName | String | |
| roleId | String | FK → Role |
| isActive | Boolean | default true |
| lastLoginAt | DateTime? | |
| createdAt / updatedAt | DateTime | |

### `Role`
| Field | Type | Notes |
|---|---|---|
| id | String @id | uuid |
| name | String @unique | e.g. `SUPER_ADMIN`, `ADMIN_KONTEN`, `ADMIN_SPMB`, `ADMIN_SUPPORT`, `ADMIN_KURIKULUM`, `ADMIN_HUBIN`, `ADMIN_HUMAS`, `ADMIN_KESISWAAN` |
| description | String? | |
| division | String? | Division scope (JHI-v2-10): `SUPER_ADMIN` / `KONTEN` / `SPMB` / `SUPPORT` / `KURIKULUM` / `HUBIN` / `KESISWAAN` / `HUMAS` |

### `Permission` & `RolePermission`
- `Permission`: `id`, `key` (unique, e.g. `news:create`), `description`.
- `RolePermission`: join `(roleId, permissionId)` unique.

**Relations:** User N:1 Role; Role N:M Permission via RolePermission.

---

## 2. Public Content

### `News` (Berita & Pengumuman)
| Field | Type | Notes |
|---|---|---|
| id | String @id | |
| title | String | |
| slug | String @unique | SEO-friendly |
| description | String | excerpt/desc |
| content | String | HTML body (WYSIWYG) |
| image | String? | cover URL |
| category | String | e.g. `berita`, `pengumuman` |
| status | NewsStatus | enum: `DRAFT` / `PUBLISHED` / `ARCHIVED` (CMS lifecycle) |
| authorId | String? | FK → User |
| publishedAt | DateTime? | |
| createdAt / updatedAt | DateTime | |

### `Facility` (Fasilitas)
`id`, `title`, `category`, `image`, `description` (desc), `fullDescription` (fullDesc), `capacity` String?, `time` String?, `isFeatured` Boolean, timestamps.

### `Achievement` (Prestasi)
`id`, `title`, `category`, `level` (e.g. `kabupaten`/`provinsi`/`nasional`/`internasional`), `meta`, `image`, `description`?, `winnerName`?, `date`?, timestamps.

### `Extracurricular` (Ekskul)
`id`, `title`, `category`, `categoryLabel`, `image`, `description`, `schedule`?, `coach`?, timestamps.

### `Partner` (Mitra / Hubungan Industri)
`id`, `name`, `logo` (src), `url`?, `isFeatured`?, timestamps.

### `Testimonial` (Alumni/Siswa)
`id`, `name`, `role`, `content`, `avatar`, `companyLogo`?, `isApproved` Boolean default false, timestamps.

### `FaqItem`
`id`, `question`, `answer`, `category`?, `sortOrder` Int default 0, timestamps.

### `ServiceDeskStatus`
`id`, `title`, `description`, `status` (enum: `OPERATIONAL` / `MAINTENANCE` / `DEGRADED`), `href`, `sortOrder`, timestamps.

### `TeacherProfile` (Guru & Staf)
`id`, `name`, `position`, `image`, `description`?, `sortOrder`, timestamps.

> **v2 addition (per curriculum feedback):** displayed as **profile cards** (layout reference: https://smktelkom-sda.sch.id/profil-guru), not an org chart. Requires `level` (PRINCIPAL / VP / TEACHER) and `category` (PRODUCTIVE / NON_PRODUCTIVE / STAFF) fields for grouping/filtering within the card grid. `division` is a string label for now — to become an FK to a `Division` entity once division-based RBAC (JHI-v2-10) introduces it. Admin Humas maintains this content.

---

## 3. Jurusan, Programs & Curriculum (v2: MokletKurikulum / MokletKarir)

> **Important distinction:** `Jurusan` and `Program` are two separate entities.
> - **Jurusan** (majors): RPL, TKJ, PG. Shown on the `/program/jurusan` hub (tabs). Owns curriculum versioning (MokletKurikulum) and career content (MokletKarir). Never individual navbar links.
> - **Program** (special programs): TS, ICP, CCP, + future curriculum-created ones. Individual pages (`/program/[slug]`). **`isFeatured` curates which appear in the navbar** (max 3).

### `Jurusan` (Major — e.g. RPL, TKJ, PG)
| Field | Type | Notes |
|---|---|---|
| id | String @id | uuid |
| code | String @unique | e.g. `RPL`, `TKJ`, `PG` |
| title | String | e.g. "Rekayasa Perangkat Lunak" |
| description | String | |
| headOfProgram | String? | |
| features | Json | `JurusanDetail[]` (title, desc, icon) |
| careerProspects | Json? | string[] |
| image / heroImage | String? | |
| curriculum | Json? | `{title, icon}[]` — summary curriculum items |
| careers | Json? | `{title, description, icon, ...}[]` |
| careerPortalUrl | String? | JHI-06: external career portal link (MokletKarir), exposed via `GET /api/programs` |
| icon | String? | icon key |
| careerPortalUrl | String? | link to Pak Yniko's career website |
| sortOrder | Int | display order in hub tabs |
| isActive | Boolean | |
| timestamps | DateTime | |

**Relations:** Jurusan 1:N CurriculumVersion; Jurusan 1:N CareerSection; Jurusan 1:N JobVacancy / Scholarship (filter per jurusan).

### `Program` (Special Program — e.g. TS, ICP, CCP)
| Field | Type | Notes |
|---|---|---|
| id | String @id | uuid |
| title | String | e.g. "International Class Program (ICP)" |
| slug | String @unique | URL-safe, e.g. `icp`, `program-ts`, `ccp` |
| navLabel | String? | Short UI label for navbar (plain descriptive, never internal `Moklet*` name per PRD §1). Falls back to `title` if null. |
| description | String | page excerpt |
| content | String? | full HTML body (WYSIWYG) |
| features | Json? | `{ title, desc, icon }[]` — feature cards on the program page |
| image | String? | hero/cover image |
| icon | String? | icon key (for nav/cards) |
| isFeatured | Boolean @default(false) | **curates navbar only** — max 3 featured shown in nav. Not-featured ≠ hidden; the hub and full catalog still list all programs. |
| sortOrder | Int @default(0) | display order (navbar + catalog) |
| isActive | Boolean @default(true) | |
| timestamps | DateTime | |
| `@@index([isFeatured, sortOrder])` | | composite index for the featured-nav query |

> **Semantics:** `isFeatured` controls navbar visibility **only**. The `/program/jurusan` hub and any program catalog page still list **all** active programs. Setting `isFeatured = false` does not hide or delete a program — it only removes it from the navbar's "Program Unggulan" group. Admin Kurikulum manages both jurusan curriculum and program CRUD (including the `isFeatured` toggle).

### `CurriculumVersion` (MokletKurikulum — versioning, per Jurusan)
| Field | Type | Notes |
|---|---|---|
| id | String @id | |
| jurusanId | String | FK → Jurusan |
| label | String | e.g. `Kurikulum 2026` |
| academicYear | String | e.g. `2026/2027` |
| version | Int | incrementing per jurusan |
| isActive | Boolean | only one active per jurusan |
| subjectStructure | Json | mapel structure (subjects, lesson hours) |
| competencyDetails | Json | kompetensi keahlian |
| lastUpdatedBy | String? | FK → User (Admin Kurikulum) |
| publishedAt | DateTime? | |
| timestamps | DateTime | |

### `CareerSection` (MokletKarir — per Jurusan)
- `id`, `jurusanId` FK → Jurusan, `type` (enum: `TIMELINE` / `PROSPEK`), `content` Json (timeline per semester/grade OR expertise + career paths + salary ranges), `sortOrder`, `updatedBy`?, timestamps.

### `CurriculumSyncPartner` (JHI-v2-02 — Partner Sinkronisasi Kurikulum)
- `id`, `name`, `logo`?, `academicYear` (**required** — partner tied to a specific year for versioning, e.g. `2025/2026`), `description`?, `programCode`? (RPL/TKJ/PG), `isActive` Boolean, timestamps.

### `Expertise` (JHI-v2-02)
- `id`, `programCode` (RPL/TKJ/PG), `name`, `description`, `isIcp` Boolean (ICP = full-stack + mobile), `sortOrder`, timestamps.

### `Certification` (JHI-v2-02)
- `id`, `programCode` (RPL/TKJ/PG), `name`, `level` (enum: `NASIONAL` / `INTERNASIONAL`), `provider`, timestamps.

### `FeaturedProgram` (JHI-v2-05 — Program Unggulan)
- `id`, `name`, `slug` unique, `description`, `programId`? (link to curriculum `Program`), `isActive` Boolean, `ctaLabel`?, `sortOrder`, timestamps.
- CRUD API: `jhic2.0-backend/src/routes/featuredPrograms.ts` (Admin Kurikulum only; public GET returns active only).

### `ProgramUmumProgram` (Program Umum content)
- `id`, `key` unique (tab key: `bilingual` / `tahfidz` / `moklet-serve` / `factory-tour` / `idea-challenge` / `sertifikasi-bahasa`), `label`, `intro`?, `icon`? (lucide key), `sections` Json (`ContentSection[]`), `isActive` Boolean, `sortOrder`, `updatedBy`?, timestamps.
- CRUD API: `jhic2.0-backend/src/routes/programUmum.ts` — public GET returns active tabs; Admin Kurikulum (`curriculum.manage`) can create/update/delete. Planned `GET /api/program-umum/:id` for the admin edit screen (JHI-16).
- Frontend: `jhic2.0-frontend/src/services/programUmum.ts` fetches from `/api/program-umum` with static fallback to `programUmumData.ts`.
- Admin editing uses a **structured block editor (plain text)** per section type — no WYSIWYG/HTML (see root `docs/SCRUM.md` **JHI-16**).

---

## 4. Hubin Expansion (v2: MokletHubin)

### `Competition` (MokletLomba — Info Lomba)
`id`, `title`, `description`, `organizer`?, `location`?, `registrationStart`/`registrationDeadline` DateTime?, `date`?, `level`?, `source` (enum: `INTERNAL` / `EXTERNAL`), `link`?, `image`?, `isPublished` Boolean, timestamps.

### `JobVacancy` (MokletLoker — Lowongan Kerja)
`id`, `title`, `company` (partner name), `description`, `jurusanId`? FK → Jurusan (filter per jurusan), `location`?, `salaryRange` String?, `applicationDeadline` DateTime?, `contact`?, `link`?, `isPublished` Boolean, timestamps.

### `Scholarship` (MokletBeasiswa — Info Beasiswa)
`id`, `title`, `description`, `provider` (sekolah/pemerintah/mitra), `jurusanId`? FK → Jurusan, `deadline` DateTime?, `requirements` Json?, `link`?, `image`?, `isPublished` Boolean, timestamps.

---

## 5. SPMB (v2: MokletSPMB — landing page)

### `SpmbBatch` (Info Gelombang)
`id`, `label` (e.g. `Gelombang 1`), `opensAt` DateTime?, `closesAt` DateTime?, `description`?, `isActive` Boolean, `sortOrder`, timestamps.

### `SpmbSetting` (key-value, single row)
- `id`, `registrationUrl` String — redirect target to the **Foundation's official registration portal**.
- `requirements` Json? — syarat pendaftaran.
- `flow` Json? — alur pendaftaran.
- `updatedBy`?, timestamps.

> ⚠️ **No registrant data is stored here.** Registration & tracking live in the Foundation's system (root `../docs/PRD.md` §3.7). The `Admin SPMB` role only manages landing content.

---

## 6. Interactive Services (v1 + v2)

### `Inquiry` (Kotak Pertanyaan)
`id`, `name`, `email`, `phone`?, `category`?, `message`, `status` (enum: `NEW` / `IN_PROGRESS` / `ANSWERED` / `CLOSED`), `reply`?, `repliedBy`?, `repliedAt`?, timestamps.

### `BotIntent` (MokletBot — knowledge base)
`id`, `intent` String @unique (e.g. `spmb_flow`, `faq_umum`), `keywords` Json (trigger phrases), `answer` String (or `answerText`), `escalateTo` String? (e.g. `SERVICE_DESK`), `isActive` Boolean, timestamps.

### `BotConversation` (MokletBot — logs)
`id`, `sessionId`, `userId`?, `messages` Json (Q&A transcript), `escalated` Boolean default false, `createdAt`/`updatedAt`.

### `Feedback` (MokletUlasan)
`id`, `context` String? (e.g. `after_spmb`, `after_article`), `contextRefId` String?, `rating` Int? (1–5), `comment`?, `contact`? (optional), `status` (enum: `NEW` / `REVIEWED`), `createdAt`.

---

## 7. Alumni

### `AlumniRecord` (Profil & Sebaran Alumni)
`id`, `name`, `graduationYear` Int, `jurusanId`? FK → Jurusan, `city`/`province` (sebaran), `company`?, `position`?, `contactable` Boolean, `createdAt`/`updatedAt`.

> Distribution analytics (recharts) aggregate this table; testimonial content lives in `Testimonial`.

---

## 8. External Integration (Mexpo Trial Class)

### `MexpoEvent` (mirror of the `mexpo.id` API contract)
| Field | Type | Notes |
|---|---|---|
| id | String @id | external id (string) |
| name | String | |
| location | String | |
| description | String | |
| startDate / endDate | DateTime | |
| quota | Int | |
| organizerName | String | |
| createdBy / updatedBy | String | external user ids |
| photo | String? | |
| registrationStart / registrationDeadline | DateTime | |
| approvedBy | String? | |
| userEventRoles | Json? | `UserEventRole[]` (role, status, user_id, verify_at) |
| isActive | Boolean | |
| timestamps | DateTime | |

> Source: `GET mexpo.id/events`; frontend currently consumes mock data in `jhic2.0-frontend/src/services/trialClassData.ts` (types in `shared/types/index.ts`).

---

## 9. Implementation Checklist (Prisma)

1. Scaffold Prisma: `npx prisma init` → set `DATABASE_URL` in `.env`.
2. Create `prisma/schema.prisma` matching the models above (add enums, relations, indexes).
3. Remove the bogus `"prisma-client": "^0.0.0"` dependency from `package.json`.
4. Run `npx prisma migrate dev` to create/apply migrations.
5. Update this file whenever the schema changes.

## 10. Update Log

| Date | Change | By |
|---|---|---|
| — | Initial planned schema (from frontend types + PRD v2.0) | docs restructure |
| — | Split `Program` into `Jurusan` + `Program`; added `isFeatured`/`navLabel`/`sortOrder` + composite index on `Program` for featured-nav curation; renamed FKs from `programId` to `jurusanId` on CurriculumVersion, CareerSection, JobVacancy, Scholarship, AlumniRecord | featured-nav proposal |
