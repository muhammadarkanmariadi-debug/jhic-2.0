import React from "react";
import Link from "next/link";
import { PageHeader } from "@/shared/ui/PageHeader";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import {
  Layers,
  Presentation,
  Flame,
  Factory,
  BadgeCheck,
  TrendingUp,
  ArrowRight,
  Compass,
} from "lucide-react";
import { FeaturedPrograms } from "@/widgets/program/FeaturedPrograms";
import { KonsentrasiDetailSection } from "@/widgets/program/KonsentrasiDetailSection";
import { konsentrasiCards } from "@/services/konsentrasiData";

export const metadata = {
  title: "Program Konsentrasi Keahlian | SMK Telkom Malang",
  description:
    "Program konsentrasi keahlian SMK Telkom Malang — Kelas Ekspertis, Praktisi Mengajar, Kelas Bootcamp, Kelas Industri, Sertifikasi Internasional, dan Uji Kenaikan Level.",
};

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  presentation: Presentation,
  flame: Flame,
  factory: Factory,
  badge: BadgeCheck,
  trending: TrendingUp,
};

export default function ProfilKonsentrasiKeahlian() {
  const breadcrumbItems = [
    { label: "Program", href: "/program" },
    { label: "Program Konsentrasi Keahlian" },
  ];

  return (
    <main>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        title="Program Konsentrasi Keahlian"
        description="Program pendukung untuk memastikan kompetensi siswa selaras dengan kebutuhan industri."
      />

      {/* 6 service cards (reference layout) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Program Konsentrasi Keahlian"
            title="Pilihan Program Pendukung"
            description="Tiga konsentrasi keahlian diperkuat oleh program-program pendukung dari industri."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {konsentrasiCards.map((card) => {
              const Icon = iconMap[card.icon] ?? Compass;
              return (
                <Link
                  key={card.slug}
                  href={`/program/konsentrasi/${card.slug}`}
                  className="group relative rounded-2xl border border-border-light bg-white p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-text-main mb-2">{card.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{card.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-accent font-bold text-sm">
                    Selengkapnya
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail konsentrasi + partner/expertise/sertifikasi (one konsentrasi switch) */}
      <KonsentrasiDetailSection />

      {/* Program Unggulan (JHI-v2-05) */}
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <FeaturedPrograms />
        </div>
      </section>
    </main>
  );
}
