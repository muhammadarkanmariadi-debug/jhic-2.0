"use client";

import React, { useState } from "react";
import { JobVacancyItem } from "@/shared/types";
import { usePagination } from "@/shared/hooks/usePagination";
import { Pagination } from "@/shared/ui/Pagination";
import { Card } from "@/shared/ui/Card";
import { Briefcase, MapPin, Calendar, ExternalLink, Search, Wallet } from "lucide-react";

const programOptions = [
  { value: "ALL", label: "Semua" },
  { value: "RPL", label: "RPL" },
  { value: "TKJ", label: "TKJ" },
  { value: "PG", label: "PG" },
];

export function LokerList({ items }: { items: JobVacancyItem[] }) {
  const [q, setQ] = useState("");
  const [program, setProgram] = useState("ALL");

  const filtered = items.filter((i) => {
    const haystack = `${i.title} ${i.company} ${i.description}`.toLowerCase();
    const matchesQ = haystack.includes(q.toLowerCase());
    const matchesP = program === "ALL" || (i.programCode ?? "UMUM") === program;
    return matchesQ && matchesP;
  });

  const { currentItems, paginationProps, startIndex, endIndex, totalItems } = usePagination(filtered, {
    itemsPerPage: 6,
  });

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-3 mb-10">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari lowongan, perusahaan, atau kata kunci..."
            className="w-full rounded-xl border border-border-light pl-11 pr-4 py-3 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div className="flex gap-2">
          {programOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setProgram(opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                program === opt.value
                  ? "bg-accent text-text-inverse border-accent"
                  : "bg-surface text-text-muted border-border-light hover:border-accent hover:text-accent"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-surface rounded-lg border border-border-light">
          <Briefcase className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-text-main mb-2">Lowongan tidak ditemukan</h3>
          <p className="text-text-muted text-sm">Coba ubah kata kunci atau filter konsentrasi.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems.map((job) => (
            <Card
              key={job.id}
              hover
              className="flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-text-main">{job.title}</h3>
                    <div className="text-sm text-text-muted">{job.company}</div>
                  </div>
                </div>
                {job.programCode && (
                  <span className="shrink-0 text-[10px] font-extrabold uppercase bg-accent/5 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                    {job.programCode}
                  </span>
                )}
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{job.description}</p>

              <div className="space-y-2 text-sm text-text-muted mb-5">
                {job.salaryRange && (
                  <div className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-accent" />
                    <span className="font-semibold text-text-main">{job.salaryRange}</span>
                  </div>
                )}
                {job.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" /> {job.location}
                  </div>
                )}
                {job.applicationDeadline && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" /> Deadline:{" "}
                    {new Date(job.applicationDeadline).toLocaleDateString("id-ID")}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border-light flex items-center justify-between">
                <span className="text-xs text-text-muted">{job.contact ?? "Lamar via portal"}</span>
                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-accent text-text-inverse text-sm font-bold px-4 py-2 rounded-xl hover:bg-accent-hover"
                  >
                    Lamar <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      <Pagination
        {...paginationProps}
        infoText={`Menampilkan ${startIndex + 1}–${endIndex} dari ${totalItems} lowongan`}
      />
    </div>
  );
}
