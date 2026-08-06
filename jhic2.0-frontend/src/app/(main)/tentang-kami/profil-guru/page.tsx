"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/shared/ui/PageHeader";
import { Pagination } from "@/shared/ui/Pagination";
import { Card } from "@/shared/ui/Card";
import { usePagination } from "@/shared/hooks/usePagination";
import { UserRound } from "lucide-react";
import { teacherProfiles, teacherCategoryLabels } from "@/services/teacherData";

const filters = [
  { key: "ALL", label: "Semua" },
  { key: "PRODUCTIVE", label: "Guru Produktif" },
  { key: "NON_PRODUCTIVE", label: "Guru Non-Produktif" },
  { key: "STAFF", label: "Staf & Tendik" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function ProfilGuruPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("ALL");

  const filtered =
    activeFilter === "ALL"
      ? teacherProfiles
      : teacherProfiles.filter((t) => t.category === activeFilter);

  const { currentItems, paginationProps, startIndex, endIndex, totalItems } = usePagination(filtered, {
    itemsPerPage: 9,
  });

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Tentang Kami", href: "/tentang-kami" },
          { label: "Profil Guru" },
        ]}
        title="Profil Guru & Staf"
        description="Mengenal para pendidik dan tenaga kependidikan SMK Telkom Malang yang berdedikasi membimbing setiap siswa."
      />

      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                  activeFilter === f.key
                    ? "bg-accent text-text-inverse border-accent shadow-md"
                    : "bg-surface text-text-muted border-border-light hover:border-accent hover:text-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Teacher card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentItems.map((teacher) => (
              <Card
                key={teacher.id}
                className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="aspect-square bg-surface-alt flex items-center justify-center overflow-hidden">
                  {teacher.image ? (
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-300">
                      <UserRound className="w-24 h-24" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="inline-block text-[10px] font-extrabold uppercase tracking-wide text-accent bg-accent/5 px-2.5 py-1 rounded-full mb-2">
                    {teacherCategoryLabels[teacher.category ?? "STAFF"]}
                  </div>
                  <h3 className="font-extrabold text-text-main leading-snug">{teacher.name}</h3>
                  <p className="text-sm text-text-muted mt-1">{teacher.position}</p>
                </div>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-12">
              Belum ada data guru pada kategori ini.
            </p>
          )}

          <Pagination
            {...paginationProps}
            infoText={`Menampilkan ${startIndex + 1}–${endIndex} dari ${totalItems} guru`}
          />
        </div>
      </section>
    </main>
  );
}
