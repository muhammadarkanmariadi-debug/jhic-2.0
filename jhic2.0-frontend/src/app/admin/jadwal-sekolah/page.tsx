"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { Plus, Pencil, Trash2, CalendarClock } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { Status } from "@/shared/ui/Status";
import { schoolScheduleAdminApi, SchoolScheduleRecord } from "@/services/schoolScheduleAdmin";

export default function JadwalSekolahListPage() {
  const { token } = useAuth();
  const [items, setItems] = useState<SchoolScheduleRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await schoolScheduleAdminApi.listAll(token);
        if (!cancelled) {
          setItems(data);
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
  }, [token]);

  const handleDelete = async (item: SchoolScheduleRecord) => {
    if (!token) return;
    if (!window.confirm(`Hapus jadwal "${item.title}"?`)) return;
    try {
      await schoolScheduleAdminApi.remove(token, item.id);
      setItems((prev) => prev.filter((x) => x.id !== item.id));
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-text-main">Jadwal Sekolah</h1>
          <p className="text-sm text-text-muted mt-1">Kelola jadwal kegiatan belajar mengajar (CRUD).</p>
        </div>
        <Button href="/admin/jadwal-sekolah/new" size="sm" icon={Plus} iconPosition="left">
          Jadwal Baru
        </Button>
      </div>

      {error && (
        <Status variant="error" className="w-full">
          {error}
        </Status>
      )}

      {loading ? (
        <div className="text-center text-text-muted py-10">Memuat...</div>
      ) : items.length === 0 ? (
        <Status variant="info" className="w-full">
          Belum ada jadwal. Klik &ldquo;Jadwal Baru&rdquo; untuk membuat yang pertama.
        </Status>
      ) : (
        <div className="space-y-3">
          {items.map((item) => {
            const dayCount = item.days?.length ?? 0;
            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-border-light bg-surface p-4 shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <CalendarClock className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-bold text-text-main truncate">
                      {item.title}
                      {!item.isActive && (
                        <span className="ml-2 rounded-full bg-neutral-100 text-text-muted px-2 py-0.5 text-xs font-bold">
                          Nonaktif
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-text-muted">{dayCount} hari</div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Link
                    href={`/admin/jadwal-sekolah/${item.id}`}
                    className="p-2 rounded-lg hover:bg-neutral-50 text-text-muted"
                    aria-label="Edit"
                  >
                    <Pencil className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(item)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-500"
                    aria-label="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}