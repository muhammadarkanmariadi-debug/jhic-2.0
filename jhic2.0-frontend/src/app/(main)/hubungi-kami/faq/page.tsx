import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { FAQAccordion } from '@/widgets/school/FAQAccordion';

export default function FAQ() {
  const breadcrumbItems = [
    { label: 'Hubungi Kami' },
    { label: 'Pusat Bantuan (FAQ)' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Pertanyaan Umum (FAQ)"
        description="Temukan jawaban cepat atas pertanyaan yang sering ditanyakan seputar pendaftaran, program akademik, dan fasilitas di SMK Telkom Malang."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1000px] mx-auto px-4 md:px-6">
            <FAQAccordion />
         </div>
      </section>
    </main>
  );
}
