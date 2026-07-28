import { Code2, Server, Gamepad2, Building, Utensils, Bus, Wallet, Home, Coffee, Info, Database, GitMerge, Layout, Network, DatabaseBackup, Gamepad, Paintbrush, FileCode2, Smartphone, Search, Cloud, ShieldCheck, Terminal, Palette, Bug } from 'lucide-react';

export const programDetails = {
  RPL: {
    id: 'rpl',
    title: "Rekayasa Perangkat Lunak",
    desc: "Membangun aplikasi web dan mobile dari nol sesuai standar industri, mulai dari desain antarmuka hingga rilis produk.",
    longDesc: "Mempersiapkan siswa menjadi software engineer handal yang mampu merancang, mengembangkan, dan memelihara aplikasi di berbagai platform. Lulusan RPL dibekali dengan kemampuan coding modern untuk menciptakan solusi teknologi terkini.",
    tags: ["Web Dev", "Mobile Dev", "UI/UX"],
    image: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/code.png",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    icon: Code2,
    curriculum: [
      { title: 'Pemrograman Web\ndan Perangkat Bergerak', icon: Layout },
      { title: 'Basis Data\n& SQL Server', icon: Database },
      { title: 'Algoritma &\nStruktur Data', icon: GitMerge },
      { title: 'Pemrograman\nBerorientasi Objek', icon: Code2 },
    ],
    careers: [
      {
        title: "Software Engineer",
        description: "Membangun sistem perangkat lunak yang kompleks, scalable, dan efisien untuk kebutuhan bisnis dan industri.",
        icon: Code2,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "Web Developer",
        description: "Merancang dan mengembangkan situs web atau aplikasi web yang responsif dan interaktif.",
        icon: Layout,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "Mobile Developer",
        description: "Menciptakan aplikasi mobile inovatif untuk platform Android maupun iOS.",
        icon: Smartphone,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "UI/UX Designer",
        description: "Mendesain antarmuka pengguna yang estetis dan pengalaman pengguna yang nyaman.",
        icon: Palette,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "Systems Analyst",
        description: "Menganalisis kebutuhan sistem bisnis dan merancang solusi IT yang tepat sasaran.",
        icon: Search,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      }
    ]
  },
  TKJ: {
    id: 'tkj',
    title: "Teknik Komputer & Jaringan",
    desc: "Merancang infrastruktur jaringan, cloud computing, dan keamanan siber untuk kebutuhan perusahaan modern.",
    longDesc: "Membentuk tenaga profesional di bidang infrastruktur IT, jaringan komunikasi data, sistem server, hingga keamanan siber. Lulusan TKJ disiapkan untuk menjaga nadi dunia digital tetap berdetak kencang.",
    tags: ["Networking", "Cloud", "Cyber Security"],
    image: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/network.png",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    icon: Server,
    curriculum: [
      { title: 'Teknologi Jaringan\nBerbasis Luas (WAN)', icon: Network },
      { title: 'Administrasi\nInfrastruktur Jaringan', icon: Server },
      { title: 'Administrasi\nSistem Server', icon: DatabaseBackup },
    ],
    careers: [
      {
        title: "Network Engineer",
        description: "Mengelola perangkat jaringan, instalasi infrastruktur, dan mengatasi permasalahan (*troubleshooting*) konektivitas.",
        icon: Network,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "Cloud Engineer",
        description: "Membangun dan memelihara infrastruktur server berbasis cloud (seperti AWS atau Google Cloud).",
        icon: Cloud,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "DevOps Engineer",
        description: "Mengotomatisasi proses deployment perangkat lunak dan mengelola infrastruktur TI secara efisien.",
        icon: GitMerge,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "Cyber Security Analyst",
        description: "Memantau dan mengamankan jaringan dari serangan siber serta menjaga integritas data.",
        icon: ShieldCheck,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "System Administrator",
        description: "Mengonfigurasi dan memastikan server perusahaan beroperasi dengan stabil 24/7.",
        icon: Terminal,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      }
    ]
  },
  PG: {
    id: 'pg',
    title: "Pengembangan Gim",
    desc: "Mendesain, membangun, dan merilis gim 2D & 3D dari konsep hingga produk yang siap dimainkan.",
    longDesc: "Fokus pada kreasi dan pengembangan produk interaktif (game). Siswa diajarkan bagaimana merancang permainan, aset 2D/3D, logika pemrograman, dan pengolahan audio untuk industri kreatif digital.",
    tags: ["Game Design", "2D / 3D", "Unity"],
    image: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/gim.png",
    heroImage: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    icon: Gamepad2,
    curriculum: [
      { title: 'Desain Game\n& Skenario', icon: Gamepad },
      { title: 'Pembuatan\nAset 2D & 3D', icon: Paintbrush },
      { title: 'Pemrograman\nGame Engine', icon: FileCode2 },
    ],
    careers: [
      {
        title: "Game Developer",
        description: "Menulis kode logika interaktif, menyusun pergerakan karakter, dan menyatukan elemen visual ke dalam aplikasi game jadi.",
        icon: Code2,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "Game Designer",
        description: "Merancang aturan bermain (gameplay mechanics), menyusun narasi, dan menciptakan skenario level.",
        icon: Gamepad,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "Game Artist",
        description: "Menciptakan konsep visual, gambar 2D, atau antarmuka yang menarik untuk lingkungan permainan.",
        icon: Palette,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "3D Modeler",
        description: "Membuat aset visual tiga dimensi mulai dari karakter, lingkungan, properti, hingga memberikan tekstur.",
        icon: Paintbrush,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      },
      {
        title: "QA Tester",
        description: "Memainkan game untuk mencari kutu (bugs), memverifikasi alur, dan memastikan kualitas produk akhir.",
        icon: Bug,
        iconBgClass: "bg-red-500",
        iconColorClass: "text-white"
      }
    ]
  }
};

