"use client";

import React, { useMemo, useState } from "react";
import { Calculator, Home, Utensils, Bike, Coins } from "lucide-react";

const kosOptions = [
  { label: "Kos Standar", value: 600000 },
  { label: "Kos Premium", value: 1200000 },
];

const foodOptions = [
  { label: "Ekonomis (± Rp 40rb/hari)", value: 1200000 },
  { label: "Normal (± Rp 60rb/hari)", value: 1800000 },
];

const transportOptions = [
  { label: "Jalan Kaki / Sepeda", value: 0 },
  { label: "Motor Pribadi", value: 200000 },
  { label: "Transportasi Umum / Ojek", value: 350000 },
];

const otherOptions = [
  { label: "Kuota & Internet", value: 150000 },
  { label: "Laundry", value: 100000 },
  { label: "Jajan & Hiburan", value: 300000 },
];

export function LivingCostCalculator() {
  const [kos, setKos] = useState(kosOptions[0].value);
  const [food, setFood] = useState(foodOptions[0].value);
  const [transport, setTransport] = useState(transportOptions[0].value);
  const [other, setOther] = useState<number[]>([]);

  const total = useMemo(
    () => kos + food + transport + other.reduce((a, b) => a + b, 0),
    [kos, food, transport, other]
  );

  const toggleOther = (value: number) => {
    setOther((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="rounded-3xl border border-border-light bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-text-main">Kalkulator Estimasi Biaya Hidup</h3>
          <p className="text-sm text-text-muted">Hitung perkiraan pengeluaran bulananmu.</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Kos */}
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-text-main mb-3">
            <Home className="w-4 h-4 text-accent" /> Tempat Tinggal
          </div>
          <div className="grid grid-cols-2 gap-3">
            {kosOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setKos(opt.value)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  kos === opt.value
                    ? "border-accent bg-accent/5 text-accent"
                    : "border-border-light hover:border-accent/40"
                }`}
              >
                <div className="font-bold text-sm">{opt.label}</div>
                <div className="text-xs opacity-80">Rp {opt.value.toLocaleString("id-ID")}/bln</div>
              </button>
            ))}
          </div>
        </div>

        {/* Makan */}
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-text-main mb-3">
            <Utensils className="w-4 h-4 text-accent" /> Makan & Minum
          </div>
          <div className="grid grid-cols-2 gap-3">
            {foodOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setFood(opt.value)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  food === opt.value
                    ? "border-accent bg-accent/5 text-accent"
                    : "border-border-light hover:border-accent/40"
                }`}
              >
                <div className="font-bold text-sm">{opt.label}</div>
                <div className="text-xs opacity-80">Rp {opt.value.toLocaleString("id-ID")}/bln</div>
              </button>
            ))}
          </div>
        </div>

        {/* Transport */}
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-text-main mb-3">
            <Bike className="w-4 h-4 text-accent" /> Transportasi
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {transportOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setTransport(opt.value)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  transport === opt.value
                    ? "border-accent bg-accent/5 text-accent"
                    : "border-border-light hover:border-accent/40"
                }`}
              >
                <div className="font-bold text-sm">{opt.label}</div>
                {opt.value > 0 && (
                  <div className="text-xs opacity-80">Rp {opt.value.toLocaleString("id-ID")}/bln</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Lainnya */}
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-text-main mb-3">
            <Coins className="w-4 h-4 text-accent" /> Pengeluaran Lainnya
          </div>
          <div className="flex flex-wrap gap-3">
            {otherOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => toggleOther(opt.value)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                  other.includes(opt.value)
                    ? "border-accent bg-accent text-white"
                    : "border-border-light text-text-muted hover:border-accent/40"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="rounded-2xl bg-accent text-white p-6 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white/80">Estimasi Total per Bulan</div>
            <div className="text-xs text-white/60">Belum termasuk biaya semester & perlengkapan</div>
          </div>
          <div className="text-3xl font-extrabold">
            Rp {total.toLocaleString("id-ID")}
          </div>
        </div>
      </div>
    </div>
  );
}
