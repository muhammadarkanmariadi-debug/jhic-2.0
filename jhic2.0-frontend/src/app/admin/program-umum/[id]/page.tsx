"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { programUmumAdminApi, ProgramUmumRecord } from "@/services/programUmumAdmin";
import { TabForm } from "@/widgets/admin/programUmum/TabForm";

export default function EditProgramUmumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { token } = useAuth();
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [record, setRecord] = useState<ProgramUmumRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    params.then(({ id: pid }) => setId(pid));
  }, [params]);

  useEffect(() => {
    if (!token || !id) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await programUmumAdminApi.getById(token, id);
        if (!cancelled) {
          setRecord(data);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token, id]);

  if (!token) return null;

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-text-main">Edit Tab Program Umum</h1>
        <p className="text-sm text-text-muted mt-1">Perbarui konten tab Program Umum.</p>
      </div>

      {loading && <div className="text-center text-text-muted py-10">Memuat...</div>}
      {error && !loading && (
        <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-3">
          {error}
        </div>
      )}
      {record && !loading && (
        <TabForm
          token={token}
          initial={record}
          onSaved={() => router.push("/admin/program-umum")}
        />
      )}
    </div>
  );
}
