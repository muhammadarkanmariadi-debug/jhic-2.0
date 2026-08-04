import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { Card } from '@/shared/ui/Card';
import { Code2, Target, Briefcase, Zap } from 'lucide-react';

export default function CCPPage() {
  const breadcrumbItems = [
    { label: 'Program Unggulan' },
    { label: 'CCP' },
  ];

  const features = [
    {
      title: 'Coding & Programming Intensive',
      desc: 'Fokus mendalam pada kemampuan algoritma, pemrograman, dan pengembangan perangkat lunak (Software Engineering).',
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: 'Project-Based Learning',
      desc: 'Pembelajaran berbasis proyek nyata yang melatih pemecahan masalah (Problem Solving) sesuai studi kasus di industri.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Industry Link & Match',
      desc: 'Sinkronisasi kurikulum dengan kebutuhan perusahaan IT, dilengkapi program magang (Prakerin) di tech startup/company ternama.',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: 'Fast-Track Portfolio',
      desc: 'Akselerasi pembuatan portofolio siswa sejak kelas 10, sehingga siap kerja atau menembus perguruan tinggi favorit.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <main>
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Program Pendidikan CCP"
        description="Coding Class Program (CCP) adalah program percepatan keahlian khusus di bidang pemrograman yang mencetak Software Engineer muda berkompeten."
      />

      <section className="py-16 md:py-24 bg-bg-main">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full"></div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6">Mengapa Memilih CCP?</h2>
               <p className="text-text-muted text-lg">
                  Solusi terbaik bagi talenta yang memiliki minat kuat di dunia koding dan ingin mendalami rekayasa perangkat lunak secara intensif.
               </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {features.map((feature, index) => (
                   <Card key={index} className="p-8 hover:-translate-y-2 transition-transform cursor-default bg-white flex flex-col md:flex-row items-start gap-6 shadow-sm border border-border-light">
                      <div className="shrink-0 w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center border border-accent/20 shadow-sm">
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

      <section className="py-16 md:py-24 bg-accent text-white relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         
         <div className="container max-w-[1000px] mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Wujudkan Mimpimu Menjadi Developer Profesional</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
               Belajar langsung dari praktisi, bangun portofoliomu, dan melangkah pasti menuju masa depan.
            </p>
            <a href="/spmb" className="inline-flex items-center gap-2 bg-white text-accent hover:bg-surface-alt font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
               Gabung CCP Sekarang
            </a>
         </div>
      </section>
    </main>
  );
}
