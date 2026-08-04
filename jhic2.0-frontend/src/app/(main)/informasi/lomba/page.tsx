import React from "react";
import Link from "next/link";
import { PageHeader } from "@/shared/ui/PageHeader";
import { Trophy, MapPin, Calendar, ExternalLink } from "lucide-react";
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
          {items.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-border-light">
              <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-text-muted">Belum ada lomba yang diumumkan.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((c) => (
                <div
                  key={c.id}
                  className="rounded-2xl border border-border-light bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-text-main">{c.title}</h3>
                        {c.organizer && <div className="text-sm text-text-muted">{c.organizer}</div>}
                      </div>
                    </div>
                    {c.level && (
                      <span className="shrink-0 text-[10px] font-extrabold uppercase bg-accent/5 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                        {c.level}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{c.description}</p>

                  <div className="space-y-2 text-sm text-text-muted mb-5">
                    {c.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" /> {c.location}
                      </div>
                    )}
                    {c.registrationDeadline && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" /> Deadline:{" "}
                        {new Date(c.registrationDeadline).toLocaleDateString("id-ID")}
                      </div>
                    )}
                    {c.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" /> Pelaksanaan:{" "}
                        {new Date(c.date).toLocaleDateString("id-ID")}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border-light flex items-center justify-between">
                    <span className="text-xs text-text-muted">{c.source === "EXTERNAL" ? "Lomba Eksternal" : "Lomba Sekolah"}</span>
                    {c.link && (
                      <Link
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-accent text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-accent-hover"
                      >
                        Info & Daftar <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
