'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import { newsData } from '@/services/dummyData';
import { usePagination } from '@/shared/hooks/usePagination';
import { Pagination } from '@/shared/ui/Pagination';

export function NewsGrid() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const allNews = newsData;

  const filteredNews = allNews.filter(news => {
    const matchesFilter = filter === 'all' || news.category === filter;
    const matchesSearch = news.title.toLowerCase().includes(search.toLowerCase()) || news.desc.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const { currentItems, paginationProps, startIndex, endIndex, totalItems } = usePagination(filteredNews, {
    itemsPerPage: 6,
  });

  return (
    <div>
      {/* Search & Filters */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative mb-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
          <input 
            type="text" 
            placeholder="Cari berita..." 
            className="w-full py-4 pl-14 pr-6 rounded-full border border-border-light shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: 'all', label: 'Semua Berita' },
            { id: 'akademik', label: 'Akademik' },
            { id: 'prestasi', label: 'Prestasi' },
            { id: 'event', label: 'Event' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === cat.id 
                  ? 'bg-accent text-text-inverse shadow-md' 
                  : 'bg-surface text-text-muted border border-border-light hover:border-accent hover:text-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentItems.map((news) => (
            <Link key={news.id} href={`/informasi/berita/${news.slug}`} className="bg-surface rounded-lg overflow-hidden border border-border-light shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-text-main text-xs font-bold px-3 py-1.5 rounded-full capitalize">
                  {news.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm font-bold text-text-muted mb-2">{news.date}</div>
                <h3 className="text-lg font-bold text-text-main leading-snug mb-3 line-clamp-2 group-hover:text-accent transition-colors">{news.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">{news.desc}</p>
                <div className="mt-auto flex items-center text-accent font-bold text-sm">
                  Baca selengkapnya
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface rounded-xl border border-border-light border-dashed">
          <div className="w-16 h-16 rounded-full bg-surface-alt flex items-center justify-center mx-auto mb-4 text-text-muted">
            <Search className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-text-main mb-2">Berita Tidak Ditemukan</h4>
          <p className="text-text-muted mb-6">Kami tidak dapat menemukan berita yang sesuai dengan pencarian Anda.</p>
          <button onClick={() => { setFilter('all'); setSearch(''); }} className="px-6 py-2 rounded-full border border-border-light text-text-main font-bold hover:bg-surface-alt transition-colors">
            Reset Pencarian
          </button>
        </div>
      )}

      {/* Pagination */}
      {filteredNews.length > 0 && (
        <Pagination
          {...paginationProps}
          infoText={`Menampilkan ${startIndex + 1}–${endIndex} dari ${totalItems} berita`}
        />
      )}
    </div>
  );
}
