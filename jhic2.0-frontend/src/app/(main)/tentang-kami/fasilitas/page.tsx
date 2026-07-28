import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { FasilitasGrid } from '@/widgets/school/FasilitasGrid';

export default function Fasilitas() {
  const breadcrumbItems = [
    { label: 'Tentang Kami' },
    { label: 'Fasilitas Unggulan' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Fasilitas Unggulan"
        description="Sarana prasarana modern berstandar industri untuk mendukung proses pembelajaran kreatif dan inovatif."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <FasilitasGrid />
         </div>
      </section>
    </main>
  );
}
