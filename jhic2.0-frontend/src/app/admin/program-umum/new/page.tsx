"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { TabForm } from "@/widgets/admin/programUmum/TabForm";

export default function NewProgramUmumPage() {
  const { token } = useAuth();
  const router = useRouter();

  if (!token) return null;

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-text-main">Buat Tab Program Umum</h1>
        <p className="text-sm text-text-muted mt-1">
          Buat tab konten baru, lalu susun bagian-bagiannya.
        </p>
      </div>
      <TabForm
        token={token}
        onSaved={() => router.push("/admin/program-umum")}
      />
    </div>
  );
}
