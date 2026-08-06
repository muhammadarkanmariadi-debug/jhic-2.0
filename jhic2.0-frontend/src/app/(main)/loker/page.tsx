import React from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { LokerList } from "@/widgets/hubin/LokerList";
import { hubinApi } from "@/services/hubin";

export const metadata = {
  title: "Info Lowongan Kerja | SMK Telkom Malang",
  description: "Lowongan kerja untuk lulusan SMK Telkom Malang dari mitra industri.",
};

export default async function LokerPage() {
  const items = await hubinApi.loker();

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Beranda", href: "/" },
          { label: "Info Lowongan Kerja" },
        ]}
        title="Info Lowongan Kerja"
        description="Peluang karier dari mitra industri untuk lulusan dan siswa SMK Telkom Malang."
      />
      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <LokerList items={items} />
        </div>
      </section>
    </main>
  );
}
