"use client";

import React, { useState } from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { Card } from "@/shared/ui/Card";
import { Pagination } from "@/shared/ui/Pagination";
import { usePagination } from "@/shared/hooks/usePagination";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import Image from "next/image";
import { trialClasses } from "@/services/trialClassData";

export default function TrialClassPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Trial Class" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter based on search term
  const filteredClasses = trialClasses.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { currentItems: currentClasses, paginationProps, startIndex, endIndex, totalItems } = usePagination(
    filteredClasses,
    { itemsPerPage: 6 }
  );

  return (
    <main className="bg-bg-main min-h-screen">
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        title="Daftar Trial Class"
        description="Jelajahi berbagai kelas percobaan gratis untuk menemukan minat dan bakatmu sebelum bergabung."
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Search Bar */}
          <div className="mb-12 max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-lg border-2 border-border-light bg-surface text-text-main focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm outline-none font-medium"
              placeholder="Cari kelas (misal: Web Dev, Unity, Security...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Trial Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentClasses.map((item) => {
              const startDate = new Date(item.start_date);
              const formattedDate = startDate.toLocaleDateString("id-ID", {
                day: "numeric", month: "long", year: "numeric",
              });
              const formattedTime = startDate.toLocaleTimeString("id-ID", {
                hour: "2-digit", minute: "2-digit",
              });

              return (
                <Card key={item.id} className="flex flex-col overflow-hidden bg-surface hover:-translate-y-1 transition-transform border-border-light group shadow-sm hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-surface/90 text-text-main backdrop-blur-md shadow-sm">
                        <Tag className="w-3.5 h-3.5 text-accent" />
                        Trial Class
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-text-main mb-3 line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-6 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="space-y-2.5 mb-8 mt-auto">
                      <div className="flex items-center gap-3 text-sm text-neutral-600">
                        <Calendar className="w-4 h-4 text-neutral-400 shrink-0" />
                        <span className="font-medium">{formattedDate} - {formattedTime}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:justify-between text-sm text-neutral-600">
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-neutral-400 shrink-0" />
                          <span className="font-medium line-clamp-1">{item.organizer_name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border-light flex items-center justify-between mt-auto">
                      <div className="text-sm font-semibold text-neutral-500">
                        Kuota: <span className="text-accent">{item.quota}</span>
                      </div>
                      <a
                        href="https://mxpo.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-text-inverse text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                      >
                        Daftar
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredClasses.length === 0 && (
            <div className="text-center py-20 bg-surface rounded-lg border border-border-light shadow-sm">
              <Search className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text-main mb-2">Tidak ada kelas yang ditemukan</h3>
              <p className="text-neutral-500">Coba gunakan kata kunci pencarian yang lain.</p>
            </div>
          )}

          {/* Pagination */}
          <Pagination
            {...paginationProps}
            infoText={`Menampilkan ${startIndex + 1}–${endIndex} dari ${totalItems} kelas`}
          />
        </div>
      </section>
    </main>
  );
}
