import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { NewsHighlightCarousel } from '@/widgets/news/NewsHighlightCarousel';
import { NewsGrid } from '@/widgets/news/NewsGrid';

export default function Berita() {
  const breadcrumbItems = [
    { label: 'Informasi' },
    { label: 'Berita & Artikel' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Berita & Artikel"
        description="Kumpulan berita terbaru seputar kegiatan akademik, prestasi siswa, dan informasi sekolah."
      />

      {/* Highlights Section */}
      <section className="pt-8 pb-16 bg-surface">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-3">Sorotan Utama</h2>
            <p className="text-text-muted text-lg">Berita terbaru dan paling penting seputar kegiatan SMK Telkom Malang.</p>
          </div>
          <NewsHighlightCarousel />
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <NewsGrid />
         </div>
      </section>
    </main>
  );
}
