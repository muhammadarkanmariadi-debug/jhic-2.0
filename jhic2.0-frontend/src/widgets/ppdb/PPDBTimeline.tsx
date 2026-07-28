'use client';

import React from 'react';
import { UserPlus, FileCheck, BrainCircuit, CheckCircle2 } from 'lucide-react';

export function PPDBTimeline() {
  const steps = [
    {
      id: 1,
      title: 'Registrasi Akun',
      description: 'Buat akun di portal PPDB, siapkan email aktif dan nomor NISN untuk pendataan awal.',
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Lengkapi Berkas',
      description: 'Unggah scan rapor SMP, pas foto, dan dokumen pendukung sesuai persyaratan.',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Tes Seleksi',
      description: 'Ikuti tes akademik (Matematika & B.Inggris) dan tes minat bakat secara online.',
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'Daftar Ulang',
      description: 'Bagi calon siswa yang dinyatakan lolos, wajib melakukan proses daftar ulang.',
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto pt-10">
      {/* Connecting Line */}
      <div className="hidden md:block absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-border-light z-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {steps.map((step) => (
          <div key={step.id} className="group flex flex-col items-center text-center">
            {/* Number Marker */}
            <div className="w-16 h-16 rounded-full bg-white border-4 border-surface shadow-[0_0_0_4px_rgba(215,25,32,0.1)] flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(215,25,32,0.2)] transition-all duration-300 relative">
              <span className="font-extrabold text-xl">{step.id}</span>
              <div className="absolute inset-0 bg-accent/5 rounded-full z-[-1]"></div>
            </div>

            {/* Content Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border-light group-hover:-translate-y-2 group-hover:shadow-md group-hover:border-accent/30 transition-all duration-300 w-full relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-hover transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h3 className="text-lg font-bold text-text-main mb-3">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
