"use client";

import React, { useState } from "react";
import { ContentSection } from "@/shared/types";
import {
  programUmumAdminApi,
  ProgramUmumInput,
  ProgramUmumRecord,
} from "@/services/programUmumAdmin";
import { ApiError } from "@/services/api";
import { SectionEditor } from "./SectionEditor";
import { SectionTypeMenu } from "./SectionTypeMenu";
import { Button } from "@/shared/ui/Button";
import { Save, ArrowLeft } from "lucide-react";

const ICON_OPTIONS = [
  "",
  "bilingual",
  "tahfidz",
  "moklet-serve",
  "factory-tour",
  "idea-challenge",
  "sertifikasi-bahasa",
];

interface TabFormProps {
  token: string;
  initial?: ProgramUmumRecord;
  onSaved: (record: ProgramUmumRecord) => void;
}

function initialSection(type: string): ContentSection | null {
  switch (type) {
    case "paragraph":
      return { type: "paragraph", text: "" };
    case "checklist":
      return { type: "checklist", items: [""] };
    case "cards":
      return { type: "cards", items: [{ title: "", desc: "" }] };
    case "tracks":
      return { type: "tracks", items: [{ title: "" }] };
    case "steps":
      return { type: "steps", items: [""] };
    case "gallery":
      return { type: "gallery", images: [{ src: "" }] };
    case "table":
      return { type: "table", headers: ["Kolom 1"], rows: [[""]] };
    case "accordion":
      return { type: "accordion", items: [{ title: "", desc: "" }] };
    case "testimonials":
      return { type: "testimonials", items: [{ name: "", role: "", quote: "" }] };
    case "badges":
      return { type: "badges", items: [""] };
    case "partners":
      return { type: "partners", items: [{ name: "", desc: "" }] };
    default:
      return null;
  }
}

export function TabForm({ token, initial, onSaved }: TabFormProps) {
  const [key, setKey] = useState(initial?.key ?? "");
  const [label, setLabel] = useState(initial?.label ?? "");
  const [intro, setIntro] = useState(initial?.intro ?? "");
  const [icon, setIcon] = useState(initial?.icon ?? "");
  const [isActive, setIsActive] = useState(initial?.isActive ?? true);
  const [sortOrder, setSortOrder] = useState(initial?.sortOrder ?? 0);
  const [sections, setSections] = useState<ContentSection[]>(initial?.sections ?? []);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addSection = (type: string) => {
    const s = initialSection(type);
    if (s) setSections((prev) => [...prev, s]);
  };

  const updateSection = (i: number, s: ContentSection) => {
    setSections((prev) => prev.map((item, idx) => (idx === i ? s : item)));
  };

  const removeSection = (i: number) => setSections((prev) => prev.filter((_, idx) => idx !== i));

  const moveSection = (i: number, dir: -1 | 1) => {
    setSections((prev) => {
      const j = i + dir;
      if (j < 0 || j >= prev.length) return prev;
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  };

  const save = async () => {
    if (!key.trim() || !label.trim()) {
      setError("Key dan Label wajib diisi.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const payload: ProgramUmumInput = {
        key: key.trim(),
        label: label.trim(),
        intro: intro.trim() || null,
        icon: icon || null,
        sections,
        isActive,
        sortOrder,
      };
      const saved = initial
        ? await programUmumAdminApi.update(token, initial.id, payload)
        : await programUmumAdminApi.create(token, payload);
      onSaved(saved);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : (e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-3">
          {error}
        </div>
      )}

      {/* Meta */}
      <div className="rounded-lg border border-border-light bg-surface p-6 space-y-4">
        <h2 className="font-extrabold text-text-main text-lg">Informasi Tab</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-text-muted mb-1">
              Key (identifier unik)
            </label>
            <input
              value={key}
              disabled={!!initial}
              onChange={(e) => setKey(e.target.value)}
              placeholder="contoh: bilingual"
              className="w-full rounded-lg border border-border-light px-3 py-2 text-sm bg-surface disabled:bg-neutral-100 disabled:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-text-muted mb-1">
              Label (judul tab)
            </label>
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="contoh: Moklet Bilingual"
              className="w-full rounded-lg border border-border-light px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-text-muted mb-1">
              Ikon
            </label>
            <select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className="w-full rounded-lg border border-border-light px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-accent/30"
            >
              {ICON_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt || "(tanpa ikon)"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-text-muted mb-1">
              Urutan (sortOrder)
            </label>
            <input
              type="number"
              value={sortOrder}
              onChange={(e) => setSortOrder(Number(e.target.value))}
              className="w-full rounded-lg border border-border-light px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-text-muted mb-1">
            Intro / deskripsi singkat
          </label>
          <textarea
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-border-light px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <label className="flex items-center gap-2 text-sm font-semibold text-text-main cursor-pointer">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="w-4 h-4 accent-[var(--color-accent)]"
          />
          Aktif (ditampilkan di halaman publik)
        </label>
      </div>

      {/* Sections */}
      <div className="rounded-lg border border-border-light bg-surface p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-text-main text-lg">Bagian Konten</h2>
          <SectionTypeMenu onAdd={addSection} />
        </div>
        {sections.length === 0 && (
          <p className="text-sm text-text-muted">
            Belum ada bagian. Gunakan tombol &quot;Tambah Bagian&quot; untuk mulai menyusun konten.
          </p>
        )}
        <div className="space-y-4">
          {sections.map((s, i) => (
            <SectionEditor
              key={i}
              section={s}
              onChange={(v) => updateSection(i, v)}
              onRemove={() => removeSection(i)}
              onMoveUp={() => moveSection(i, -1)}
              onMoveDown={() => moveSection(i, 1)}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => (typeof window !== "undefined" ? window.history.back() : undefined)}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-text-muted hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali
        </button>
        <Button
          type="button"
          onClick={save}
          disabled={saving}
          className="shadow-lg"
        >
          <Save className="w-4 h-4" /> {saving ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </div>
  );
}
