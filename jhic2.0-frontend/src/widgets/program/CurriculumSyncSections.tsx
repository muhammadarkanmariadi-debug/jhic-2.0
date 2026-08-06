"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { Card } from "@/shared/ui/Card";
import { Handshake, Award, BadgeCheck, CalendarRange } from "lucide-react";
import {
  curriculumSyncPartners,
  expertiseList,
  certifications,
  konsentrasiPrograms,
} from "@/services/curriculumData";
import { ProgramCode } from "@/shared/types";

/**
 * JHI-v2-02 — Partner Sinkronisasi Kurikulum, Expertise, dan Sertifikasi
 * per Konsentrasi Keahlian. Controlled by the page-level konsentrasi switch
 * (see `KonsentrasiDetailSection`).
 */
export function CurriculumSyncSections({ active }: { active: ProgramCode }) {
  const program = konsentrasiPrograms.find((p) => p.code === active)!;

  const partners = curriculumSyncPartners.filter((p) => p.programCode === active);
  const expertise = expertiseList.filter((e) => e.programCode === active);
  const certs = certifications.filter((c) => c.programCode === active);

  return (
    <div className="w-full">
      {/* Partner Sinkronisasi Kurikulum */}
      <section className="mb-20">
        <SectionHeader
          eyebrow="Sinkronisasi Kurikulum"
          title={`Partner Sinkronisasi Kurikulum ${program.label}`}
          description="Mitra industri yang menyelaraskan kurikulum dengan kebutuhan dunia kerja — diperbarui setiap tahun ajaran."
          align="center"
          className="mb-10"
        />
        {partners.length === 0 ? (
          <p className="text-center text-text-muted py-10">
            Belum ada partner sinkronisasi untuk {program.desc} pada tahun ajaran ini.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <Card
                key={partner.id}
                hover
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-surface-alt flex items-center justify-center mb-4 overflow-hidden">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  ) : (
                    <Handshake className="w-8 h-8 text-accent" />
                  )}
                </div>
                <h3 className="text-lg font-extrabold text-text-main mb-1">{partner.name}</h3>
                <div className="inline-flex items-center gap-1.5 bg-accent/5 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <CalendarRange className="w-3.5 h-3.5" />
                  Tahun Ajaran {partner.academicYear}
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{partner.description}</p>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Expertise */}
      <section className="mb-20">
        <SectionHeader
          eyebrow="Keahlian"
          title={`Expertise ${program.label}`}
          description={`Bidang keahlian spesifik yang dikembangkan pada konsentrasi ${program.desc}.`}
          align="center"
          className="mb-10"
        />
        {expertise.length === 0 ? (
          <p className="text-center text-text-muted py-10">
            Belum ada data expertise untuk {program.desc}.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((ex) => (
              <Card
                key={ex.id}
                hover
                className="flex items-start gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-lg font-extrabold text-text-main">{ex.name}</h3>
                    {ex.isIcp && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wide bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                        ICP
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{ex.description}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Sertifikasi */}
      <section>
        <SectionHeader
          eyebrow="Sertifikasi"
          title={`Sertifikasi ${program.label}`}
          description={`Sertifikat nasional & internasional yang dapat diraih siswa pada konsentrasi ${program.desc}.`}
          align="center"
          className="mb-10"
        />
        {certs.length === 0 ? (
          <p className="text-center text-text-muted py-10">
            Belum ada data sertifikasi untuk {program.desc}.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert) => (
              <Card
                key={cert.id}
                hover
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wide text-accent">
                      {cert.level}
                    </div>
                    <div className="text-xs text-text-muted">{cert.provider}</div>
                  </div>
                </div>
                <h3 className="font-bold text-text-main leading-snug">{cert.name}</h3>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
