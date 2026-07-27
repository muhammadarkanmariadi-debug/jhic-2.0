import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { JurusanTabs } from '@/components/sections/JurusanTabs';

export default function Jurusan() {
  const breadcrumbItems = [
    { label: 'Program Unggulan' },
    { label: 'Profil Jurusan' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Profil Jurusan"
        description="SMK Telkom Malang menyelenggarakan pendidikan kejuruan bidang teknologi yang disesuaikan dengan kurikulum standar industri (Link and Match)."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
         <div className="container max-w-[1000px] mx-auto px-4 md:px-6">
            
            {/* Header Text */}
            <div className="text-center mb-10">
               <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full"></div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-text-main leading-[1.3]">
                  Membangun Kompetensi<br />Sesuai Minat dan Bakat Siswa.
               </h2>
            </div>

            {/* CTA Tes Minat Bakat */}
            <div className="bg-accent rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-[0_8px_30px_rgba(215,25,32,0.2)]">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Masih bingung pilih jurusan?</h3>
                <p className="text-white/90">Ikuti kuis 15 pertanyaan untuk mengetahui jurusan yang paling cocok dengan potensimu.</p>
              </div>
              <Link 
                href="/program/tes-minat-bakat"
                className="shrink-0 bg-white text-accent hover:bg-gray-50 px-6 py-3 rounded-xl font-bold transition-colors"
              >
                Mulai Tes Sekarang
              </Link>
            </div>

            <JurusanTabs />

         </div>
      </section>
    </main>
  );
}
