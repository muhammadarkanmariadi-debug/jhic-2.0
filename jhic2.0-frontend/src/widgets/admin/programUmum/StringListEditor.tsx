"use client";

import React from "react";
import { Plus, X } from "lucide-react";

interface StringListEditorProps {
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}

/** Repeatable plain-text list (checklist / steps / badges). */
export function StringListEditor({ items, onChange, placeholder }: StringListEditorProps) {
  const update = (i: number, value: string) => {
    const next = [...items];
    next[i] = value;
    onChange(next);
  };
  const add = () => onChange([...items, ""]);
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            value={item}
            onChange={(e) => update(i, e.target.value)}
            placeholder={placeholder}
            className="flex-1 rounded-lg border border-border-light px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          <button
            type="button"
            onClick={() => remove(i)}
            className="text-red-500 hover:bg-red-50 rounded-lg p-2"
            aria-label="Hapus"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="inline-flex items-center gap-1.5 text-accent text-sm font-bold hover:underline"
      >
        <Plus className="w-4 h-4" /> Tambah item
      </button>
    </div>
  );
}
