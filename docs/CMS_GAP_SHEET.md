# CMS Gap Sheet — What Needs to Be Built (Admin-Editable Content)

> Companion to `SCRUM.md` (Epic: Content CMS v2) and `PHASE.md` (Stage 3–4).
> Every section below = a feature that is **not yet admin-editable**.
> "How to read": **Status** = today · **Backend** = model/routes needed · **Admin** = editing screen + fields · **Public** = pages that must fetch it.

Legend: ✅ exists · ❌ missing · 🟡 exists but not wired

---

## Summary table

| # | Feature | Dev | Current | Model | Route | Admin | Public wired | Effort |
|---|---|---|---|---|---|---|---|---|
| 1 | Database + seed + E2E | Haikal | ❌ not migrated | ✅ schema | 🟡 | — | ❌ | S–M |
| 2 | Berita / News | Akira | static mock | ✅ News | ❌ | ❌ | ❌ | L |
| 3 | Kurikulum / Konsentrasi | Haikal | static mock | ✅ partner/expertise/cert | ❌ | ❌ | ❌ | L |
| 4 | Karir content | Haikal | static mock | ❌ new | ❌ | ❌ | ❌ | M |
| 5 | Featured Programs | Haikal | static + route | ✅ | ✅ | ❌ | 🟡 | S |
| 6 | Hubin admin (loker/beasiswa/lomba/partner) | Alfara | ✅ API+fallback | ✅ | ✅ | ❌ | ✅ | M |
| 7 | Profil Guru | Iqbal | static | ✅ TeacherProfile | ❌ | ❌ | ❌ | M |
| 8 | Fasilitas / Prestasi / Ekskul | Iqbal | static inline | ✅ models | ❌ | ❌ | ❌ | M |
| 9 | Testimoni / FAQ / Service Desk | Iqbal | static inline | ✅ models | ❌ | ❌ | ❌ | M |
| 10 | Struktur Organisasi | Iqbal | static inline | ❌ new | ❌ | ❌ | ❌ | M |
| 11 | Akomodasi (biaya/kos/makan) | Arkan | static | ❌ new | ❌ | ❌ | ❌ | M |
| 12 | Produk Telkom | Arkan | static | ❌ new | ❌ | ❌ | ❌ | S |
| 13 | Trial Class | Arkan | static | ✅ MexpoEvent | ❌ | ❌ | ❌ | M |
| 14 | Tes Minat Bakat (quiz) | Arkan | static | ❌ new | ❌ | ❌ | ❌ | M |
| 15 | Cek Status Kelulusan (real) | Akira | simulated mock | ✅ AlumniRecord | ❌ | — | ❌ | M |
| 16 | Feedback review (Admin Support) | Alfara | API exists | ✅ Feedback | ✅ /all | ❌ | — | S |
| 17 | SPMB settings/batches | Alfara | — | ✅ SpmbBatch/Setting | ❌ | ❌ | 🟡 | M |
| 18 | Partners (public wiring) | Alfara | static inline | ✅ Partner | ✅ | ❌ | ❌ | S |

---

## 1. Database + seed + E2E — Owner: Haikal (Critical)
- **Status:** schema + routes exist; no DB connected → all CRUD/login return 500.
- **Backend:** run `npx prisma migrate dev`, `npx prisma db seed` (roles/permissions incl. `schedule.manage`), verify Super Admin login, `npm run smoke` all-green.
- **Admin/Public:** none — unblocks everything.

## 2. Berita / News — Owner: Akira
- **Status:** public list + detail render static `newsData` (mismatch: `content` is `string[]`, no slug/badge).
- **Backend:** News API (GET public, GET/PUT/POST/DELETE admin) + `news.manage` permission (Admin Konten).
- **Admin:** `/admin/berita` — fields: title, slug, category, categoryLabel, badgeColor, image, date, author, excerpt/desc, **rich-text content** (WYSIWYG per JHI-16), published toggle.
- **Public:** `/informasi/berita` (grid) + `/informasi/berita/[slug]` (detail) fetch from API with static fallback.

## 3. Kurikulum / Konsentrasi — Owner: Haikal
- **Status:** konsentrasi cards, sync partners, expertise, certifications all static (`konsentrasiData`, `curriculumData`).
- **Backend:** routes for `CurriculumSyncPartner`, `Expertise`, `Certification` (models exist) + new `Consentrasi` model (slug/title/description/icon/sections) + `curriculum.manage` (Admin Kurikulum).
- **Admin:** `/admin/kurikulum` per-program editors: partners (name, logo, academicYear, description, programCode), expertise (name, description, programCode, isIcp), certifications (name, level, provider, programCode), konsentrasi cards (slug, title, description, icon, sections).
- **Public:** `profil-konsentrasi-keahlian`, `konsentrasi/[slug]`, `icp`, `reguler`.

## 4. Karir — Owner: Haikal
- **Status:** static `karirData` per program (portal URL, timeline, prospects).
- **Backend:** new `CareerContent` model (programCode, portalUrl, timeline JSON, prospek JSON) + routes + `curriculum.manage`.
- **Admin:** `/admin/karir` — portalUrl, timeline events (title, description, icon), prospects (title, description, salaryRange, skills).
- **Public:** `/karir`.

