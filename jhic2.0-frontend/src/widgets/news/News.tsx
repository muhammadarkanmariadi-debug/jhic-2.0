"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsData } from "@/services/dummyData";

export function News() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = ["Semua", "Prestasi", "Akademik", "Karya Siswa", "Event"];

  const filteredNews = activeFilter === "Semua" 
    ? newsData 
    : newsData.filter(item => item.categoryLabel === activeFilter);

  return (
    <section id="news" className="bg-bg-main py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-[560px]">
            <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent">
              Berita Terbaru
            </div>
            <h2 className="mb-4 text-3xl md:text-4xl font-extrabold leading-[1.2] tracking-tight text-text-main">
              Kabar dari Moklet
            </h2>
            <p className="text-base md:text-lg leading-[1.6] text-gray-600">
              Ikuti informasi, prestasi, dan kegiatan terbaru dari SMK Telkom Malang.
            </p>
          </div>
          <Link
            href="/informasi/berita"
            className="group flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-hover"
          >
            Lihat semua berita
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? "bg-text-main text-white"
                  : "border border-border-color bg-white text-gray-600 hover:border-gray-300 hover:text-text-main"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((news, idx) => (
            <article
              key={idx}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-border-color bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.categoryLabel}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-extrabold shadow-sm backdrop-blur-md ${news.badgeColor}`}>
                  {news.categoryLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 text-xs font-semibold text-gray-400">
                  {news.date}
                </div>
                <h3 className="mb-4 text-lg font-bold leading-[1.4] text-text-main transition-colors group-hover:text-accent">
                  {news.title}
                </h3>
                <Link
                  href={`/informasi/berita/${news.slug}`}
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-hover"
                >
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
