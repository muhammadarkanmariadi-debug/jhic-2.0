import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { PrestasiGrid } from '@/components/sections/PrestasiGrid';
import { Trophy, Medal, Award } from 'lucide-react';

export default function Prestasi() {
  const breadcrumbItems = [
    { label: 'Tentang Kami' },
    { label: 'Prestasi Siswa' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Prestasi Siswa"
        description="Rekam jejak membanggakan dari talenta-talenta muda SMK Telkom Malang di berbagai kompetisi nasional hingga internasional."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1000px] mx-auto px-4 md:px-6">
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
               <div className="bg-white p-10 rounded-3xl shadow-sm text-center relative overflow-hidden hover:-translate-y-2 transition-transform cursor-default">
                  <div className="absolute -top-5 -right-5 text-[120px] font-extrabold text-surface opacity-50 select-none pointer-events-none">#1</div>
                  <div className="relative z-10">
                     <div className="flex justify-center items-baseline">
                        <div className="text-5xl md:text-6xl font-extrabold text-accent leading-none">1250</div>
                        <span className="text-3xl font-extrabold text-accent">+</span>
                     </div>
                     <div className="text-sm text-text-muted font-bold mt-4 uppercase tracking-wider">Penghargaan Nasional</div>
                  </div>
               </div>

               <div className="bg-white p-10 rounded-3xl shadow-sm text-center relative overflow-hidden hover:-translate-y-2 transition-transform cursor-default">
                  <div className="absolute -top-5 -right-5 text-[120px] opacity-10 select-none pointer-events-none grayscale">🏆</div>
                  <div className="relative z-10">
                     <div className="flex justify-center items-baseline">
                        <div className="text-5xl md:text-6xl font-extrabold text-text-main leading-none">85</div>
                        <span className="text-3xl font-extrabold text-text-main">+</span>
                     </div>
                     <div className="text-sm text-text-muted font-bold mt-4 uppercase tracking-wider">Prestasi Internasional</div>
                  </div>
               </div>

               <div className="bg-accent p-10 rounded-3xl shadow-sm text-center relative overflow-hidden hover:-translate-y-2 transition-transform cursor-default">
                  <div className="absolute -top-5 -right-5 text-[120px] opacity-10 select-none pointer-events-none brightness-0 invert">🥇</div>
                  <div className="relative z-10">
                     <div className="flex justify-center items-baseline">
                        <div className="text-5xl md:text-6xl font-extrabold text-white leading-none">320</div>
                        <span className="text-3xl font-extrabold text-white">+</span>
                     </div>
                     <div className="text-sm text-white/80 font-bold mt-4 uppercase tracking-wider">Medali Emas</div>
                  </div>
               </div>
            </div>

            <PrestasiGrid />

         </div>
      </section>
    </main>
  );
}
