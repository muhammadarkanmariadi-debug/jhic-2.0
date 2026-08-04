"use client";

import React, { useState } from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { Timeline } from "@/shared/ui/Timeline";
import { KonsentrasiSwitcher } from "@/widgets/program/KonsentrasiSwitcher";
import { Wallet, TrendingUp, ExternalLink, Rocket } from "lucide-react";
import { karirData } from "@/services/karirData";
import { ProgramCode } from "@/shared/types";

export default function KarirPage() {
  const [active, setActive] = useState<ProgramCode>("RPL");
  const content = karirData.find((k) => k.code === active) ?? karirData[0];
  const portalUrl = process.env.NEXT_PUBLIC_CAREER_PORTAL_URL ?? content.portalUrl;

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Beranda", href: "/" },
          { label: "Karir & Prospek Kerja" },
        ]}
        title="Karir & Prospek Kerja"
        description="Timeline belajar dan prospek karier beserta kisaran gaji setiap Konsentrasi Keahlian di SMK Telkom Malang."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-2">
              Pilih Konsentrasi Keahlian
            </h2>
            <p className="text-text-muted text-lg">
              Lihat perjalanan belajar dan peluang karier pada setiap konsentrasi.
            </p>
          </div>
          <KonsentrasiSwitcher active={active} onChange={setActive} />
        </div>
      </section>

      {/* Timeline Belajar */}
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="container max-w-[900px] mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Timeline Belajar"
            title={`Timeline Belajar ${content.code}`}
            description="Perjalanan pembelajaran 3 tahun menuju kompetensi siap kerja."
            align="center"
            className="mb-12"
          />
          <Timeline events={content.timeline} />
        </div>
      </section>

      {/* Prospek Karier & Gaji */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1100px] mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Prospek Karier & Gaji"
            title={`Peluang Karier ${content.code}`}
            description="Kisaran gaji awal (entry-level) di industri untuk lulusan — dapat meningkat seiring pengalaman dan sertifikasi."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.prospek.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border-light bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    <Wallet className="w-3.5 h-3.5" />
                    {p.salaryRange}
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-text-main mb-2">{p.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Karier (JHI-06) */}
      <section className="py-16 md:py-20 bg-accent text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="container max-w-[900px] mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/20">
            <Rocket className="w-4 h-4" /> Portal Karier
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Jelajahi Portal Karier {content.code}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Lihat lowongan, magang, dan peluang karier langsung dari mitra industri kami.
          </p>
          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-accent font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Kunjungi Portal Karier
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
