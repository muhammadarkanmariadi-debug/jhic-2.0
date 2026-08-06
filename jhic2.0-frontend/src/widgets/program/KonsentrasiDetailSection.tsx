"use client";

import React, { useState } from "react";
import { KonsentrasiSwitcher } from "./KonsentrasiSwitcher";
import { JurusanTabs } from "./JurusanTabs";
import { CurriculumSyncSections } from "./CurriculumSyncSections";
import { ProgramCode } from "@/shared/types";

/**
 * Program Konsentrasi Keahlian — detail block.
 * One konsentrasi switch (RPL / TKJ / PG) drives the learning journey &
 * career view (JurusanTabs) plus the partner/expertise/certification
 * sections (CurriculumSyncSections).
 */
export function KonsentrasiDetailSection() {
  const [active, setActive] = useState<ProgramCode>("RPL");

  return (
    <>
      {/* Learning journey + careers per konsentrasi */}
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="container max-w-[1000px] mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-2">
              Pilih Konsentrasi Keahlian
            </h2>
            <p className="text-text-muted text-lg">
              Jelajahi learning journey, expertise, dan sertifikasi pada setiap konsentrasi.
            </p>
          </div>
          <KonsentrasiSwitcher active={active} onChange={setActive} />
          <div className="mt-12">
            <JurusanTabs active={active} />
          </div>
        </div>
      </section>

      {/* Partner sinkronisasi, expertise, sertifikasi (JHI-v2-02) */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <CurriculumSyncSections active={active} />
        </div>
      </section>
    </>
  );
}
