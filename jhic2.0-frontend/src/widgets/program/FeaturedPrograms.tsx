import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { Rocket, ArrowRight } from "lucide-react";
import { featuredPrograms } from "@/services/curriculumData";

/**
 * JHI-v2-05 — Program Unggulan display (CCP, TS 2.1) linked to curriculum data.
 * Backend CRUD lives in the API (see jhic2.0-backend/src/routes/featuredPrograms.ts);
 * this section renders the active list.
 */
export function FeaturedPrograms() {
  const active = featuredPrograms.filter((p) => p.isActive);

  if (active.length === 0) return null;

  return (
    <div className="w-full">
      <SectionHeader
        eyebrow="Program Unggulan"
        title="Program Andalan Kami"
        description="Program unggulan dengan pendekatan khusus yang terhubung langsung ke data kurikulum."
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
        {active.map((program) => (
          <div
            key={program.id}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-red-700 text-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="absolute -top-6 -right-6 opacity-10 pointer-events-none">
              <Rocket className="w-40 h-40" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold mb-5 border border-white/20">
                <Rocket className="w-4 h-4" /> Program Unggulan
              </div>
              <h3 className="text-2xl font-extrabold mb-3">{program.name}</h3>
              <p className="text-white/90 leading-relaxed mb-6">{program.description}</p>
              <Link
                href={`/program/${program.slug}`}
                className="inline-flex items-center gap-2 bg-white text-accent font-extrabold px-6 py-3 rounded-xl transition-all hover:bg-surface-alt"
              >
                {program.ctaLabel ?? "Pelajari"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
