import {
  CurriculumSyncPartner,
  Expertise,
  Certification,
  ProgramPageContent,
  FeaturedProgram,
  OrganizationItem,
  ProgramCode,
} from "@/shared/types";

// Konsentrasi Keahlian list — single source for the konsentrasi switch on the
// Program Konsentrasi Keahlian page.
export const konsentrasiPrograms: { code: ProgramCode; label: string; desc: string }[] = [
  { code: "RPL", label: "RPL", desc: "Rekayasa Perangkat Lunak" },
  { code: "TKJ", label: "TKJ", desc: "Teknik Komputer & Jaringan" },
  { code: "PG", label: "PG", desc: "Pengembangan Gim" },
];

// ---- JHI-v2-02: Partner Sinkronisasi Kurikulum (tied to academic year) ----

export const curriculumSyncPartners: CurriculumSyncPartner[] = [
  {
    id: "sp-1",
    name: "PT Telkom Indonesia",
    logo: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/logo-telkom.png",
    academicYear: "2025/2026",
    description:
      "Mitra sinkronisasi kurikulum bidang jaringan & telekomunikasi. Perbaruan struktur kurikulum TKJ mengikuti kebutuhan industri.",
    programCode: "TKJ",
  },
  {
    id: "sp-2",
    name: "Dicoding Indonesia",
    logo: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/logo-dicoding.png",
    academicYear: "2025/2026",
    description:
      "Mitra sinkronisasi kurikulum pengembangan perangkat lunak (RPL) dengan standar global learning path Dicoding Academy.",
    programCode: "RPL",
  },
  {
    id: "sp-3",
    name: "Agate International",
    logo: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/logo-agate.png",
    academicYear: "2024/2025",
    description:
      "Mitra sinkronisasi kurikulum game development (PG) — pipeline produksi game, aset 2D/3D, dan game engine.",
    programCode: "PG",
  },
];

// ---- JHI-v2-02: Expertise per Konsentrasi Keahlian ----

export const expertiseList: Expertise[] = [
  {
    id: "ex-rpl-1",
    programCode: "RPL",
    name: "Full Stack Developer",
    description:
      "Fokus pada pengembangan aplikasi web end-to-end: frontend, backend, API, dan deployment.",
    isIcp: true,
  },
  {
    id: "ex-rpl-2",
    programCode: "RPL",
    name: "Mobile Developer",
    description:
      "Fokus pada pengembangan aplikasi mobile (Android/iOS) dengan teknologi multiplatform modern.",
    isIcp: true,
  },
  {
    id: "ex-tkj-1",
    programCode: "TKJ",
    name: "Network Engineer",
    description:
      "Fokus pada perancangan, konfigurasi, dan pemeliharaan infrastruktur jaringan komputer.",
  },
  {
    id: "ex-tkj-2",
    programCode: "TKJ",
    name: "Cyber Security",
    description:
      "Fokus pada keamanan sistem, penetration testing, dan proteksi data jaringan.",
  },
  {
    id: "ex-pg-1",
    programCode: "PG",
    name: "Game Programmer",
    description:
      "Fokus pada logika permainan, sistem interaksi, dan optimasi performa game.",
  },
  {
    id: "ex-pg-2",
    programCode: "PG",
    name: "Game Artist",
    description:
      "Fokus pada pembuatan aset visual 2D/3D, animasi, dan desain UI/UX game.",
  },
];

// ---- JHI-v2-02: Sertifikasi ----

export const certifications: Certification[] = [
  { id: "cert-1", programCode: "RPL", name: "Associate Android Developer", level: "Internasional", provider: "Google" },
  { id: "cert-2", programCode: "RPL", name: "AWS Cloud Practitioner", level: "Internasional", provider: "Amazon Web Services" },
  { id: "cert-3", programCode: "TKJ", name: "MikroTik Certified Network Associate (MTCNA)", level: "Internasional", provider: "MikroTik" },
  { id: "cert-4", programCode: "TKJ", name: "CCNA Routing & Switching", level: "Internasional", provider: "Cisco" },
  { id: "cert-5", programCode: "PG", name: "Unity Certified User", level: "Internasional", provider: "Unity" },
  { id: "cert-6", programCode: "RPL", name: "BNSP Junior Web Developer", level: "Nasional", provider: "BNSP" },
];

// ---- JHI-v2-04: Shared Program template content ----

