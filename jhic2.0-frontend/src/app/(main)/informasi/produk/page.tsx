"use client";

import React, { useState } from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { ContentCard } from '@/shared/ui/ContentCard';
import { Modal } from '@/shared/ui/Modal';
import { Search, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import { telkomProducts } from '@/services/productData';

export default function ProdukTelkomPage() {
  const breadcrumbItems = [
    { label: 'Informasi' },
    { label: 'Publikasi' },
    { label: 'Produk Telkom' },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<typeof telkomProducts[0] | null>(null);
  const itemsPerPage = 6;
  const [prevSearchTerm, setPrevSearchTerm] = useState("");
  const [prevCategory, setPrevCategory] = useState("Semua");

  if (searchTerm !== prevSearchTerm || activeCategory !== prevCategory) {
    setPrevSearchTerm(searchTerm);
    setPrevCategory(activeCategory);
    setCurrentPage(1);
  }

  // Extract unique categories
  const categories = ["Semua", ...Array.from(new Set(telkomProducts.map(p => p.category)))];

  // Filter based on search term and category
  const filteredProducts = telkomProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <main className="bg-bg-main min-h-screen">
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Produk Ekosistem Telkom"
        description="Mengenal lebih dekat berbagai produk dan layanan digital inovatif persembahan Telkom Group untuk Indonesia."
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? "bg-text-main text-white shadow-sm" 
                      : "bg-white text-gray-500 border border-border-light hover:border-gray-300 hover:text-text-main"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border-light bg-white text-text-main focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm outline-none font-medium text-sm"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((item) => (
              <ContentCard
                key={item.id}
                image={item.image}
                title={item.name}
                description={item.desc}
                category={item.category}
                readMoreText="Detail Produk"
                onClick={() => setSelectedProduct(item)}
              />
            ))}
          </div>

          {/* Modal for Product Details */}
          <Modal 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)}
          >
            {selectedProduct && (
              <div className="flex flex-col">
                <div className="relative h-64 w-full">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 text-text-main backdrop-blur-md shadow-sm">
                      <Tag className="w-3.5 h-3.5 text-accent" />
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-3xl font-extrabold text-text-main mb-4">
                    {selectedProduct.name}
                  </h2>
                  <div className="prose prose-lg text-gray-600 mb-8 max-w-none leading-relaxed">
                    <p>{selectedProduct.desc}</p>
                  </div>
                  
                  <div className="flex items-center justify-end border-t border-border-light pt-6">
                    <a 
                      href={selectedProduct.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      Buka Halaman Produk
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Modal>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-border-light shadow-sm">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text-main mb-2">Produk Tidak Ditemukan</h3>
              <p className="text-gray-500">Coba gunakan kata kunci pencarian atau kategori yang lain.</p>
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
