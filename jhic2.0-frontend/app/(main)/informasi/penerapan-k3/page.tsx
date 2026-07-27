import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { K3Table } from '@/components/sections/K3Table';

export default function PenerapanK3() {
  const breadcrumbItems = [
    { label: 'Informasi' },
    { label: 'Penerapan K3' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Penerapan K3"
        description="SMK Telkom memprioritaskan Penerapan K3 (Keselamatan dan Kesehatan Kerja) di semua kegiatan praktik dan laboratorium. Berikut adalah dokumen standar yang kami gunakan."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <K3Table />
         </div>
      </section>
    </main>
  );
}
