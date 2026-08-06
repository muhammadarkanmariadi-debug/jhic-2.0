import React from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { SchoolSchedule } from "@/widgets/informasi/SchoolSchedule";
import { getActiveSchedules } from "@/services/schoolSchedule";

export const metadata = {
  title: "Jadwal Sekolah | SMK Telkom Malang",
  description:
    "Jam kegiatan belajar mengajar SMK Telkom Malang — jam masuk, istirahat, sholat, dan jam pulang untuk siswa dan orang tua.",
};

export default async function JadwalSekolahPage() {
  const schedules = await getActiveSchedules();

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Beranda", href: "/" },
          { label: "Informasi", href: "/informasi" },
          { label: "Jadwal Sekolah" },
        ]}
        title="Jadwal Sekolah"
        description="Informasi jam kegiatan belajar mengajar — jam masuk, istirahat, sholat, dan jam pulang."
      />

      <section className="py-16 md:py-24 bg-surface">
        <div className="container-main">
          <SchoolSchedule schedules={schedules} />
        </div>
      </section>
    </main>
  );
}