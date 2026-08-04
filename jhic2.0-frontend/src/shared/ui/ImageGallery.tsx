"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GalleryImage } from "@/shared/types";

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

/**
 * Responsive image grid with a simple lightbox (replaces the reference's
 * isotope + glightbox). Clicking a thumbnail opens a modal with prev/next.
 */
export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  if (images.length === 0) return null;

  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const prev = () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <div>
      <div className={`grid grid-cols-1 ${colClass} gap-4`}>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-light bg-surface-alt shadow-sm"
            aria-label={`Lihat ${img.alt ?? "gambar"} (besar)`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white transition-opacity">
                <ZoomIn className="w-6 h-6" />
              </span>
            </div>
            {img.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-white text-xs font-semibold line-clamp-2">{img.caption}</div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5"
            onClick={() => setActive(null)}
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5"
                aria-label="Berikutnya"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src={images[active].src}
                alt={images[active].alt ?? ""}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            {images[active].caption && (
              <p className="text-center text-white/80 text-sm mt-3">{images[active].caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
