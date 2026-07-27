import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { GraduationCheck } from '@/components/sections/GraduationCheck';

export default function PengumumanKelulusan() {
  const breadcrumbItems = [
    { label: 'Informasi' },
    { label: 'Pengumuman Kelulusan' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Pengumuman Kelulusan"
        description="Cek status kelulusan Anda dengan memasukkan Nomor Induk Siswa Nasional (NISN) di bawah ini."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <GraduationCheck />
         </div>
      </section>
    </main>
  );
}
