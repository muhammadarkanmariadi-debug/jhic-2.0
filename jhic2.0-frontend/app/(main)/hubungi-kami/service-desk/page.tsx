import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { ServiceDeskGrid } from '@/components/sections/ServiceDeskGrid';

export default function ServiceDesk() {
  const breadcrumbItems = [
    { label: 'Pusat Bantuan' },
    { label: 'Service Desk IT' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Service Desk IT"
        description="Pusat bantuan teknis terpadu untuk siswa, guru, dan staf terkait akun LMS, email institusi, dan layanan IT lainnya."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <ServiceDeskGrid />
         </div>
      </section>
    </main>
  );
}
