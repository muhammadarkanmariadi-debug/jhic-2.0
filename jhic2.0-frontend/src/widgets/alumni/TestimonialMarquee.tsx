/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export function TestimonialMarquee() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Software Engineer, Tokopedia",
      text: "SMK Telkom Malang memberikan fondasi logika pemrograman yang sangat kuat. Saat saya melanjutkan kuliah dan masuk dunia kerja, hardskill yang diajarkan di Moklet sangat relevan dengan kebutuhan industri.",
      image: "/images/unsplash/photo-1507003211169-0a1dd7228f2d.jpg"
    },
    {
      id: 2,
      name: "Siti Aminah",
      role: "Network Security, Telkomsel",
      text: "Karakter disiplin 'Attitude is Everything' benar-benar mengubah cara saya bekerja. Tidak hanya belajar ngoding, kami diajarkan cara berkomunikasi, bekerja dalam tim, dan etika profesional.",
      image: "/images/unsplash/photo-1494790108377-be9c29b29330.jpg"
    },
    {
      id: 3,
      name: "Agus Pratama",
      role: "Frontend Dev, GoTo",
      text: "Berkat kurikulum yang sinkron dengan industri, saya bisa langsung mendapatkan pekerjaan impian sebelum ijazah keluar melalui program rekrutmen sekolah. Fasilitasnya super lengkap!",
      image: "/images/unsplash/photo-1599566150163-29194dcaad36.jpg"
    }
  ];

  return (
    <div className="relative overflow-hidden">
       {/* Fade Edges */}
       <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 md:w-48 bg-gradient-to-r from-surface-alt to-transparent"></div>
       <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 md:w-48 bg-gradient-to-l from-surface-alt to-transparent"></div>

       <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] py-4">
         <div className="flex items-center gap-8 px-4">
            {testimonials.map(item => (
               <div key={item.id} className="w-[350px] shrink-0 bg-white p-8 rounded-3xl border border-border-light hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                 <div className="text-accent/10 mb-5">
                   <Quote className="w-12 h-12 fill-current" />
                 </div>
                 <p className="text-text-main leading-relaxed mb-6">"{item.text}"</p>
                 <div className="flex items-center gap-4 mt-auto">
                   <Image src={item.image} alt={item.name} width={48} height={48} className="rounded-full object-cover w-12 h-12 border border-border-light" />
                   <div>
                     <div className="font-bold text-text-main">{item.name}</div>
                     <div className="text-sm text-text-muted">{item.role}</div>
                   </div>
                 </div>
               </div>
            ))}
         </div>
         {/* Duplicate for seamless infinite scroll */}
         <div className="flex items-center gap-8 px-4" aria-hidden="true">
            {testimonials.map(item => (
               <div key={`dup-${item.id}`} className="w-[350px] shrink-0 bg-white p-8 rounded-3xl border border-border-light hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                 <div className="text-accent/10 mb-5">
                   <Quote className="w-12 h-12 fill-current" />
                 </div>
                 <p className="text-text-main leading-relaxed mb-6">"{item.text}"</p>
                 <div className="flex items-center gap-4 mt-auto">
                   <Image src={item.image} alt={item.name} width={48} height={48} className="rounded-full object-cover w-12 h-12 border border-border-light" />
                   <div>
                     <div className="font-bold text-text-main">{item.name}</div>
                     <div className="text-sm text-text-muted">{item.role}</div>
                   </div>
                 </div>
               </div>
            ))}
         </div>
       </div>
    </div>
  );
}
