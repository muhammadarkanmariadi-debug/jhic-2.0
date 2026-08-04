# MOKLET SIGAP — Sitemap & Feature Restructuring (v2.0)
**Education Gateway Information System — SMK Telkom Malang**

> This document revises the v1.0 feature structure based on validation/feedback results (curriculum, prototype review, hubin, PPDB→SPMB, chatbot). **No legacy features are removed** — everything is carried over, partially restructured/strengthened, with new modules added per findings.
> **Note on Terminology**: This version uses "Konsentrasi Keahlian" (and "Profil Konsentrasi Keahlian") replacing the former terms "Jurusan" or "Major", adhering to the official hierarchy: Program Keahlian → Kompetensi Keahlian → Konsentrasi Keahlian.

---

## 0. Summary of Changes from v1.0 → v2.0

| Finding / Feedback | Core Problem | v2.0 Action |
|---|---|---|
| Curriculum data exists but is not communicated | Content is "buried", no dedicated page | New module **MokletKurikulum** |
| Curriculum info is out of date | No sync/versioning mechanism | Versioning system + Curriculum Admin role |
| Prototype feedback: Pak Yniko's career site, major timelines, career & salary expectations | Study programs are not explained down to career outcomes | New module **MokletKarir** (3 sub-features) |
| Hubin: competitions, industry, job vacancies, scholarships | v1 "Hubungan Industri" module is only a partner directory, narrow | Module **MokletHubin** expanded |
| PPDB needs re-evaluation | The old registration flow may not be relevant to the rebuild | Simplified into a **landing page** + renamed **MokletSPMB** |
| Parents need access | ~~Parent portal~~ — registration & tracking lives in the foundation's (yayasan) system, not this website | **Cancelled** (see note §3.9) |
| Need a feedback loop | No structured way to collect user feedback | New feature **MokletUlasan** |
| Chatbot | No fast automated response service yet | New feature **MokletBot** |
| Unique feature names may disrupt navigation | `Moklet[Nama]` is not self-explanatory for casual visitors | Split into 2 layers: **Internal Name** vs **Navigation Label (UI)** — see §1 |
| Structural flattening required | Some menus are too nested and hard to maintain | Restructured "Program" to flat siblings; separated Information, Accommodation, Organizations, etc. |

---

## 1. Internal Name vs Navigation Label (UI) Mapping

Principle: `Moklet[Nama]` stays as the **internal name** (documentation, code, SIGAP ecosystem branding), but is **not** shown verbatim in the navigation menu. Visitors see plain language labels.

| Internal Name (dev/docs) | Navigation / UI Label (seen by visitors) |
|---|---|
| MokletKurikulum | Kurikulum (Curriculum) |
| MokletKarir | Karir & Prospek Kerja (Careers & Job Prospects) |
| MokletTimeline | Timeline Belajar (Learning Timeline) |
| MokletProspek | Prospek Karier & Gaji (Career Prospects & Salary) |
| MokletHubin | Hubungan Industri (Industry Relations) |
| MokletLomba | Info Lomba (Competition Info) |
| MokletLoker | Info Lowongan Kerja (Job Vacancies) |
| MokletBeasiswa | Info Beasiswa (Scholarship Info) |
| MokletSPMB | SPMB (New Student Admission) |
| MokletBot | Chat / Tanya Cepat (Chat / Quick Questions) |
| MokletUlasan | Beri Masukan / Feedback (Give Feedback) |

---

## 2. Sitemap & Navigation v2.0
*(labels below are the UI labels visitors see; internal names are in parentheses for the dev team)*

- **Beranda (Home)**
- **Tentang Kami (About Us)**
  - Profil & Sejarah, Visi & Misi, Struktur Organisasi, Profil Guru, Akreditasi, Fasilitas, Prestasi, Learning Culture
- **Program**
  - Profil Konsentrasi Keahlian (formerly Jurusan)
  - Program ICP
  - Program Reguler
  - Program Kokurikuler (Dynamic name, editable per year)
  - Program Sertifikasi
- **Hubungan Industri** [MokletHubin]
  - Direktori Mitra Industri (Industry Partner Directory)
  - "Info Lowongan Kerja" [MokletLoker]
  - "Info Beasiswa" [MokletBeasiswa]
- **Ekstrakurikuler**
  - Daftar Ekstrakurikuler
- **Organisasi**
  - Daftar Sub-organisasi & CTA ke Moklet Org
- **Alumni**
  - Profil Sebaran (Distribution Profile), Testimoni
- **Informasi (Information)**
  - Berita, Pengumuman Kelulusan, Cek Status Kelulusan, Brosur/Dokumen Unduhan, Info Lomba [MokletLomba]
- **Akomodasi (Accommodation)**
  - Rekomendasi Kos, Tempat Makan/Catering, Kalkulasi Biaya Hidup
- **Trial Class**
  - Hubungan ke Portofolio Karya Siswa
