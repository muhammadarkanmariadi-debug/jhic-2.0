import { CurriculumTab } from "@/shared/types";

const K = "/images/kurikulum";

// Mirror of kurikulum.smktelkom-mlg.sch.id/program_utama.html (Program Umum)
export const programUmumTabs: CurriculumTab[] = [
  {
    key: "bilingual",
    label: "Moklet Bilingual",
    intro:
      "Meningkatkan keterampilan bahasa Inggris siswa melalui platform pembelajaran online English Discoveries. Kerja sama dengan lembaga ITC bertujuan untuk menyediakan solusi pembelajaran bahasa Inggris yang komprehensif dan mudah diakses oleh siswa.",
    sections: [
      {
        type: "checklist",
        title: "Ringkasan Kegiatan",
        items: [
          "Kursus dan Materi Pembelajaran: menyediakan berbagai kursus yang dibagi menjadi unit-unit berdasarkan topik, dengan materi mendengarkan, berbicara, membaca, dan menulis.",
          "Latihan dan Ujian: siswa mengikuti tes untuk mengukur pemahaman materi — pilihan ganda, mencocokkan, dan pertanyaan terbuka.",
          "Fitur Rekam Diri: siswa merekam suara untuk melatih pelafalan dan mengirimkan rekaman terbaik untuk mendapat umpan balik.",
          "Tugas Menulis: platform menyediakan fitur evaluasi otomatis dengan umpan balik instan.",
          "Komunitas Pembelajaran: siswa berinteraksi dengan sesama siswa dan guru melalui forum diskusi dan fitur pesan.",
        ],
      },
      {
        type: "cards",
        title: "Dampak Kegiatan",
        items: [
          { title: "Peningkatan Keterampilan Bahasa", desc: "Siswa menunjukkan peningkatan signifikan dalam mendengarkan, berbicara, membaca, dan menulis bahasa Inggris.", icon: "award" },
          { title: "Kepercayaan Diri", desc: "Siswa lebih percaya diri menggunakan bahasa Inggris dalam berbagai konteks, lisan maupun tulisan.", icon: "users" },
          { title: "Akses Pembelajaran", desc: "Platform online memungkinkan siswa belajar kapan saja dan di mana saja.", icon: "lightbulb" },
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/moklet_bilingual/2.png`, alt: "Moklet Bilingual" },
          { src: `${K}/program/moklet_bilingual/3.png`, alt: "Moklet Bilingual" },
          { src: `${K}/program/moklet_bilingual/4.png`, alt: "Moklet Bilingual" },
          { src: `${K}/program/moklet_bilingual/1.jpg`, alt: "Moklet Bilingual" },
        ],
      },
    ],
  },
  {
    key: "tahfidz",
    label: "Tahfidz",
    intro:
      "Kegiatan tahfidz ditujukan untuk meningkatkan kemampuan siswa membaca dan menghafal juz 30 sesuai hukum bacaan (tajwid) dan makhraj yang benar, memanfaatkan LMS sekolah dengan video tuntunan bacaan per baris ayat.",
    sections: [
      {
        type: "checklist",
        title: "Ringkasan Kegiatan",
        items: [
          "Menyimak dan menirukan bacaan yang ditampilkan secara berulang.",
          "Uji hafalan: siswa diberikan potongan ayat untuk menentukan lanjutan atau menyempurnakannya.",
          "Asah pemahaman ayat: siswa mengerjakan soal seputar makna ayat yang dihafalkan.",
          "Uji hukum bacaan: siswa menentukan hukum bacaan (tajwid) dari ayat yang diberikan.",
          "Monitoring: guru Tahfidz memeriksa hasil dan menyetorkan hafalan sesuai target mingguan.",
          "Munaqosyah: ujian akhir untuk mengukur kemampuan membaca dan menghafal juz 30.",
        ],
      },
      {
        type: "cards",
        title: "Hasil Kegiatan",
        items: [
          { title: "Maqbul", desc: "Mampu menghafal surat di juz 30 sebanyak 1-90 baris.", icon: "award" },
          { title: "Jayyid", desc: "Mampu menghafal antara 90-180 ayat.", icon: "award" },
          { title: "Jayyid Jiddan", desc: "Mampu menghafal antara 180 hingga 279 ayat.", icon: "award" },
          { title: "Mumtaz", desc: "Mampu menghafal antara 279-345 ayat.", icon: "award" },
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/tahfidz/2.png`, alt: "Kegiatan Tahfidz" },
          { src: `${K}/program/tahfidz/1.jpg`, alt: "Kegiatan Tahfidz" },
          { src: `${K}/program/tahfidz/3.png`, alt: "Kegiatan Tahfidz" },
        ],
      },
    ],
  },
  {
    key: "moklet-serve",
    label: "Moklet Serve",
    intro:
      'MOKLET SERVE "Social Empowering and Volunteering for Education" merupakan rangkaian kegiatan Proyek Penguatan Profil Pelajar Pancasila (P5) tema Gaya Hidup Berkelanjutan untuk mengembangkan rasa kepedulian dan kebermanfaatan diri pada lingkungan sosial masyarakat.',
    sections: [
      {
        type: "accordion",
        title: "Tujuan Kegiatan",
        items: [
          {
            title: "Bagi Siswa",
            desc: "- Meningkatkan kualitas dan kepercayaan diri\n- Meningkatkan kepedulian terhadap lingkungan sekitar\n- Meningkatkan kemampuan hardskills dan softskills",
          },
          {
            title: "Bagi Masyarakat",
            desc: "- Membantu meningkatkan kualitas hidup masyarakat\n- Membantu mengembangkan potensi masyarakat\n- Membantu meningkatkan kualitas sumber daya manusia",
          },
        ],
      },
      {
        type: "steps",
        title: "Tahapan Kegiatan",
        items: [
          "Sosialisasi",
          "Penentuan Kelompok",
          "Penentuan Mentor",
          "Penentuan Tujuan",
          "Perizinan Orang Tua",
          "Perizinan Lokasi",
          "Persiapan Kegiatan",
          "Pelaksanaan Kegiatan",
          "Panen Karya",
        ],
      },
      {
        type: "cards",
        title: "Program Kegiatan",
        items: [
          { title: "Pelatihan & Pendidikan", desc: "Pelatihan atau workshop bagi masyarakat, serta menjadi tutor bagi anak-anak yang membutuhkan bantuan belajar.", icon: "lightbulb" },
          { title: "Pembersihan Lingkungan", desc: "Kegiatan pembersihan dan penghijauan lingkungan, termasuk taman, pantai, sungai, dan area publik.", icon: "recycle" },
          { title: "Relawan", desc: "Menjadi relawan organisasi nirlaba atau proyek sosial, seperti pengumpulan donasi dan mentor muda.", icon: "heart" },
          { title: "Seni & Kreativitas", desc: "Mengembangkan keterampilan seni, pertunjukan, festival budaya, atau lokakarya seni.", icon: "sparkles" },
          { title: "Kegiatan Sosial", desc: "Bermain dengan anak yatim, mengunjungi panti jompo, dan kegiatan bersama anak-anak.", icon: "heart" },
          { title: "Teknologi", desc: "Memberikan pelatihan teknologi kepada masyarakat yang belum memiliki akses komputer atau internet.", icon: "target" },
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/1.png`, alt: "Bakti Sosial 1" },
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/2.png`, alt: "Bakti Sosial 2" },
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/3.png`, alt: "Bakti Sosial 3" },
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/4.png`, alt: "Bakti Sosial 4" },
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/5.png`, alt: "Bakti Sosial 5" },
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/6.png`, alt: "Bakti Sosial 6" },
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/7.png`, alt: "Pelatihan & Pendidikan I", caption: "Kegiatan belajar bersama adik-adik di TK Pertiwi 2 Beru." },
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/8.png`, alt: "Pelatihan & Pendidikan III", caption: "Tim Healthy Young Generation mengajarkan cuci tangan, memilah sampah, dan senam bersama di TK Pertiwi 2 Beru." },
          { src: `${K}/program/p5/gaya_hidup_berkelanjutan/9.png`, alt: "Kegiatan Desa Kalidawir", caption: "Membersihkan lingkungan, kajian Alquran, dan olahraga bersama di desa Kalidawir, Tulungagung." },
        ],
      },
      {
        type: "testimonials",
        title: "Refleksi & Umpan Balik",
        items: [
          { name: "Pak Rendi", role: "Guru & Pendamping", quote: "Kegiatan P5 memberikan peluang besar bagi siswa untuk mengembangkan keterampilan non-akademik seperti kepemimpinan, kerja tim, dan kreativitas. Saya melihat peningkatan signifikan dalam kemampuan siswa bekerja sama dan menyelesaikan masalah secara mandiri." },
          { name: "Daxier", role: "Kelas XI TKJ 5", quote: "Melalui kegiatan Moklet Serve, saya belajar bekerja dalam tim dan mengatasi tantangan. Saya lebih percaya diri berkomunikasi dan menyampaikan ide, serta berpikir lebih kreatif dalam menyelesaikan masalah." },
          { name: "Ibrahim", role: "Kelas XI RPL", quote: "Moklet Serve mengajarkan saya untuk lebih percaya diri mengemukakan ide. Saya sering mempresentasikan hasil kerja, yang sangat membantu meningkatkan kemampuan komunikasi." },
          { name: "Bapak Adi", role: "Orang Tua Ibrahim", quote: "Kami sangat menghargai program Moklet Serve karena anak kami menunjukkan perkembangan signifikan dalam keterampilan sosial dan kepercayaan diri." },
          { name: "Bu Umi", role: "Guru Pertiwi Beru 2, Kab. Blitar", quote: "Kami sangat mengapresiasi proyek edukasi teknologi oleh siswa. Ini menunjukkan siswa tidak hanya belajar untuk diri sendiri tetapi juga berkontribusi kepada masyarakat." },
        ],
      },
    ],
  },
  {
    key: "factory-tour",
    label: "Factory Tour",
    intro:
      "Projek P5 tema Kebekerjaan dimaksudkan untuk menggali dan mengembangkan potensi peserta didik agar memahami ruang lingkup dan karakteristik pekerjaan sesuai dengan program keahliannya.",
    sections: [
      {
        type: "checklist",
        title: "Tujuan Kegiatan",
        items: [
          "Pengembangan Keterampilan Kerja",
          "Pengenalan Dunia Kerja",
          "Peningkatan Kompetensi Diri",
          "Pengalaman Kerja Langsung",
          "Persiapan Karir",
        ],
      },
      {
        type: "badges",
        title: "Ruang Lingkup Kegiatan",
        items: [
          "Membangun Impian",
          "Bekali diri literasi digital",
          "Mengenal potensi lokal",
          "Komunikasi efektif",
          "Kolaborasi dunia kerja",
          "Kreativitas & proaktif",
          "Aktualisasi diri",
          "Personal branding",
        ],
      },
      {
        type: "steps",
        title: "Tahapan Kegiatan",
        items: [
          "Sosialisasi",
          "Penentuan Kelompok",
          "Penentuan Mentor",
          "Penentuan Tujuan",
          "Perizinan Orang Tua",
          "Perizinan Lokasi",
          "Persiapan Kegiatan",
          "Pelaksanaan Kegiatan",
          "Panen Karya",
        ],
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/p5/kebekerjaan/1.jpeg`, alt: "Factory Tour 1" },
          { src: `${K}/program/p5/kebekerjaan/2.jpeg`, alt: "Factory Tour 2" },
          { src: `${K}/program/p5/kebekerjaan/3.jpeg`, alt: "Factory Tour 3" },
          { src: `${K}/program/p5/kebekerjaan/4.jpeg`, alt: "Factory Tour 4" },
          { src: `${K}/program/p5/kebekerjaan/5.jpeg`, alt: "Factory Tour 5" },
          { src: `${K}/program/p5/kebekerjaan/6.jpeg`, alt: "Factory Tour 6" },
        ],
      },
    ],
  },
  {
    key: "idea-challenge",
    label: "Moklet Idea Challenge",
    intro:
      'P5 tema Rekayasa dan Teknologi diselenggarakan untuk mengembangkan kemampuan siswa dalam berpikir kritis, inovatif, dan kreatif. Proyek ini dikemas dalam kegiatan "Moklet Idea Challenge (MIC) 2024" yang mendorong siswa menciptakan ide bisnis berupa produk IT sebagai solusi dari masalah di sekitar.',
    sections: [
      {
        type: "checklist",
        title: "Persiapan",
        items: [
          "Membentuk tim panitia, fasilitator, dan mentor dari guru-guru internal SMK Telkom Malang.",
          "Bekerja sama dengan pihak eksternal untuk menghadirkan praktisi ahli di bidang pengembangan bisnis.",
          "Melakukan sosialisasi kegiatan kepada siswa dan guru.",
        ],
      },
      {
        type: "accordion",
        title: "Pelaksanaan",
        items: [
          {
            title: "Bootcamp",
            desc: "Para praktisi berbagi wawasan dan pengalaman mengembangkan bisnis. Topik: Business ideation & idea validation, Product creation, Marketing and branding, Pitching Hacks.",
          },
          {
            title: "Mentoring Pitch Deck",
            desc: "Siswa bertemu guru mentor untuk menyelesaikan pitch deck ide bisnis, sambil dilakukan pengamatan dan penilaian perkembangan dimensi P5.",
          },
          {
            title: "Panen Karya (Demo Day)",
            desc: "Siswa memamerkan pitch deck; karya terbaik dipresentasikan di hadapan seluruh audiens.",
          },
        ],
      },
      {
        type: "paragraph",
        title: "Hasil Kegiatan",
        text: "Dari rangkaian kegiatan ini, telah dihasilkan 126 proposal atau pitch deck ide bisnis yang dikembangkan oleh siswa/i SMK Telkom Malang. Ide bisnis tersebut mengangkat beragam isu, mulai dari pendidikan, budaya, kesehatan, hingga gaya hidup.",
      },
      {
        type: "gallery",
        title: "Dokumentasi",
        images: [
          { src: `${K}/program/p5/rekayasa_dan_teknologi/1.png`, alt: "Hasil Karya — Nutur", caption: "Nutur — aplikasi pembelajaran bahasa daerah dengan latihan soal, mentor, AI chat, dan komunitas." },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/2.png`, alt: "Hasil Karya — RE-SHARE", caption: "RE-SHARE — transaksi jual beli barang bekas untuk mengurangi limbah tekstil." },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/3.png`, alt: "Hasil Karya — FinFit", caption: "FinFit — marketplace fashion dengan teknologi AR." },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/4.png`, alt: "Hasil Karya — SportEase", caption: "SportEase — aplikasi bantu aktivitas olahraga, pesan tempat, cari pelatih, dan komunitas." },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/5.png`, alt: "Hasil Karya — HewanKu", caption: "HewanKu" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/6.jpg`, alt: "Bootcamp 1" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/7.png`, alt: "Bootcamp 2" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/8.png`, alt: "Bootcamp 3" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/9.png`, alt: "Bootcamp 4" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/10.png`, alt: "Bootcamp 5" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/11.png`, alt: "Bootcamp 6" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/12.png`, alt: "Bootcamp 7" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/13.png`, alt: "Bootcamp 8" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/14.jpg`, alt: "Mentoring 1" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/15.jpg`, alt: "Mentoring 2" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/16.jpg`, alt: "Mentoring 3" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/17.jpg`, alt: "Demo Day 1" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/18.jpg`, alt: "Demo Day 2" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/19.jpg`, alt: "Demo Day 3" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/20.jpg`, alt: "Demo Day 4" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/21.png`, alt: "Demo Day 5" },
          { src: `${K}/program/p5/rekayasa_dan_teknologi/22.jpg`, alt: "Demo Day 6" },
        ],
      },
    ],
  },
  {
    key: "sertifikasi-bahasa",
    label: "Sertifikasi Bahasa",
    intro: "",
    sections: [
      {
        type: "paragraph",
        title: "TOEFL",
        text: "TOEFL adalah tes terstandarisasi untuk mengukur kemampuan bahasa Inggris seseorang yang bahasa ibunya bukan bahasa Inggris dan bertujuan bekerja atau kuliah di negara berbahasa Inggris. SMK Telkom Malang membekali siswa dengan sertifikasi TOEFL — persiapan dimulai dari pembagian edaran kegiatan lalu pembahasan tipe soal, dan pelaksanaan dilakukan secara daring dengan pendampingan tim ITC (International Test Center).",
      },
      {
        type: "table",
        title: "Hasil Kegiatan TOEFL",
        headers: ["Level", "Skor", "Jumlah Siswa"],
        rows: [
          ["Elementary", "310-419", "94 Siswa"],
          ["Low intermediate", "420-479", "118 Siswa"],
          ["High intermediate", "480-524", "104 Siswa"],
          ["Advanced", "525-677", "163 Siswa"],
        ],
      },
      {
        type: "paragraph",
        title: "TOEIC",
        text: "Tes TOEIC Listening and Reading menilai keterampilan mendengarkan dan membaca bahasa Inggris di tempat kerja. TOEIC adalah tes yang paling banyak digunakan di dunia — 14.000+ organisasi di 160+ negara mempercayai skor TOEIC. SMK Telkom Malang mengikuti SMK English Challenge sejak 2016 dan meluluskan banyak siswa.",
      },
      {
        type: "table",
        title: "Hasil Kegiatan TOEIC",
        headers: ["Level", "Skor", "Jumlah Siswa"],
        rows: [
          ["Basic 2", "255-400", "37 Siswa"],
          ["Intermediate 1", "405-600", "158 Siswa"],
          ["Intermediate 2", "605-780", "87 Siswa"],
          ["Advanced 1", "785-900", "32 Siswa"],
          ["Advanced 2", "905-990", "10 Siswa"],
        ],
      },
      {
        type: "gallery",
        images: [
          { src: `${K}/program/sertifikasi/1.png`, alt: "Kegiatan TOEIC 1" },
          { src: `${K}/program/sertifikasi/2.png`, alt: "Kegiatan TOEIC 2" },
        ],
      },
      {
        type: "paragraph",
        title: "UKBI",
        text: "UKBI adalah tes standar untuk mengetahui tingkat kemahiran berbahasa penutur bahasa Indonesia. SMK Telkom Malang menyelenggarakan sertifikasi ini agar profil lulusannya mampu menggunakan bahasa Indonesia dengan baik dan benar. Persiapan dimulai dengan edaran kegiatan, sosialisasi, lalu latihan soal.",
      },
      {
        type: "table",
        title: "Hasil Kegiatan UKBI",
        headers: ["Predikat", "Skor", "Deskripsi", "Jumlah Siswa"],
        rows: [
          ["Istimewa", "725-800", "Kemahiran sempurna; tidak ada kendala untuk keperluan personal, sosial, keprofesian, keilmiahan", "0 Siswa"],
          ["Sangat Unggul", "641-724", "Kemahiran sangat tinggi; kendala kecil untuk akademik kompleks", "46 Siswa"],
          ["Unggul", "578-640", "Kemahiran sangat memadai; tidak terkendala untuk keprofesian", "90 Siswa"],
          ["Madya", "482-577", "Kemahiran memadai; kendala untuk keprofesian kompleks", "156 Siswa"],
          ["Semenjana", "405-481", "Kemahiran cukup memadai; kendala untuk keprofesian kompleks", "156 Siswa"],
          ["Marginal", "326-404", "Kemahiran tidak memadai; belum siap keprofesian/keilmiahan", "42 Siswa"],
          ["Terbatas", "251-325", "Kemahiran sangat tidak memadai; hanya mampu komunikasi untuk sintas", "7 Siswa"],
        ],
      },
      {
        type: "gallery",
        images: [
          { src: `${K}/program/sertifikasi/3.png`, alt: "Kegiatan UKBI 1" },
          { src: `${K}/program/sertifikasi/4.png`, alt: "Kegiatan UKBI 2" },
        ],
      },
    ],
  },
];
