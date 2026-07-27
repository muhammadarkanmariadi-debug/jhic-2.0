import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Laptop, Target, GraduationCap } from 'lucide-react';

export default function ProgramTS() {
  const breadcrumbItems = [
    { label: 'Tentang Kami' },
    { label: 'Program Telkom Schools' },
  ];

  const features = [
    {
      title: 'Kurikulum Berbasis Kompetensi IT',
      desc: 'Fokus pada penerapan teknologi terbaru di bidang RPL, TKJ, dan Multimedia sesuai standar industri Telkom Group.',
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: 'Attitude is Everything',
      desc: 'Pembentukan karakter utama siswa yang berpedoman pada nilai integritas, disiplin, peduli lingkungan, dan adaptif.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Digital Talent Readiness',
      desc: 'Program intensif pembekalan sertifikasi internasional dan bootcamp teknologi sebelum lulus sekolah.',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Program Telkom Schools"
        description="Standardisasi mutu pendidikan dari Yayasan Pendidikan Telkom yang diterapkan di seluruh jaringan Telkom Schools se-Indonesia."
      />

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {features.map((feature, index) => (
                  <Card key={index} className="p-8 hover:-translate-y-2 transition-transform cursor-default">
                     <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                        {feature.icon}
                     </div>
                     <h3 className="text-xl font-extrabold text-text-main mb-3">{feature.title}</h3>
                     <p className="text-text-muted leading-relaxed">
                        {feature.desc}
                     </p>
                  </Card>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
