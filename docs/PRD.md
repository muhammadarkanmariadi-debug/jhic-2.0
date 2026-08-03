# MOKLET SIGAP — Sitemap & Feature Restructuring (v2.0)
**Education Gateway Information System — SMK Telkom Malang**

> This document revises the v1.0 feature structure based on validation/feedback results (curriculum, prototype review, hubin, PPDB→SPMB, chatbot). **No legacy features are removed** — everything is carried over, partially restructured/strengthened, with new modules added per findings.

---

## 0. Summary of Changes from v1.0 → v2.0

| Finding / Feedback | Core Problem | v2.0 Action |
|---|---|---|
| Curriculum data exists but is not communicated | Content is "buried", no dedicated page | New module **MokletKurikulum** |
| Curriculum info is out of date | No sync/versioning mechanism | Versioning system + Curriculum Admin role |
| Prototype feedback: Pak Yniko's career site, major timelines, career & salary expectations | Study programs are not explained down to career outcomes | New module **MokletKarir** (3 sub-features) |
| Hubin: competitions, industry, job vacancies, scholarships | v1 "Hubungan Industri" module is only a partner directory, narrow | Module **MokletHubin** expanded to 4 sub-features |
| PPDB needs re-evaluation | The old registration flow may not be relevant to the rebuild | Simplified into a **landing page** + renamed **MokletSPMB** |
| Parents need access | ~~Parent portal~~ — registration & tracking lives in the foundation's (yayasan) system, not this website | **Cancelled** (see note §3.7) |
| Need a feedback loop | No structured way to collect user feedback | New feature **MokletUlasan** |
| Chatbot | No fast automated response service yet | New feature **MokletBot** |
| Unique feature names may disrupt navigation | `Moklet[Nama]` is not self-explanatory for casual visitors | Split into 2 layers: **Internal Name** vs **Navigation Label (UI)** — see §1 |

---

## 1. Internal Name vs Navigation Label (UI) Mapping

Principle: `Moklet[Nama]` stays as the **internal name** (documentation, code, SIGAP ecosystem branding), but is **not** shown verbatim in the navigation menu. Visitors see descriptive labels in plain language, so they don't have to "learn" internal terms first to understand menu contents.

| Internal Name (dev/docs) | Navigation / UI Label (seen by visitors) |
|---|---|
| MokletKurikulum | Kurikulum (Curriculum) |
| MokletKarir | Karir & Prospek Kerja (Careers & Job Prospects) |
| MokletTimeline | Timeline Belajar (Learning Timeline) — sub-section of major pages |
| MokletProspek | Prospek Karier & Gaji (Career Prospects & Salary) — sub-section of major pages |
| MokletHubin | Hubungan Industri (Industry Relations) |
| MokletLomba | Info Lomba (Competition Info) |
| MokletLoker | Info Lowongan Kerja (Job Vacancies) |
| MokletBeasiswa | Info Beasiswa (Scholarship Info) |
| MokletSPMB | SPMB (New Student Admission) |
| MokletBot | Chat / Tanya Cepat (Chat / Quick Questions) |
| MokletUlasan | Beri Masukan / Feedback (Give Feedback) |

> "Moklet"/"SIGAP" branding can still be shown to the public separately — e.g. in the footer ("Powered by Moklet SIGAP") or on an "About the System" page — not as per-item menu text.

---

## 2. Sitemap & Navigation v2.0
*(labels below are the UI labels visitors see; internal names are in parentheses for the dev team)*

- **Beranda (Home)**
- **Tentang Kami (About Us)**
  - Profil & Sejarah, Visi & Misi, Struktur Organisasi, Akreditasi, Fasilitas, Prestasi, Learning Culture
- **Program & Kurikulum** *(combined, strengthened)*
  - Jurusan (major profiles + "Karir & Prospek Kerja" [MokletKarir]: learning timeline, expertise, career prospects, salary ranges)
  - "Kurikulum" [MokletKurikulum] (active curriculum per major, version & academic year)
  - Ekstrakurikuler, Program TS, ICP, CCP, Trial Class
- **Hubungan Industri** [MokletHubin]
  - Direktori Mitra Industri (Industry Partner Directory)
  - "Info Lomba" [MokletLomba]
  - "Info Lowongan Kerja" [MokletLoker]
  - "Info Beasiswa" [MokletBeasiswa]
- **Alumni**
  - Profil Sebaran (Distribution Profile), Testimoni
- **Informasi (Information)**
  - Berita, Pengumuman Kelulusan, Penerapan K3, Akomodasi
- **Hubungi Kami (Contact Us)**
  - FAQ, Kotak Pertanyaan, Service Desk, "Chat / Tanya Cepat" [MokletBot]
  - "Beri Masukan" [MokletUlasan]
- **SPMB** [MokletSPMB] *(formerly PPDB)*
  - Landing page: Info Gelombang (Batch Info), Alur & Syarat Pendaftaran (Flow & Requirements)
  - CTA → redirect to the Foundation's official registration portal

---

## 3. Feature Detail per Module

