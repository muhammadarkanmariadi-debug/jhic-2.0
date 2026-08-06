import React from "react";
import { ProgramTemplate } from "@/shared/ui/ProgramTemplate";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { CheckCircle2, MousePointerClick } from "lucide-react";
import { regulerContent, expertiseList } from "@/services/curriculumData";

export const metadata = {
  title: "Program Reguler | SMK Telkom Malang",
  description:
    "Program Reguler SMK Telkom Malang — siswa memilih satu konsentrasi keahlian (RPL, TKJ, atau Pengembangan Gim) dengan kurikulum Link & Match.",
};

export default function RegulerPage() {
  return (
    <ProgramTemplate
      content={regulerContent}
      breadcrumb={[
        { label: "Program", href: "/program" },
        { label: "Program Reguler" },
      ]}
      ctaHref="/spmb"
      ctaLabel="Daftar Reguler"
    >
      {/* Reguler — pilih 1 konsentrasi */}
      <div className="mt-20">
        <SectionHeader
          eyebrow="Pilihan Konsentrasi"
          title="Pilih Satu Konsentrasi Keahlian"
          description="Pada program Reguler, siswa memilih satu bidang keahlian untuk didalami selama 3 tahun."
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseList
            .filter((e) => !e.isIcp)
            .slice(0, 3)
            .map((ex) => (
              <div
                key={ex.id}
                className="relative rounded-lg border border-border-light bg-surface p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wide text-accent bg-accent/5 px-3 py-1 rounded-full mb-5">
                  <MousePointerClick className="w-3.5 h-3.5" /> Pilihan
                </div>
                <h3 className="text-lg font-extrabold text-text-main mb-3">{ex.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5">{ex.description}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" /> Dipilih di kelas 11
                </div>
              </div>
            ))}
        </div>
      </div>
    </ProgramTemplate>
  );
}
