import React from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { EkskulGrid } from "@/widgets/program/EkskulGrid";

export default function Ekstrakurikuler() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Ekstrakurikuler" },
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
