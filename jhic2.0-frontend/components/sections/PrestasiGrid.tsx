'use client';

import React, { useState } from 'react';
import { ContentCard } from '@/components/ui/ContentCard';

interface PrestasiItem {
  id: string;
  title: string;
  category: 'akademik' | 'non-akademik';
  level: string;
  meta: string;
  img: string;
}

const prestasiItems: PrestasiItem[] = [
  {
    id: '1',
    title: 'Juara 1 Lomba Kompetensi Siswa (LKS) Bidang IT Network Systems Administration',
    category: 'akademik',
    level: 'Tingkat Nasional',
    meta: 'Tim TKJ SMK Telkom Malang • 2025',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Juara 2 Telkom Hackathon Kategori Pelajar & Mahasiswa',
    category: 'akademik',
    level: 'Tingkat Nasional',
    meta: 'Tim RPL SMK Telkom Malang • 2024',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Juara 1 Turnamen Bola Basket DBL Jawa Timur Series',
    category: 'non-akademik',
    level: 'Tingkat Provinsi',
    meta: 'Tim Basket Putra Moklet • 2024',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Gold Medal Kategori 2D Animation di Vocomfest UGM',
    category: 'akademik',
    level: 'Tingkat Nasional',
    meta: 'Tim Animasi SMK Telkom Malang • 2024',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop'
  }
];

export function PrestasiGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'akademik' | 'non-akademik'>('all');

  const filteredItems = prestasiItems.filter(item => 
    activeTab === 'all' || item.category === activeTab
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[
          { id: 'all', label: 'Semua Prestasi' },
          { id: 'akademik', label: 'Akademik' },
          { id: 'non-akademik', label: 'Non-Akademik' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-text-main text-white'
                : 'bg-white text-text-muted border border-border-color hover:border-text-main hover:text-text-main shadow-sm'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <ContentCard 
            key={item.id}
            image={item.img}
            title={item.title}
            description={item.meta}
            category={item.level}
            readMoreText="Detail Prestasi"
          />
        ))}
      </div>
    </>
  );
}