// --- Tes Minat Bakat Data ---
export const quizQuestions = [
  {
    question: "Ketika melihat sebuah aplikasi atau website, apa yang paling menarik perhatianmu?",
    options: [
      { text: "Bagaimana fitur-fiturnya bekerja dan logika di baliknya.", type: "RPL" },
      { text: "Di mana website tersebut disimpan dan bagaimana jaringannya bekerja.", type: "TKJ" },
      { text: "Desain visual, animasi, dan bagaimana karakter atau UI-nya bergerak.", type: "PG" },
    ]
  },
  {
    question: "Kegiatan mana yang paling kamu nikmati saat menggunakan komputer/laptop?",
    options: [
      { text: "Memecahkan teka-teki logika atau mencoba-coba kode.", type: "RPL" },
      { text: "Mengatur jaringan Wi-Fi atau mengotak-atik sistem operasi/hardware.", type: "TKJ" },
      { text: "Menggambar digital, mengedit foto, atau membuat video.", type: "PG" },
    ]
  },
  {
    question: "Jika diberi tugas proyek tim, peran apa yang biasanya kamu ambil?",
    options: [
      { text: "Programmer yang mengetik kode dan membuat aplikasi berjalan.", type: "RPL" },
      { text: "Teknisi yang memastikan semua sistem dan internet terhubung lancar.", type: "TKJ" },
      { text: "Desainer yang mengatur tampilan agar terlihat menarik dan indah.", type: "PG" },
    ]
  },
  {
    question: "Apa bentuk hasil karya (output) yang paling ingin kamu buat?",
    options: [
      { text: "Aplikasi mobile, website interaktif, atau software AI.", type: "RPL" },
      { text: "Sistem jaringan yang aman, server cloud, atau infrastruktur IT.", type: "TKJ" },
      { text: "Game interaktif, animasi 3D, atau desain karakter.", type: "PG" },
    ]
  },
  {
    question: "Mata pelajaran atau materi yang lebih mudah dipahami bagimu adalah...",
    options: [
      { text: "Matematika dan Logika Terapan.", type: "RPL" },
      { text: "Fisika terapan, elektronika, atau merakit barang.", type: "TKJ" },
      { text: "Seni Budaya, menggambar, atau prakarya kreatif.", type: "PG" },
    ]
  },
  {
    question: "Saat mendapati komputer temanmu rusak, apa yang pertama kamu pikirkan?",
    options: [
      { text: "Mungkin ada sistem operasi atau software yang error/corrupt.", type: "RPL" },
      { text: "Mungkin RAM-nya longgar, kotor, atau ada kabel keras yang putus.", type: "TKJ" },
      { text: "Aku lebih suka memikirkan bagaimana tampilan luarnya (casing) dikustomisasi.", type: "PG" },
    ]
  },
  {
    question: "Profesi impian mana yang terdengar paling keren untukmu?",
    options: [
      { text: "Software Engineer atau Fullstack Developer.", type: "RPL" },
      { text: "Cloud Architect atau Network Security Engineer.", type: "TKJ" },
      { text: "Game Designer, 3D Modeler, atau Animator.", type: "PG" },
    ]
  },
  {
    question: "Bagaimana cara kamu memecahkan masalah yang sulit?",
    options: [
      { text: "Menganalisis sebab-akibat secara sistematis (step-by-step).", type: "RPL" },
      { text: "Membongkar sistemnya lalu mencoba menyusun ulang (trial & error).", type: "TKJ" },
      { text: "Mencari inspirasi visual atau pendekatan baru yang kreatif dan beda.", type: "PG" },
    ]
  },
  {
    question: "Mana yang lebih menggambarkan ketertarikanmu pada dunia game?",
    options: [
      { text: "Aku ingin tahu cara sistem permainannya (engine) memproses logika.", type: "RPL" },
      { text: "Aku ingin tahu cara server game online menampung ribuan pemain tanpa lag.", type: "TKJ" },
      { text: "Aku ingin merancang level, memodelkan karakter, dan membuat aset visualnya.", type: "PG" },
    ]
  },
  {
    question: "Software/Tools apa yang paling ingin kamu kuasai?",
    options: [
      { text: "VS Code, Android Studio, atau perangkat coding lainnya.", type: "RPL" },
      { text: "Cisco Packet Tracer, Linux Terminal, atau Mikrotik.", type: "TKJ" },
      { text: "Blender, Unity, Adobe Illustrator, atau software grafis lainnya.", type: "PG" },
    ]
  },
  {
    question: "Apa reaksimu saat melihat barisan kode program (coding) yang rumit?",
    options: [
      { text: "Penasaran dan tertantang untuk memahami fungsinya.", type: "RPL" },
      { text: "Biasa saja, aku lebih mementingkan memastikan server untuk kode itu aman.", type: "TKJ" },
      { text: "Kurang suka, aku lebih suka bekerja dengan antarmuka yang visual (drag & drop).", type: "PG" },
    ]
  },
  {
    question: "Apa pendapatmu tentang 'Keamanan Siber' (Cyber Security)?",
    options: [
      { text: "Menarik, aku ingin fokus pada mencari celah di dalam kode aplikasi.", type: "RPL" },
      { text: "Sangat penting, aku ingin melindungi arsitektur jaringan dari serangan luar.", type: "TKJ" },
      { text: "Kurang memikirkannya, aku fokus agar hasil akhir produk tampak memukau.", type: "PG" },
    ]
  },
  {
    question: "Jika kamu punya dana tak terbatas untuk proyek teknologimu, kamu akan...",
    options: [
      { text: "Membangun sistem Artificial Intelligence (AI) yang canggih.", type: "RPL" },
      { text: "Membangun Pusat Data (Data Center) dengan kecepatan internet super dewa.", type: "TKJ" },
      { text: "Membangun studio Game AAA kelas dunia dengan grafis super realistis.", type: "PG" },
    ]
  },
  {
    question: "Saat berlama-lama di depan komputer, apa yang membuatmu tidak cepat bosan?",
    options: [
      { text: "Menyelesaikan error (bug) program yang bikin penasaran sampai berhasil.", type: "RPL" },
      { text: "Mengonfigurasi dan mengoptimalkan sistem operasi/server berjam-jam.", type: "TKJ" },
      { text: "Mendesain ulang tampilan karakter atau mewarnai kanvas digital tanpa henti.", type: "PG" },
    ]
  },
  {
    question: "Bagaimana gaya kerjamu yang paling optimal?",
    options: [
      { text: "Fokus mendalam sendirian (deep work) sambil mengetik algoritma.", type: "RPL" },
      { text: "Bergerak aktif mengecek infrastruktur, alat jaringan, atau merakit PC.", type: "TKJ" },
      { text: "Berkolaborasi membahas ide kreatif, bentuk visual, dan storyboarding.", type: "PG" },
    ]
  }
];

