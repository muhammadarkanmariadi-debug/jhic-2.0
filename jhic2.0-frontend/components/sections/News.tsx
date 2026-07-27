"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function News() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = ["Semua", "Prestasi", "Kegiatan", "Kerjasama", "Informasi", "Alumni"];

  const newsItems = [
    {
      category: "Prestasi",
      date: "03 Jul 2026",
      title: "Belum lulus, siswa SMK Telkom sudah diterima 24 kampus luar negeri.",
      image: "https://www.smktelkom-mlg.sch.id/assets/upload/image/thumbs/1783065908_RJN02098a.jpg",
      badgeColor: "bg-accent/10 text-accent",
    },
    {
      category: "Informasi",
      date: "06 Mar 2026",
      title: "Belajar teknologi dengan standar global di SMK Telkom Malang.",
      image: "https://www.smktelkom-mlg.sch.id/assets/upload/image/thumbs/1772758809_IMG_81812.jpg",
      badgeColor: "bg-gray-100 text-gray-800",
    },
    {
      category: "Kerjasama",
      date: "30 Jan 2026",
      title: "Perkuat talenta digital, Telkom gandeng tech giants dunia.",
      image: "https://www.smktelkom-mlg.sch.id/assets/upload/image/thumbs/1769742754_telkom.jpg",
      badgeColor: "bg-teal-50 text-teal-700",
    },
    {
      category: "Kegiatan",
      date: "18 Des 2025",
      title: "Tim robotik Moklet unjuk inovasi di ajang kompetisi teknologi.",
      image: "https://www.smktelkom-mlg.sch.id/assets/upload/galeri/1765528097_robotic.jpg",
      badgeColor: "bg-gray-100 text-gray-800",
    },
    {
      category: "Kegiatan",
      date: "25 Nov 2025",
      title: "Studi lintas negara: siswa Moklet menimba ilmu hingga Thailand.",
      image: "https://www.smktelkom-mlg.sch.id/assets/upload/galeri/1765528175_thailand.jpg",
      badgeColor: "bg-gray-100 text-gray-800",
    },
    {
      category: "Alumni",
      date: "10 Nov 2025",
      title: "Temu alumni di Jakarta pererat jejaring lintas angkatan.",
      image: "https://www.smktelkom-mlg.sch.id/assets/upload/galeri/1765528136_temu_alumni_di_jakarta.jpg",
      badgeColor: "bg-gray-100 text-gray-800",
    },
  ];

  const filteredNews = activeFilter === "Semua" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  return (
    <section id="news" className="bg-bg-main py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-[560px]">
            <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-[14px] font-bold text-accent">
              Berita Terbaru
            </div>
            <h2 className="mb-4 text-[32px] font-extrabold leading-[1.2] tracking-tight text-text-main md:text-[40px]">
              Kabar dari Moklet
            </h2>
            <p className="text-[16px] leading-[1.6] text-gray-600 md:text-[18px]">
              Ikuti informasi, prestasi, dan kegiatan terbaru dari SMK Telkom Malang.
            </p>
          </div>
          <Link
            href="#"
            className="group flex items-center gap-2 text-[14.5px] font-bold text-accent hover:text-accent-hover"
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
              className={`rounded-full px-5 py-2 text-[14px] font-semibold transition-all ${
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
                  alt={news.category}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[12px] font-extrabold shadow-sm backdrop-blur-md ${news.badgeColor}`}>
                  {news.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 text-[12.5px] font-semibold text-gray-400">
                  {news.date}
                </div>
                <h3 className="mb-4 text-[17px] font-bold leading-[1.4] text-text-main transition-colors group-hover:text-accent">
                  {news.title}
                </h3>
                <Link
                  href="#"
                  className="mt-auto flex items-center gap-2 text-[14.5px] font-bold text-accent transition-colors hover:text-accent-hover"
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
