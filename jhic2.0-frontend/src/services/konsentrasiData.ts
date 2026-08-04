import { ContentSection, CurriculumTab } from "@/shared/types";

const K = "https://kurikulum.smktelkom-mlg.sch.id";

export interface KonsentrasiCard {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  /** Detail page: either per-konsentrasi tabs (Kelas Ekspertis) or flat sections */
  tabs?: CurriculumTab[];
  sections?: ContentSection[];
}

export const konsentrasiCards: KonsentrasiCard[] = [
  {
    slug: "kelas-ekspertis",
    title: "Kelas Ekspertis",
    description: "Pembagian kelas siswa berdasarkan fokus kompetensi tertentu sesuai dengan kebutuhan industri.",
    icon: "layers",
    tabs: [
      {
        key: "rpl",
        label: "Rekayasa Perangkat Lunak",
        sections: [
          {
            type: "tracks",
            items: [
              {
                title: "Mobile (Flutter)",
                image: "https://msoft.team/wp-content/uploads/2022/09/flutter.jpg",
                points: [
                  "Memahami Konsep Dasar Flutter",
                  "Menguasai Bahasa Pemrograman Dart",
                  "Membangun Antarmuka Pengguna (UI)",
                  "Mengelola State Aplikasi",
                  "Menggunakan Paket dan Plugin",
                  "Integrasi dengan Backend",
                  "Implementasi Navigasi dan Routing",
                  "Testing dan Debugging",
                  "Optimasi Kinerja Aplikasi",
                  "Mempublikasikan Aplikasi",
                ],
              },
              {
                title: "Laravel - Next.js",
                image: "https://miro.medium.com/v2/resize:fit:1400/1*5zbjAY6BL_u-OXF0_ZAPtw.jpeg",
                points: [
                  "Menguasai Dasar-dasar Laravel",
                  "Mengelola Basis Data",
                  "Membuat dan mengelola RestFul API",
                  "Mengelola Otentikasi dan Otorisasi",
                  "Menangani CORS",
                  "Memahami Konsep Dasar Next.js",
                  "Membangun Halaman dan Rute",
                  "Mengelola Komponen",
                  "Mengelola Data Fetching",
                  "Integrasi API internal & eksternal",
                  "Testing dan Debugging",
                  "CI/CD",
                ],
              },
              {
                title: "Nest.js - Next.js",
                image: "https://miro.medium.com/v2/resize:fit:1400/1*q2zEonBaQItTIfVlyjKZIw.png",
                points: [
                  "Memahami Dasar-dasar NestJS",
                  "Mengelola Basis Data",
                  "Membuat dan mengelola RestFul API",
                  "Mengelola Otentikasi dan Otorisasi",
                  "Menangani CORS",
                  "Memahami Konsep Dasar Next.js",
                  "Membangun Halaman dan Rute",
                  "Mengelola Komponen",
                  "Mengelola Data Fetching",
                  "Integrasi API internal & eksternal",
                  "Testing dan Debugging",
                  "CI/CD",
                ],
              },
            ],
          },
        ],
      },
      {
        key: "tkj",
        label: "Teknik Komputer & Jaringan",
        sections: [
          {
            type: "tracks",
            items: [
              {
                title: "Cloud Computing Operations",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv59WgoDXb5ouTwnb2nSFyKtf3Nrl3IHmJM6zJ5ThnwBGop5URiPOaVzjglRXCtfRsR2o&usqp=CAU",
                description: "Proses mengelola, mengirim, dan menggunakan perangkat lunak di lingkungan komputasi awan.",
                points: [
                  "Mengembangkan solusi otomatisasi",
                  "Menerapkan langkah-langkah keamanan",
                  "Memantau kinerja sistem",
                  "Merancang solusi pemulihan bencana",
                ],
              },
              {
                title: "Cloud Computing Developer",
                image: "https://static.vecteezy.com/system/resources/previews/010/568/330/original/cloud-technology-polygonal-wireframe-cloud-storage-sign-with-on-dark-blue-cloud-computing-big-data-center-future-infrastructure-digital-ai-concept-virtual-hosting-symbol-vector.jpg",
                description: "Membuat dan merawat fitur, fungsi perangkat lunak, basis data, dan aplikasi pada teknologi cloud.",
                points: [
                  "Merencanakan pengembangan layanan",
                  "Menganalisis, merancang, membangun, dan menguji layanan cloud",
                  "Membuat container berbasis linux",
                  "Merancang komponen keamanan",
                ],
              },
              {
                title: "Cyber Security",
                image: "https://www.shutterstock.com/shutterstock/videos/3442153991/thumb/12.jpg?ip=x480",
                description: "Melindungi sistem komputer, jaringan, dan data dari ancaman digital.",
                points: [
                  "Security Vulnerabilities",
                  "Malware dan karakteristik malware",
                  "Metode penyerangan",
                  "Dampak dari penyerangan",
                  "Cara meredam penyerangan",
                ],
              },
              {
                title: "Network & System Administrator",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhNLEKFIvTsappOE0dCHfNqJCXLiSwQ83p4lXAYv9fii8nsOEk2r1kXlEfGrjzUNOx28&usqp=CAU",
                description: "Pengelolaan, pemeliharaan, dan keamanan jaringan komputer serta sistem operasi organisasi.",
                points: [
                  "Konfigurasi dan pemeliharaan perangkat",
                  "Keamanan sistem & jaringan",
                  "Pemantauan jaringan dan sistem",
                  "Penyelesaian masalah",
                  "Pengelolaan sistem operasi",
                  "Manajemen server",
                  "Backup dan pemulihan data",
                ],
              },
            ],
          },
        ],
      },
      {
        key: "pg",
        label: "Pengembangan Gim",
        sections: [
          {
            type: "tracks",
            items: [
              {
                title: "Game Artist",
                image: "https://www.coursesonline.co.uk/wp-content/uploads/Subject-Game-Development.jpeg?height=485&dpr=2",
                description: "Menciptakan elemen visual dalam permainan video: karakter, lingkungan, objek, dan efek khusus.",
                points: [
                  "Konsep dan desain (2D dan 3D)",
                  "Animasi untuk karakter, objek, dan efek khusus",
                  "Dasar menggambar, melukis, dan prinsip desain",
                  "Menggunakan software pendukung game artist",
                  "Menciptakan dunia yang menarik dan karakter unik",
                  "Mengelola detail visual berkualitas tinggi",
                ],
              },
              {
                title: "Game Programmer",
                image: "https://www.chi.ac.uk/app/uploads/2021/10/21-Game-coding-14-1024x576.jpg",
                description: "Menulis kode yang menggerakkan permainan video.",
                points: [
                  "Pengembangan mekanika permainan",
                  "Sistem fisika untuk interaksi realistis",
                  "Mengoptimalkan source code permainan",
                  "Kecerdasan buatan untuk karakter non-pemain (NPC)",
                  "Integrasi dan debugging",
                  "Pemecahan masalah",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "praktisi-mengajar",
    title: "Praktisi Mengajar",
    description: "Perlunya wawasan baru dan real experience dari industri untuk menunjang perkembangan kompetensi siswa.",
    icon: "presentation",
    sections: [
      {
        type: "paragraph",
        text: "Menjembatani kesenjangan antara kurikulum yang diajarkan di sekolah dan praktik nyata di dunia kerja, dengan menghadirkan tenaga profesional dari industri untuk berbagi pengalaman dan pengetahuan praktis kepada siswa.",
      },
      {
        type: "checklist",
        title: "Ringkasan Kegiatan",
        items: [
          "Diselenggarakan bersama industri pasangan PT DOT Indonesia dan PT Beon Intermedia.",
          "Materi yang diajarkan adalah materi best practice yang diterapkan oleh masing-masing industri.",
          "SMK Telkom Malang menyediakan seluruh sarana dan prasarana yang diperlukan.",
          "Jadwal pelaksanaan kelas praktisi mengajar diatur agar tenaga pengajar dari industri.",
        ],
      },
      {
        type: "table",
        title: "Jadwal Kegiatan",
        headers: ["Hari", "Kelas", "Narasumber"],
        rows: [
          ["Senin", "XI RPL 1 - XI RPL 3", "PT. DOT Indonesia"],
          ["Selasa", "XI RPL 4 - XI RPL 6", "PT. DOT Indonesia"],
          ["Rabu", "XI RPL 7 - XI RPL 8", "PT. DOT Indonesia"],
          ["Kamis", "XI TKJ 1 - XI RPL 3", "PT. Beon Intermedia"],
          ["Jumat", "XI TKJ 4 - XI RPL 5", "PT. Beon Intermedia"],
        ],
      },
      {
        type: "badges",
        title: "Materi",
        items: [
          "Project Management",
          "System Analyst",
          "Graphic & UI/UX Design",
          "Quality Assurance (QA)",
          "Best Practice Teknik Pemrograman",
          "Soft Skill di Dunia Kerja",
          "Data Science",
          "Fundamental Digital Marketing",
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/kk/praktisi_mengajar/2.jpg`, alt: "Praktisi Mengajar 2" },
          { src: `${K}/program/kk/praktisi_mengajar/3.jpg`, alt: "Praktisi Mengajar 3" },
          { src: `${K}/program/kk/praktisi_mengajar/1.png`, alt: "Praktisi Mengajar 1" },
        ],
      },
    ],
  },
  {
    slug: "kelas-bootcamp",
    title: "Kelas Bootcamp",
    description: "Pembelajaran di luar jam belajar formal yang diselenggarakan oleh industri secara langsung, luring maupun daring.",
    icon: "flame",
    sections: [
      {
        type: "paragraph",
        title: "Bootcamp dari Industri",
        text: "Kegiatan ini bertujuan sebagai percepatan belajar siswa untuk mengikuti kompetensi yang direkomendasikan oleh industri. Program ini menjawab tantangan industri untuk selalu adaptif dengan kompetensi yang diinginkan dunia kerja, dilaksanakan berkolaborasi dengan industri secara langsung — offline maupun online — di luar jam belajar reguler sekolah.",
      },
      {
        type: "steps",
        title: "Tahapan Kegiatan",
        items: [
          "Diskusi kebutuhan Industri",
          "Kerjasama (MoU)",
          "Sosialisasi ke Siswa",
          "Pendaftaran Peserta",
          "Pembagian Kelas",
          "Pelaksanaan Program",
          "Monitoring dan Evaluasi",
          "Join Project",
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/kk/bootcamp/1.png`, alt: "Kelas Bootcamp 1" },
          { src: `${K}/program/kk/bootcamp/2.png`, alt: "Kelas Bootcamp 2" },
        ],
      },
    ],
  },
  {
    slug: "kelas-industri",
    title: "Kelas Industri",
    description: "Kelas khusus yang dikelola bersama antara sekolah dan industri untuk menciptakan lulusan berkualitas dan siap rekrut.",
    icon: "factory",
    sections: [
      {
        type: "paragraph",
        text: "Program Kelas Industri menggabungkan kurikulum sekolah dengan kebutuhan industri untuk mempersiapkan siswa menjadi tenaga kerja yang terampil dan siap pakai. Program ini bertujuan mengurangi kesenjangan antara pendidikan dan dunia kerja.",
      },
      {
        type: "checklist",
        title: "Tujuan Program",
        items: [
          "Membekali siswa dengan keterampilan praktis dan teknis sesuai kebutuhan industri",
          "Menyediakan kurikulum yang disusun bersama dengan industri",
          "Memperbesar peluang siswa mendapatkan pekerjaan setelah lulus",
          "Mengintegrasikan materi pelajaran berdasarkan standar industri, teori dan praktik",
          "Menyediakan kesempatan praktik kerja langsung",
          "Melibatkan siswa dalam proyek nyata yang dihadapi industri",
          "Mengundang praktisi industri untuk pelatihan dan berbagi pengalaman",
          "Membangun reputasi sekolah melalui kerja sama dengan perusahaan terkemuka",
        ],
      },
      {
        type: "paragraph",
        title: "Jadwal Kegiatan",
        text: "Jadwal pembelajaran terintegrasi dengan agenda sekolah dan sesuai dengan permintaan industri.",
      },
      {
        type: "partners",
        title: "Industri Pasangan",
        items: [
          {
            name: "PT. DOT Indonesia",
            desc: "Menyediakan solusi digital berkualitas dengan metodologi agile untuk membantu perusahaan dan startup.",
            logo: "https://www.dot.co.id/images/img-metadata.webp",
          },
          {
            name: "PT. Sekawan Media Informatika",
            desc: "Perusahaan software development dan IT consultant terbaik di Indonesia untuk berbagai industri.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jgrqs6rNNgHsH62Pjhfz5jFOCs-YoVubLw&s",
          },
          {
            name: "PT. Lanius Inovasi Indonesia",
            desc: "Perusahaan teknologi Machine Vision yang fokus membantu perusahaan memasuki Industry 4.0.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO29nTZHGzhUajID2F_9h2-zY9HIpCwC6keQ&s",
          },
          {
            name: "PT. Cendana Teknika Utama",
            desc: "Penyedia solusi ERP dengan rangkaian software terlengkap untuk berbagai jenis industri.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnW3dF6SSHVT3waLQAz1I9niEzbH4kQIdRGw&s",
          },
        ],
      },
      {
        type: "steps",
        title: "Tahapan Kegiatan",
        items: [
          "Diskusi kebutuhan Industri",
          "Kerjasama (MoU)",
          "Sosialisasi ke Siswa",
          "Pendaftaran Peserta",
          "Pelaksanaan Program",
          "Monitoring dan Evaluasi",
          "Join Project",
          "Magang di Industri",
          "Rekruitmen",
        ],
      },
    ],
  },
  {
    slug: "sertifikasi-internasional",
    title: "Sertifikasi Internasional",
    description: "Memberikan kesempatan kepada siswa untuk menempuh sertifikasi IT Specialist sebelum lulus.",
    icon: "badge",
    sections: [
      {
        type: "paragraph",
        text: "Memberikan pengakuan resmi atas keterampilan dan pengetahuan individu di tingkat global. Sertifikasi ini dikeluarkan oleh badan yang diakui secara internasional dan diakui industri di seluruh dunia, memastikan pemegangnya memiliki kompetensi untuk bersaing di pasar kerja internasional.",
      },
      {
        type: "checklist",
        title: "Tujuan Program",
        items: [
          "Memberikan pengakuan resmi dan diakui secara internasional",
          "Membantu individu meningkatkan keterampilan sesuai standar industri global",
          "Memperluas peluang karir di berbagai negara dan industri",
          "Mengikuti standar dan praktik terbaik yang diakui global",
          "Mengadakan ujian sertifikasi untuk menguji pemahaman dan keterampilan",
        ],
      },
      {
        type: "steps",
        title: "Tahapan Kegiatan",
        items: ["Sosialisasi ke Siswa", "Pembahasan Soal", "Pre-test", "Ujian Sertifikasi", "Unduh Sertifikat"],
      },
      {
        type: "badges",
        title: "Topik Sertifikasi",
        items: [
          "IC3 Digital Literacy",
          "Microsoft Office Specialist",
          "Adobe Certified Professional",
          "Project Management",
          "Swift Certification",
          "Entrepreneurship and Small Business (ESB)",
          "Unity Certified User",
          "IT Specialist",
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/kk/sertifikasi/1.jpg`, alt: "Sertifikasi Internasional 1" },
          { src: `${K}/program/kk/sertifikasi/2.jpg`, alt: "Sertifikasi Internasional 2" },
          { src: `${K}/program/kk/sertifikasi/3.jpg`, alt: "Sertifikasi Internasional 3" },
        ],
      },
    ],
  },
  {
    slug: "uji-kenaikan-level",
    title: "Uji Kenaikan Level",
    description: "Melakukan pemetaan kompetensi siswa setiap semesternya untuk bisa dilakukan tindak lanjut sedini mungkin.",
    icon: "trending",
    sections: [
      {
        type: "paragraph",
        text: "Evaluasi yang dirancang untuk mengetahui kemampuan dan pengetahuan individu dalam suatu bidang atau keterampilan tertentu, untuk memastikan peserta memiliki kompetensi yang diperlukan untuk naik ke tingkat yang lebih tinggi.",
      },
      {
        type: "checklist",
        title: "Tujuan Program",
        items: [
          "Menilai pengetahuan dan keterampilan peserta untuk naik ke level berikutnya",
          "Menetapkan standar kompetensi untuk kenaikan tingkat",
          "Mendorong peserta terus belajar dan meningkatkan diri",
          "Mengikuti kurikulum yang jelas dan terstruktur sesuai level yang diujikan",
          "Menggunakan kriteria penilaian yang objektif dan transparan",
        ],
      },
      {
        type: "steps",
        title: "Tahapan Kegiatan",
        items: ["Sosialisasi", "Persiapan Kompetensi", "Penentuan Tim Penguji", "Penyusunan Soal", "Pelaksanaan", "Analisis Hasil"],
      },
      {
        type: "accordion",
        title: "Topik UKL",
        items: [
          { title: "Kelas X (Semester 1)", desc: "Penguasaan pemrograman dasar dan pemrograman berorientasi objek." },
          { title: "Kelas X (Semester 2)", desc: "Penguasaan pemrograman web statis dan javascript." },
          { title: "Kelas XI (Semester 1)", desc: "Penguasaan basis data dan restful api." },
          { title: "Kelas XI (Semester 2)", desc: "Penguasaan pembuatan front end / mobile apps." },
        ],
      },
    ],
  },
];

export const konsentrasiIconMap: Record<string, string> = {
  layers: "Kelas Ekspertis",
  presentation: "Praktisi Mengajar",
  flame: "Kelas Bootcamp",
  factory: "Kelas Industri",
  badge: "Sertifikasi Internasional",
  trending: "Uji Kenaikan Level",
};
