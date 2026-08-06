"use client";

import React, { useState } from "react";

export interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  /** "pills" = inline buttons, "grid" = card-style grid cells (like the reference nav-tabs) */
  layout?: "pills" | "grid";
  className?: string;
}

/**
 * Accessible tab switcher. Used by the curriculum pages (Program Umum,
 * Program Konsentrasi Keahlian, Persiapan Kelulusan) to mirror the
 * reference kurikulum microsite tab layout.
 */
export function Tabs({ tabs, layout = "pills", className = "" }: TabsProps) {
  const [activeKey, setActiveKey] = useState(tabs[0]?.key);
  const active = tabs.find((t) => t.key === activeKey) ?? tabs[0];

  if (!active) return null;

  return (
    <div className={`w-full ${className}`}>
      {layout === "pills" ? (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveKey(tab.key)}
              aria-selected={active.key === tab.key}
              role="tab"
              className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                active.key === tab.key
                  ? "bg-accent text-text-inverse border-accent shadow-md"
                  : "bg-surface text-text-muted border-border-light hover:border-accent hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      ) : (
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 ${
            tabs.length > 4 ? "lg:grid-cols-6" : tabs.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveKey(tab.key)}
              aria-selected={active.key === tab.key}
              role="tab"
              className={`rounded-lg border p-4 text-center transition-all ${
                active.key === tab.key
                  ? "border-accent bg-accent/5 text-accent shadow-sm"
                  : "border-border-light bg-surface text-text-muted hover:border-accent/40"
              }`}
            >
              {tab.icon && <div className="flex justify-center mb-2">{tab.icon}</div>}
              <div className="text-sm font-bold leading-tight">{tab.label}</div>
            </button>
          ))}
        </div>
      )}

      <div key={active.key} className="animate-in fade-in slide-in-from-bottom-3 duration-300">
        {active.content}
      </div>
    </div>
  );
}
