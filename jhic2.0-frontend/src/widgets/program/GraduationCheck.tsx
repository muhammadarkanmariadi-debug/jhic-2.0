'use client';

import React, { useState } from 'react';
import { Search, CheckCircle } from 'lucide-react';
import { Button } from '@/shared/ui/Button';

export function GraduationCheck() {
  const [nisn, setNisn] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ nisn: string, name: string, status: 'LULUS' | 'TIDAK LULUS' } | null>(null);
  const [error, setError] = useState('');

  const handleCheck = () => {
    if (nisn.length < 5) {
      setError('Harap masukkan NISN yang valid');
      setResult(null);
      return;
    }
    setError('');
    setLoading(true);
    setResult(null);
    
    // Simulate API call
    setTimeout(() => {
      setResult({
        nisn: nisn,
        name: 'Budi Santoso',
        status: 'LULUS'
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-[600px] mx-auto bg-surface rounded-xl p-8 md:p-10 border border-border-light shadow-sm text-left">
      <h3 className="text-2xl font-bold text-text-main mb-3 text-center">Cek Status Kelulusan</h3>
      <p className="text-text-muted mb-8 text-center">Masukkan NISN (10 Digit) Anda untuk mengecek status kelulusan tahun akademik ini.</p>
      
      <div className="mb-6">
        <label className="block text-sm font-bold text-text-main mb-2">NISN Siswa</label>
        <input 
          type="text" 
          placeholder="Contoh: 0012345678" 
          maxLength={10}
          value={nisn}
          onChange={(e) => setNisn(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border border-border-light bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-medium"
        />
        {error && <p className="text-error text-sm mt-2 font-medium">{error}</p>}
      </div>

      <Button
        onClick={handleCheck}
        disabled={loading}
        size="lg"
        className="w-full"
      >
        {loading ? (
           <>
             <div className="w-5 h-5 border-2 border-border-light/40 border-t-accent rounded-full animate-spin"></div>
             Memeriksa...
           </>
        ) : (
           <>
             <Search className="w-5 h-5" />
             Cek Status
           </>
        )}
      </Button>

      {result && (
        <div className="mt-10 p-6 rounded-lg bg-success-soft border border-success/30 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-success text-text-inverse flex items-center justify-center shrink-0 shadow-sm">
              <CheckCircle className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-success-strong tracking-tight">{result.status}</h4>
              <p className="text-sm text-success font-medium mt-1">Selamat! Anda dinyatakan lulus.</p>
            </div>
          </div>
          <hr className="border-success/25 my-4" />
          <div className="grid grid-cols-[1fr_2fr] gap-y-3 gap-x-4 text-sm">
            <div className="text-success font-semibold">Nama Lengkap</div>
            <div className="text-text-main font-bold">{result.name}</div>
            
            <div className="text-success font-semibold">NISN</div>
            <div className="text-text-main font-bold">{result.nisn}</div>
            
            <div className="text-success font-semibold">Program Keahlian</div>
            <div className="text-text-main font-bold">Rekayasa Perangkat Lunak</div>
          </div>
        </div>
      )}
    </div>
  );
}
