"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star, Send, CheckCircle2 } from "lucide-react";
import { feedbackApi } from "@/services/feedback";
import { ApiError } from "@/services/api";

const formSchema = z.object({
  context: z.string().optional(),
  comment: z.string().min(5, "Masukkan minimal 5 karakter"),
  contact: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CONTEXTS = ["Situs Web", "Informasi PPDB/SPMB", "Kurikulum", "Program", "Layanan Lainnya"];

export function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: FormValues) => {
    if (rating === 0) {
      setStatus("error");
      setErrorMsg("Silakan pilih rating (jumlah bintang) terlebih dahulu.");
      return;
    }
    setStatus("submitting");
    try {
      await feedbackApi.submit({
        context: values.context || undefined,
        rating,
        comment: values.comment,
        contact: values.contact || undefined,
      });
      setStatus("success");
      setErrorMsg("");
      reset();
      setRating(0);
    } catch (e) {
      setStatus("error");
      setErrorMsg(
        e instanceof ApiError ? e.message : "Terjadi kesalahan saat mengirim masukan. Coba lagi nanti."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
        <h2 className="text-2xl font-extrabold text-text-main mb-2">Terima kasih atas masukan Anda!</h2>
        <p className="text-text-muted">
          Ulasan Anda sangat berharga untuk meningkatkan kualitas layanan kami.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border-light bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-text-main mb-2">Beri Masukan</h2>
      <p className="text-text-muted mb-8">Bagikan pengalaman dan saran Anda kepada kami.</p>

      {status === "error" && (
        <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-3">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Rating */}
        <div>
          <label className="block text-sm font-bold text-text-main mb-2">Rating</label>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                aria-label={`${n} bintang`}
                className="text-3xl"
              >
                <Star
                  className={`w-9 h-9 transition-colors ${
                    n <= rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Context */}
        <div>
          <label className="block text-sm font-bold text-text-main mb-2">
            Tentang apa masukan Anda? (opsional)
          </label>
          <select
            {...register("context")}
            className="w-full rounded-xl border border-border-light px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            <option value="">Pilih topik</option>
            {CONTEXTS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-bold text-text-main mb-2">Masukan Anda</label>
          <textarea
            {...register("comment")}
            rows={5}
            placeholder="Tulis masukan, saran, atau keluhan Anda di sini..."
            className="w-full rounded-xl border border-border-light px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          {errors.comment && (
            <p className="text-xs text-red-600 mt-1 font-semibold">{errors.comment.message}</p>
          )}
        </div>

        {/* Contact optional */}
        <div>
          <label className="block text-sm font-bold text-text-main mb-2">
            Kontak (opsional — jika ingin dihubungi kembali)
          </label>
          <input
            {...register("contact")}
            placeholder="Email atau nomor telepon"
            className="w-full rounded-xl border border-border-light px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg"
        >
          <Send className="w-4 h-4" /> {status === "submitting" ? "Mengirim..." : "Kirim Masukan"}
        </button>
      </form>
    </div>
  );
}