export const jurusanInfo = {
  RPL: {
    title: "Rekayasa Perangkat Lunak (RPL)",
    desc: "Kamu memiliki logika pemrograman yang kuat dan suka memecahkan masalah sistematis. Sangat cocok menjadi Software Engineer atau App Developer!",
    icon: Code2,
    color: "bg-blue-500",
    slug: "rpl"
  },
  TKJ: {
    title: "Teknik Komputer & Jaringan (TKJ)",
    desc: "Kamu menyukai hardware, infrastruktur, dan bagaimana data bergerak. Kamu adalah calon Network Administrator atau Cloud Engineer handal!",
    icon: Server,
    color: "bg-red-500",
    slug: "tkj"
  },
  PG: {
    title: "Pengembangan Gim (PG)",
    desc: "Kamu memiliki jiwa kreatif dan artistik tinggi. Kamu ditakdirkan untuk menjadi Game Designer, 3D Modeler, atau Animator profesional!",
    icon: Gamepad2,
    color: "bg-purple-500",
    slug: "pg"
  }
};

// --- Akomodasi Data ---
export const livingCosts = [
  {
    title: "Tempat Tinggal (Kos)",
    range: "Rp 500.000 - Rp 1.500.000 / bulan",
    desc: "Tergantung fasilitas (kamar mandi dalam, AC, WiFi, dll) dan jarak dari sekolah.",
    icon: Building,
    color: "bg-accent text-white",
  },
  {
    title: "Konsumsi (Makan)",
    range: "Rp 900.000 - Rp 1.500.000 / bulan",
    desc: "Estimasi 3x makan sehari dengan harga rata-rata Rp 10.000 - Rp 15.000 per porsi di sekitar area sekolah.",
    icon: Utensils,
    color: "bg-accent text-white",
  },
  {
    title: "Transportasi",
    range: "Rp 150.000 - Rp 300.000 / bulan",
    desc: "Bagi yang kos agak jauh bisa menggunakan angkutan umum, ojek online, atau bensin kendaraan pribadi.",
    icon: Bus,
    color: "bg-accent text-white",
  },
  {
    title: "Kebutuhan Lain & Internet",
    range: "Rp 200.000 - Rp 500.000 / bulan",
    desc: "Termasuk paket data internet, laundry, alat tulis, dan kebutuhan harian lainnya.",
    icon: Wallet,
    color: "bg-accent text-white",
  },
];

