"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/Button";

export function Hero() {
  const words = ["Berstandar Global", "Berakhlak", "Kreatif", "Inovatif"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative overflow-hidden bg-bg-main pb-16 pt-12 md:pb-24 md:pt-20 xl:pt-15">
      <style>{`
        @keyframes blurFadeIn {
          0% { opacity: 0; filter: blur(10px); transform: translateY(15px) scale(0.95); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
        }
        .animate-blur-fade-in {
          animation: blurFadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
      `}</style>
      {/* Decorative Dashed Circle */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-dashed border-neutral-300 opacity-50 md:h-[800px] md:w-[800px]"></div>
      
      <div className="mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center justify-between gap-12 px-4 md:px-8 xl:flex-row">
        {/* Text Content */}
        <div className="relative z-10 flex max-w-[650px] flex-col items-center text-center xl:items-start xl:text-left">
          <span className="mb-6 flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-sm font-bold text-accent">
         
            Terakreditasi A &middot; ISO 9001:2015
          </span>
          <p className="mb-2 text-lg font-bold tracking-tight text-neutral-800 md:text-xl">
            Selamat Datang di <span className="text-accent">SMK Telkom Malang!</span>
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-text-main md:text-5xl xl:text-6xl flex flex-col items-center xl:items-start">
            <span>Mencetak Talenta Digital</span>
            <span className="text-accent flex flex-wrap justify-center xl:justify-start min-h-[1.2em]">
              {words[currentWord].split("").map((letter, index) => (
                <span
                  key={`${currentWord}-${index}`}
                  className="animate-blur-fade-in inline-block"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </h1>
          <p className="mb-10 text-base leading-[1.6] text-neutral-600 md:text-lg">
            Pelopor SMK bidang Teknologi dan Informatika di Indonesia sejak 1992. Belajar coding, jaringan, dan gim langsung dari standar industri.
          </p>
          <div className="flex w-full flex-col max-w-lg mx-auto lg:mx-0  items-center gap-4 sm:flex-row xl:justify-start">
            <Button
              href="/spmb"
              size="lg"
              className="w-full sm:w-auto"
              icon={ArrowRight}
            >
              Daftar SPMB 2026
            </Button>
            <Button
              href="#programs"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              icon={ChevronRight}
            >
              Jelajahi Program
            </Button>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative z-10 flex w-full max-w-[500px] items-center justify-center xl:max-w-[600px]">
          {/* Glow Effect */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[80px] md:h-[400px] md:w-[400px]"></div>
      

          <Image
            src="/images/hero/image_depan_new.webp"
            alt="Siswa berprestasi SMK Telkom Malang"
            width={600}
            height={600}
            className="relative z-10 w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
