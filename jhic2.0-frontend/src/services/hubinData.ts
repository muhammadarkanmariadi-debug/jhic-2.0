import {
  IndustryPartner,
  JobVacancyItem,
  ScholarshipItem,
  CompetitionItem,
} from "@/shared/types";

// MokletHubin mock data (JHI-08). Served as fallback when the backend API is
// unavailable; shape mirrors the Prisma models (JobVacancy, Scholarship, Competition, Partner).

export const industryPartners: IndustryPartner[] = [
  { id: "p-1", name: "PT Telkom Indonesia", logo: "https://ui-avatars.com/api/?name=T&background=F3F4F6&color=111&bold=true", url: "https://www.telkom.co.id", isFeatured: true },
  { id: "p-2", name: "PT DOT Indonesia", logo: "https://ui-avatars.com/api/?name=D&background=F3F4F6&color=111&bold=true", url: "https://www.dot.co.id" },
  { id: "p-3", name: "Dicoding Indonesia", logo: "https://ui-avatars.com/api/?name=DC&background=F3F4F6&color=111&bold=true", url: "https://www.dicoding.com", isFeatured: true },
  { id: "p-4", name: "Agate International", logo: "https://ui-avatars.com/api/?name=AG&background=F3F4F6&color=111&bold=true", url: "https://agate.id" },
  { id: "p-5", name: "Jagoan Hosting", logo: "https://ui-avatars.com/api/?name=J&background=F3F4F6&color=111&bold=true", url: "https://www.jagoanhosting.com" },
  { id: "p-6", name: "PT Beon Intermedia", logo: "https://ui-avatars.com/api/?name=BI&background=F3F4F6&color=111&bold=true" },
];

export const lokerItems: JobVacancyItem[] = [
  {
    id: "l-1",
    title: "Junior Web Developer",
    company: "PT DOT Indonesia",
    description: "Membangun aplikasi web menggunakan Laravel/Next.js. Fresh graduate dari RPL dipersilakan.",
    programCode: "RPL",
    location: "Surabaya",
    salaryRange: "Rp 4.000.000 - 6.000.000",
    applicationDeadline: "2026-01-31",
    link: "https://www.dot.co.id/career",
  },
  {
    id: "l-2",
    title: "Mobile Developer Intern",
    company: "Dicoding Indonesia",
    description: "Magang pengembangan aplikasi mobile Flutter untuk program MBKM.",
    programCode: "RPL",
    location: "Remote",
    salaryRange: "Rp 2.500.000",
    applicationDeadline: "2026-02-15",
    link: "https://www.dicoding.com/jobs",
  },
  {
    id: "l-3",
    title: "Network Operations Technician",
    company: "PT Telkom Indonesia",
    description: "Menangani pemeliharaan infrastruktur jaringan dan NOC support.",
    programCode: "TKJ",
    location: "Malang",
    salaryRange: "Rp 4.500.000 - 7.000.000",
    applicationDeadline: "2026-02-01",
  },
  {
    id: "l-4",
    title: "Game QA Tester",
    company: "Agate International",
    description: "Menguji kualitas dan bug pada game mobile. Cocok untuk lulusan Pengembangan Gim.",
    programCode: "PG",
    location: "Bandung",
    salaryRange: "Rp 3.500.000 - 5.000.000",
    applicationDeadline: "2026-03-10",
    link: "https://agate.id/career",
  },
];

export const beasiswaItems: ScholarshipItem[] = [
  {
    id: "b-1",
    title: "Beasiswa Telkom Scholarship",
    provider: "Yayasan Pendidikan Telkom",
    description: "Beasiswa penuh bagi siswa berprestasi bidang teknologi informasi.",
    programCode: "RPL",
    deadline: "2026-03-01",
    requirements: ["Nilai rapor rata-rata minimal 85", "Aktif di organisasi/ekskul", "Surat rekomendasi"],
    link: "https://ppdb.smktelkom-mlg.sch.id",
  },
  {
    id: "b-2",
    title: "Beasiswa Prestasi Non-Akademik",
    provider: "SMK Telkom Malang",
    description: "Dukungan biaya bagi siswa berprestasi di bidang olahraga, seni, atau lomba.",
    deadline: "2026-02-20",
    requirements: ["Piagam penghargaan tingkat minimal kota", "Portofolio prestasi"],
  },
  {
    id: "b-3",
    title: "Indosat Ooredoo Hutchison Digital Camp",
    provider: "IOH",
    description: "Beasiswa pelatihan digital dan sertifikasi untuk siswa SMK.",
    programCode: "TKJ",
    deadline: "2026-04-05",
    link: "https://www.ioh.co.id",
  },
];

export const lombaItems: CompetitionItem[] = [
  {
    id: "c-1",
    title: "Lomba Kompetensi Siswa (LKS) Nasional",
    organizer: "Kemendikbud",
    description: "Kompetisi keahlian tingkat nasional untuk siswa SMK bidang IT.",
    level: "Nasional",
    registrationDeadline: "2026-02-28",
    date: "2026-05-10",
    source: "INTERNAL",
  },
  {
    id: "c-2",
    title: "Gemastik",
    organizer: "Kemendikbud",
    description: "Pekan kreativitas mahasiswa bidang teknologi informasi — kampus.",
    level: "Nasional",
    registrationDeadline: "2026-06-30",
    link: "https://gemastik.kemdikbud.go.id",
  },
  {
    id: "c-3",
    title: "Hackathon Telkom DigiUp",
    organizer: "Telkom Indonesia",
    description: "Kompetisi inovasi digital dan pengembangan produk teknologi.",
    level: "Nasional",
    registrationDeadline: "2026-03-15",
    link: "https://digiup.id",
  },
  {
    id: "c-4",
    title: "Indonesia Game Developer Challenge",
    organizer: "Asosiasi Game Indonesia",
    description: "Kompetisi pengembangan game untuk siswa dan mahasiswa.",
    level: "Nasional",
    registrationDeadline: "2026-04-20",
  },
];
