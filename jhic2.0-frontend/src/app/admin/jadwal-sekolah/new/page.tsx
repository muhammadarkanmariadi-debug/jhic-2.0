"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { ScheduleForm } from "@/widgets/admin/schoolSchedule/ScheduleForm";

export default function NewJadwalSekolahPage() {
  const { token } = useAuth();
  const router = useRouter();

  if (!token) return null;

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-text-main">Buat Jadwal Sekolah</h1>
        <p className="text-sm text-text-muted mt-1">
          Buat jadwal baru dengan hari dan jam kegiatan (masuk, istirahat, sholat, pulang).
        </p>
      </div>
      <ScheduleForm token={token} onSaved={() => router.push("/admin/jadwal-sekolah")} />
    </div>
  );
}