"use client";

import React from "react";
import { konsentrasiPrograms } from "@/services/curriculumData";
import { ProgramCode } from "@/shared/types";

interface KonsentrasiSwitcherProps {
  active: ProgramCode;
  onChange: (code: ProgramCode) => void;
}

/**
 * Konsentrasi Keahlian switch (RPL / TKJ / PG). Drives the learning-journey,
 * expertise, and certification sections on the Program Konsentrasi Keahlian page.
 */
export function KonsentrasiSwitcher({ active, onChange }: KonsentrasiSwitcherProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {konsentrasiPrograms.map((p) => {
        const isActive = active === p.code;
        return (
          <button
            key={p.code}
            type="button"
            onClick={() => onChange(p.code)}
            aria-pressed={isActive}
            className={`px-7 py-3 rounded-full border-2 font-bold text-sm transition-all ${
              isActive
                ? "bg-accent text-text-inverse border-accent shadow-[0_8px_20px_rgba(215,25,32,0.25)]"
                : "bg-surface text-text-muted border-border-light hover:border-accent hover:text-accent"
            }`}
          >
            {p.label}
            <span className="block text-[11px] font-semibold opacity-90">{p.desc}</span>
          </button>
        );
      })}
    </div>
  );
}
