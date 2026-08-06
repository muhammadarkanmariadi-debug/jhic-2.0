"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface JsonSectionEditorProps {
  value: unknown;
  onChange: (value: unknown) => void;
}

/** Fallback JSON editor for complex section types (tracks / testimonials / partners). */
export function JsonSectionEditor({ value, onChange }: JsonSectionEditorProps) {
  const [text, setText] = useState(() => JSON.stringify(value ?? [], null, 2));
  const [error, setError] = useState<string | null>(null);

  const commit = () => {
    try {
      onChange(JSON.parse(text));
      setError(null);
    } catch (e) {
      setError(`JSON tidak valid: ${(e as Error).message}`);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        className="w-full rounded-xl border border-border-light p-3 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
      <button
        type="button"
        onClick={commit}
        className="inline-flex items-center gap-1.5 text-accent text-sm font-bold hover:underline"
      >
        <Check className="w-4 h-4" /> Validasi & Simpan
      </button>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
