import React from "react";
import { ProgramTemplate } from "@/shared/ui/ProgramTemplate";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { Code2, Smartphone, Globe2, Building2 } from "lucide-react";
import { icpContent, expertiseList } from "@/services/curriculumData";

export const metadata = {
  title: "International Class Program (ICP) | SMK Telkom Malang",
  description:
    "Program ICP mempersiapkan lulusan berdaya saing global melalui kurikulum internasional, lingkungan bilingual, dan sertifikasi IT dunia.",
};

const icpExpertise = expertiseList.filter((e) => e.isIcp);

const internationalPartners = [
  {
    name: "University Pathway",
    desc: "Jalur studi ke universitas mitra di luar negeri melalui program transfer kredit.",
    icon: Building2,
  },
  {
    name: "Global Internship",
    desc: "Magang di perusahaan multinasional dan startup teknologi berskala global.",
    icon: Globe2,
  },
];

export default function ICPPage() {
  return (
    <ProgramTemplate
      content={icpContent}
      breadcrumb={[
        { label: "Program", href: "/program" },
        { label: "Program ICP" },
      ]}
      ctaHref="/spmb"
      ctaLabel="Daftar ICP Sekarang"
    >
      {/* ICP — Expertise (full-stack + mobile) */}
      <div className="mt-20">
        <SectionHeader
          eyebrow="Expertise"
          title="Kuasai Seluruh Expertise"
          description="Berbeda dengan Reguler, siswa ICP mendalami dua expertise sekaligus: Full Stack dan Mobile."
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {icpExpertise.map((ex) => (
            <div
              key={ex.id}
              className="rounded-2xl border border-border-light bg-white p-7 shadow-sm flex items-start gap-5 hover:shadow-md transition-all"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-accent text-white flex items-center justify-center">
                {ex.name.includes("Mobile") ? (
                  <Smartphone className="w-7 h-7" />
                ) : (
                  <Code2 className="w-7 h-7" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-text-main mb-2">{ex.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{ex.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ICP — International cooperation */}
      <div className="mt-20">
        <SectionHeader
          eyebrow="Kerja Sama Internasional"
          title="Jaringan Internasional"
          description="Kemitraan yang membuka akses studi dan karier lintas negara."
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internationalPartners.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl bg-surface-alt border border-border-light p-7 hover:bg-white transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-text-main mb-2">{p.name}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ProgramTemplate>
  );
}
