"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, LogIn, Lock, Mail } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { ApiError } from "@/services/api";

const loginSchema = z.object({
  email: z.string().email("Masukkan email yang valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginForm) => {
    setSubmitting(true);
    setError(null);
    try {
      await login(values.email, values.password);
      const next =
        new URLSearchParams(window.location.search).get("next") ?? "/admin";
      router.push(next);
      router.refresh();
    } catch (e) {
      if (e instanceof ApiError) {
        setError(e.message);
      } else {
        setError("Tidak dapat terhubung ke server. Pastikan backend berjalan.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg-main flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-border-light bg-white p-8 md:p-10 shadow-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-text-muted hover:text-accent mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>

          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-text-main">Masuk Admin</h1>
            <p className="text-sm text-text-muted mt-1">
              Masuk untuk mengelola konten kurikulum SMK Telkom Malang.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-3">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-text-main mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className="w-full rounded-xl border border-border-light pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="admin@smktelkom-mlg.sch.id"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-600 mt-1 font-semibold">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-text-main mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register("password")}
                  className="w-full rounded-xl border border-border-light pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-600 mt-1 font-semibold">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              {submitting ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-text-muted leading-relaxed">
            Akun admin dibuat melalui proses registrasi backend (seed). Default Super Admin:
            <br />
            <code className="text-accent font-bold">admin@smktelkom-mlg.sch.id</code> /{" "}
            <code className="text-accent font-bold">Admin123!</code> (ubah setelah masuk).
          </p>
        </div>
      </div>
    </main>
  );
}
