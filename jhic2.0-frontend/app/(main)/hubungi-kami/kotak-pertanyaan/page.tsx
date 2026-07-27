import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactFormSection } from '@/components/sections/ContactFormSection';

export default function KotakPertanyaan() {
  const breadcrumbItems = [
    { label: 'Pusat Bantuan' },
    { label: 'Kotak Pertanyaan' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Kotak Pertanyaan"
        description="Tinggalkan pesan Anda, tim kami akan segera menghubungi kembali dalam waktu 1x24 jam kerja."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <ContactFormSection />
         </div>
      </section>
    </main>
  );
}
