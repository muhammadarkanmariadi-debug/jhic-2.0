import React from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { FeedbackForm } from "@/widgets/contact/FeedbackForm";

export const metadata = {
  title: "Beri Masukan | SMK Telkom Malang",
  description: "Kirim masukan dan saran kepada SMK Telkom Malang.",
};

export default function UlasanPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Hubungi Kami", href: "/hubungi-kami/faq" },
    { label: "Beri Masukan" },
  ];

  return (
    <main>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        title="Beri Masukan"
        description="Masukan Anda sangat berarti untuk terus meningkatkan kualitas layanan SMK Telkom Malang."
      />
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="container max-w-[720px] mx-auto px-4 md:px-6">
          <FeedbackForm />
        </div>
      </section>
    </main>
  );
}