import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma.js";
import { PERMISSIONS, DIVISIONS, PermissionKey } from "../src/constants/permissions.js";

/**
 * JHI-v2-10 — Seed division-based RBAC: permissions, then roles scoped per
 * division with their permission set. Run via `npx prisma db seed`.
 */
async function main() {
  // 1. Permissions
  for (const key of Object.values(PERMISSIONS)) {
    await prisma.permission.upsert({
      where: { key },
      update: { description: key },
      create: { key, description: key },
    });
  }

  // 2. Roles with division scope
  const roles: { name: string; division: string; permissions: PermissionKey[] }[] = [
    { name: "Super Admin", division: DIVISIONS.SUPER_ADMIN, permissions: Object.values(PERMISSIONS) },
    { name: "Admin Kurikulum", division: DIVISIONS.KURIKULUM, permissions: [PERMISSIONS.FEATURED_PROGRAM_MANAGE, PERMISSIONS.CURRICULUM_MANAGE] },
    { name: "Admin Hubin", division: DIVISIONS.HUBIN, permissions: [PERMISSIONS.LOKER_MANAGE, PERMISSIONS.BEASISWA_MANAGE, PERMISSIONS.PARTNER_MANAGE] },
    { name: "Admin Humas", division: DIVISIONS.HUMAS, permissions: [PERMISSIONS.PARTNER_SYNC_MANAGE, PERMISSIONS.GURU_MANAGE, PERMISSIONS.LOMBA_MANAGE] },
    { name: "Admin Kesiswaan", division: DIVISIONS.KESISWAAN, permissions: [PERMISSIONS.EKSKUL_MANAGE, PERMISSIONS.ORGANISASI_MANAGE] },
    { name: "Admin Konten", division: DIVISIONS.KONTEN, permissions: [PERMISSIONS.NEWS_MANAGE] },
    { name: "Admin SPMB", division: DIVISIONS.SPMB, permissions: [PERMISSIONS.SPMB_MANAGE] },
    { name: "Admin Support", division: DIVISIONS.SUPPORT, permissions: [PERMISSIONS.SUPPORT_REPLY] },
  ];

  for (const r of roles) {
    await prisma.role.upsert({
      where: { name: r.name },
      update: { division: r.division },
      create: { name: r.name, description: `${r.division} division admin`, division: r.division },
    });
    const role = await prisma.role.findUnique({ where: { name: r.name } });
    if (!role) continue;

    await prisma.rolePermission.deleteMany({ where: { roleId: role.id } });
    for (const key of r.permissions) {
      const perm = await prisma.permission.findUnique({ where: { key } });
      if (perm) {
        await prisma.rolePermission.create({ data: { roleId: role.id, permissionId: perm.id } });
      }
    }
  }

  // 3. Default Super Admin user (override via SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD)
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? "admin@smktelkom-mlg.sch.id";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "Admin123!";
  const adminRole = await prisma.role.findUnique({ where: { name: "Super Admin" } });
  if (adminRole) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await prisma.user.upsert({
      where: { email: adminEmail },
      update: { passwordHash, roleId: adminRole.id, isActive: true },
      create: {
        email: adminEmail,
        passwordHash,
        fullName: "Super Admin",
        roleId: adminRole.id,
      },
    });
    console.log(`Seeded Super Admin: ${adminEmail}`);
  }

  // 4. MokletBot intents (JHI-12)
  const botIntents = [
    { intent: "pendaftaran", keywords: ["pendaftaran", "ppdb", "spmb", "daftar", "masuk smk"], answer: "Pendaftaran SPMB dilakukan melalui portal resmi yayasan. Kunjungi halaman SPMB untuk alur dan persyaratan lengkapnya.", escalateTo: null },
    { intent: "konsentrasi", keywords: ["jurusan", "konsentrasi", "rpl", "tkj", "gim", "program"], answer: "SMK Telkom Malang memiliki 3 konsentrasi keahlian: RPL, TKJ, dan Pengembangan Gim. Lihat halaman Program Konsentrasi Keahlian untuk detailnya.", escalateTo: null },
    { intent: "biaya", keywords: ["biaya", "akomodasi", "kos", "harga", "bayar", "hidup"], answer: "Estimasi biaya hidup dapat dilihat di halaman Akomodasi, termasuk rekomendasi kos dan kalkulator biaya bulanan.", escalateTo: null },
    { intent: "beasiswa", keywords: ["beasiswa", "bantuan", "keringanan", "prestasi"], answer: "Info beasiswa tersedia di halaman Info Beasiswa.", escalateTo: null },
    { intent: "loker", keywords: ["kerja", "lowongan", "karier", "magang", "loker"], answer: "Info lowongan kerja dan magang tersedia di halaman Info Lowongan Kerja serta Karir & Prospek Kerja.", escalateTo: null },
    { intent: "kurikulum", keywords: ["kurikulum", "sertifikasi", "expertise", "umum"], answer: "Kurikulum dijelaskan pada menu Program — Program Umum, Program Konsentrasi Keahlian, dan Persiapan Kelulusan.", escalateTo: null },
    { intent: "kontak", keywords: ["kontak", "hubungi", "telepon", "email", "alamat", "bantuan"], answer: "Anda dapat menghubungi kami melalui halaman Hubungi Kami, atau menunggu koneksi ke tim Service Desk.", escalateTo: "Service Desk" },
  ];
  for (const b of botIntents) {
    await prisma.botIntent.upsert({
      where: { intent: b.intent },
      update: { keywords: b.keywords, answer: b.answer, escalateTo: b.escalateTo, isActive: true },
      create: { intent: b.intent, keywords: b.keywords, answer: b.answer, escalateTo: b.escalateTo, isActive: true },
    });
  }
  console.log(`Seeded ${botIntents.length} MokletBot intents.`);

  console.log(`Seeded ${roles.length} division-scoped roles and permissions.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
