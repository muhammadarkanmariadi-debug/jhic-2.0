import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { Target, CheckCircle2 } from 'lucide-react';

export default function VisiMisi() {
  const breadcrumbItems = [
    { label: 'Tentang Kami' },
    { label: 'Visi & Misi' },
  ];

  const misiItems = [
    'Menyelenggarakan pendidikan kejuruan berkualitas dengan kurikulum yang selaras dengan perkembangan industri global.',
    'Membangun karakter siswa yang disiplin, jujur, berintegritas, dan tangguh dalam menghadapi tantangan (Attitude is Everything).',
    'Meningkatkan kompetensi pendidik dan tenaga kependidikan secara berkelanjutan sesuai tuntutan zaman.',
    'Menjalin kemitraan strategis dengan dunia usaha dan dunia industri (DUDI) untuk menjamin keterserapan lulusan di dunia kerja.',
    'Menanamkan jiwa kewirausahaan dan sociopreneur untuk menciptakan inovasi teknologi yang berdampak positif bagi masyarakat.'
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Visi & Misi"
        description="Kompas kami dalam mencetak talenta digital berstandar global yang berkarakter dan inovatif."
      />

      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 min-h-[60vh] items-stretch">
              
              {/* Visi */}
              <div className="bg-accent rounded-3xl p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                 <Target className="w-16 h-16 text-white/20 mb-6" />
                 <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10">Visi</h2>
                 <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                    &quot;Menjadi sekolah unggulan yang menghasilkan lulusan berkarakter, kompeten di bidang teknologi informasi, dan siap bersaing di tingkat global.&quot;
                 </p>
              </div>

              {/* Misi */}
              <div className="bg-white rounded-3xl p-10 md:p-16 border border-border-color shadow-sm flex flex-col justify-center">
                 <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-text-main">Misi</h2>
                 <ul className="space-y-6">
                    {misiItems.map((misi, index) => (
                       <li key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                             <CheckCircle2 className="w-6 h-6 text-accent" />
                          </div>
                          <p className="text-lg text-text-muted leading-relaxed">
                             {misi}
                          </p>
                       </li>
                    ))}
                 </ul>
              </div>

           </div>
        </div>
      </section>
    </main>
  );
}
