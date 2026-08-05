/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import { ContentCard } from '@/shared/ui/ContentCard';

interface Ekskul {
  id: string;
  title: string;
  category: 'akademik' | 'olahraga' | 'seni' | 'kepanduan';
  categoryLabel: string;
  img: string;
  desc?: string;
}

const ekskulItems: Ekskul[] = [
  {
    id: '1',
    title: 'Moklet Robotics',
    category: 'akademik',
    categoryLabel: 'IT & Keilmuan',
    img: '/images/unsplash/photo-1581091226825-a6a2a5aee158.jpg',
    desc: 'Wadah bagi siswa untuk mengeksplorasi dunia robotika, mekatronika, dan IoT.'
  },
  {
    id: '2',
    title: 'Moklet Animation Club',
    category: 'akademik',
    categoryLabel: 'IT & Keilmuan',
    img: '/images/unsplash/photo-1511512578047-dfb367046420.jpg',
    desc: 'Berfokus pada pengembangan animasi 2D dan 3D, serta desain karakter.'
  },
  {
    id: '3',
    title: 'Basket Moklet',
    category: 'olahraga',
    categoryLabel: 'Olahraga',
    img: '/images/unsplash/photo-1546519638-68e109498ffc.jpg',
    desc: 'Ekstrakurikuler unggulan di bidang olahraga yang telah banyak meraih prestasi.'
  },
  {
    id: '4',
    title: 'Futsal Club',
    category: 'olahraga',
    categoryLabel: 'Olahraga',
    img: '/images/unsplash/photo-1534438327276-14e5300c3a48.jpg',
    desc: 'Membina bakat futsal siswa melalui latihan rutin dan partisipasi kompetisi.'
  },
  {
    id: '5',
    title: 'Paduan Suara (Choir)',
    category: 'seni',
    categoryLabel: 'Seni & Budaya',
    img: '/images/unsplash/photo-1514320291840-2e0a9bf2a9ae.jpg',
    desc: 'Tim paduan suara yang sering tampil di berbagai acara resmi sekolah dan kompetisi.'
  },
  {
    id: '6',
    title: 'Pramuka',
    category: 'kepanduan',
    categoryLabel: 'Kepanduan',
    img: '/images/unsplash/photo-1556438064-2d7646166914.jpg',
    desc: 'Membentuk karakter disiplin, tangguh, dan mandiri melalui kegiatan kepanduan.'
  }
];

export function EkskulGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'akademik' | 'olahraga' | 'seni'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEkskul, setSelectedEkskul] = useState<Ekskul | null>(null);

  const filteredItems = ekskulItems.filter(item => {
    const matchesTab = activeTab === 'all' || item.category === activeTab || (activeTab === 'seni' && item.category === 'kepanduan');
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <div className="max-w-2xl mx-auto mb-10 relative">
         <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
         <input 
            type="text" 
            placeholder="Cari ekstrakurikuler..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-full border border-border-light bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-base"
         />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[
          { id: 'all', label: 'Semua' },
          { id: 'akademik', label: 'IT & Keilmuan' },
          { id: 'olahraga', label: 'Olahraga' },
          { id: 'seni', label: 'Seni & Budaya' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-2.5 rounded-full font-bold transition-all text-sm ${
              activeTab === tab.id
                ? 'bg-text-main text-white'
                : 'bg-white text-text-muted border border-border-color hover:border-text-main hover:text-text-main shadow-sm'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {filteredItems.map(item => (
            <ContentCard 
              key={item.id}
              image={item.img}
              title={item.title}
              description={item.desc || ''}
              category={item.categoryLabel}
              readMoreText="Lihat Detail"
              onClick={() => setSelectedEkskul(item)}
            />
         ))}
         </div>
      ) : (
         <div className="text-center py-20 bg-white rounded-3xl border border-border-light border-dashed">
            <div className="w-20 h-20 rounded-full bg-red-100 text-accent flex items-center justify-center mx-auto mb-6">
               <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-text-main mb-2">Tidak ditemukan</h3>
            <p className="text-text-muted">Coba gunakan kata kunci lain.</p>
         </div>
      )}

      {/* Modal */}
      {selectedEkskul && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedEkskul(null)}
          ></div>
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedEkskul(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative h-64 w-full">
              <Image
                src={selectedEkskul.img}
                alt={selectedEkskul.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-8 overflow-y-auto">
              <span className="inline-block px-3 py-1 bg-surface-alt text-text-muted rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                {selectedEkskul.categoryLabel}
              </span>
              <h2 className="text-2xl font-extrabold text-text-main mb-4">{selectedEkskul.title}</h2>
              <p className="text-text-muted leading-relaxed">
                {selectedEkskul.desc || `Deskripsi untuk ekstrakurikuler ${selectedEkskul.title} akan ditampilkan di sini. Kegiatan ini sangat bermanfaat bagi siswa yang memiliki minat dalam bidang ${selectedEkskul.categoryLabel}. Kami menyambut antusiasme siswa untuk bergabung dan berprestasi bersama kami.`}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
