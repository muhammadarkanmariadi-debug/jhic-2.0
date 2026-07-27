# JHIC 2.0 — Sistem Informasi & Portal Web SMK Telkom Malang

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Environment-Node.js%2020-339933.svg?logo=node.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Frontend-Next.js%2016-000000.svg?logo=next.js&logoColor=white)
![Express](https://img.shields.io/badge/Backend-Express.js-000000.svg?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748.svg?logo=prisma&logoColor=white)

**Platform Portal Web Modern, Sistem PPDB, dan Manajemen Konten Akademik Terpusat untuk Lingkungan Sekolah Vokasi**

</div>

---

## 📑 Table of Contents (Daftar Isi)

- [BAB I — Pendahuluan (Non-Teknis)](#bab-i---pendahuluan-non-teknis)
  - [1.1 Latar Belakang](#11-latar-belakang)
  - [1.2 Problem Statement](#12-problem-statement)
  - [1.3 Rumusan Masalah (Research Question)](#13-rumusan-masalah-research-question)
  - [1.4 Mengapa Proyek Ini Dibuat (Why This Project)](#14-mengapa-proyek-ini-dibuat-why-this-project)
- [BAB II — Tentang JHIC 2.0 (Non-Teknis)](#bab-ii---tentang-jhic-20-non-teknis)
  - [2.1 Deskripsi Produk & Fungsi Utama](#21-deskripsi-produk--fungsi-utama)
  - [2.2 Masalah yang Diselesaikan](#22-masalah-yang-diselesaikan)
  - [2.3 Fitur Utama](#23-fitur-utama)
- [BAB III — Alur Sistem & Proses Bisnis (Semi-Teknis)](#bab-iii---alur-sistem--proses-bisnis-semi-teknis)
  - [3.1 Gambaran Umum Alur](#31-gambaran-umum-alur)
  - [3.2 Diagram Alur Sistem Terpusat](#32-diagram-alur-sistem-terpusat)
  - [3.3 Manajemen Konten (CMS Lifecycle)](#33-manajemen-konten-cms-lifecycle)
- [BAB IV — Role & Hak Akses Pengguna (Semi-Teknis)](#bab-iv---role--hak-akses-pengguna-semi-teknis)
  - [4.1 Daftar Role](#41-daftar-role)
  - [4.2 Matriks Hak Akses (Role Permission Matrix)](#42-matriks-hak-akses-role-permission-matrix)
- [BAB V — Arsitektur Teknis (Teknis)](#bab-v---arsitektur-teknis-teknis)
  - [4.1 Gambaran Arsitektur](#51-gambaran-arsitektur)
  - [5.2 Tech Stack](#52-tech-stack)
  - [5.3 Struktur Direktori Repository](#53-struktur-direktori-repository)
- [BAB VI — Instalasi & Menjalankan Aplikasi (Teknis)](#bab-vi---instalasi--menjalankan-aplikasi-teknis)
  - [6.1 Prasyarat](#61-prasyarat)
  - [6.2 Langkah Instalasi & Deployment Local](#62-langkah-instalasi--deployment-local)
  - [6.3 Endpoint Layanan](#63-endpoint-layanan)
- [BAB VII — Studi Kasus (Non-Teknis)](#bab-vii---studi-kasus-non-teknis)
  - [7.1 Profil Pengguna](#71-profil-pengguna)
  - [7.2 Masalah Sistem Lama](#72-masalah-sistem-lama)
  - [7.3 Dampak Implementasi JHIC 2.0](#73-dampak-implementasi-jhic-20)
- [BAB VIII — Rencana Pengembangan / Roadmap (Non-Teknis)](#bab-viii---rencana-pengembangan--roadmap-non-teknis)
- [BAB IX — Lisensi & Kontribusi (Teknis)](#bab-ix---lisensi--kontribusi-teknis)

---

## BAB I — Pendahuluan (Non-Teknis)

### 1.1 Latar Belakang
Sekolah vokasi unggulan di Indonesia, khususnya yang berbasis teknologi, dituntut untuk selalu tampil terdepan dalam hal digitalisasi layanan. Publik dan calon peserta didik mengharapkan sumber informasi akademik yang kredibel, mudah diakses, dan interaktif. Namun, banyak institusi pendidikan yang masih mengandalkan website statis konvensional yang minim pembaruan, sulit dikelola oleh staf non-IT, dan tidak terintegrasi secara langsung dengan sistem pendaftaran siswa baru (PPDB).

### 1.2 Problem Statement
Website sekolah pada umumnya seringkali terpisah dari sistem operasional lainnya. Publikasi berita kegiatan (*extracurricular*, prestasi), manajemen FAQ, dan pelacakan sebaran alumni masih dilakukan secara sporadis. Hal ini mengakibatkan informasi menjadi usang, tingkat keterlibatan orang tua/calon siswa rendah, dan proses birokrasi (seperti bertanya melalui *Service Desk* atau mendaftar sekolah) memakan waktu panjang.

### 1.3 Rumusan Masalah (Research Question)
> *"Bagaimana cara membangun platform digital terpusat yang dapat mewadahi kebutuhan informasi interaktif publik sekaligus menyederhanakan alur pendaftaran dan pengelolaan konten secara efisien oleh staf akademik?"*

### 1.4 Mengapa Proyek Ini Dibuat (Why This Project)
Proyek **JHIC 2.0** (Moklet Web Portal) dikembangkan untuk memberikan wajah baru pada sistem informasi SMK Telkom Malang. Kami mendesain sistem yang:
1. **Dinamis & Estetik:** Menggunakan desain antarmuka modern yang memukau (*wow factor*) untuk audiens Gen Z dan milenial.
2. **Terpusat (All-in-One):** Menggabungkan portal berita, profil jurusan, tes minat bakat, dan registrasi PPDB ke dalam satu gerbang.
3. **Mudah Dikelola (CMS-Driven):** Memberdayakan staf sekolah (Humas) untuk memperbarui konten tanpa campur tangan *developer* secara terus-menerus.

---

## BAB II — Tentang JHIC 2.0 (Non-Teknis)

### 2.1 Deskripsi Produk & Fungsi Utama
**JHIC 2.0** adalah sistem manajemen konten dan portal layanan akademik sekolah yang dibangun dengan arsitektur web modern (*Next.js App Router*). Platform ini bertindak sebagai perwajahan digital institusi sekaligus jembatan interaksi antara sekolah, siswa, alumni, dan dunia industri.

### 2.2 Masalah yang Diselesaikan
| Permasalahan | Solusi dari JHIC 2.0 |
| :--- | :--- |
| **Penyampaian Info Lambat & Statis** | Menyediakan modul **Berita & Pengumuman** *real-time* dengan editor teks dinamis untuk Humas. |
| **Bingung Pilih Jurusan (Calon Siswa)** | Menyediakan fitur interaktif **Tes Minat & Bakat** yang memetakan kecenderungan calon siswa secara instan ke jurusan yang tepat (RPL, TKJ, dll). |
| **Pendaftaran PPDB Terpisah** | Integrasi modul CTA dan form PPDB langsung di dalam portal, membuat alur konversi (dari pembaca menjadi pendaftar) sangat mulus. |

### 2.3 Fitur Utama
1. **Manajemen Berita & Publikasi:** Dilengkapi *HTML Editor* terintegrasi untuk menyusun berita, galeri fasilitas, dan capaian prestasi.
2. **Katalog Mitra & Hubungan Industri:** Database interaktif untuk meninjau mitra industri sekolah (dilengkapi *search & filter*).
3. **Pemetaan Alumni Cerdas:** Menampilkan statistik sebaran alumni yang komunikatif dan ramah-orang-tua (*parent-friendly*).
4. **Tes Minat Bakat Interaktif:** Asisten kuis pintar yang membantu calon pendaftar menemukan jurusan yang paling cocok dengan _passion_ mereka.
5. **Akses Informasi Akomodasi:** Panduan biaya hidup & rekomendasi rumah kos untuk membantu calon siswa luar daerah.

---

## BAB III — Alur Sistem & Proses Bisnis (Semi-Teknis)

### 3.1 Gambaran Umum Alur
Pengunjung web dapat mengakses seluruh informasi publik secara leluasa. Namun, di balik layar, sistem memiliki alur tata kelola konten (CMS) dan penerimaan data form yang terstruktur. Segala *input* dari luar (seperti Kotak Pertanyaan atau Registrasi PPDB) akan masuk ke *dashboard* admin untuk diproses.

### 3.2 Diagram Alur Sistem Terpusat
1. **Visitor Flow:** Pengunjung (Calon Siswa) ➔ Melihat Profil & Berita ➔ Mengikuti Tes Minat Bakat ➔ Diarahkan mendaftar ke portal PPDB.
2. **Content Flow:** Humas/Admin ➔ Login Dashboard ➔ Menulis Draft Berita (WYSIWYG) ➔ Publikasi ➔ Tampil di Portal Publik.
3. **Support Flow:** Orang Tua ➔ Mengisi form Kotak Pertanyaan / FAQ ➔ Admin Support menerima notifikasi ➔ Membalas langsung via sistem.

### 3.3 Manajemen Konten (CMS Lifecycle)
Setiap konten (seperti Pengumuman Kelulusan atau Berita) melewati fase:
- `Draft` : Disimpan sementara, belum terlihat publik.
- `Published` : Tampil di halaman utama.
- `Archived` : Disembunyikan dari halaman utama tetapi tetap ada di database untuk keperluan historis.

---

## BAB IV — Role & Hak Akses Pengguna (Semi-Teknis)

### 4.1 Daftar Role
Sistem backend dirancang (menggunakan RBAC) dengan pembagian peran sebagai berikut:
1. **Super Admin**: Akses absolut terhadap seluruh *setting* portal, manajemen *user*, dan hak akses.
2. **Admin Konten (Humas)**: Hanya memiliki akses CRUD untuk modul Artikel/Berita, Prestasi, Ekstrakurikuler, dan Galeri Fasilitas.
3. **Admin PPDB**: Berfokus pada pengelolaan data pendaftar baru, verifikasi dokumen, dan konversi status siswa.
4. **Admin Support**: Mengelola dan menjawab tiket di *Service Desk* serta kotak masuk pesan publik.

### 4.2 Matriks Hak Akses (Role Permission Matrix)
| Modul / Hak Akses | Super Admin | Admin Konten | Admin PPDB | Admin Support |
| :--- | :---: | :---: | :---: | :---: |
| Publikasi Berita | ✓ | ✓ | · | · |
| Update Mitra Industri| ✓ | ✓ | · | · |
| Kelola Data Calon Siswa| ✓ | · | ✓ | · |
| Balas Tiket Layanan | ✓ | · | · | ✓ |
| Kelola Hak Akses | ✓ | · | · | · |

---

## BAB V — Arsitektur Teknis (Teknis)

### 5.1 Gambaran Arsitektur
JHIC 2.0 menggunakan arsitektur pemisahan *Client-Server* modern:
- **Frontend App:** Aplikasi dirender hibrida (SSR & CSR) menggunakan Next.js App Router, memastikan SEO yang optimal dan pemuatan halaman (*page load*) yang sangat cepat.
- **Backend API:** Memanfaatkan Node.js (Express.js) yang terhubung ke database SQL melalui Prisma ORM. Autentikasi dikelola dengan mekanisme stateles JWT.

### 5.2 Tech Stack
| Lapisan / Layer | Teknologi Utama | Komponen Pendukung |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 16 (App Router)** | React 19, TypeScript, Tailwind CSS v4, Lucide React, Framer Motion (untuk *micro-animations*). |
| **Backend** | **Express.js (Node.js)** | Prisma ORM, JSON Web Tokens (JWT), bcryptjs, CORS, Multer (File Upload). |
| **Database** | **MySQL / PostgreSQL** | Relational data structuring, migrasi via Prisma CLI. |

### 5.3 Struktur Direktori Repository
```
jhic2.0/
├── jhic2.0-frontend/         # Kode sumber Next.js Web App
│   ├── app/                  # Routing App Router (Halaman Utama, Berita, dll)
│   ├── components/           # Komponen UI modular (Header, Card, dll)
│   ├── services/             # Dummy data & integrasi pemanggilan API
│   ├── types/                # Definisi Tipe TypeScript
│   └── public/               # Aset statis, gambar, dan ikon
├── jhic2.0-backend/          # Kode sumber REST API (Rencana Integrasi)
│   ├── prisma/               # Skema Database (schema.prisma)
│   ├── src/controllers/      # Logika pemrosesan endpoint
│   ├── src/routes/           # Definisi URL API
│   └── src/middlewares/      # Autentikasi dan Validasi Hak Akses (RBAC)
└── SKILL.md                  # Dokumentasi dasar arsitektur teknis
```

---

## BAB VI — Instalasi & Menjalankan Aplikasi (Teknis)

### 6.1 Prasyarat
Pastikan mesin pengembang (*host*) telah terinstal:
- Node.js (v18.x atau versi 20.x ke atas direkomendasikan)
- npm atau pnpm

### 6.2 Langkah Instalasi & Deployment Local
Karena saat ini fase difokuskan pada Frontend, Anda dapat menjalankan web portal secara mandiri:

1. **Clone Repositori**
   ```bash
   git clone <URL_REPOSITORY>
   cd jhic2.0/jhic2.0-frontend
   ```

2. **Instalasi Dependensi**
   ```bash
   npm install
   ```

3. **Menjalankan Mode Development**
   ```bash
   npm run dev
   ```

### 6.3 Endpoint Layanan
Setelah perintah dev berjalan, aplikasi dapat diakses di browser melalui `http://localhost:3000`.

---

## BAB VII — Studi Kasus (Non-Teknis)

### 7.1 Profil Pengguna
- **Institusi**: SMK Telkom Malang
- **Kebutuhan**: Modernisasi kanal informasi untuk menghadapi era Gen Z, memperkuat *brand image*, dan mempermudah akuisisi siswa baru melalui portal tunggal.

### 7.2 Masalah Sistem Lama
Sistem web terdahulu kaku, sulit diperbarui (*hardcoded*), dan membuat informasi krusial (seperti jadwal seleksi PPDB atau *update* fasilitas) terlewat oleh calon pendaftar. Tidak ada interaksi yang menjaga audiens tetap berada di halaman.

### 7.3 Dampak Implementasi JHIC 2.0
- **User Engagement Meningkat:** Tampilan *glassmorphism* modern dan fitur gamifikasi seperti kuis "Tes Minat Bakat" berhasil mempertahankan durasi kunjungan pengunjung.
- **Konversi PPDB Terukur:** Penempatan CTA (Call To Action) strategis di halaman ekstrakurikuler, fasilitas, dan jurusan membantu mengarahkan trafik langsung ke pendaftaran PPDB.

---

## BAB VIII — Rencana Pengembangan / Roadmap (Non-Teknis)

| Fase | Fokus Pengembangan | Target Implementasi |
| :---: | :--- | :--- |
| **Tahap 1** | **Revamp Frontend (Selesai)** | Menyelaraskan seluruh *User Interface*, memodernisasi arsitektur Next.js, perbaikan navigasi (Header/Footer), dan desain halaman responsif. |
| **Tahap 2** | **Integrasi Backend & API** | Mengimplementasikan Express.js dan Prisma. Mengganti *dummy data* dengan konsumsi API dinamis untuk Berita, Fasilitas, dan Hubungan Industri. |
| **Tahap 3** | **Dashboard Admin & CMS** | Membangun panel khusus admin dengan HTML Editor (`react-quill` atau `tiptap`) dan sistem keamanan manajemen hak akses (RBAC). |
| **Tahap 4** | **Fitur Mahasiswa / Alumni** | Pengembangan Student Portal untuk melihat jadwal, nilai akademik, serta direktori karir terpusat bagi para alumni. |

---

## BAB IX — Lisensi & Kontribusi (Teknis)

Proyek perangkat lunak ini merupakan bagian dari inisiatif pengembangan internal. Apabila dilisensikan untuk rilis terbuka (*open source*), maka akan tunduk pada **MIT License**.

**Panduan Kontribusi:**
1. Lakukan *fork* pada repositori ini.
2. Buat *branch* fitur Anda (`git checkout -b fitur-keren-anda`).
3. Lakukan *commit* (`git commit -m 'Menambahkan fitur keren'`).
4. *Push* ke branch tersebut (`git push origin fitur-keren-anda`).
5. Ajukan *Pull Request* ke repositori utama.

---

<div align="center">

**© 2026 JHIC 2.0 (SMK Telkom Malang) — Hak Cipta Dilindungi.**<br>
*Mencetak Generasi Vokasi Berbasis Teknologi Masa Depan.*

</div>
