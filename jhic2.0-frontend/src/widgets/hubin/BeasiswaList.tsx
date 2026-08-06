"use client";

import React, { useState } from "react";
import { ScholarshipItem } from "@/shared/types";
import { usePagination } from "@/shared/hooks/usePagination";
import { Pagination } from "@/shared/ui/Pagination";
import { Card } from "@/shared/ui/Card";
import { GraduationCap, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";

const programOptions = [
  { value: "ALL", label: "Semua" },
  { value: "RPL", label: "RPL" },
  { value: "TKJ", label: "TKJ" },
  { value: "PG", label: "PG" },
];

export function BeasiswaList({ items }: { items: ScholarshipItem[] }) {
  const [program, setProgram] = useState("ALL");

  const filtered = items.filter(
    (i) => program === "ALL" || (i.programCode ?? "UMUM") === program
  );

  const { currentItems, paginationProps, startIndex, endIndex, totalItems } = usePagination(filtered, {
    itemsPerPage: 6,
  });

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
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

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-surface rounded-lg border border-border-light">
          <GraduationCap className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-text-main mb-2">Beasiswa tidak ditemukan</h3>
          <p className="text-text-muted text-sm">Coba filter konsentrasi yang lain.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((b) => (
            <Card
              key={b.id}
              hover
              className="flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase text-accent">{b.provider}</span>
                {b.programCode && (
                  <span className="text-[10px] font-extrabold uppercase bg-accent/5 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                    {b.programCode}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-extrabold text-text-main mb-3">{b.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{b.description}</p>

              {b.requirements && b.requirements.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {b.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              )}

              <div className="pt-4 border-t border-border-light flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-text-muted">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  {b.deadline ? `Deadline ${new Date(b.deadline).toLocaleDateString("id-ID")}` : "Buka terus"}
                </span>
                {b.link && (
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-accent text-text-inverse text-sm font-bold px-4 py-2 rounded-xl hover:bg-accent-hover"
                  >
                    Daftar <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      <Pagination
        {...paginationProps}
        infoText={`Menampilkan ${startIndex + 1}–${endIndex} dari ${totalItems} beasiswa`}
      />
    </div>
  );
}
