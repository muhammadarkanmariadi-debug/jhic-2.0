"use client";

import React from "react";
import { ContentSection } from "@/shared/types";
import { StringListEditor } from "./StringListEditor";
import { JsonSectionEditor } from "./JsonSectionEditor";
import { ChevronUp, ChevronDown, Trash2, Plus } from "lucide-react";

interface SectionEditorProps {
  section: ContentSection;
  onChange: (s: ContentSection) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-wide text-text-muted mb-1">
      {children}
    </label>
  );
}

function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-border-light px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
    />
  );
}

function TextArea({
  value,
  onChange,
  rows = 4,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-lg border border-border-light px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
    />
  );
}

function ItemShell({
  index,
  label,
  onRemove,
  children,
}: {
  index: number;
  label: string;
  onRemove: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white border border-border-light p-3 space-y-2">
      <div className="flex items-center justify-between">
        <Label>
          {label} {index + 1}
        </Label>
        <button
          type="button"
          onClick={onRemove}
          className="text-red-500 hover:bg-red-50 rounded-lg p-1.5"
          aria-label="Hapus item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      {children}
    </div>
  );
}

export function SectionEditor({
  section,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
}: SectionEditorProps) {
  const title = (section as { title?: string }).title;
  const setTitle = (v: string) => onChange({ ...section, title: v || undefined } as ContentSection);

  return (
    <div className="rounded-2xl border border-border-light bg-gray-50 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block bg-accent/10 text-accent text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full">
            {section.type}
          </span>
          <span className="text-xs text-text-muted font-semibold">Bagian</span>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={onMoveUp} className="p-1.5 rounded-lg hover:bg-white text-gray-500" aria-label="Naik">
            <ChevronUp className="w-4 h-4" />
          </button>
          <button type="button" onClick={onMoveDown} className="p-1.5 rounded-lg hover:bg-white text-gray-500" aria-label="Turun">
            <ChevronDown className="w-4 h-4" />
          </button>
          <button type="button" onClick={onRemove} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500" aria-label="Hapus">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div>
        <Label>Judul bagian (opsional)</Label>
        <Input value={title ?? ""} onChange={setTitle} placeholder="Judul bagian" />
      </div>

      {section.type === "paragraph" && (
        <div className="space-y-3">
          <div>
            <Label>Teks paragraf</Label>
            <TextArea
              value={section.text}
              onChange={(v) => onChange({ ...section, text: v })}
              placeholder="Tulis paragraf..."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label>Gambar URL (opsional)</Label>
              <Input
                value={section.image?.src ?? ""}
                onChange={(v) =>
                  onChange({ ...section, image: v ? { src: v, alt: section.image?.alt } : undefined })
                }
                placeholder="https://..."
              />
            </div>
            <div>
              <Label>Alt gambar (opsional)</Label>
              <Input
                value={section.image?.alt ?? ""}
                onChange={(v) =>
                  onChange({
                    ...section,
                    image: { src: section.image?.src ?? "", alt: v || undefined },
                  })
                }
              />
            </div>
          </div>
        </div>
      )}

      {(section.type === "checklist" || section.type === "steps" || section.type === "badges") && (
        <div>
          <Label>Item</Label>
          <StringListEditor
            items={section.items}
            onChange={(items) => onChange({ ...section, items })}
            placeholder="Tulis item..."
          />
        </div>
      )}

      {section.type === "cards" && (
        <div className="space-y-2">
          {section.items.map((item, i) => (
            <ItemShell
              key={i}
              index={i}
              label="Kartu"
              onRemove={() => onChange({ ...section, items: section.items.filter((_, idx) => idx !== i) })}
            >
              <Input value={item.title} onChange={(v) => onChange({ ...section, items: section.items.map((it, idx) => (idx === i ? { ...it, title: v } : it)) })} placeholder="Judul kartu" />
              <TextArea value={item.desc} onChange={(v) => onChange({ ...section, items: section.items.map((it, idx) => (idx === i ? { ...it, desc: v } : it)) })} rows={2} />
              <Input value={item.icon ?? ""} onChange={(v) => onChange({ ...section, items: section.items.map((it, idx) => (idx === i ? { ...it, icon: v || undefined } : it)) })} placeholder="Ikon (award / heart / users / ...)" />
            </ItemShell>
          ))}
          <button
            type="button"
            onClick={() => onChange({ ...section, items: [...section.items, { title: "", desc: "" }] })}
            className="inline-flex items-center gap-1.5 text-accent text-sm font-bold hover:underline"
          >
            <Plus className="w-4 h-4" /> Tambah kartu
          </button>
        </div>
      )}

      {section.type === "gallery" && (
        <div className="space-y-2">
          {section.images.map((img, i) => (
            <ItemShell
              key={i}
              index={i}
              label="Gambar"
              onRemove={() => onChange({ ...section, images: section.images.filter((_, idx) => idx !== i) })}
            >
              <Input value={img.src} onChange={(v) => onChange({ ...section, images: section.images.map((it, idx) => (idx === i ? { ...it, src: v } : it)) })} placeholder="URL gambar" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input value={img.alt ?? ""} onChange={(v) => onChange({ ...section, images: section.images.map((it, idx) => (idx === i ? { ...it, alt: v || undefined } : it)) })} placeholder="Alt" />
                <Input value={img.caption ?? ""} onChange={(v) => onChange({ ...section, images: section.images.map((it, idx) => (idx === i ? { ...it, caption: v || undefined } : it)) })} placeholder="Caption" />
              </div>
            </ItemShell>
          ))}
          <button
            type="button"
            onClick={() => onChange({ ...section, images: [...section.images, { src: "" }] })}
            className="inline-flex items-center gap-1.5 text-accent text-sm font-bold hover:underline"
          >
            <Plus className="w-4 h-4" /> Tambah gambar
          </button>
        </div>
      )}

      {section.type === "accordion" && (
        <div className="space-y-2">
          {section.items.map((item, i) => (
            <ItemShell
              key={i}
              index={i}
              label="Akordeon"
              onRemove={() => onChange({ ...section, items: section.items.filter((_, idx) => idx !== i) })}
            >
              <Input value={item.title} onChange={(v) => onChange({ ...section, items: section.items.map((it, idx) => (idx === i ? { ...it, title: v } : it)) })} placeholder="Judul" />
              <TextArea value={item.desc} onChange={(v) => onChange({ ...section, items: section.items.map((it, idx) => (idx === i ? { ...it, desc: v } : it)) })} rows={2} />
            </ItemShell>
          ))}
          <button
            type="button"
            onClick={() => onChange({ ...section, items: [...section.items, { title: "", desc: "" }] })}
            className="inline-flex items-center gap-1.5 text-accent text-sm font-bold hover:underline"
          >
            <Plus className="w-4 h-4" /> Tambah item
          </button>
        </div>
      )}

      {section.type === "table" && (
        <div className="space-y-3">
          <div>
            <Label>Kolom (headers)</Label>
            <StringListEditor items={section.headers} onChange={(headers) => onChange({ ...section, headers })} placeholder="Nama kolom" />
          </div>
          <div>
            <Label>Baris data (JSON — array of arrays)</Label>
            <JsonSectionEditor
              value={section.rows}
              onChange={(rows) => onChange({ ...section, rows: rows as string[][] })}
            />
          </div>
        </div>
      )}

      {(section.type === "tracks" || section.type === "testimonials" || section.type === "partners") && (
        <div>
          <Label>Item (JSON — lihat struktur ContentSection)</Label>
          <JsonSectionEditor
            value={section.items}
            onChange={(items) => onChange({ ...section, items } as ContentSection)}
          />
        </div>
      )}
    </div>
  );
}
