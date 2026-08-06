"use client";

import React, { useState } from "react";
import { Plus, Trash2, Save, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { Status } from "@/shared/ui/Status";
import { schoolScheduleAdminApi } from "@/services/schoolScheduleAdmin";
import { SchoolDay, ScheduleBlock } from "@/services/schoolSchedule";

const inputClass =
  "w-full rounded-lg border border-border-light bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30";

interface ScheduleFormProps {
  token: string;
  initial?: {
    id?: string;
    title: string;
    description?: string | null;
    isActive: boolean;
    days: SchoolDay[];
  };
  onSaved: () => void;
}

const emptyBlock = (): ScheduleBlock => ({ label: "", start: "", end: "" });

const emptyDay = (name = ""): SchoolDay => ({ name, blocks: [emptyBlock()] });

export function ScheduleForm({ token, initial, onSaved }: ScheduleFormProps) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [isActive, setIsActive] = useState(initial?.isActive ?? true);
  const [days, setDays] = useState<SchoolDay[]>(initial?.days?.length ? initial.days : [emptyDay("Senin")]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEdit = Boolean(initial?.id);

  const updateDay = (dayIdx: number, patch: Partial<SchoolDay>) => {
    setDays((prev) => prev.map((d, i) => (i === dayIdx ? { ...d, ...patch } : d)));
  };

  const updateBlock = (dayIdx: number, blockIdx: number, patch: Partial<ScheduleBlock>) => {
    setDays((prev) =>
      prev.map((d, i) =>
        i === dayIdx
          ? { ...d, blocks: d.blocks.map((b, j) => (j === blockIdx ? { ...b, ...patch } : b)) }
          : d
      )
    );
  };

  const addBlock = (dayIdx: number) => {
    setDays((prev) => prev.map((d, i) => (i === dayIdx ? { ...d, blocks: [...d.blocks, emptyBlock()] } : d)));
  };

  const removeBlock = (dayIdx: number, blockIdx: number) => {
    setDays((prev) =>
      prev.map((d, i) => (i === dayIdx ? { ...d, blocks: d.blocks.filter((_, j) => j !== blockIdx) } : d))
    );
  };

  const addDay = () => setDays((prev) => [...prev, emptyDay()]);

  const removeDay = (dayIdx: number) => setDays((prev) => prev.filter((_, i) => i !== dayIdx));

  const handleSave = async () => {
    setError(null);
    if (!title.trim()) {
      setError("Judul jadwal wajib diisi.");
      return;
    }
    // Normalize: drop empty blocks and empty days.
    const cleanDays = days
      .map((d) => ({
        name: d.name.trim(),
        blocks: d.blocks
          .filter((b) => b.label.trim() && b.start.trim())
          .map((b) => ({ label: b.label.trim(), start: b.start.trim(), end: b.end?.trim() || null })),
      }))
      .filter((d) => d.name && d.blocks.length > 0);

    if (cleanDays.length === 0) {
      setError("Tambahkan minimal satu hari dengan satu kegiatan.");
      return;
    }

    setSaving(true);
    try {
      const payload = { title: title.trim(), description: description.trim() || null, days: cleanDays, isActive };
      if (isEdit) {
        await schoolScheduleAdminApi.update(token, initial!.id!, payload);
      } else {
        await schoolScheduleAdminApi.create(token, payload);
      }
      onSaved();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Terjadi kesalahan saat menyimpan jadwal.");
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => (typeof window !== "undefined" ? window.history.back() : undefined)}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-text-muted hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali
        </button>
        <Button type="button" onClick={handleSave} disabled={saving} className="shadow-lg">
          <Save className="w-4 h-4" /> {saving ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Simpan"}
        </Button>
      </div>

      {error && (
        <Status variant="error" className="w-full">
          {error}
        </Status>
      )}

      <div className="rounded-lg border border-border-light bg-surface p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-bold text-text-main mb-1.5">Judul Jadwal</label>
          <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Jadwal Belajar Reguler" />
        </div>
        <div>
          <label className="block text-sm font-bold text-text-main mb-1.5">Deskripsi</label>
          <textarea
            className={`${inputClass} resize-y min-h-[70px]`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Contoh: Jam kegiatan belajar mengajar hari Senin–Sabtu."
          />
        </div>
        <label className="flex items-center gap-2 text-sm font-bold text-text-main cursor-pointer">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="w-4 h-4 rounded border-border-light text-accent focus:ring-accent/30"
          />
          Tampilkan di halaman publik
        </label>
      </div>

      <div className="space-y-4">
        {days.map((day, dayIdx) => (
          <div key={dayIdx} className="rounded-lg border border-border-light bg-surface p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                <Clock className="h-4 w-4" />
              </span>
              <input
                className={inputClass}
                value={day.name}
                onChange={(e) => updateDay(dayIdx, { name: e.target.value })}
                placeholder="Nama hari (Senin, Selasa, Jumat, ...)"
              />
              <button
                type="button"
                onClick={() => removeDay(dayIdx)}
                className="shrink-0 p-1.5 rounded-lg hover:bg-red-50 text-red-500"
                aria-label="Hapus hari"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {day.blocks.map((block, blockIdx) => (
                <div key={blockIdx} className="grid grid-cols-1 md:grid-cols-[1fr_120px_120px_auto] gap-2">
                  <input
                    className={inputClass}
                    value={block.label}
                    onChange={(e) => updateBlock(dayIdx, blockIdx, { label: e.target.value })}
                    placeholder="Kegiatan (Jam Masuk, Istirahat, Sholat, Pulang)"
                  />
                  <input
                    type="time"
                    className={inputClass}
                    value={block.start}
                    onChange={(e) => updateBlock(dayIdx, blockIdx, { start: e.target.value })}
                    aria-label="Mulai"
                  />
                  <input
                    type="time"
                    className={inputClass}
                    value={block.end ?? ""}
                    onChange={(e) => updateBlock(dayIdx, blockIdx, { end: e.target.value || null })}
                    aria-label="Selesai"
                  />
                  <button
                    type="button"
                    onClick={() => removeBlock(dayIdx, blockIdx)}
                    className="shrink-0 p-2 rounded-lg hover:bg-red-50 text-red-500"
                    aria-label="Hapus kegiatan"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <Button type="button" variant="secondary" size="sm" className="mt-3" onClick={() => addBlock(dayIdx)}>
              <Plus className="w-4 h-4" /> Tambah Kegiatan
            </Button>
          </div>
        ))}
      </div>

      <Button type="button" variant="secondary" onClick={addDay}>
        <Plus className="w-4 h-4" /> Tambah Hari
      </Button>
    </div>
  );
}