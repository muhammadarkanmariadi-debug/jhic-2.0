'use client';

import React, { useState } from 'react';
import { Building2, Rocket, Briefcase, GraduationCap } from 'lucide-react';

export function AlumniDistribution() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const dots = [
    // Telkom
    { id: 1, x: 28, y: 55, category: 'telkom', title: 'Telkom Landmark Tower', meta: 'Jakarta, DKI Jakarta • 450+ Alumni' },
    { id: 2, x: 65, y: 40, category: 'telkom', title: 'Telkom Regional 5', meta: 'Surabaya, Jatim • 320+ Alumni' },
    { id: 3, x: 85, y: 25, category: 'telkom', title: 'Telkomsel Area Pamasuka', meta: 'Makassar, Sulsel • 110+ Alumni' },
    // Startup
    { id: 4, x: 32, y: 45, category: 'startup', title: 'Unicorn HQ', meta: 'Jakarta Selatan • 500+ Alumni' },
    { id: 5, x: 48, y: 60, category: 'startup', title: 'Tech Valley Startups', meta: 'Yogyakarta • 180+ Alumni' },
    { id: 6, x: 70, y: 65, category: 'startup', title: 'Creative Digital Hub', meta: 'Malang, Jatim • 210+ Alumni' },
    { id: 7, x: 55, y: 30, category: 'startup', title: 'Startup Center', meta: 'Bandung, Jabar • 240+ Alumni' },
    // BUMN
    { id: 8, x: 20, y: 25, category: 'bumn', title: 'Oil & Gas Corp', meta: 'Pekanbaru, Riau • 75+ Alumni' },
    { id: 9, x: 45, y: 40, category: 'bumn', title: 'Kawasan Industri BUMN', meta: 'Semarang, Jateng • 150+ Alumni' },
    { id: 10, x: 80, y: 70, category: 'bumn', title: 'Mining Corporate IT', meta: 'Sumbawa, NTB • 60+ Alumni' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-border-light shadow-sm overflow-hidden">
      {/* Top Panel */}
      <div className="flex flex-col md:flex-row border-b border-border-light">
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border-light bg-surface min-w-[300px]">
          <div className="text-5xl md:text-6xl font-extrabold text-accent mb-2">25.000<span className="text-3xl">+</span></div>
          <div className="text-text-muted font-bold text-lg uppercase tracking-wider">Total Alumni</div>
        </div>
        
        <div className="p-8 md:p-10 flex-1 flex flex-col justify-center bg-white">
          <div className="flex w-full h-4 rounded-full overflow-hidden mb-6 bg-surface-alt border border-border-color">
             <div className="h-full bg-accent hover:opacity-90 transition-opacity cursor-pointer" style={{ width: '65%' }} title="65% Bekerja di IT"></div>
             <div className="h-full bg-blue-600 hover:opacity-90 transition-opacity cursor-pointer" style={{ width: '20%' }} title="20% Melanjutkan Kuliah"></div>
             <div className="h-full bg-orange-500 hover:opacity-90 transition-opacity cursor-pointer" style={{ width: '15%' }} title="15% Wirausaha / Lainnya"></div>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-accent"></span>
              <span className="font-bold text-text-main">Bekerja di IT</span>
              <span className="text-text-muted">65%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-blue-600"></span>
              <span className="font-bold text-text-main">Kuliah</span>
              <span className="text-text-muted">20%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-orange-500"></span>
              <span className="font-bold text-text-main">Wirausaha</span>
              <span className="text-text-muted">15%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map & Categories */}
      <div className="flex flex-col lg:flex-row">
        
        {/* Map Area */}
        <div className="flex-1 relative bg-[#F8F9FB] p-8 md:p-12 min-h-[400px] md:min-h-[500px] overflow-hidden">
          <svg viewBox="0 0 1000 400" className="w-full h-full object-contain opacity-50 drop-shadow-md" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <path d="M100,200 Q200,150 300,220 T500,200 T700,250 T900,150" stroke="#CBD5E1" strokeWidth="20" strokeLinecap="round" fill="none" opacity="0.6"/>
            <path d="M150,250 Q250,200 350,270 T550,250 T750,300 T950,200" stroke="#94A3B8" strokeWidth="15" strokeLinecap="round" fill="none" opacity="0.3"/>
            <path d="M250,100 Q350,50 450,120 T650,100 T850,150" stroke="#E2E8F0" strokeWidth="25" strokeLinecap="round" fill="none" opacity="0.8"/>
          </svg>

          {dots.map(dot => (
            <div 
              key={dot.id}
              className={`absolute w-5 h-5 -ml-2.5 -mt-2.5 rounded-full border-2 border-white shadow-lg cursor-pointer group transition-all duration-300 ${
                activeCategory && activeCategory !== dot.category ? 'opacity-20 scale-75' : 'opacity-100 scale-100 animate-pulse-slow'
              } ${
                dot.category === 'telkom' ? 'bg-accent' : 
                dot.category === 'startup' ? 'bg-blue-600' : 'bg-orange-500'
              }`}
              style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              onMouseEnter={() => setActiveCategory(dot.category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-text-main px-4 py-3 rounded-xl shadow-xl w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 z-10 border border-border-light">
                <div className="font-bold text-sm mb-1">{dot.title}</div>
                <div className="text-xs text-text-muted leading-tight">{dot.meta}</div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-3 h-3 bg-white rotate-45 border-r border-b border-border-light"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Sidebar */}
        <div className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l border-border-light flex flex-col">
          <div className="p-6 border-b border-border-light font-bold text-text-main">
            Kategori Tempat Kerja
          </div>
          <div className="flex-1 p-4 space-y-3">
            
            <div 
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                activeCategory === 'telkom' ? 'border-accent bg-accent/5' : 'border-border-color hover:border-accent hover:bg-surface-alt'
              }`}
              onMouseEnter={() => setActiveCategory('telkom')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="w-10 h-10 rounded-lg bg-red-100 text-accent flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-text-main mb-0.5">Telkom Group</div>
                <div className="text-xs text-text-muted">PT Telkom, Telkomsel, dll.</div>
              </div>
            </div>

            <div 
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                activeCategory === 'startup' ? 'border-blue-500 bg-blue-50' : 'border-border-color hover:border-blue-500 hover:bg-surface-alt'
              }`}
              onMouseEnter={() => setActiveCategory('startup')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-text-main mb-0.5">Tech Startups</div>
                <div className="text-xs text-text-muted">GoTo, Traveloka, Ruangguru, dll.</div>
              </div>
            </div>

            <div 
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                activeCategory === 'bumn' ? 'border-orange-500 bg-orange-50' : 'border-border-color hover:border-orange-500 hover:bg-surface-alt'
              }`}
              onMouseEnter={() => setActiveCategory('bumn')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-text-main mb-0.5">BUMN & Instansi</div>
                <div className="text-xs text-text-muted">Perbankan, Kementerian, Swasta</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
