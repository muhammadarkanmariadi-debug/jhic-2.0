import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { TestimonialMarquee } from '@/components/sections/TestimonialMarquee';

export default function Testimoni() {
  const breadcrumbItems = [
    { label: 'Alumni' },
    { label: 'Testimoni Alumni' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Testimoni Alumni"
        description="Apa kata mereka yang telah menempuh pendidikan di SMK Telkom Malang? Simak kisah sukses alumni kami."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt overflow-hidden">
         <TestimonialMarquee />
      </section>
    </main>
  );
}
