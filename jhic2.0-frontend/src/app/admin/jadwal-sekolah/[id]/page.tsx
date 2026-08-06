"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { Status } from "@/shared/ui/Status";
import { schoolScheduleAdminApi, SchoolScheduleRecord } from "@/services/schoolScheduleAdmin";
import { ScheduleForm } from "@/widgets/admin/schoolSchedule/ScheduleForm";

export default function EditJadwalSekolahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { token } = useAuth();
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [record, setRecord] = useState<SchoolScheduleRecord | null>(null);
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
        const data = await schoolScheduleAdminApi.getById(token, id);
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
        <h1 className="text-2xl font-extrabold text-text-main">Edit Jadwal Sekolah</h1>
        <p className="text-sm text-text-muted mt-1">Perbarui jadwal kegiatan belajar mengajar.</p>
      </div>

      {loading && <div className="text-center text-text-muted py-10">Memuat...</div>}
      {error && !loading && (
        <Status variant="error" className="w-full">
          {error}
        </Status>
      )}
      {record && !loading && (
        <ScheduleForm
          token={token}
          initial={record}
          onSaved={() => router.push("/admin/jadwal-sekolah")}
        />
      )}
    </div>
  );
}