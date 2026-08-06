import React from "react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/shared/ui/PageHeader";
import { Tabs } from "@/shared/ui/Tabs";
import { ContentSections } from "@/shared/ui/ContentSections";
import { konsentrasiCards } from "@/services/konsentrasiData";

export function generateStaticParams() {
  return konsentrasiCards.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = konsentrasiCards.find((c) => c.slug === slug);
  return {
    title: `${card?.title ?? "Program Konsentrasi Keahlian"} | SMK Telkom Malang`,
    description: card?.description,
  };
}

export default async function KonsentrasiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = konsentrasiCards.find((c) => c.slug === slug);
  if (!card) notFound();

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Program", href: "/program" },
          {
            label: "Program Konsentrasi Keahlian",
            href: "/program/profil-konsentrasi-keahlian",
          },
          { label: card.title },
        ]}
        title={card.title}
        description={card.description}
      />

      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          {card.tabs ? (
            <Tabs
              layout="pills"
              tabs={card.tabs.map((t) => ({
                key: t.key,
                label: t.label,
                content: (
                  <div className="max-w-[1200px] mx-auto">
                    {t.intro ? (
                      <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center">
                        {t.intro}
                      </p>
                    ) : null}
                    <ContentSections sections={t.sections} />
                  </div>
                ),
              }))}
            />
          ) : (
            <div className="max-w-[1000px] mx-auto">
              <ContentSections sections={card.sections ?? []} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