### 3.1 Public Information Portal *(existing, kept)*
- Program & Major Catalog
- Extracurricular Catalog
- Facilities & Achievements Showcase
- Industry Relations Directory

### 3.2 MokletKurikulum *(new — UI label: "Kurikulum")*
**Problem addressed:** curriculum data exists internally but is not communicated publicly, and the website version is often outdated.
- Curriculum page per major (subject structure, lesson hours, vocational competencies)
- **Curriculum versioning**: active academic-year/edition label + last update date
- Dedicated admin panel (role **Admin Kurikulum**) so content updates don't depend on developers — website info always in sync with official curriculum documents
- (Optional phase 2) Archive of previous curriculum versions for transparency

### 3.3 MokletKarir *(new — UI label: "Karir & Prospek Kerja")*
**Problem addressed:** prospective students/parents don't know what a major will "become" — they need a connection to the real working world.

| Sub-feature (internal name) | UI Label | Description |
|---|---|---|
| MokletTimeline | Timeline Belajar | Per-major learning timeline (roadmap per semester/grade: what material is learned when) |
| MokletProspek | Prospek Karier & Gaji | Explanation of the expertise gained, possible career paths, typical hiring target companies, and salary ranges (rates) |
| Career Portal Integration | (link/button on major pages, no special label) | Integration with Pak Yniko's career website (via official link or API if available) as a reference for further vacancies/careers |

### 3.4 MokletHubin *(expansion of v1 "Direktori Hubungan Industri" — UI label: "Hubungan Industri")*
**Problem addressed:** v1 hubin only showed a partner list; feedback asked for broader coverage.

| Sub-feature (internal name) | UI Label | Description |
|---|---|---|
| — | Direktori Industri | Industry partner list & relations (existing, retained) |
| MokletLomba | Info Lomba | Listing of relevant competitions for students (internal & external) |
| MokletLoker | Info Lowongan Kerja | Job vacancy board from industry partners, filterable per major |
| MokletBeasiswa | Info Beasiswa | Listing of scholarship info (from school, government, or industry partners) |

### 3.5 News & Announcement Content Management *(existing, kept)*
- News Articles
- Graduation Announcements
- K3 & Accommodation Management

### 3.6 Alumni Module *(existing, kept)*
- Alumni Profile & Distribution (with analytic charts)
- Testimonials

### 3.7 MokletSPMB *(rebrand from PPDB + simplified into a landing page — UI label: "SPMB")*
**Problem addressed:** the term PPDB is replaced with SPMB; the registration flow was re-evaluated — actual registration (form, status tracking, etc.) is already handled by a separate system owned by the **Foundation (Yayasan)**, so the school website only acts as a **landing page / initial information**.
- Batch info, flow, and registration requirements (existing, content stays — informational form, not an active form)
- CTA/button that redirects users to the Foundation's official registration portal
- ~~Online registration connected to backend~~ — **removed from scope**, because the registration form is not this website's responsibility
- ~~MokletOrtu (parent portal)~~ — **cancelled**. Since registration & tracking happen in the foundation's system, parent access needs are automatically covered there, not on the school website

> **Implication for §3.10 (Admin Dashboard):** the **Admin SPMB** role only manages landing page content (batch info, requirements, redirect link) — no need to manage registrant data, since that data lives in the foundation's system.

### 3.8 Interactive Services & Support
- Inquiry Box *(existing)*
- Interactive FAQ *(existing)*
- Service Desk *(existing)*
- **MokletBot** *(new — UI label: "Chat / Tanya Cepat")*: chatbot to answer common questions (FAQ, SPMB flow, major info) automatically 24/7, with escalation to Service Desk/Admin when out of scope
- **MokletUlasan** *(new — UI label: "Beri Masukan")*: structured feedback module — can be placed at key touchpoints (after SPMB submission, after reading an article, etc.) so the school has user satisfaction data, not just complaints via the inquiry box

### 3.9 External System Integration *(existing, kept)*
- Events & Trial Class: Mexpo.id API integration for automated Trial Class

### 3.10 Admin Management System (Backend & Dashboard) *(existing, roles added)*
- **RBAC** — existing roles: Super Admin, Admin Konten, Admin PPDB→**Admin SPMB**, Admin Support
- **New roles:**
  - **Admin Kurikulum** — manages MokletKurikulum content
  - **Admin Hubin** — manages MokletLomba, MokletLoker, MokletBeasiswa
- JWT authentication + password encryption (existing, kept)
- WYSIWYG Content Editor (existing, kept)

---

## 4. Implementation Notes
- All new features follow the **Moklet[NamaUnik]** prefix as an **internal name only**, consistent with the overall **SIGAP** theme (Sistem Informasi Gerbang Pendidikan — Education Gateway Information System) — see UI label mapping in §1.
- Modules needing further decisions before development: the form of integration with Pak Yniko's career website (link vs API), and the exact link/endpoint of the Foundation's registration portal for the **MokletSPMB** redirect.
- Recommended MVP priority: MokletKurikulum, MokletSPMB (landing page), MokletKarir — because they directly answer the strongest validation complaints before supporting features (MokletBot, MokletUlasan, MokletHubin) are added in later phases.
