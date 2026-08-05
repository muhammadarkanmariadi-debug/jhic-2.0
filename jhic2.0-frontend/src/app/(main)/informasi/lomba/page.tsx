import React from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { LombaList } from "@/widgets/hubin/LombaList";
import { hubinApi } from "@/services/hubin";

export const metadata = {
  title: "Info Lomba | SMK Telkom Malang",
  description: "Informasi lomba dan kompetisi untuk siswa SMK Telkom Malang.",
};

export default async function LombaPage() {
  const items = await hubinApi.lomba();

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Beranda", href: "/" },
          { label: "Informasi", href: "/informasi" },
          { label: "Info Lomba" },
        ]}
        title="Info Lomba"
        description="Kompetisi dan ajang bergengsi untuk mengasah kemampuan siswa."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1100px] mx-auto px-4 md:px-6">
          <LombaList items={items} />
        </div>
      </section>
    </main>
  );
}
