"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const SECTION_TYPES: { type: string; label: string }[] = [
  { type: "paragraph", label: "Paragraf" },
  { type: "checklist", label: "Checklist" },
  { type: "cards", label: "Kartu (Dampak/Hasil)" },
  { type: "tracks", label: "Tracks (Expertise)" },
  { type: "steps", label: "Langkah / Tahapan" },
  { type: "gallery", label: "Galeri" },
  { type: "table", label: "Tabel" },
  { type: "accordion", label: "Akordeon / FAQ" },
  { type: "testimonials", label: "Testimoni" },
  { type: "badges", label: "Badges" },
  { type: "partners", label: "Partner" },
];

export function SectionTypeMenu({ onAdd }: { onAdd: (type: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 bg-accent text-text-inverse text-sm font-bold px-4 py-2 rounded-xl hover:bg-accent-hover"
      >
        <Plus className="w-4 h-4" /> Tambah Bagian
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-20 w-56 bg-surface border border-border-light rounded-xl shadow-lg p-2">
            {SECTION_TYPES.map((t) => (
              <button
                key={t.type}
                type="button"
                onClick={() => {
                  onAdd(t.type);
                  setOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-bg-main hover:text-accent font-medium"
              >
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
