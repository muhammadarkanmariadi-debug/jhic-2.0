# Laporan Status Fitur JHIC 2.0 (Moklet SIGAP v2.0)

Berdasarkan perbandingan antara struktur folder Frontend saat ini (`src/app`) dan dokumen spesifikasi terbaru (`docs/PRD.md` v2.0), berikut adalah status fitur proyek Anda (apa yang sudah selesai, apa yang perlu diperbarui, dan apa yang belum dikerjakan).

## 🟢 1. Sudah Dikerjakan (Atau Tersedia Versi 1.0)
Halaman-halaman berikut sudah memiliki struktur *routing* di dalam frontend dan bisa dikatakan sudah diinisiasi atau berjalan:

- **Tentang Kami**: Profil Sejarah, Visi Misi, Struktur Organisasi, Akreditasi, Fasilitas, Prestasi, Learning Culture.
- **Program Utama**: Jurusan, Ekstrakurikuler, Program TS, ICP, CCP, Trial Class, Tes Minat Bakat.
- **Informasi Publik**: Berita, Pengumuman Kelulusan, Penerapan K3, Akomodasi, Produk.
- **Hubungi Kami**: FAQ, Kotak Pertanyaan, Service Desk.
- **Alumni**: Profil Sebaran, Testimoni.

---

## 🟡 2. Perlu Diperbarui (Update Required)
Fitur-fitur ini sudah ada sebelumnya, namun **harus diubah/dirombak** agar sesuai dengan PRD v2.0:

1. **PPDB menjadi SPMB (`MokletSPMB`)**
   - **Status Saat Ini:** Masih menggunakan rute `(main)/ppdb`.
   - **Yang Harus Diupdate:** Mengubah nama menjadi SPMB. Formulir pendaftaran internal harus **dihapus**, karena SPMB saat ini hanya difungsikan sebagai *landing page* (Info Gelombang & Syarat), dengan tombol CTA yang me-redirect pengguna ke portal yayasan.

2. **Hubungan Industri (`MokletHubin`)**
   - **Status Saat Ini:** Masih tergabung di dalam `tentang-kami/hubungan-industri`.
   - **Yang Harus Diupdate:** Di PRD v2.0, fitur ini diperluas menjadi menu utama sendiri (berdiri sendiri di luar Tentang Kami) dan harus mencakup sub-fitur baru: **Info Lomba**, **Info Lowongan Kerja**, dan **Info Beasiswa**.

---

## 🔴 3. Belum Dikerjakan (Not Started)
Fitur-fitur di bawah ini adalah fitur baru yang diamanatkan oleh PRD v2.0 dan **belum ada** di dalam *codebase* saat ini:

1. **Modul Kurikulum (`MokletKurikulum`)**
   - Halaman khusus untuk menampilkan struktur mata pelajaran per jurusan, versi kurikulum, dan jam pelajaran. (Belum ada rute `(main)/program/kurikulum`).

2. **Karir & Prospek Kerja (`MokletKarir`)**
   - Membutuhkan komponen *Timeline Belajar* dan informasi rentang gaji/prospek kerja spesifik yang harus ditambahkan ke halaman profil jurusan. Juga perlu adanya integrasi/link ke portal karir eksternal.

3. **Chatbot / Tanya Cepat (`MokletBot`)**
   - Layanan bot otomatis (24/7) untuk menjawab pertanyaan umum di sisi pengunjung. Saat ini sama sekali belum diimplementasikan di UI.

4. **Modul Feedback (`MokletUlasan`)**
   - Formulir ulasan atau *feedback loop* terstruktur (misal pop-up setelah membaca artikel atau mengirim pertanyaan) untuk mengukur kepuasan pengguna.

5. **Sistem Backend (API & Database)**
   - Seperti yang dijelaskan di `AGENTS.md`, folder `jhic2.0-backend` saat ini masih berupa *stub* (kosong).
   - **Belum ada:** Prisma schema, autentikasi JWT, sistem RBAC (Role-Based Access Control) untuk role admin yang dijabarkan (Super Admin, Admin Konten, Admin SPMB, Admin Kurikulum, Admin Hubin).

## Rekomendasi Langkah Selanjutnya (MVP)
Berdasarkan `PRD.md`, disarankan untuk memprioritaskan pengerjaan berikut ini terlebih dahulu:
1. Membuat halaman **Kurikulum**.
2. Merombak **PPDB menjadi SPMB** (menjadi *landing page* murni).
3. Melengkapi halaman Jurusan dengan komponen **MokletKarir**.
