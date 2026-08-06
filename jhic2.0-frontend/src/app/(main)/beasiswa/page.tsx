import React from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { BeasiswaList } from "@/widgets/hubin/BeasiswaList";
import { hubinApi } from "@/services/hubin";

export const metadata = {
  title: "Info Beasiswa | SMK Telkom Malang",
  description: "Informasi beasiswa untuk siswa SMK Telkom Malang.",
};

export default async function BeasiswaPage() {
  const items = await hubinApi.beasiswa();

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Beranda", href: "/" },
          { label: "Info Beasiswa" },
        ]}
        title="Info Beasiswa"
        description="Beasiswa pendidikan dan pelatihan untuk mendukung prestasi siswa SMK Telkom Malang."
      />
      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <BeasiswaList items={items} />
        </div>
      </section>
    </main>
  );
}