export const kosRecommendations = [
  {
    area: "Area Sawojajar (Jalan Danau-Danauan)",
    distance: "500m - 1.5km",
    price: "Mulai Rp 500.000/bulan",
    features: ["Akses sangat dekat", "Banyak pilihan makanan", "Lingkungan aman"],
  },
  {
    area: "Area Sulfat & Purwantoro",
    distance: "2km - 3km",
    price: "Mulai Rp 600.000/bulan",
    features: ["Fasilitas lebih lengkap", "Akses angkutan umum mudah", "Dekat minimarket"],
  },
  {
    area: "Area Kedungkandang",
    distance: "1km - 2km",
    price: "Mulai Rp 450.000/bulan",
    features: ["Harga lebih terjangkau", "Dekat dengan pasar", "Lingkungan warga ramah"],
  },
];

export const foodRecommendations = [
  {
    name: "Kantin Sekolah (Moklet Canteen)",
    type: "Berbagai Menu",
    desc: "Pilihan utama yang praktis, bersih, dan harga terjangkau khusus pelajar. Tersedia nasi campur, soto, mie ayam, dll.",
    icon: Home,
  },
  {
    name: "Warung Makan Sekitar Danau Ranau",
    type: "Nasi Campur & Lalapan",
    desc: "Banyak warung prasmanan dan lalapan ayam/lele dengan harga mulai dari Rp 10.000, porsi mengenyangkan.",
    icon: Utensils,
  },
  {
    name: "Sentra Kuliner Sawojajar",
    type: "Kuliner Malam",
    desc: "Saat malam hari, ruko-ruko di Sawojajar dipenuhi pedagang kaki lima seperti nasi goreng, martabak, dan terang bulan.",
    icon: Coffee,
  },
  {
    name: "Warkop & Cafe Pelajar",
    type: "Nongkrong & Nugas",
    desc: "Banyak cafe ramah kantong pelajar dengan fasilitas WiFi gratis yang cocok untuk mengerjakan tugas kelompok.",
    icon: Info,
  }
];

