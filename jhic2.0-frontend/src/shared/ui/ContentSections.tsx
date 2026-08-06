import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Sparkles,
  Award,
  Heart,
  Users,
  Recycle,
  Lightbulb,
  Target,
  Star,
} from "lucide-react";
import { ContentSection } from "@/shared/types";
import { NumberedSteps } from "@/shared/ui/NumberedSteps";
import { ImageGallery } from "@/shared/ui/ImageGallery";
import { Accordion } from "@/shared/ui/Accordion";

const iconMap: Record<string, React.ElementType> = {
  award: Award,
  heart: Heart,
  users: Users,
  recycle: Recycle,
  lightbulb: Lightbulb,
  target: Target,
};

function SectionTitle({ title }: { title?: string }) {
  if (!title) return null;
  return (
    <h3 className="text-2xl font-extrabold text-text-main mb-5 mt-2">{title}</h3>
  );
}

/**
 * Data-driven renderer for the curriculum reference pages (Program Umum,
 * Program Konsentrasi Keahlian detail, Persiapan Kelulusan).
 */
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section, idx) => {
        switch (section.type) {
          case "paragraph":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                {section.image ? (
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-3">
                      <p className="text-text-muted leading-relaxed">{section.text}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                        <Image src={section.image.src} alt={section.image.alt ?? ""} fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-text-muted leading-relaxed max-w-3xl">{section.text}</p>
                )}
              </div>
            );

          case "checklist":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <ul className="space-y-3 max-w-3xl">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "cards":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.items.map((card, i) => {
                    const Icon = iconMap[card.icon ?? ""] ?? Sparkles;
                    return (
                      <div
                        key={i}
                        className="rounded-lg border border-border-light bg-surface p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-extrabold text-text-main mb-2">{card.title}</h4>
                        <p className="text-sm text-text-muted leading-relaxed">{card.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );

          case "tracks":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {section.items.map((track, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border-light bg-surface shadow-sm overflow-hidden hover:shadow-md transition-all"
                    >
                      {track.image && (
                        <div className="relative aspect-[16/9] bg-surface-alt overflow-hidden">
                          <Image src={track.image} alt={track.title} fill className="object-cover" />
                        </div>
                      )}
                      <div className="p-6">
                        <h4 className="font-extrabold text-text-main text-lg mb-2">{track.title}</h4>
                        {track.description && (
                          <p className="text-sm text-text-muted leading-relaxed mb-4">{track.description}</p>
                        )}
                        {track.points && (
                          <ul className="space-y-2">
                            {track.points.map((pt, p) => (
                              <li key={p} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "steps":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <NumberedSteps steps={section.items} />
              </div>
            );

          case "gallery":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <ImageGallery images={section.images} />
              </div>
            );

          case "table":
            return (
              <div key={idx} className="overflow-x-auto">
                <SectionTitle title={section.title} />
                <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm border border-border-light">
                  <thead>
                    <tr className="bg-accent text-text-inverse">
                      {section.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 text-sm font-bold whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, r) => (
                      <tr key={r} className={r % 2 === 0 ? "bg-surface" : "bg-neutral-50"}>
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-3 text-sm text-text-muted border-t border-border-light">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "accordion":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <Accordion
                  items={section.items.map((item) => ({
                    title: item.title,
                    content: item.desc,
                  }))}
                />
              </div>
            );

          case "testimonials":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.items.map((t, i) => (
                    <figure
                      key={i}
                      className="rounded-lg border border-border-light bg-surface p-6 shadow-sm flex flex-col"
                    >
                      <div className="flex gap-0.5 text-amber-400 mb-4">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <figcaption className="border-t border-border-light pt-4">
                        <div className="font-extrabold text-text-main">{t.name}</div>
                        <div className="text-xs text-text-muted">{t.role}</div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            );

          case "badges":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <div className="flex flex-wrap gap-3">
                  {section.items.map((b, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full border border-border-light bg-surface px-4 py-2 text-sm font-bold text-text-main shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            );

          case "partners":
            return (
              <div key={idx}>
                <SectionTitle title={section.title} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {section.items.map((p, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border-light bg-surface p-5 shadow-sm flex flex-col items-center text-center"
                    >
                      <div className="w-20 h-20 rounded-xl bg-surface-alt flex items-center justify-center overflow-hidden mb-4">
                        {p.logo ? (
                          <Image src={p.logo} alt={p.name} width={72} height={72} className="object-contain" />
                        ) : (
                          <Users className="w-8 h-8 text-accent" />
                        )}
                      </div>
                      <h4 className="font-extrabold text-text-main text-sm mb-2">{p.name}</h4>
                      <p className="text-xs text-text-muted leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
