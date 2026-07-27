import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { EkskulGrid } from '@/components/sections/EkskulGrid';

export default function Ekstrakurikuler() {
  const breadcrumbItems = [
    { label: 'Program Unggulan' },
    { label: 'Ekstrakurikuler' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Ekstrakurikuler"
        description="Kembangkan minat, bakat, dan karakter melalui berbagai kegiatan positif di luar jam pelajaran akademik."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <EkskulGrid />
         </div>
      </section>
    </main>
  );
}
