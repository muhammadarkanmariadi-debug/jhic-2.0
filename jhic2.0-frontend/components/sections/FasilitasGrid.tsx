/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X, User, Clock } from 'lucide-react';
import { ContentCard } from '@/components/ui/ContentCard';

interface Facility {
  id: string;
  title: string;
  category: 'lab' | 'collab' | 'support';
  categoryLabel: string;
  img: string;
  desc: string;
  fullDesc: string;
  capacity: string;
  time: string;
  isFeatured?: boolean;
}

const facilities: Facility[] = [
  {
    id: 'mac-lab',
    title: 'Laboratorium Apple iMac',
    category: 'lab',
    categoryLabel: 'Laboratorium & Akademik',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    desc: 'Laboratorium khusus dengan perangkat Apple iMac terbaru untuk mendukung pembelajaran UI/UX Design dan iOS Development.',
    fullDesc: 'Laboratorium khusus dengan perangkat Apple iMac terbaru untuk mendukung pembelajaran UI/UX Design dan iOS Development dengan standar industri global. Dilengkapi dengan 40 unit iMac M1, koneksi internet gigabit, dan proyektor interaktif.',
    capacity: '40 Siswa',
    time: '07:00 - 16:00',
    isFeatured: true
  },
  {
    id: 'mikrotik-lab',
    title: 'MikroTik Academy Lab',
    category: 'lab',
    categoryLabel: 'Laboratorium & Akademik',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    desc: 'Fasilitas laboratorium jaringan tersertifikasi langsung oleh MikroTik. Siswa berlatih melakukan konfigurasi jaringan enterprise secara praktikal.',
    fullDesc: 'Fasilitas laboratorium jaringan tersertifikasi langsung oleh MikroTik. Siswa berlatih melakukan konfigurasi jaringan enterprise secara praktikal dengan router board asli dan infrastruktur lengkap.',
    capacity: '36 Siswa',
    time: '07:00 - 15:30',
    isFeatured: true
  },
  {
    id: 'coworking',
    title: 'Student Co-working',
    category: 'collab',
    categoryLabel: 'Ruang Kolaborasi',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Area komunal berkecepatan tinggi untuk kolaborasi gaya startup. Dirancang untuk mendorong inovasi dan pertukaran ide antar siswa.',
    fullDesc: 'Area komunal berkecepatan tinggi untuk kolaborasi gaya startup. Dirancang untuk mendorong inovasi dan pertukaran ide antar siswa dalam suasana yang rileks dan produktif.',
    capacity: '100 Siswa',
    time: '08:00 - 17:00'
  },
  {
    id: 'perpus',
    title: 'Perpustakaan Digital',
    category: 'support',
    categoryLabel: 'Fasilitas Penunjang',
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop',
    desc: 'Koleksi ribuan buku referensi TI dan akses e-library gratis. Tempat hening untuk riset dan belajar mandiri.',
    fullDesc: 'Koleksi ribuan buku referensi TI dan akses e-library gratis. Tempat hening untuk riset dan belajar mandiri, dilengkapi dengan pod-pod kedap suara dan lounge membaca.',
    capacity: '80 Siswa',
    time: '07:00 - 16:30'
  },
  {
    id: 'lapangan',
    title: 'Lapangan Terpadu',
    category: 'support',
    categoryLabel: 'Fasilitas Penunjang',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
    desc: 'Fasilitas olahraga lengkap untuk menyeimbangkan hardskill dan kebugaran fisik siswa, terdiri dari lapangan basket dan futsal.',
    fullDesc: 'Fasilitas olahraga lengkap untuk menyeimbangkan hardskill dan kebugaran fisik siswa. Mencakup lapangan basket standar FIBA, lapangan futsal sintetis, dan area atletik.',
    capacity: '150 Siswa',
    time: '06:00 - 17:30'
  },
  {
    id: 'masjid',
    title: 'Masjid Al-Kautsar',
    category: 'support',
    categoryLabel: 'Fasilitas Penunjang',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    desc: 'Sarana ibadah yang nyaman, lapang, dan ber-AC. Menjadi pusat pembinaan karakter Islami siswa SMK Telkom.',
    fullDesc: 'Sarana ibadah yang nyaman, lapang, dan ber-AC. Menjadi pusat pembinaan karakter Islami siswa SMK Telkom. Dilengkapi dengan perpustakaan mini khusus buku-buku agama.',
    capacity: '600 Jamaah',
    time: '24 Jam'
  }
];

export function FasilitasGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'lab' | 'collab' | 'support'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const filteredFacilities = facilities.filter(facility => {
    const matchesTab = activeTab === 'all' || facility.category === activeTab;
    const matchesSearch = facility.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-4 rounded-2xl border border-border-light shadow-sm">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'Semua' },
            { id: 'lab', label: 'Laboratorium & Akademik' },
            { id: 'collab', label: 'Ruang Kolaborasi' },
            { id: 'support', label: 'Fasilitas Penunjang' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                activeTab === tab.id
                  ? 'bg-accent text-white'
                  : 'bg-surface-alt text-text-muted hover:bg-border-color hover:text-text-main'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64 flex-shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            placeholder="Cari fasilitas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-border-color focus:outline-none focus:ring-2 focus:ring-accent/50 bg-surface-alt transition-all"
          />
        </div>
      </div>

      {filteredFacilities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map(facility => (
             <ContentCard 
               key={facility.id}
               image={facility.img}
               title={facility.title}
               description={facility.desc}
               category={facility.categoryLabel}
               readMoreText="Lihat Detail"
               onClick={() => setSelectedFacility(facility)}
             />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-border-light border-dashed">
          <div className="w-20 h-20 rounded-full bg-red-100 text-accent flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-extrabold text-text-main mb-2">Fasilitas tidak ditemukan</h3>
          <p className="text-text-muted">Coba gunakan kata kunci lain atau pilih kategori "Semua".</p>
        </div>
      )}

      {/* Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedFacility(null)}
          ></div>
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-text-main transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={selectedFacility.img}
                alt={selectedFacility.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <span className="inline-block px-3 py-1 bg-surface-alt text-text-muted rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                {selectedFacility.categoryLabel}
              </span>
              <h2 className="text-3xl font-extrabold text-text-main mb-4">{selectedFacility.title}</h2>
              <p className="text-text-muted leading-relaxed mb-8">
                {selectedFacility.fullDesc}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-alt border border-border-light">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Kapasitas Maksimal</div>
                    <div className="font-extrabold text-text-main">{selectedFacility.capacity}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-alt border border-border-light">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Jam Akses</div>
                    <div className="font-extrabold text-text-main">{selectedFacility.time}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
