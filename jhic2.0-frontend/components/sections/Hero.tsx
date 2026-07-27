import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Trophy, Code } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-main pb-16 pt-12 md:pb-24 md:pt-20 xl:pt-32">
      {/* Decorative Dashed Circle */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-dashed border-gray-300 opacity-50 md:h-[800px] md:w-[800px]"></div>
      
      <div className="mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center justify-between gap-12 px-4 md:px-8 xl:flex-row">
        {/* Text Content */}
        <div className="relative z-10 flex max-w-[650px] flex-col items-center text-center xl:items-start xl:text-left">
          <span className="mb-6 flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-[13.5px] font-bold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
            Terakreditasi A &middot; ISO 9001:2015
          </span>
          <p className="mb-2 text-[17px] font-bold tracking-tight text-gray-800 md:text-[20px]">
            Selamat Datang di <span className="text-accent">SMK Telkom Malang!</span>
          </p>
          <h1 className="mb-6 text-[42px] font-extrabold leading-[1.1] tracking-[-0.03em] text-text-main md:text-[56px] xl:text-[64px]">
            Mencetak Talenta Digital<br />
            <span className="text-accent">Berstandar Global</span>
          </h1>
          <p className="mb-10 text-[16px] leading-[1.6] text-gray-600 md:text-[18px]">
            Pelopor SMK bidang Teknologi dan Informatika di Indonesia sejak 1992. Belajar coding, jaringan, dan gim langsung dari standar industri.
          </p>
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row xl:justify-start">
            <Link
              href="#contact-cta"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 text-[15.5px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-accent sm:w-auto"
            >
              Daftar PPDB 2026
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#programs"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-border-color bg-white px-8 text-[15.5px] font-bold text-text-main transition-all hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
            >
              Jelajahi Program
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative z-10 flex w-full max-w-[500px] items-center justify-center xl:max-w-[600px]">
          {/* Glow Effect */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[80px] md:h-[400px] md:w-[400px]"></div>
          
          {/* Floating Card Left */}
          <div className="absolute -left-4 top-10 flex animate-bounce items-center gap-3 rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-md md:-left-10" style={{ animationDuration: "3s" }}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <Trophy className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[14px] font-extrabold text-text-main">Juara 1</div>
              <div className="text-[12px] font-bold text-gray-500">LKS Nasional</div>
            </div>
          </div>

          {/* Floating Card Right */}
          <div className="absolute -right-4 bottom-10 flex animate-bounce items-center gap-3 rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-md md:-right-10" style={{ animationDuration: "4s", animationDelay: "1s" }}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Code className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[14px] font-extrabold text-text-main">3 Program</div>
              <div className="text-[12px] font-bold text-gray-500">Berbasis Industri</div>
            </div>
          </div>

          <Image
            src="https://www.smktelkom-mlg.sch.id/assets/frontend/images/image_depan_new.png"
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
