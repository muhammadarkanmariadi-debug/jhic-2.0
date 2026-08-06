export interface BotIntent {
  intent: string;
  label: string; // quick-reply chip label
  keywords: string[];
  answer: string;
  escalateTo?: string | null;
}

// MokletBot fallback knowledge base (mirrors the seeded BotIntent rows on the backend).
export const botIntents: BotIntent[] = [
  {
    intent: "pendaftaran",
    label: "Pendaftaran SPMB",
    keywords: ["pendaftaran", "ppdb", "spmb", "daftar", "masuk smk"],
    answer: "Pendaftaran SPMB dilakukan melalui portal resmi yayasan. Kunjungi halaman SPMB untuk alur dan persyaratan lengkapnya.",
  },
  {
    intent: "konsentrasi",
    label: "Konsentrasi/Jurusan",
    keywords: ["jurusan", "konsentrasi", "rpl", "tkj", "gim", "program"],
    answer: "SMK Telkom Malang memiliki 3 konsentrasi keahlian: RPL, TKJ, dan Pengembangan Gim. Lihat halaman Program Konsentrasi Keahlian untuk detailnya.",
  },
  {
    intent: "biaya",
    label: "Biaya & Akomodasi",
    keywords: ["biaya", "akomodasi", "kos", "harga", "bayar", "hidup"],
    answer: "Estimasi biaya hidup dapat dilihat di halaman Akomodasi, termasuk rekomendasi kos dan kalkulator biaya bulanan.",
  },
  {
    intent: "beasiswa",
    label: "Beasiswa",
    keywords: ["beasiswa", "bantuan", "keringanan", "prestasi"],
    answer: "Info beasiswa tersedia di halaman Info Beasiswa.",
  },
  {
    intent: "loker",
    label: "Lowongan & Karier",
    keywords: ["kerja", "lowongan", "karier", "magang", "loker"],
    answer: "Info lowongan kerja dan magang tersedia di halaman Info Lowongan Kerja serta Karir & Prospek Kerja.",
  },
  {
    intent: "kurikulum",
    label: "Kurikulum",
    keywords: ["kurikulum", "sertifikasi", "expertise", "umum"],
    answer: "Kurikulum dijelaskan pada menu Program — Program Umum, Program Konsentrasi Keahlian, dan Persiapan Kelulusan.",
  },
  {
    intent: "kontak",
    label: "Hubungi Kami",
    keywords: ["kontak", "hubungi", "telepon", "email", "alamat", "bantuan"],
    answer: "Anda dapat menghubungi kami melalui halaman Hubungi Kami, atau menunggu koneksi ke tim Service Desk.",
    escalateTo: "Service Desk",
  },
];

export const botDefaultReply =
  "Maaf, saya belum memahami pertanyaan Anda. Silakan hubungi layanan kami, atau pilih salah satu topik bantuan di bawah ini.";

/** Client-side keyword matcher (used when the backend API is unreachable). */
export function matchLocalIntent(message: string): BotIntent | null {
  const text = message.toLowerCase().trim();
  let best: BotIntent | null = null;
  let bestScore = 0;
  for (const intent of botIntents) {
    const score = intent.keywords.filter((kw) => kw && text.includes(kw.toLowerCase())).length;
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  return best;
}