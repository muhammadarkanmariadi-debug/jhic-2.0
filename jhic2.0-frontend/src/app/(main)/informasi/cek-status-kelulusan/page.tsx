"use client";

import React, { useState } from "react";
import { PageHeader } from "@/shared/ui/PageHeader";
import { Search, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/shared/ui/Button";

export default function CekStatusKelulusanPage() {
  const [nisn, setNisn] = useState("");
  const [checked, setChecked] = useState(false);

  const isSubmitted = nisn.trim().length >= 8;

  return (
    <main>
      <PageHeader
        breadcrumbItems={[
          { label: "Beranda", href: "/" },
          { label: "Informasi", href: "/informasi" },
          { label: "Cek Status Kelulusan" },
        ]}
        title="Cek Status Kelulusan"
        description="Periksa status kelulusan dengan memasukkan NISN Anda. Pengumuman resmi diumumkan sesuai jadwal sekolah."
      />

      <section className="py-16 md:py-24 bg-surface">
        <div className="container max-w-[640px] mx-auto px-4 md:px-6">
          <div className="rounded-xl border border-border-light bg-surface p-8 shadow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-lg bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-text-main mb-2">Masukkan NISN</h2>
              <p className="text-text-muted text-sm">
                NISN (Nomor Induk Siswa Nasional) terdiri dari 10 digit.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setChecked(true);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                inputMode="numeric"
                value={nisn}
                onChange={(e) => {
                  setNisn(e.target.value.replace(/\D/g, ""));
                  setChecked(false);
                }}
                placeholder="Contoh: 0091234567"
                className="w-full rounded-xl border border-border-light px-5 py-3.5 text-lg font-bold tracking-widest text-center focus:outline-none focus:ring-2 focus:ring-accent/30"
                maxLength={10}
              />
              <Button
                type="submit"
                size="lg"
                disabled={!isSubmitted}
                className="w-full"
              >
                <Search className="w-5 h-5" />
                Cek Status Kelulusan
              </Button>
            </form>

            {checked && (
              <div className="mt-8 rounded-lg border border-success/30 bg-success-soft p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-8 h-8 text-success shrink-0" />
                  <div>
                    <h3 className="font-extrabold text-text-main">Status: LULUS</h3>
                    <p className="text-sm text-text-muted">NISN {nisn || "-"}</p>
                  </div>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  Selamat! Anda dinyatakan <strong>LULUS</strong> dari SMK Telkom Malang. Sertifikat dan
                  dokumen kelulusan dapat diambil sesuai jadwal pengumuman resmi sekolah.
                </p>
              </div>
            )}

            <div className="mt-6 flex items-start gap-3 rounded-lg bg-neutral-50 border border-border-light p-5">
              <Clock className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
              <p className="text-sm text-text-muted leading-relaxed">
                <span className="font-bold text-text-main">Catatan:</span> Data status kelulusan saat ini
                menggunakan data contoh. Koneksi ke data kelulusan resmi akan diaktifkan bersama sistem
                backend (MokletKurikulum & informasi kelulusan).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
