import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { EkskulGrid } from '@/components/sections/EkskulGrid';
import { ExternalLink, Users } from 'lucide-react';

export default function Ekstrakurikuler() {
  const breadcrumbItems = [
    { label: 'Program Unggulan' },
    { label: 'Ekstrakurikuler' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Ekstrakurikuler"
        description="Kembangkan minat, bakat, dan karakter melalui berbagai kegiatan positif di luar jam pelajaran akademik."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <EkskulGrid />
         </div>
      </section>

      {/* Moklet.org CTA */}
      <section className="pb-16 md:pb-24 bg-surface-alt">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-accent to-red-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
              <Users className="w-96 h-96" />
            </div>
            
            <div className="relative z-10 w-full md:w-2/3">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-md border border-white/20">
                <Users className="w-4 h-4" /> Portal Organisasi Resmi
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.2] drop-shadow-sm">
                Eksplorasi Dunia Organisasi Moklet!
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                Cari tahu lebih dalam tentang struktur, kegiatan, dan profil lengkap seluruh organisasi serta sub-organisasi di SMK Telkom Malang.
              </p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto flex shrink-0">
              <a 
                href="https://www.moklet.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white text-accent hover:bg-gray-50 px-8 py-4.5 rounded-2xl font-bold transition-all hover:scale-105 shadow-xl group text-lg"
              >
                Kunjungi moklet.org
                <ExternalLink className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
