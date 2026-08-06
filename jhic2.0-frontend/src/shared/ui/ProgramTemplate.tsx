import React from "react";
import Image from "next/image";
import { PageHeader } from "@/shared/ui/PageHeader";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { GraduationCap, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import { ProgramPageContent } from "@/shared/types";

interface ProgramTemplateProps {
  content: ProgramPageContent;
  breadcrumb: { label: string; href?: string }[];
  ctaHref: string;
  ctaLabel: string;
  /** Additional sections rendered after Profil Lulusan (ICP expertise, Reguler choice, etc.) */
  children?: React.ReactNode;
}

/**
 * JHI-v2-04 — Shared template for ICP & Reguler pages.
 * Both pages use the exact same layout: Program Description, Learning Journey
 * (Grades 10/11/12), and Profil Lulusan. Only the data (and extra sections)
 * differ.
 */
export function ProgramTemplate({
  content,
  breadcrumb,
  ctaHref,
  ctaLabel,
  children,
}: ProgramTemplateProps) {
  return (
    <main>
      <PageHeader
        breadcrumbItems={breadcrumb}
        title={content.title}
        description={content.description}
      />

      {/* Program Description */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <SectionHeader
                eyebrow="Deskripsi Program"
                title={content.tagline}
                description={content.description}
                align="left"
                className="mb-0"
              />
            </div>
            <div className="relative aspect-[4/3] w-full max-w-[480px] mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-lg">
              <Image src={content.image} alt={content.title} fill className="object-cover" />
            </div>
          </div>

          {/* Learning Journey */}
          <div className="mb-20">
            <SectionHeader
              eyebrow="Learning Journey"
              title="Perjalanan Belajar 3 Tahun"
              description="Tahapan pembelajaran dari kelas 10 hingga kelas 12."
              align="center"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.learningJourney.map((stage, idx) => (
                <div
                  key={stage.grade}
                  className="relative rounded-lg border border-border-light bg-surface p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="inline-flex items-center gap-2 bg-accent/5 text-accent text-xs font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-full mb-5">
                    <BookOpen className="w-4 h-4" />
                    {stage.grade}
                  </div>
                  <h3 className="text-lg font-extrabold text-text-main mb-4">{stage.title}</h3>
                  <ul className="space-y-3">
                    {stage.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {idx < content.learningJourney.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-accent">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Profil Lulusan */}
          <div>
            <SectionHeader
              eyebrow="Profil Lulusan"
              title="Profil Lulusan"
              description="Kompetensi yang dimiliki lulusan setelah menyelesaikan pendidikan."
              align="center"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.graduateProfile.map((profile) => (
                <div
                  key={profile.title}
                  className="rounded-lg bg-surface-alt border border-border-light p-7 text-center hover:bg-surface transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent text-text-inverse flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-text-main mb-2">{profile.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{profile.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extra sections (per-program) */}
          {children}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-accent text-text-inverse relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="container max-w-[800px] mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-surface/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/20">
            <Briefcase className="w-4 h-4" /> Siap Jadi Bagian dari Kami?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {ctaLabel}
          </h2>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-surface text-accent hover:bg-surface-alt font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
