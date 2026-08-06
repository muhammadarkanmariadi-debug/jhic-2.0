import React from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { TabbedCurriculumContent } from "@/shared/ui/TabbedCurriculumContent";
import { Languages, BookOpen, HeartHandshake, Factory, Lightbulb, BadgeCheck } from "lucide-react";
import { getProgramUmumTabs } from "@/services/programUmum";

export const metadata = {
  title: "Program Umum | SMK Telkom Malang",
  description:
    "Program umum kurikulum SMK Telkom Malang — Moklet Bilingual, Tahfidz, Moklet Serve, Factory Tour, Moklet Idea Challenge, dan Sertifikasi Bahasa.",
};

const iconMap: Record<string, React.ReactNode> = {
  bilingual: <Languages className="w-7 h-7" />,
  tahfidz: <BookOpen className="w-7 h-7" />,
  "moklet-serve": <HeartHandshake className="w-7 h-7" />,
  "factory-tour": <Factory className="w-7 h-7" />,
  "idea-challenge": <Lightbulb className="w-7 h-7" />,
  "sertifikasi-bahasa": <BadgeCheck className="w-7 h-7" />,
};

export default async function ProgramUmumPage() {
  const tabs = await getProgramUmumTabs();

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Program", href: "/program" },
          { label: "Program Umum" },
        ]}
        title="Program Umum"
        description="Program penguatan kurikulum yang melengkapi pembelajaran akademik — bahasa, karakter, dan proyek kolaboratif."
      />

      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <TabbedCurriculumContent tabs={tabs} layout="grid" iconMap={iconMap} />
        </div>
      </section>
    </main>
  );
}
