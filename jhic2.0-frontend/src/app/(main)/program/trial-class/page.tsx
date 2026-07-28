"use client";

import React, { useState } from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { Card } from '@/shared/ui/Card';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import { trialClasses } from '@/services/trialClassData';

export default function TrialClassPage() {
  const breadcrumbItems = [
    { label: 'Program' },
    { label: 'Trial Class' },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  if (searchTerm !== prevSearchTerm) {
    setPrevSearchTerm(searchTerm);
    setCurrentPage(1);
  }

  const itemsPerPage = 6;

  // Filter based on search term
  const filteredClasses = trialClasses.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentClasses = filteredClasses.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <main className="bg-bg-main min-h-screen">
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Daftar Trial Class"
        description="Jelajahi berbagai kelas percobaan gratis untuk menemukan minat dan bakatmu sebelum bergabung."
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          
          {/* Search Bar */}
          <div className="mb-12 max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-border-light bg-white text-text-main focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm outline-none font-medium"
              placeholder="Cari kelas (misal: Web Dev, Unity, Security...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Trial Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentClasses.map((item) => {
              const startDate = new Date(item.start_date);
              const formattedDate = startDate.toLocaleDateString('id-ID', {
                day: 'numeric', month: 'long', year: 'numeric'
              });
              const formattedTime = startDate.toLocaleTimeString('id-ID', {
                hour: '2-digit', minute: '2-digit'
              });

              return (
                <Card key={item.id} className="flex flex-col overflow-hidden bg-white hover:-translate-y-1 transition-transform border-border-light group shadow-sm hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={item.photo} 
                      alt={item.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 text-text-main backdrop-blur-md shadow-sm">
                        <Tag className="w-3.5 h-3.5 text-accent" />
                        Trial Class
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-text-main mb-3 line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2.5 mb-8 mt-auto">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="font-medium">{formattedDate} - {formattedTime}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-gray-400 shrink-0" />
                          <span className="font-medium line-clamp-1">{item.organizer_name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border-light flex items-center justify-between mt-auto">
                      <div className="text-sm font-semibold text-gray-500">
                        Kuota: <span className="text-accent">{item.quota}</span>
                      </div>
                      <a 
                        href="https://mxpo.id" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                      >
                        Daftar
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredClasses.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-border-light shadow-sm">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text-main mb-2">Tidak ada kelas yang ditemukan</h3>
              <p className="text-gray-500">Coba gunakan kata kunci pencarian yang lain.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-border-light bg-white text-text-main hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
              >
                &lt;
              </button>
              
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
                    currentPage === i + 1 
                      ? 'bg-accent text-white shadow-sm' 
                      : 'border border-border-light bg-white text-text-main hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-border-light bg-white text-text-main hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
              >
                &gt;
              </button>
            </div>
          )}
          
        </div>
      </section>
    </main>
  );
}
