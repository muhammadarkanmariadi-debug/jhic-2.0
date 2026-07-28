import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { GraduationCheck } from '@/widgets/program/GraduationCheck';

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
