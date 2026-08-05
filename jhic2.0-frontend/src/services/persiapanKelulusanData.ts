import { CurriculumTab } from "@/shared/types";

const K = "/images/kurikulum";

// Mirror of kurikulum.smktelkom-mlg.sch.id/persiapan-kelulusan.html
export const persiapanKelulusanTabs: CurriculumTab[] = [
  {
    key: "ukk",
    label: "Uji Kompetensi Kejuruan",
    intro:
      "Mengukur dan menilai tingkat kompetensi siswa dalam bidang keahlian tertentu. UKK memastikan lulusan memiliki keterampilan praktis dan pengetahuan yang sesuai dengan standar industri.",
    sections: [
      {
        type: "steps",
        title: "Tahapan Kegiatan",
        items: [
          "Kerjasama Industri",
          "Diskusi Kisi-Kisi Soal",
          "Pembuatan Soal",
          "Persiapan Alat Praktik",
          "Pelaksanaan Ujian",
          "Penerbitan Sertifikat",
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/kelulusan/ukk/1.jpeg`, alt: "UKK 1" },
          { src: `${K}/program/kelulusan/ukk/2.jpeg`, alt: "UKK 2" },
          { src: `${K}/program/kelulusan/ukk/3.jpeg`, alt: "UKK 3" },
          { src: `${K}/program/kelulusan/ukk/4.jpeg`, alt: "UKK 4" },
          { src: `${K}/program/kelulusan/ukk/5.jpeg`, alt: "UKK 5" },
          { src: `${K}/program/kelulusan/ukk/6.jpeg`, alt: "UKK 6" },
          { src: `${K}/program/kelulusan/ukk/7.jpeg`, alt: "UKK 7" },
        ],
      },
    ],
  },
  {
    key: "snbt",
    label: "Sukses SNBT",
    intro:
      "Dilaksanakan untuk memberikan bimbingan dan latihan kepada siswa agar lebih siap menghadapi ujian SNBT. Kerja sama dengan lembaga Ruangguru memberikan metode pembelajaran yang efektif dan efisien, baik online maupun offline.",
    sections: [
      {
        type: "accordion",
        title: "Ringkasan Kegiatan",
        items: [
          {
            title: "Persiapan SNBT Online",
            desc: "Platform: Ruangguru. Materi: semua mata ujian di SNBT. Fasilitas: video pembelajaran, latihan soal, dan pembahasan soal lengkap. Interaksi: fitur tanya jawab langsung dengan tutor Ruangguru.",
          },
          {
            title: "Persiapan SNBT Offline",
            desc: "Lokasi: di sekolah dengan bimbingan langsung tutor Ruangguru. Kegiatan: tatap muka, diskusi kelompok, dan tryout berkala. Fasilitas: materi cetak, modul latihan, dan pembahasan soal.",
          },
        ],
      },
      {
        type: "cards",
        title: "Dampak Kegiatan",
        items: [
          { title: "Peningkatan Pemahaman", desc: "Siswa menunjukkan peningkatan pemahaman terhadap materi ujian SNBT.", icon: "award" },
          { title: "Kepercayaan Diri", desc: "Siswa lebih percaya diri menghadapi ujian setelah latihan dan bimbingan intensif.", icon: "users" },
          { title: "Keterampilan Belajar", desc: "Siswa mengembangkan keterampilan belajar yang lebih baik melalui metode Ruangguru.", icon: "lightbulb" },
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/kelulusan/persiapan_utbk/1.jpg`, alt: "Persiapan SNBT 1" },
          { src: `${K}/program/kelulusan/persiapan_utbk/2.jpg`, alt: "Persiapan SNBT 2" },
          { src: `${K}/program/kelulusan/persiapan_utbk/3.jpg`, alt: "Persiapan SNBT 3" },
          { src: `${K}/program/kelulusan/persiapan_utbk/4.jpg`, alt: "Persiapan SNBT 4" },
          { src: `${K}/program/kelulusan/persiapan_utbk/5.jpg`, alt: "Persiapan SNBT 5" },
          { src: `${K}/program/kelulusan/persiapan_utbk/6.jpg`, alt: "Persiapan SNBT 6" },
        ],
      },
    ],
  },
  {
    key: "myd",
    label: "Moklet Youth Digitalent",
    intro:
      "Program pengembangan kompetensi dan peningkatan kualitas talenta siswa melalui pendampingan serta pembekalan soft skill dan hard skill yang dibutuhkan dalam menghadapi dunia industri.",
    sections: [
      {
        type: "cards",
        title: "Tujuan Kegiatan",
        items: [
          { title: "Fundamental", desc: "Memberikan wawasan dan pengetahuan untuk mempersiapkan mindset yang lebih baik menghadapi tantangan setelah lulus sekolah.", icon: "target" },
          { title: "Meet With Expert", desc: "Mempertemukan peserta dengan perusahaan-perusahaan dan para entrepreneur muda.", icon: "users" },
          { title: "Career Path", desc: "Memperkenalkan ragam peluang karir dan usaha berpotensi tinggi yang dapat ditekuni peserta.", icon: "award" },
        ],
      },
      {
        type: "steps",
        title: "Tahapan Kegiatan",
        items: ["Sosialisasi", "Pendaftaran Peserta", "General Class", "Parallel Class", "Demo Day"],
      },
      {
        type: "cards",
        title: "Materi General Class",
        items: [
          { title: "Critical Thinking & Problem Solving", desc: "Membangun awareness pentingnya critical thinking dan problem solving dalam dunia profesional.", icon: "lightbulb" },
          { title: "Communication", desc: "Membangun komunikasi yang baik, tidak hanya berbicara namun juga mendengarkan.", icon: "users" },
          { title: "Leadership & Personal Branding", desc: "Memahami penggunaan leadership untuk meningkatkan efektivitas teamwork.", icon: "award" },
          { title: "CV, Portfolio & Optimasi LinkedIn", desc: "Membuat CV dan portofolio yang proper serta mengoptimasi LinkedIn untuk job hunting.", icon: "target" },
          { title: "Job Interview", desc: "Tips dan trik interview kerja serta simulasi praktiknya.", icon: "users" },
          { title: "Pitching Hacks", desc: "Membuat presentasi bisnis dan mempresentasikannya secara efektif.", icon: "lightbulb" },
        ],
      },
      {
        type: "cards",
        title: "Materi Parallel Class",
        items: [
          { title: "Software Engineer", desc: "Mengenal lebih dalam software development hingga metode pengembangan.", icon: "target" },
          { title: "Data Analyst", desc: "Melakukan riset dan memelihara database untuk pengambilan keputusan.", icon: "award" },
          { title: "UI/UX Designer", desc: "Mengetahui user interface dan user experience dari definisi hingga teknik desain.", icon: "lightbulb" },
          { title: "Dev Ops", desc: "Mengenal profesi devops, tanggung jawabnya, dan mempraktikkan salah satu scope kerja.", icon: "users" },
          { title: "Cloud Engineer", desc: "Mengenal pekerjaan cloud engineer, tanggung jawab, dan teknologi cloud.", icon: "target" },
          { title: "Social Media Marketer", desc: "Mengenal profesi sosmed marketer serta mempraktikkan salah satu scope kerjanya.", icon: "sparkles" },
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/kelulusan/myd/1.jpg`, alt: "Moklet Youth Digitalent 1" },
          { src: `${K}/program/kelulusan/myd/2.jpg`, alt: "Moklet Youth Digitalent 2" },
          { src: `${K}/program/kelulusan/myd/3.jpg`, alt: "Moklet Youth Digitalent 3" },
          { src: `${K}/program/kelulusan/myd/4.png`, alt: "Moklet Youth Digitalent 4" },
        ],
      },
    ],
  },
];
