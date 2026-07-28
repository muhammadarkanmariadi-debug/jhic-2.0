import React from 'react';
import Link from 'next/link';

export function PPDBPrestasi() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-border-light shadow-sm flex flex-col lg:flex-row">
      
      {/* Left Content */}
      <div className="flex-1 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 max-w-fit">
          Jalur Prestasi Terbatas
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6 leading-tight">
          Punya Prestasi Akademik atau Non-Akademik?
        </h2>
        <p className="text-text-muted leading-relaxed text-lg mb-10 border-l-4 border-accent pl-6 py-2">
          Kami memberikan apresiasi kepada calon siswa yang telah mengukir prestasi. Kamu bisa mendaftar melalui Jalur Prestasi dan mendapatkan keuntungan khusus selama proses seleksi.
        </p>
        <Link 
          href="https://ppdb.smktelkom-mlg.sch.id" 
          target="_blank"
          className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-xl transition-all w-fit shadow-md hover:shadow-lg inline-flex"
        >
          Daftar Jalur Prestasi
        </Link>
      </div>

      {/* Right Content - Requirements */}
      <div className="w-full lg:w-[45%] bg-surface-alt p-10 md:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border-light relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <h3 className="text-xl font-bold text-text-main mb-8 flex items-center gap-3">
          <div className="w-2 h-8 bg-accent rounded-full"></div>
          Persyaratan Umum
        </h3>
        <ul className="space-y-5">
          <li className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-white border border-border-light flex items-center justify-center shrink-0 mt-0.5 text-accent font-bold text-xs shadow-sm">1</div>
            <p className="text-text-muted leading-relaxed">Siswa kelas 9 SMP/MTs sederajat tahun ajaran berjalan.</p>
          </li>
          <li className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-white border border-border-light flex items-center justify-center shrink-0 mt-0.5 text-accent font-bold text-xs shadow-sm">2</div>
            <p className="text-text-muted leading-relaxed">Memiliki NISN yang terdaftar di sistem kementerian.</p>
          </li>
          <li className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-white border border-border-light flex items-center justify-center shrink-0 mt-0.5 text-accent font-bold text-xs shadow-sm">3</div>
            <p className="text-text-muted leading-relaxed">Nilai rapor semester 1-5 mata pelajaran Matematika & Bahasa Inggris rata-rata minimal 75.</p>
          </li>
          <li className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-white border border-border-light flex items-center justify-center shrink-0 mt-0.5 text-accent font-bold text-xs shadow-sm">4</div>
            <p className="text-text-muted leading-relaxed">Tidak buta warna (mutlak untuk jurusan RPL dan TKJ).</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
