import { ProgramCode } from "@/shared/types";
import { TimelineEvent } from "@/shared/ui/Timeline";

export interface KarirProspek {
  title: string;
  salaryRange: string;
  description: string;
}

export interface KarirContent {
  code: ProgramCode;
  portalUrl: string; // JHI-06: external career portal link
  timeline: TimelineEvent[];
  prospek: KarirProspek[];
}

// MokletKarir — Timeline Belajar + Prospek Karier & Gaji per konsentrasi.
export const karirData: KarirContent[] = [
  {
    code: "RPL",
    portalUrl: "https://www.smktelkom-mlg.sch.id",
    timeline: [
      {
        year: "Kelas 10",
        title: "Fondasi Pemrograman",
        description: "Logika pemrograman, dasar algoritma, dan pengenalan dunia rekayasa perangkat lunak.",
      },
      {
        year: "Kelas 11",
        title: "Full Stack & Mobile",
        description: "Pengembangan web frontend-backend dan aplikasi mobile dengan standar industri.",
      },
      {
        year: "Kelas 12",
        title: "Magang & Portofolio",
        description: "Prakerin di industri, pengerjaan proyek nyata, dan penguatan portofolio digital.",
      },
    ],
    prospek: [
      { title: "Junior Web Developer", salaryRange: "Rp 4 - 7 juta", description: "Membangun dan memelihara aplikasi web menggunakan framework modern." },
      { title: "Mobile Developer", salaryRange: "Rp 5 - 9 juta", description: "Mengembangkan aplikasi mobile Android/iOS dengan Flutter atau native." },
      { title: "Full Stack Engineer", salaryRange: "Rp 7 - 15 juta", description: "Menangani sisi frontend dan backend sebuah produk digital." },
      { title: "QA Engineer", salaryRange: "Rp 4 - 8 juta", description: "Menjamin kualitas perangkat lunak melalui pengujian otomatis dan manual." },
    ],
  },
  {
    code: "TKJ",
    portalUrl: "https://www.smktelkom-mlg.sch.id",
    timeline: [
      {
        year: "Kelas 10",
        title: "Dasar Jaringan",
        description: "Konsep jaringan komputer, perangkat keras, dan sistem operasi.",
      },
      {
        year: "Kelas 11",
        title: "Infrastruktur & Keamanan",
        description: "Routing, switching, administrasi server, dan dasar keamanan jaringan.",
      },
      {
        year: "Kelas 12",
        title: "Sertifikasi & Magang",
        description: "Uji kompetensi (MTCNA/CCNA), sertifikasi, dan praktik kerja industri.",
      },
    ],
    prospek: [
      { title: "Network Engineer", salaryRange: "Rp 4 - 8 juta", description: "Merancang, mengonfigurasi, dan memelihara infrastruktur jaringan." },
      { title: "Cyber Security Analyst", salaryRange: "Rp 6 - 12 juta", description: "Melindungi sistem dan data organisasi dari ancaman siber." },
      { title: "Cloud Administrator", salaryRange: "Rp 5 - 10 juta", description: "Mengelola layanan dan infrastruktur komputasi awan." },
      { title: "IT Support", salaryRange: "Rp 3 - 6 juta", description: "Memberikan dukungan teknis perangkat keras dan perangkat lunak." },
    ],
  },
  {
    code: "PG",
    portalUrl: "https://www.smktelkom-mlg.sch.id",
    timeline: [
      {
        year: "Kelas 10",
        title: "Dasar Pengembangan Gim",
        description: "Konsep desain game, logika interaksi, dan pengenalan game engine.",
      },
      {
        year: "Kelas 11",
        title: "Produksi Gim",
        description: "Pembuatan aset 2D/3D, pemrograman gameplay, dan integrasi audio.",
      },
      {
        year: "Kelas 12",
        title: "Portofolio & Kolaborasi",
        description: "Pengembangan game project penuh, kolaborasi tim, dan showcase karya.",
      },
    ],
    prospek: [
      { title: "Game Programmer", salaryRange: "Rp 5 - 10 juta", description: "Menulis kode gameplay, sistem, dan optimasi performa game." },
      { title: "Game Artist", salaryRange: "Rp 4 - 8 juta", description: "Menciptakan aset visual 2D/3D, animasi, dan desain UI/UX game." },
      { title: "Game QA", salaryRange: "Rp 3 - 6 juta", description: "Menguji kualitas, bug, dan keseimbangan permainan sebelum rilis." },
    ],
  },
];
