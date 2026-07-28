'use client';

import React from 'react';
import { Eye } from 'lucide-react';

export function K3Table() {
  const documents = [
    {
      id: 1,
      name: 'SARANA UMUM DAN SARANA EVAKUASI: SNI 03 - 1746 - 2000',
      date: '04 May 2026'
    },
    {
      id: 2,
      name: 'Layanan K3L SMK Telkom',
      date: '04 May 2026'
    },
    {
      id: 3,
      name: 'Jalur Evakuasi SMK Telkom',
      date: '04 May 2026'
    },
    {
      id: 4,
      name: 'Implementasi K3 SMK Telkom',
      date: '04 May 2026'
    },
    {
      id: 5,
      name: 'IK - Safety Guide SMK Telkom',
      date: '04 May 2026'
    },
    {
      id: 6,
      name: 'Form Izin Kerja SMK Telkom',
      date: '04 May 2026'
    }
  ];

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-border-light shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-accent text-white">
              <th className="py-4 px-6 font-semibold text-sm w-16">No.</th>
              <th className="py-4 px-6 font-semibold text-sm">Nama File</th>
              <th className="py-4 px-6 font-semibold text-sm w-40">Diunggah</th>
              <th className="py-4 px-6 font-semibold text-sm w-32">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, idx) => (
              <tr 
                key={doc.id} 
                className={`border-b border-border-light hover:bg-surface-alt transition-colors ${idx % 2 === 1 ? 'bg-surface/50' : 'bg-white'}`}
              >
                <td className="py-4 px-6 text-sm text-text-muted">{doc.id}</td>
                <td className="py-4 px-6 text-sm font-medium text-text-main">{doc.name}</td>
                <td className="py-4 px-6 text-sm text-text-muted">{doc.date}</td>
                <td className="py-4 px-6">
                  <button className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    <Eye className="w-4 h-4" />
                    Lihat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
