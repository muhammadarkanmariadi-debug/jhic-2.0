# SKILL.md - JHIC 2.0 (SMK Telkom Malang)

Dokumen ini berisi informasi fundamental mengenai arsitektur, implementasi library, struktur data, daftar halaman (routing), daftar kebutuhan API, serta sistem _role_ yang direncanakan untuk pengembangan JHIC 2.0 (SMK Telkom Malang).

---

## 1. Implementasi Library

Proyek ini dipisah menjadi dua bagian utama: **Frontend** dan **Backend**.

### Frontend (`jhic2.0-frontend`)
Frontend dibangun menggunakan **Next.js (App Router)** dengan pendekatan komponen yang modular.
- **Framework Utama:** Next.js `16.2.12` dengan React `19.2.4` dan React DOM `19.2.4`.
- **Styling:** Tailwind CSS `v4` (beserta `@tailwindcss/postcss`). Pendekatan _utility-first_ untuk mendesain UI secara cepat dan konsisten.
- **Ikonografi:** `lucide-react` untuk ikon SVG yang ringan dan mudah disesuaikan.
- **Form & Validasi:**
  - `react-hook-form` untuk manajemen _state_ form yang efisien.
  - `zod` untuk skema validasi tipe data secara _strict_.
  - `@hookform/resolvers` sebagai jembatan antara react-hook-form dan zod.
- **Visualisasi Data:** `recharts` digunakan untuk membuat grafik dan chart interaktif (misalnya di halaman profil sebaran alumni atau analitik).
- **Content Editor / WYSIWYG:** Direkomendasikan menggunakan `react-quill` atau `tiptap` sebagai HTML editor interaktif untuk keperluan copywriting Berita dan Pengumuman pada _dashboard_ Admin.

### Backend (`jhic2.0-backend`)
Backend merupakan aplikasi **Node.js** berbasis RESTful API.
- **Framework Utama:** `express` `^5.2.1` sebagai web server.
- **ORM & Database:** `prisma` dan `@prisma/client` untuk Object-Relational Mapping (ORM) yang tangguh dan terhubung secara _type-safe_ dengan database SQL.
- **Keamanan & Autentikasi:** 
  - `bcryptjs` untuk *hashing* kata sandi.
  - `cors` untuk menangani *Cross-Origin Resource Sharing*.
  - `jsonwebtoken` (JWT) untuk mengelola sesi login yang _stateless_.
- **Otorisasi & RBAC (Role-Based Access Control):** Dapat diimplementasikan menggunakan _middleware_ kustom di Express dipadukan dengan pustaka `@casl/ability` untuk manajemen _permission_ pengguna (contoh: membedakan akses Super Admin dan Admin Konten).
- **Environment:** `dotenv` untuk mengelola konfigurasi berbasis _environment_.

---

## 2. Struktur Direktori Frontend (Feature-Sliced Design)

Frontend menggunakan arsitektur **Feature-Sliced Design (FSD)** di dalam folder `src/` untuk memastikan skalabilitas dan pemisahan logika yang jelas:

- **`app/`**: Konfigurasi Next.js App Router, routing halaman, dan layout global.
- **`features/`**: Modul fungsional yang berinteraksi langsung dengan _user scenarios_ (contoh: interaksi spesifik pada form pendaftaran PPDB).
- **`shared/`**: Elemen fundamental yang bisa dipakai berulang, seperti UI *components* (Button, Card), *types*, utilitas, dan konstanta global.
- **`entities/`**: Entitas bisnis dan domain utama (misal: entitas Berita, Guru, Alumni) beserta komponen UI atomik yang melekat pada entitas tersebut.
- **`services/`**: Lapisan untuk *fetching* API, integrasi data, dan mock/dummy data.
- **`configs/`**: Konfigurasi tingkat aplikasi yang bersifat global.
- **`templates/`**: Pola komposisi layout halaman yang _reusable_.
- **`widgets/`**: Blok UI kompleks dan mandiri (seperti Header, Footer, Hero, Grid Berita) yang menggabungkan berbagai entitas dan komponen UI.
- **`stores/`**: Tempat pengelolaan *global state* (misalnya Redux atau Zustand).

---

## 3. Kontrol Data dan Tipe (Types)

Tipe data terpusat di `jhic2.0-frontend/src/shared/types/index.ts` (sebelumnya di `types/`) untuk memastikan konsistensi _type-safety_ menggunakan TypeScript. Beberapa struktur inti meliputi:

- **`NewsItem`**: Berita & Pengumuman (`id`, `title`, `desc`, `image`, `date`, `category`, `author`, `content`).
- **`EkskulItem`**: Profil Ekstrakurikuler (`id`, `title`, `category`, `img`, `desc`, `schedule`, `coach`).
- **`FasilitasItem`**: Fasilitas Sekolah (`id`, `title`, `category`, `img`, `desc`, `fullDesc`, `capacity`, `isFeatured`).
- **`PrestasiItem`**: Data Prestasi Siswa (`id`, `title`, `category`, `level`, `img`, `winnerName`, `date`).
- **`TestimonialItem`**: Testimoni Alumni/Siswa (`name`, `role`, `content`, `avatar`).
- **`PartnerItem`**: Mitra / Hubungan Industri (`name`, `src`, `url`).
- **`FAQItem`**: Daftar Pertanyaan (`question`, `answer`, `category`).
- **`ServiceDeskItem`**: Status layanan IT sekolah (`title`, `desc`, `status`, `href`).
- **`JurusanData` & `JurusanDetail`**: Data jurusan sekolah dan profilnya (`code`, `title`, `description`, `features`, `careerProspects`).
- **`TeacherProfile`**: Profil Guru & Staf (`name`, `position`, `image`).

---

## 4. List Halaman dan Navigasi

