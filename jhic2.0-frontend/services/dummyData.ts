import { Code2, Server, Gamepad2, Building, Utensils, Bus, Wallet, Home, Coffee, Info } from 'lucide-react';

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
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Konsumsi (Makan)",
    range: "Rp 900.000 - Rp 1.500.000 / bulan",
    desc: "Estimasi 3x makan sehari dengan harga rata-rata Rp 10.000 - Rp 15.000 per porsi di sekitar area sekolah.",
    icon: Utensils,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Transportasi",
    range: "Rp 150.000 - Rp 300.000 / bulan",
    desc: "Bagi yang kos agak jauh bisa menggunakan angkutan umum, ojek online, atau bensin kendaraan pribadi.",
    icon: Bus,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Kebutuhan Lain & Internet",
    range: "Rp 200.000 - Rp 500.000 / bulan",
    desc: "Termasuk paket data internet, laundry, alat tulis, dan kebutuhan harian lainnya.",
    icon: Wallet,
    color: "bg-purple-50 text-purple-600",
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
