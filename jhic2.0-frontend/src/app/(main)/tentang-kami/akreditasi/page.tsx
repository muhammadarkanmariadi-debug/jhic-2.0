import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { Accordion } from '@/shared/ui/Accordion';

export default function Akreditasi() {
  const breadcrumbItems = [
    { label: 'Tentang Kami' },
    { label: 'Akreditasi & Sertifikasi' },
  ];

  const akreditasiItems = [
    {
      title: (
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gradient-to-br from-accent to-red-500 text-white flex items-center justify-center font-extrabold text-4xl md:text-5xl" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            A
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-extrabold mb-1">Akreditasi Institusi &quot;Unggul&quot;</h2>
            <p className="text-sm md:text-base text-text-muted font-normal">Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)</p>
          </div>
        </div>
      ),
      content: (
        <p>
          Sejak tahun 2008 hingga saat ini, SMK Telkom Malang secara konsisten mempertahankan akreditasi <strong>A (Unggul)</strong> dengan nilai nyaris sempurna (98/100). Penilaian ini mencakup 8 Standar Nasional Pendidikan (SNP) meliputi standar kelulusan, isi, proses, pendidikan, tenaga kependidikan, sarana prasarana, pengelolaan, pembiayaan, dan penilaian pendidikan.
        </p>
      )
    },
    {
      title: (
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-900 text-white flex items-center justify-center font-extrabold text-2xl md:text-3xl rounded-[30px]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}>
            ISO
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-extrabold mb-1">Sertifikasi Mutu ISO 9001:2015</h2>
            <p className="text-sm md:text-base text-text-muted font-normal">Sistem Manajemen Mutu Internasional</p>
          </div>
        </div>
      ),
      content: (
        <p>
          Pengakuan berskala internasional terhadap sistem manajemen mutu operasional sekolah. Menjamin bahwa seluruh proses pembelajaran dan pelayanan administrasi di SMK Telkom Malang telah terstandardisasi dan diaudit secara berkala demi kepuasan <em>stakeholder</em> (siswa, orang tua, dan industri).
        </p>
      )
    },
    {
      title: (
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-green-500 text-white flex items-center justify-center font-extrabold text-3xl md:text-4xl rounded-2xl transform rotate-45">
            <span className="-rotate-45">PK</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-extrabold mb-1">SMK Pusat Keunggulan</h2>
            <p className="text-sm md:text-base text-text-muted font-normal">Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</p>
          </div>
        </div>
      ),
      content: (
        <p>
          Ditunjuk sebagai sekolah percontohan program pengembangan SMK dengan kompetensi keahlian tertentu dalam peningkatan kualitas dan kinerja. Fokus pada sinkronisasi mendalam (<em>link and match</em>) 8+i dengan dunia industri digital terkemuka.
        </p>
      )
    }
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Akreditasi & Sertifikasi"
        description="Bukti nyata dedikasi kami dalam menghadirkan pendidikan bermutu yang diakui secara nasional dan internasional."
      />

      {/* Accordion Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-4xl mx-auto px-4 md:px-6">
            <Accordion items={akreditasiItems} />
         </div>
      </section>
    </main>
  );
}
