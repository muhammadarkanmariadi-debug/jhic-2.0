import React from 'react';
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
            <div className="text-center mb-12">
               <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full"></div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-text-main leading-[1.3]">
                  Membangun Kompetensi<br />Sesuai Minat dan Bakat Siswa.
               </h2>
            </div>

            <JurusanTabs />

         </div>
      </section>
    </main>
  );
}
