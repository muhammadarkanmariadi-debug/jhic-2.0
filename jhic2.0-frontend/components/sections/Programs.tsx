"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Server, Gamepad2 } from "lucide-react";

export function Programs() {
  const [activeTab, setActiveTab] = useState("RPL");

  const programs = {
    RPL: {
      title: "Rekayasa Perangkat Lunak",
      desc: "Membangun aplikasi web dan mobile dari nol sesuai standar industri, mulai dari desain antarmuka hingga rilis produk.",
      tags: ["Web Dev", "Mobile Dev", "UI/UX"],
      career: "Web Developer · Mobile Developer · UI/UX Designer",
      image: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/code.png",
      icon: <Code2 className="h-5 w-5" />,
    },
    TKJ: {
      title: "Teknik Komputer & Jaringan",
      desc: "Merancang infrastruktur jaringan, cloud computing, dan keamanan siber untuk kebutuhan perusahaan modern.",
      tags: ["Networking", "Cloud", "Cyber Security"],
      career: "Network Engineer · Cloud Engineer · DevOps",
      image: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/network.png",
      icon: <Server className="h-5 w-5" />,
    },
    PG: {
      title: "Pengembangan Gim",
      desc: "Mendesain, membangun, dan merilis gim 2D & 3D dari konsep hingga produk yang siap dimainkan.",
      tags: ["Game Design", "2D / 3D", "Unity"],
      career: "Game Developer · Game Artist · QA Tester",
      image: "https://www.smktelkom-mlg.sch.id/assets/frontend/images/gim.png",
      icon: <Gamepad2 className="h-5 w-5" />,
    },
  };

  const activeProgram = programs[activeTab as keyof typeof programs];

  return (
    <section id="programs" className="bg-bg-main py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-[680px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-[14px] font-bold text-accent">
            Program Keahlian
          </div>
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.2] tracking-tight text-text-main md:text-[40px]">
            Pilih jurusan impianmu
          </h2>
          <p className="text-[16px] leading-[1.6] text-gray-600 md:text-[18px]">
            Tiga program keahlian berbasis industri, dibimbing guru-guru berpengalaman. Klik untuk melihat detailnya.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-[20px] bg-white p-2 shadow-sm">
          {Object.entries(programs).map(([key, program]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-[14.5px] font-bold transition-all ${
                activeTab === key
                  ? "bg-accent text-white shadow-md"
                  : "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-text-main"
              }`}
            >
              {program.icon}
              {key}
            </button>
          ))}
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
              <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-[13px] font-bold text-accent">
                {activeTab}
              </span>
              <h3 className="mt-4 text-[26px] font-bold tracking-tight text-text-main md:text-[32px]">
                {activeProgram.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-gray-600">
                {activeProgram.desc}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {activeProgram.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-gray-100 px-3 py-1 text-[13px] font-semibold text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 text-[12px] font-semibold tracking-wider text-gray-400 uppercase">
                Prospek Karier
              </div>
              <div className="mt-2 text-[14.5px] font-bold text-gray-800">
                {activeProgram.career}
              </div>
              
              <Link
                href="#contact-cta"
                className="mt-8 flex h-12 w-fit items-center gap-2 rounded-xl bg-accent px-6 text-[14.5px] font-bold text-white transition-all hover:bg-accent-hover hover:shadow-accent"
              >
                Selengkapnya
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
