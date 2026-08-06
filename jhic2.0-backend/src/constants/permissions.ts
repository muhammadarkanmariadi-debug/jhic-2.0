// JHI-v2-10 — Permission keys for division-based RBAC.
// Each division's admin gets a scoped set. Super Admin bypasses all checks.

export const PERMISSIONS = {
  FEATURED_PROGRAM_MANAGE: "featuredProgram.manage", // Admin Kurikulum
  CURRICULUM_MANAGE: "curriculum.manage", // Admin Kurikulum
  PARTNER_SYNC_MANAGE: "partnerSync.manage", // Admin Humas
  GURU_MANAGE: "guru.manage", // Admin Humas
  LOKER_MANAGE: "loker.manage", // Admin Hubin
  BEASISWA_MANAGE: "beasiswa.manage", // Admin Hubin
  PARTNER_MANAGE: "partner.manage", // Admin Hubin (industry partner directory)
  LOMBA_MANAGE: "lomba.manage", // Admin Humas (Informasi / Lomba)
  EKSKUL_MANAGE: "ekskul.manage", // Admin Kesiswaan
  ORGANISASI_MANAGE: "organisasi.manage", // Admin Kesiswaan
  NEWS_MANAGE: "news.manage", // Admin Konten
  SCHEDULE_MANAGE: "schedule.manage", // Admin Konten (Jadwal Sekolah)
  SPMB_MANAGE: "spmb.manage", // Admin SPMB
  SUPPORT_REPLY: "support.reply", // Admin Support
} as const;

export type PermissionKey = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

// Division scope attached to a Role (matches schema.prisma Role.division)
export const DIVISIONS = {
  SUPER_ADMIN: "SUPER_ADMIN",
  KONTEN: "KONTEN",
  SPMB: "SPMB",
  SUPPORT: "SUPPORT",
  KURIKULUM: "KURIKULUM",
  HUBIN: "HUBIN",
  KESISWAAN: "KESISWAAN",
  HUMAS: "HUMAS",
} as const;

export type Division = (typeof DIVISIONS)[keyof typeof DIVISIONS];
