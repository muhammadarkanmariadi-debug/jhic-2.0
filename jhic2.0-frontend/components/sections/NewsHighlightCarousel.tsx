'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function NewsHighlightCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      id: 1,
      badge: 'Prestasi',
      badgeColor: 'bg-accent',
      title: 'Siswa SMK Telkom Malang Sabet Juara 1 LKS Nasional Bidang IT',
      date: '12 Oktober 2026',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      badge: 'Akademik',
      badgeColor: 'bg-blue-600',
      title: 'Belajar Teknologi dengan Standar Global di SMK Telkom Malang',
      date: '06 March 2026',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 3,
      badge: 'Karya Siswa',
      badgeColor: 'bg-emerald-600',
      title: 'Siswa Jurusan Pengembangan Gim Ciptakan Edukasi AR',
      date: '19 July 2026',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[480px] shadow-md group">
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {highlights.map((item) => (
          <Link key={item.id} href="#" className="w-full h-full flex-shrink-0 relative block">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white z-10 flex flex-col items-start">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 ${item.badgeColor}`}>
                {item.badge}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-[1.2] max-w-3xl">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-white/80 tracking-widest uppercase mb-6">
                {item.date}
              </p>
              <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold transition-colors w-full md:w-auto">
                Baca Selengkapnya
              </button>
            </div>
          </Link>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-20 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-20 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {highlights.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-6 bg-white' : 'w-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
