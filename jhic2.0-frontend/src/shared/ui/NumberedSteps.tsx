import React from "react";

interface NumberedStepsProps {
  steps: string[];
}

/** Numbered step grid (mirrors the reference "stats"-style Tahapan Kegiatan). */
export function NumberedSteps({ steps }: NumberedStepsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 rounded-xl border border-border-light bg-surface p-4 shadow-sm"
        >
          <div className="w-9 h-9 shrink-0 rounded-full bg-accent text-text-inverse flex items-center justify-center font-extrabold text-sm">
            {idx + 1}
          </div>
          <div className="text-sm font-bold text-text-main leading-snug">{step}</div>
        </div>
      ))}
    </div>
  );
}