## 5. Featured Programs — Owner: Haikal
- **Status:** backend CRUD exists (`/api/featured-programs`, `featuredProgram.manage`); frontend still uses static fallback; **no admin UI**.
- **Admin:** `/admin/featured-programs` — name, slug, description, programId, isActive, ctaLabel, sortOrder.
- **Public:** `widgets/program/FeaturedPrograms.tsx` switch to API.

## 6. Hubin admin — Owner: Alfara
- **Status:** APIs + public pages ✅ (fallback when DB off); **no admin UI**.
- **Admin:** `/admin/hubin` (tabs):
  - Loker: title, company, description, programCode, location, salaryRange, applicationDeadline, contact, link.
  - Beasiswa: title, provider, description, programCode, deadline, requirements[], link, image.
  - Lomba: title, organizer, description, level, location, registrationDeadline, date, source, link, image.
  - Partner: name, logo, url, isFeatured.
- **Perms:** `loker.manage`/`beasiswa.manage`/`lomba.manage` (Hubin), `partner.manage`.

## 7. Profil Guru — Owner: Iqbal
- **Status:** static `teacherData`; model + `guru.manage` exist.
- **Backend:** TeacherProfile API + `guru.manage` (Admin Humas).
- **Admin:** `/admin/guru` — name, position, image, level (PRINCIPAL/VP/TEACHER), category (PRODUCTIVE/NON_PRODUCTIVE/STAFF), division, description.
- **Public:** `/tentang-kami/profil-guru`.

## 8. Fasilitas / Prestasi / Ekskul — Owner: Iqbal
- **Status:** inline static arrays; models exist (`Facility`, `Achievement`, `Extracurricular`).
- **Backend:** 3 APIs + perms (`ekskul.manage` Kesiswaan; others content).
- **Admin:** `/admin/fasilitas`, `/admin/prestasi`, `/admin/ekskul`:
  - Fasilitas: title, category, categoryLabel, img, desc, fullDesc, capacity, time, isFeatured.
  - Prestasi: title, category, level, meta, img, description, winnerName, date.
  - Ekskul: title, category, categoryLabel, image, description, schedule, coach.
- **Public:** `/tentang-kami/fasilitas`, `/tentang-kami/prestasi`, `/program/ekstrakurikuler`.

## 9. Testimoni / FAQ / Service Desk — Owner: Iqbal
- **Status:** inline static; models exist (`Testimonial`, `FaqItem`, `ServiceDeskStatus`).
- **Admin:** `/admin/testimoni` (name, role, content, avatar, avatarInitials, avatarBg, companyLogo), `/admin/faq` (question, answer, category), `/admin/service-desk` (title, desc, icon, status, href, color, bgColor).
- **Public:** `/alumni/testimoni` + home testimonials, `/hubungi-kami/faq`, `/hubungi-kami/service-desk`.

## 10. Struktur Organisasi — Owner: Iqbal
- **Status:** ~20 hardcoded `OrgNode`s.
- **Backend:** new `OrganizationNode` model (name, title, image, level, parentId) + routes.
- **Admin:** `/admin/struktur-organisasi` (tree editor: add/remove child nodes).
- **Public:** `/tentang-kami/struktur-organisasi`.

## 11. Akomodasi — Owner: Arkan
- **Status:** static `dummyData` (living costs, kos, food).
- **Backend:** new models: `LivingCost` (title, range, desc), `KosRecommendation` (area, distance, price, features[]), `FoodRecommendation` (name, type, desc) + routes.
- **Admin:** `/admin/akomodasi`.
- **Public:** `/akomodasi`.

## 12. Produk Telkom — Owner: Arkan
- **Status:** static `productData` (untyped).
- **Backend:** new `Product` model (name, category, desc, image, link) + routes.
- **Admin:** `/admin/produk`.
- **Public:** `/informasi/produk`.

## 13. Trial Class — Owner: Arkan
- **Status:** static `trialClassData`; `MexpoEvent` model exists.
- **Backend:** MexpoEvent API + routes.
- **Admin:** `/admin/trial-class` — name, location, description, start_date, end_date, quota, organizer_name, photo, registration_start/deadline.
- **Public:** `/trial-class`.

## 14. Tes Minat Bakat (quiz) — Owner: Arkan
- **Status:** static `quizQuestions` + client-side scoring.
- **Backend:** new `QuizQuestion` model (question, options[{text,type}]) + routes.
- **Admin:** `/admin/quiz`.
- **Public:** `/program/tes-minat-bakat`.

## 15. Cek Status Kelulusan (real) — Owner: Akira
- **Status:** always returns simulated "LULUS/Budi Santoso".
- **Backend:** AlumniRecord lookup API by NISN + `spmb.manage`/kesiswaan.
- **Public:** `/informasi/cek-status-kelulusan` call the API, show not-found state.

## 16. Feedback review — Owner: Alfara
- **Status:** `GET /api/feedback/all` exists (SUPPORT_REPLY); **no admin UI**.
- **Admin:** `/admin/feedback` list + reply/status.

## 17. SPMB settings — Owner: Alfara
- **Status:** models exist; no API/admin.
- **Backend:** SpmbBatch + SpmbSetting APIs + `spmb.manage`.
- **Admin:** `/admin/spmb` — batches (name, quota, dates), settings.
- **Public:** SPMB/PPDB timeline + CTA.

## 18. Partners public wiring — Owner: Alfara
- **Status:** backend `/api/partners` exists; frontend `Partners.tsx` still static.
- **Public:** switch home partners marquee to the API with fallback.
