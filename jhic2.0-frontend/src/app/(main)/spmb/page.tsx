import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PPDBTimeline } from "@/widgets/ppdb/PPDBTimeline";
import { PPDBPrestasi } from "@/widgets/ppdb/PPDBPrestasi";
import { TestimonialMarquee } from "@/widgets/alumni/TestimonialMarquee";
import { PPDBCta } from "@/widgets/ppdb/PPDBCta";
import { Button } from "@/shared/ui/Button";

export const metadata = {
  title: "SPMB | SMK Telkom Malang",
  description:
    "Seleksi Penerimaan Murid Baru SMK Telkom Malang — info gelombang, alur, dan persyaratan pendaftaran.",
};

// Yayasan (foundation) registration portal — SPMB landing is a gateway only.
const YAYASAN_PORTAL_URL = "https://ppdb.smktelkom-mlg.sch.id";

export default function SPMB() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32 bg-surface flex items-center min-h-[75vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border-light shadow-sm text-sm font-bold text-text-main mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Seleksi Penerimaan Murid Baru 2026/2027
          </div>

          <h1 className="text-display-lg font-extrabold text-text-main leading-[1.1] mb-8 max-w-4xl tracking-tight">
            Gerbang Awal Menuju Karier
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              Digital Masa Depan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mb-12">
            Bergabunglah bersama ribuan talenta berbakat. Siapkan dirimu menjadi profesional
            teknologi yang diandalkan oleh industri global. Kuota terbatas!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              href={YAYASAN_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto"
              icon={ArrowRight}
            >
              Mulai Pendaftaran
            </Button>
            <Link
              href="#alur"
              className="w-full sm:w-auto bg-surface hover:bg-surface-alt text-text-main font-bold px-8 py-4 rounded-xl border border-border-light transition-all flex items-center justify-center text-lg"
            >
              Cek Alur & Persyaratan
            </Link>
          </div>
        </div>
      </section>

      {/* Alur & Persyaratan SPMB */}
      <section id="alur" className="py-20 md:py-28 bg-surface-alt border-t border-border-light scroll-mt-20">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <div className="text-accent font-extrabold tracking-wider uppercase text-sm mb-4">
              Panduan Pendaftaran
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main mb-6 leading-tight">
              Alur & Persyaratan SPMB
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Ikuti panduan langkah demi langkah berikut untuk menyelesaikan proses pendaftaranmu
              dengan mudah.
            </p>
          </div>

          <PPDBTimeline />
        </div>
      </section>

      {/* Kenapa Memilih Jalur Prestasi */}
      <section className="py-20 md:py-28 bg-surface border-t border-border-light">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <PPDBPrestasi />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-surface-alt border-t border-border-light overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-accent font-extrabold tracking-wider uppercase text-sm mb-4">
              Testimoni Alumni
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main mb-6 leading-tight">
              Apa kata mereka tentang pengalaman belajar?
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Cerita inspiratif dari para alumni kami yang sukses meraih impian mereka.
            </p>
          </div>

          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <TestimonialMarquee />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-surface border-t border-border-light">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <PPDBCta />
        </div>
      </section>
    </main>
  );
}