Routing aplikasi Frontend diatur dalam arsitektur App Router (`app/`). Sebagian besar halaman utama dikelompokkan ke dalam route group `(main)`.

- **`/`** (Beranda)
- **`/(main)/tentang-kami`**
  - `/tentang-kami/profil-sejarah`
  - `/tentang-kami/visi-misi`
  - `/tentang-kami/struktur-organisasi`
  - `/tentang-kami/akreditasi`
  - `/tentang-kami/hubungan-industri`
  - `/tentang-kami/fasilitas`
  - `/tentang-kami/prestasi`
  - `/tentang-kami/learning-culture`
- **`/(main)/program`**
  - `/program/jurusan`
  - `/program/ekstrakurikuler`
  - `/program/program-ts`
  - `/program/icp` (International Class Program)
  - `/program/ccp`
- **`/(main)/alumni`**
  - `/alumni/profil-sebaran`
  - `/alumni/testimoni`
- **`/(main)/informasi`**
  - `/informasi/berita`
  - `/informasi/pengumuman-kelulusan`
  - `/informasi/penerapan-k3`
  - `/informasi/akomodasi` (Panduan biaya hidup & kos)
- **`/(main)/hubungi-kami`**
  - `/hubungi-kami/faq`
  - `/hubungi-kami/kotak-pertanyaan`
  - `/hubungi-kami/service-desk`
- **`/ppdb`** (Informasi dan Pendaftaran PPDB)

---

## 5. List API yang Dibutuhkan

Berdasarkan struktur data dan antarmuka saat ini, berikut adalah Endpoint API yang akan dibutuhkan untuk integrasi antara Frontend dan Backend.

### Public API (Tanpa Autentikasi)
- **Berita & Pengumuman:** 
  - `GET /api/news` (List berita)
  - `GET /api/news/:id` (Detail berita)
- **Fasilitas & Prestasi:** 
  - `GET /api/facilities` 
  - `GET /api/achievements`
- **Program & Jurusan:** 
  - `GET /api/programs`
  - `GET /api/extracurriculars`
- **Alumni & Hubungan Industri:** 
  - `GET /api/testimonials`
  - `GET /api/partners`
- **Hubungi Kami & Interaksi:**
  - `GET /api/faq`
  - `GET /api/service-desk/status`
  - `POST /api/inquiries` (Kirim kotak pertanyaan)
- **PPDB:**
  - `POST /api/ppdb/register` (Pendaftaran PPDB)

### Admin API (Membutuhkan Autentikasi / JWT)
- **Autentikasi:**
  - `POST /api/auth/login`
  - `POST /api/auth/logout`
  - `GET /api/auth/me`
- **CRUD Operations:** Semua entitas publik di atas akan memiliki rute `POST`, `PUT`, `DELETE` (misal: `POST /api/admin/news`, `DELETE /api/admin/facilities/:id`).

---

## 6. List Sistem Role untuk Pengembangan Kedepan

Sistem backend menggunakan `prisma` sebagai ORM yang dapat dioptimalkan dengan skema otorisasi berbasis _Role-Based Access Control (RBAC)_. Berikut _role_ yang direkomendasikan:

1. **Super Admin**
   - **Hak Akses:** Penuh (All permissions).
   - **Tugas:** Manajemen _user_ admin lain, konfigurasi sistem dasar, akses ke semua modul.
2. **Admin Konten (Content Editor)**
   - **Hak Akses:** CRUD pada modul informasi.
   - **Tugas:** Mempublikasi dan mengedit Berita, Pengumuman, Prestasi, dan data Ekstrakurikuler.
3. **Admin PPDB**
   - **Hak Akses:** Akses khusus ke modul PPDB.
   - **Tugas:** Memverifikasi pendaftar baru, melihat status pembayaran, dan mengelola gelombang pendaftaran.
4. **Admin Support (Hubungi Kami)**
   - **Hak Akses:** Baca/Balas ke Kotak Pertanyaan & Service Desk.
   - **Tugas:** Menjawab keluhan pengguna, memonitor ketersediaan sistem (_Service Desk_).
5. **Siswa / Alumni (Ekstensi Masa Depan)**
   - **Hak Akses:** Portal pribadi (jika dikembangkan menjadi SIS - Student Information System).
   - **Tugas:** Update data sebaran alumni, melihat rekap nilai, pendaftaran ulang.

---

## 7. Integrasi Eksternal (Data Contracts)

Aplikasi ini mengonsumsi API pihak ketiga untuk fitur-fitur tertentu. Berikut adalah kontrak data yang diterapkan untuk menjamin integrasi yang mulus (Type-Safe).

### Mexpo.id Event API (Trial Class)
Untuk menampilkan daftar Trial Class, frontend menggunakan data dari platform `mexpo.id` (Management Expo). Struktur datanya direpresentasikan melalui `MexpoEvent` interface:

```typescript
export interface UserEventRole {
  role: string;
  status: string;
  user_id: string;
  created_by: string;
  updated_by: string;
  verify_at: Date | string;
}

export interface MexpoEvent {
  id: string | number;
  name: string;
  location: string;
  description: string;
  start_date: string;
  end_date: string;
  quota: number;
  organizer_name: string;
  created_by: string;
  updated_by: string;
  photo: string;
  registration_start: string;
  registration_deadline: string;
  approved_by: string;
  userEventRoles?: UserEventRole[];
}
```

- **Penggunaan:** Digunakan di halaman `/program/trial-class`.
- **Integrasi Frontend:** *Mock data* disediakan di `services/trialClassData.ts`. Di sisi produksi, data ini akan diambil (fetch) secara asinkron dari endpoint API `mexpo.id/events`.

---

_Dokumen ini akan terus diperbarui seiring dengan berjalannya proses iterasi pengembangan aplikasi._