// --- Berita / News Data ---
export const newsData = [
  {
    id: 1,
    slug: 'siswa-smk-telkom-sabet-juara-1-lks',
    category: 'prestasi',
    categoryLabel: 'Prestasi',
    badgeColor: 'bg-accent',
    date: '12 Oktober 2026',
    title: 'Siswa SMK Telkom Malang Sabet Juara 1 LKS Nasional Bidang IT',
    desc: 'Prestasi membanggakan kembali diraih oleh siswa SMK Telkom Malang yang berhasil menjadi juara pertama dalam Lomba Kompetensi Siswa (LKS) Nasional.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    content: [
      "Pelestarian budaya lokal tidak lagi harus dilakukan melalui cara-cara konvensional. Dua siswa Jurusan Pengembangan Gim SMK Telkom Malang membuktikan bahwa teknologi dapat menjadi jembatan yang efektif untuk mengenalkan budaya kepada generasi muda. Lewat inovasi board game berbasis Augmented Reality (AR) bernama Nwasena Seri Batik Malang, mereka menghadirkan pengalaman belajar batik yang interaktif, menyenangkan, sekaligus relevan dengan dunia anak-anak masa kini.",
      "Inovasi tersebut dikembangkan oleh Alyan Riqha dan Naura Sahrina, siswa kelas XI Jurusan Pengembangan Gim SMK Telkom Malang. Nwasena memadukan permainan papan dengan teknologi Augmented Reality (AR), yaitu teknologi yang memproyeksikan objek digital seperti gambar 3D maupun 2D, teks, dan animasi ke dunia nyata secara real-time melalui gawai.",
      "Melalui kartu AR yang tersedia dalam permainan, pemain dapat memindai berbagai konten digital untuk mengenal motif batik Malang. Filosofi di balik setiap motif, hingga informasi budaya yang disajikan secara menarik. Pendekatan ini membuat proses belajar terasa seperti bermain, bukan mengikuti pembelajaran formal di dalam kelas."
    ]
  },
  {
    id: 2,
    slug: 'belajar-teknologi-standar-global',
    category: 'akademik',
    categoryLabel: 'Akademik',
    badgeColor: 'bg-blue-600',
    date: '06 March 2026',
    title: 'Belajar Teknologi dengan Standar Global di SMK Telkom Malang',
    desc: 'SMK Telkom Malang terus berinovasi dalam memberikan pembelajaran berbasis standar industri global kepada siswanya.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    content: [
      "Pembelajaran di SMK Telkom Malang kini semakin terintegrasi dengan standar global. Hal ini diwujudkan dengan sertifikasi internasional yang diwajibkan bagi seluruh siswa di berbagai jurusan.",
      "Langkah ini bertujuan untuk memastikan bahwa lulusan tidak hanya siap kerja di tingkat nasional, tetapi juga mampu bersaing di kancah internasional."
    ]
  },
  {
    id: 3,
    slug: 'siswa-ciptakan-game-edukasi-ar',
    category: 'karya-siswa',
    categoryLabel: 'Karya Siswa',
    badgeColor: 'bg-emerald-600',
    date: '19 July 2026',
    title: 'Siswa Jurusan Pengembangan Gim Ciptakan Edukasi AR',
    desc: 'Inovasi menarik dari siswa jurusan Pengembangan Gim yang menciptakan game edukasi berbasis Augmented Reality untuk mengenalkan budaya lokal.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    content: [
      "Pelestarian budaya lokal tidak lagi harus dilakukan melalui cara-cara konvensional. Dua siswa Jurusan Pengembangan Gim SMK Telkom Malang membuktikan bahwa teknologi dapat menjadi jembatan yang efektif untuk mengenalkan budaya kepada generasi muda. Lewat inovasi board game berbasis Augmented Reality (AR) bernama Nwasena Seri Batik Malang, mereka menghadirkan pengalaman belajar batik yang interaktif, menyenangkan, sekaligus relevan dengan dunia anak-anak masa kini.",
      "Inovasi tersebut dikembangkan oleh Alyan Riqha dan Naura Sahrina, siswa kelas XI Jurusan Pengembangan Gim SMK Telkom Malang. Nwasena memadukan permainan papan dengan teknologi Augmented Reality (AR), yaitu teknologi yang memproyeksikan objek digital seperti gambar 3D maupun 2D, teks, dan animasi ke dunia nyata secara real-time melalui gawai.",
      "Melalui kartu AR yang tersedia dalam permainan, pemain dapat memindai berbagai konten digital untuk mengenal motif batik Malang. Filosofi di balik setiap motif, hingga informasi budaya yang disajikan secara menarik. Pendekatan ini membuat proses belajar terasa seperti bermain, bukan mengikuti pembelajaran formal di dalam kelas."
    ]
  },
  {
    id: 4,
    slug: 'sertifikasi-internasional-mikrotik',
    category: 'akademik',
    categoryLabel: 'Akademik',
    badgeColor: 'bg-blue-600',
    date: '28 September 2026',
    title: 'Sertifikasi Internasional MikroTik untuk Siswa TKJ',
    desc: 'Kegiatan sertifikasi ini diikuti oleh lebih dari 100 siswa kelas XII jurusan TKJ sebagai bekal sebelum mereka terjun ke dunia industri dan profesional.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    content: [
      "Dalam rangka meningkatkan kompetensi lulusan, SMK Telkom Malang kembali mengadakan program sertifikasi internasional MikroTik bagi siswa kelas XII jurusan TKJ.",
      "Program ini diharapkan dapat menjadi nilai tambah yang signifikan bagi siswa saat mereka memasuki dunia kerja nanti."
    ]
  },
  {
    id: 5,
    slug: 'kunjungan-industri-tokopedia',
    category: 'event',
    categoryLabel: 'Event',
    badgeColor: 'bg-orange-500',
    date: '15 September 2026',
    title: 'Kunjungan Industri ke Kantor Pusat Tokopedia',
    desc: 'Rombongan siswa RPL mendapatkan wawasan langsung mengenai kultur kerja startup unicorn dan proses pengembangan perangkat lunak berskala besar.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
    content: [
      "Sebanyak 50 siswa jurusan Rekayasa Perangkat Lunak berkesempatan melakukan kunjungan industri ke kantor pusat Tokopedia di Jakarta.",
      "Selama kunjungan, siswa diajak berkeliling melihat suasana kerja di perusahaan teknologi terkemuka dan mendapatkan sesi sharing langsung dari para engineers Tokopedia."
    ]
  }
];

