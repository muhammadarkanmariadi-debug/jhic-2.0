"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { programDetails } from "@/services/dummyData";
import { AutoCarousel } from "@/shared/ui/AutoCarousel";
import { Button } from "@/shared/ui/Button";

export function Programs() {
  const [activeTab, setActiveTab] = useState("RPL");

  const programs = programDetails;

  const activeProgram = programs[activeTab as keyof typeof programs];

  return (
    <section id="programs" className="bg-bg-main py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-[680px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent">
            Program Keahlian
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold leading-[1.2] tracking-tight text-text-main">
            Pilih jurusan impianmu
          </h2>
          <p className="text-base md:text-lg leading-[1.6] text-neutral-600">
            Tiga program keahlian berbasis industri, dibimbing guru-guru berpengalaman. Klik untuk melihat detailnya.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-[20px] bg-surface p-2 shadow-sm">
          {Object.entries(programs).map(([key, program]) => {
            const Icon = program.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${activeTab === key
                    ? "bg-accent text-text-inverse shadow-md"
                    : "bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-text-main"
                  }`}
              >
                <Icon className="h-5 w-5" />
                {key}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-10 md:mt-16">
          <div className="flex flex-col gap-10 rounded-[32px]   p-6  md:flex-row md:items-center md:gap-16 md:p-12 lg:p-16">
            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-[24px]">
                <Image
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex w-full flex-col md:w-1/2">
              <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
                {activeTab}
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-text-main">
                {activeProgram.title}
              </h3>
              <p className="mt-4 text-base leading-[1.6] text-neutral-600">
                {activeProgram.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeProgram.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-neutral-100 px-3 py-1 text-sm font-semibold text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                Prospek Karier
              </div>
              
              <div className="mt-2 w-full rounded-xl bg-neutral-50 border border-neutral-100 p-4">
                <AutoCarousel 
                  scrollAmount={180} 
                  showButtons={false} 
                  itemContainerClassName="gap-0"
                >
                  {activeProgram.careers.map((career, idx) => (
                    <div key={idx} className="flex-shrink-0 snap-center px-4 flex items-center justify-center border-r border-neutral-200 last:border-0 min-w-[150px]">
                      <span className="text-sm font-bold text-accent text-center">
                        {career.title}
                      </span>
                    </div>
                  ))}
                </AutoCarousel>
              </div>

              <Button
                href="#contact-cta"
                className="mt-8 w-fit"
                icon={ArrowRight}
              >
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
        {/* Quiz Promo Banner */}
        <div className="mt-16 mx-auto max-w-[1000px] bg-accent rounded-xl p-8 md:p-12 text-text-inverse flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-accent/20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-surface/20 px-3 py-1 rounded-full text-sm font-bold mb-4 backdrop-blur-sm border border-white/20">
              Baru
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight text-text-inverse">Masih bingung menentukan pilihan?</h3>
            <p className="text-text-inverse/90 text-lg">
              Temukan jurusan yang paling sesuai dengan karakter dan passion-mu melalui Tes Minat & Bakat interaktif.
            </p>
          </div>
          <Button
            href="/program/tes-minat-bakat"
            variant="secondary"
            className="shrink-0 text-accent shadow-lg"
          >
            Ikuti Tes Sekarang
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