export const regulerContent: ProgramPageContent = {
  slug: "reguler",
  title: "Program Reguler",
  tagline: "Membangun Kompetensi Sesuai Minat dan Bakat Siswa",
  description:
    "Program Reguler adalah jalur utama pendidikan di SMK Telkom Malang. Siswa memilih satu Konsentrasi Keahlian (RPL, TKJ, atau Pengembangan Gim) dan menempuh pembelajaran terstruktur selama 3 tahun dengan kurikulum Link & Match bersama industri.",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  learningJourney: [
    {
      grade: "Kelas 10",
      title: "Fondasi & Pengenalan",
      items: [
        "Dasar-dasar teknologi informasi & komunikasi",
        "Pengenalan seluruh konsentrasi keahlian",
        "Matematika & logika pemrograman dasar",
        "Pengembangan karakter & budaya kerja industri",
      ],
    },
    {
      grade: "Kelas 11",
      title: "Pendalaman Kompetensi",
      items: [
        "Pemilihan 1 konsentrasi keahlian",
        "Praktikum intensif di laboratorium sesuai bidang",
        "Pembelajaran berbasis proyek (PBL)",
        "Sertifikasi kompetensi level lanjutan",
      ],
    },
    {
      grade: "Kelas 12",
      title: "Industri & Karier",
      items: [
        "Praktik Kerja Lapangan (Prakerin) di industri",
        "Penguatan portofolio & profil lulusan",
        "Uji kompetensi keahlian (UKK)",
        "Penyaluran karier / perkuliahan",
      ],
    },
  ],
  graduateProfile: [
    { title: "Siap Kerja", description: "Memenuhi standar kompetensi industri pada konsentrasi yang dipilih." },
    { title: "Siap Wirausaha", description: "Mampu membangun usaha rintisan berbasis teknologi." },
    { title: "Siap Kuliah", description: "Siap melanjutkan studi ke jenjang perguruan tinggi favorit." },
  ],
};

export const icpContent: ProgramPageContent = {
  slug: "icp",
  title: "International Class Program (ICP)",
  tagline: "Mempersiapkan Lulusan dengan Daya Saing Global",
  description:
    "Program ICP mengintegrasikan standar kompetensi nasional dengan kurikulum berstandar internasional. Siswa belajar dalam lingkungan bilingual, mendalami seluruh expertise (full stack & mobile), dan dibekali sertifikasi internasional serta jalur studi ke luar negeri.",
  image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&auto=format&fit=crop",
  learningJourney: [
    {
      grade: "Kelas 10",
      title: "Dasar & Bahasa",
      items: [
        "English for Academic Purposes",
        "Dasar-dasar komputer & logika pemrograman",
        "Pengenalan budaya & standar industri global",
        "Fundamental full stack & mobile",
      ],
    },
    {
      grade: "Kelas 11",
      title: "Pendalaman Expertise",
      items: [
        "Kedua expertise: full stack & mobile",
        "Proyek kolaborasi internasional",
        "Persiapan sertifikasi internasional",
        "Global communication & soft skills",
      ],
    },
    {
      grade: "Kelas 12",
      title: "Global Pathway",
      items: [
        "Internship di perusahaan multinasional",
        "Portofolio standar internasional",
        "Uji kompetensi + sertifikasi global",
        "Penyaluran studi ke universitas mitra luar negeri",
      ],
    },
  ],
  graduateProfile: [
    { title: "Global Competence", description: "Siap bersaing di kancah industri dan akademik internasional." },
    { title: "Bilingual", description: "Komunikasi aktif bahasa Inggris untuk kebutuhan akademik & profesional." },
    { title: "Sertifikasi Global", description: "Memiliki sertifikasi IT berstandar internasional." },
  ],
};

// ---- JHI-v2-05: Program Unggulan ----

export const featuredPrograms: FeaturedProgram[] = [
  {
    id: "fp-1",
    name: "Coding Class Program (CCP)",
    slug: "ccp",
    description:
      "Program percepatan keahlian khusus di bidang pemrograman untuk mencetak Software Engineer muda yang berkompeten.",
    programId: "rpl",
    isActive: true,
    ctaLabel: "Pelajari CCP",
  },
  {
    id: "fp-2",
    name: "Teknologi Siber 2.1 (TS 2.1)",
    slug: "program-ts",
    description:
      "Program unggulan di bidang keamanan siber — pembentukan spesialis jaringan dan keamanan informasi sejak dini.",
    programId: "tkj",
    isActive: true,
    ctaLabel: "Pelajari TS 2.1",
  },
];

// ---- JHI-v2-11: Organisasi ----

export const organizations: OrganizationItem[] = [
  {
    id: "org-1",
    name: "OSIS",
    description:
      "Organisasi Siswa Intra Sekolah — wadah pengembangan kepemimpinan, minat, dan bakat siswa di lingkungan sekolah.",
  },
  {
    id: "org-2",
    name: "MPK",
    description:
      "Majelis Permusyawaratan Kelas — mitra kerja OSIS yang berfokus pada pengawasan dan aspirasi seluruh kelas.",
  },
  {
    id: "org-3",
    name: "Ekstrakurikuler & Unit Kegiatan",
    description:
      "Seluruh unit kegiatan siswa (rohani, olahraga, seni, teknologi) yang dikelola dan didata dalam portal organisasi.",
  },
];
