"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { programUmumAdminApi, ProgramUmumRecord } from "@/services/programUmumAdmin";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function ProgramUmumListPage() {
  const { token } = useAuth();
  const [items, setItems] = useState<ProgramUmumRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await programUmumAdminApi.listAll(token);
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

  const refresh = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const data = await programUmumAdminApi.listAll(token);
      setItems(data);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (item: ProgramUmumRecord) => {
    try {
      await programUmumAdminApi.update(token!, item.id, { isActive: !item.isActive });
      refresh();
    } catch (e) {
      alert((e as Error).message);
    }
  };

  const handleDelete = async (item: ProgramUmumRecord) => {
    if (!window.confirm(`Hapus tab "${item.label}"?`)) return;
    try {
      await programUmumAdminApi.remove(token!, item.id);
      refresh();
    } catch (e) {
      alert((e as Error).message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-text-main">Program Umum</h1>
          <p className="text-sm text-text-muted mt-1">Kelola tab konten Program Umum (CRUD).</p>
        </div>
        <Link
          href="/admin/program-umum/new"
          className="inline-flex items-center gap-2 bg-accent text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-accent-hover"
        >
          <Plus className="w-4 h-4" /> Tab Baru
        </Link>
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-3">
          {error}
        </div>
      )}

      <div className="rounded-2xl border border-border-light bg-white overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-text-muted font-semibold">Memuat...</div>
        ) : items.length === 0 ? (
          <div className="p-8 text-center text-text-muted font-semibold">
            Belum ada tab Program Umum. Buat tab pertama.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-border-light text-text-muted text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 font-bold">Label</th>
                  <th className="px-4 py-3 font-bold">Key</th>
                  <th className="px-4 py-3 font-bold">Urutan</th>
                  <th className="px-4 py-3 font-bold">Aktif</th>
                  <th className="px-4 py-3 font-bold">Diperbarui</th>
                  <th className="px-4 py-3 font-bold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-border-light last:border-0 hover:bg-gray-50">
                    <td className="px-4 py-3 font-bold text-text-main">{item.label}</td>
                    <td className="px-4 py-3 text-text-muted">
                      <code className="bg-bg-main px-1.5 py-0.5 rounded">{item.key}</code>
                    </td>
                    <td className="px-4 py-3 text-text-muted">{item.sortOrder}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => toggleActive(item)}
                        className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${
                          item.isActive
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {item.isActive ? "Aktif" : "Nonaktif"}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-text-muted">
                      {item.updatedAt ? new Date(item.updatedAt).toLocaleDateString("id-ID") : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          href={`/admin/program-umum/${item.id}`}
                          className="p-2 rounded-lg hover:bg-bg-main text-accent"
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
