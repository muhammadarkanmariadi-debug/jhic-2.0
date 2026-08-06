'use client';

import React from 'react';
import { Building2, Rocket, Briefcase, MapPin } from 'lucide-react';

export function AlumniDistribution() {
  const topCities = [
    { name: "Jakarta Raya", count: "10.000+", desc: "Pusat teknologi, startup & perusahaan multinasional" },
    { name: "Surabaya & Malang", count: "8.500+", desc: "Telkom Regional, industri lokal & perbankan" },
    { name: "Bandung", count: "3.200+", desc: "Kawasan kreatif & perusahaan digital" },
    { name: "Luar Negeri", count: "500+", desc: "Bekerja/Kuliah di Jepang, Eropa & Australia" },
  ];

  return (
    <div className="bg-surface rounded-xl border border-border-light shadow-sm overflow-hidden">
      {/* Top Panel */}
      <div className="flex flex-col md:flex-row border-b border-border-light">
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border-light bg-surface min-w-[300px]">
          <div className="text-5xl md:text-6xl font-extrabold text-accent mb-2">25.000<span className="text-3xl">+</span></div>
          <div className="text-text-muted font-bold text-lg uppercase tracking-wider">Total Alumni</div>
        </div>
        
        <div className="p-8 md:p-10 flex-1 flex flex-col justify-center bg-surface">
          <div className="flex w-full h-4 rounded-full overflow-hidden mb-6 bg-surface-alt border border-border-color">
             <div className="h-full bg-accent hover:opacity-90 transition-opacity" style={{ width: '65%' }} title="65% Bekerja di IT"></div>
             <div className="h-full bg-blue-600 hover:opacity-90 transition-opacity" style={{ width: '20%' }} title="20% Melanjutkan Kuliah"></div>
             <div className="h-full bg-orange-500 hover:opacity-90 transition-opacity" style={{ width: '15%' }} title="15% Wirausaha / Lainnya"></div>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-accent"></span>
              <span className="font-bold text-text-main">Bekerja di Bidang IT</span>
              <span className="text-text-muted">65%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-blue-600"></span>
              <span className="font-bold text-text-main">Kuliah Terkemuka</span>
              <span className="text-text-muted">20%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-orange-500"></span>
              <span className="font-bold text-text-main">Wirausaha / Instansi</span>
              <span className="text-text-muted">15%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Panel - Clean, Parent-friendly Layout */}
      <div className="flex flex-col lg:flex-row">
        
        {/* Top Cities Area */}
        <div className="flex-1 bg-surface-alt p-8 md:p-10 lg:p-12">
          <h3 className="text-2xl font-bold text-text-main mb-8 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-accent" />
            Kota Utama Tujuan Lulusan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {topCities.map((city, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-lg border border-border-light shadow-sm flex flex-col justify-center hover:border-accent transition-colors">
                <div className="text-accent font-extrabold text-3xl mb-2">{city.count}</div>
                <div className="font-bold text-text-main text-lg mb-1.5">{city.name}</div>
                <div className="text-sm text-text-muted leading-relaxed">{city.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Sidebar */}
        <div className="w-full lg:w-96 bg-surface border-t lg:border-t-0 lg:border-l border-border-light flex flex-col">
          <div className="p-6 md:p-8 border-b border-border-light font-bold text-text-main text-xl">
            Kategori Tempat Kerja
          </div>
          <div className="flex-1 p-6 md:p-8 space-y-6">
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-accent flex items-center justify-center shrink-0 border border-red-100">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-base text-text-main mb-1.5">Telkom Group</div>
                <div className="text-sm text-text-muted leading-relaxed">PT Telkom Indonesia, Telkomsel, Mitratel, Infomedia, dll.</div>
              </div>
            </div>

            <div className="w-full h-px bg-border-light"></div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent text-text-inverse flex items-center justify-center shrink-0 border border-accent/20">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-base text-text-main mb-1.5">Tech Startups & Multinasional</div>
                <div className="text-sm text-text-muted leading-relaxed">GoTo, Traveloka, Shopee, Google Indonesia, Ruangguru, dll.</div>
              </div>
            </div>

            <div className="w-full h-px bg-border-light"></div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent text-text-inverse flex items-center justify-center shrink-0 border border-accent/20">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-base text-text-main mb-1.5">BUMN & Instansi Pemerintah</div>
                <div className="text-sm text-text-muted leading-relaxed">Bank Mandiri, BRI, Kementerian, ASN/PNS, Polri.</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
