import React from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { TabbedCurriculumContent } from "@/shared/ui/TabbedCurriculumContent";
import { BadgeCheck, GraduationCap, Users } from "lucide-react";
import { persiapanKelulusanTabs } from "@/services/persiapanKelulusanData";

export const metadata = {
  title: "Persiapan Kelulusan | SMK Telkom Malang",
  description:
    "Program persiapan kelulusan SMK Telkom Malang — Uji Kompetensi Kejuruan, Sukses SNBT, dan Moklet Youth Digitalent.",
};

const iconMap: Record<string, React.ReactNode> = {
  ukk: <BadgeCheck className="w-7 h-7" />,
  snbt: <GraduationCap className="w-7 h-7" />,
  myd: <Users className="w-7 h-7" />,
};

export default function PersiapanKelulusanPage() {
  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Program", href: "/program" },
          { label: "Persiapan Kelulusan" },
        ]}
        title="Persiapan Kelulusan"
        description="Program pembekalan kompetensi dan kesiapan siswa menjelang kelulusan dan memasuki dunia kerja atau perkuliahan."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <TabbedCurriculumContent tabs={persiapanKelulusanTabs} layout="grid" iconMap={iconMap} />
        </div>
      </section>
    </main>
  );
}