- **Hubungi Kami (Contact Us)**
  - FAQ, Kotak Pertanyaan, Service Desk, "Chat / Tanya Cepat" [MokletBot], "Beri Masukan" [MokletUlasan]
- **SPMB** [MokletSPMB] *(formerly PPDB)*
  - Landing page & CTA redirect

---

## 3. Feature Detail per Module

### 3.1 Profil Guru & Staf (MokletGuru)
- **Display**: Individual profile cards, not an org chart. Layout takes reference from https://smktelkom-sda.sch.id/profil-guru.
- **Categorization**: Separates productive teachers from non-productive/staff, and hierarchical levels (Principal, VP/Waka, standard teachers).
- **Maintenance**: Updateable by division admins (RBAC). Position field controls grouping/sorting within the profile card grid.

### 3.2 Profil Konsentrasi Keahlian & MokletKarir
- **Partner Sinkronisasi Kurikulum**: Tied to the specific academic year for versioning. Used for curriculum sync, separate from general recruitment partners.
- **Expertise & Sertifikasi**: Defined and CRUD-able per Konsentrasi Keahlian.
- **MokletTimeline & MokletProspek**: Sub-features explaining the learning journey and career outcomes.

### 3.3 Program Pages (ICP vs Reguler vs Kokurikuler vs Sertifikasi)
- **ICP and Reguler Templates**: Both use the **exact same UI template component** consisting of Program Description, Learning Journey (Grades 10/11/12), and Alumni Profile (Profil Lulusan).
  - *Differences*: ICP includes an additional section rendering all expertise (full stack + mobile) and international cooperation details. Reguler explicitly shows choice of 1 expertise.
- **Kokurikuler**: The name field is editable by admins as it changes yearly (e.g., formerly P5 / texperience).
- **Sertifikasi**: Tailored for students aiming for abroad work/study (vocational + language certification).
- **Program Unggulan**: 
  - **CCP**: Exists as a standalone page.
  - **TS 2.1**: `[BLOCKED]` - Waiting for confirmation whether this remains a standalone page or is split into expertise sections.

### 3.4 MokletKurikulum *(UI label: "Kurikulum")*
- Curriculum page per Konsentrasi Keahlian with versioning (academic year).
- Admin Kurikulum role manages content.

### 3.5 MokletHubin *(UI label: "Hubungan Industri")*
- Includes Industry Partner Directory, Job Vacancies, and Scholarships. (Note: Info Lomba is moved to Information).

### 3.6 Informasi & Akomodasi (New Standalone Menus)
- **Informasi**: Operational details decoupled from the Program menu. Includes News, Graduation Announcements, Pass Status Check, Brochures, and Competition Info (Info Lomba).
- **Akomodasi**: Helps prospective students map out living costs with Kos recommendations, food spots, and an estimated cost calculator.

### 3.7 Ekstrakurikuler & Organisasi
- **Ekstrakurikuler**: Purely lists extracurricular activities. (Former Moklet Org CTA has been removed from here).
- **Organisasi**: Details student organizations and explicitly hosts the CTA redirecting to the external Moklet Org portal.

### 3.8 Alumni & Trial Class
- **Alumni**: Distribution profiles and testimonials (update planned for testimonials).
- **Trial Class**: Standalone menu connected to the student portfolio mix-pool. 

### 3.9 MokletSPMB *(UI label: "SPMB")*
- A landing page showing batch info and flow, acting as a gateway.
- Contains a redirect CTA to the official foundation (Yayasan) registration portal.
- Registration forms and Parent Portal (MokletOrtu) are **out of scope** here.

### 3.10 Interactive Services (MokletBot & MokletUlasan)
- **MokletBot**: 24/7 automated FAQ responder with escalation to Service Desk.
- **MokletUlasan**: Structured feedback mechanism across touchpoints.

### 3.11 Admin Management System (Backend & Dashboard)
- **RBAC Model (Role-Based Access Control)**: Divided **per division** to prevent centralized bottlenecks and unauthorized edits.
  - Examples: Admin Kurikulum, Admin Hubin, Admin Kesiswaan (Ekstra/Organisasi), Admin Humas (Akomodasi/Informasi/Guru/Partner), Admin SPMB, Super Admin.
  - Log changes per role (optional phase 2 audit trail).
- JWT auth, encryption, and WYSIWYG editors remain active.
- **Content editors:**
  - **Structured content** (Program Umum and other curriculum content, e.g. `ProgramUmumProgram.sections`): edited via a **structured block editor** — a form per section type (paragraph, checklist, cards, tracks, steps, gallery, table, accordion, testimonials, badges, partners) with **plain-text fields**. Stored as structured JSON; no raw HTML → no sanitization surface.
  - **Free-form HTML content** (News / Announcements): edited via a **WYSIWYG HTML editor** (`react-quill` / `tiptap`), sanitized before storing/serving (XSS).
