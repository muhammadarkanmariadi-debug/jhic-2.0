import React from "react";
import Link from "next/link";
import { PageHeader } from "@/shared/ui/PageHeader";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { Users, ExternalLink, ChevronRight } from "lucide-react";
import { organizations } from "@/services/curriculumData";

export const metadata = {
  title: "Organisasi | SMK Telkom Malang",
  description: "Daftar organisasi siswa dan portal resmi Moklet Org.",
};

const MOKLET_ORG_URL = "https://www.moklet.org/";

export default function OrganisasiPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Organisasi" },
  ];

  return (
    <main>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        title="Organisasi"
        description="Mengenal organisasi dan sub-organisasi di lingkungan SMK Telkom Malang."
      />

      {/* Daftar Organisasi */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[900px] mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Organisasi Siswa"
            title="Daftar Organisasi"
            description="Wadah pengembangan diri, kepemimpinan, dan kolaborasi antar siswa."
            align="center"
            className="mb-12"
          />
          <div className="space-y-5">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="flex items-start gap-5 rounded-lg border border-border-light bg-surface p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-text-main mb-1.5">{org.name}</h3>
                  <p className="text-text-muted leading-relaxed">{org.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Moklet Org */}
      <section className="pb-16 md:pb-24 bg-surface">
        <div className="container max-w-[900px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-accent to-red-700 rounded-xl p-8 md:p-12 text-text-inverse relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
              <Users className="w-96 h-96" />
            </div>
            <div className="relative z-10 w-full md:w-2/3">
              <div className="inline-flex items-center gap-2 bg-surface/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-md border border-white/20">
                <Users className="w-4 h-4" /> Portal Organisasi Resmi
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-[1.2] drop-shadow-sm">
                Eksplorasi Dunia Organisasi Moklet!
              </h2>
              <p className="text-lg md:text-xl text-text-inverse/90 leading-relaxed max-w-xl">
                Cari tahu lebih dalam tentang struktur, kegiatan, dan profil lengkap seluruh
                organisasi serta sub-organisasi di SMK Telkom Malang.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto flex shrink-0">
              <a
                href={MOKLET_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-surface text-accent hover:bg-neutral-50 px-8 py-4.5 rounded-lg font-bold transition-all hover:scale-105 shadow-xl group text-lg"
              >
                Kunjungi moklet.org
                <ExternalLink className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/program/ekstrakurikuler"
              className="inline-flex items-center gap-1 text-accent font-bold hover:underline"
            >
              Lihat daftar Ekstrakurikuler <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
