import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Globe, BookOpen, Award, GraduationCap } from 'lucide-react';

export default function ICPPage() {
  const breadcrumbItems = [
    { label: 'Program Unggulan' },
    { label: 'ICP' },
  ];

  const features = [
    {
      title: 'Kurikulum Internasional',
      desc: 'Mengintegrasikan standar kompetensi nasional dengan kurikulum berstandar internasional yang diakui secara global.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Bilingual Learning',
      desc: 'Proses belajar mengajar menggunakan dua bahasa (Bilingual) untuk melatih kemampuan komunikasi bahasa Inggris aktif.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Sertifikasi Global',
      desc: 'Lulusan dibekali dengan sertifikasi internasional di bidang IT yang menunjang kesiapan karier di kancah global.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Pathway Luar Negeri',
      desc: 'Kesempatan melanjutkan studi ke universitas mitra di luar negeri atau langsung terjun ke industri multinasional.',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <main>
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="International Class Program (ICP)"
        description="Mempersiapkan lulusan dengan daya saing global melalui perpaduan kurikulum internasional, lingkungan berbahasa Inggris, dan sertifikasi IT tingkat dunia."
      />

      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full"></div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6">Keunggulan Program ICP</h2>
               <p className="text-text-muted text-lg">
                  Dirancang khusus bagi siswa yang memiliki visi menembus batas negara dalam meniti karier di bidang Teknologi Informasi.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {features.map((feature, index) => (
                  <Card key={index} className="p-8 hover:-translate-y-2 transition-transform cursor-default bg-white flex items-start gap-6">
                     <div className="shrink-0 w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mt-1">
                        {feature.icon}
                     </div>
                     <div>
                        <h3 className="text-xl font-extrabold text-text-main mb-3">{feature.title}</h3>
                        <p className="text-text-muted leading-relaxed">
                           {feature.desc}
                        </p>
                     </div>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
         <div className="container max-w-[1000px] mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6">Siap Menjadi Global Digital Talent?</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10">
               Jadilah bagian dari generasi emas yang siap membawa nama baik Indonesia di kancah teknologi dunia.
            </p>
            <a href="/ppdb" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
               Daftar ICP Sekarang
            </a>
         </div>
      </section>
    </main>
  );
}
