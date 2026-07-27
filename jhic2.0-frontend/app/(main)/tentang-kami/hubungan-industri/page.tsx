"use client";

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Building2, MapPin, Layers, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Partners } from '@/components/sections/Partners';

export default function HubunganIndustri() {
  const breadcrumbItems = [
    { label: 'Tentang Kami' },
    { label: 'Hubungan Industri' },
  ];

  const partners = [
    {
      name: 'Axelbit',
      category: 'Network & Infrastructure',
      city: 'Surabaya',
      address: 'Jl. Sukomanunggal Tanjung Sari Baru IV, Surabaya',
      desc: 'Axelbit merupakan training center di bidang jaringan dan teknologi wireless yang menyediakan pelatihan serta sertifikasi profesional. Fokus utamanya mencakup teknologi seperti Mikrotik, Ubiquiti, dan Cambium.',
      logo: 'https://ui-avatars.com/api/?name=A&background=F3F4F6&color=111&bold=true'
    },
    {
      name: 'DigiPrener',
      category: 'Software House',
      city: 'Surabaya',
      address: 'Taman Bungkul Street No. 25, Surabaya',
      desc: 'DigiPrener merupakan perusahaan jasa sistem informasi yang berfokus pada pengembangan, implementasi, dan integrasi solusi digital untuk berbagai kebutuhan organisasi. Berdiri sejak 2016 melayani berbagai segmen.',
      logo: 'https://ui-avatars.com/api/?name=D&background=F3F4F6&color=111&bold=true'
    },
    {
      name: 'Jagoan Hosting',
      category: 'Hosting & Cloud',
      city: 'Malang',
      address: 'Komp. Ruko Istana Dinoyo Blok C-2 No. 3-4, Malang',
      desc: 'Jagoan Hosting Indonesia merupakan perusahaan penyedia layanan web hosting, domain, dan cloud service di Indonesia. Didukung oleh infrastruktur hardware berstandar enterprise.',
      logo: 'https://ui-avatars.com/api/?name=J&background=F3F4F6&color=111&bold=true'
    },
    {
      name: 'Markaz Design',
      category: 'Creative & Design',
      city: 'Sidoarjo',
      address: 'Jl. Jati Selatan III No.20, Sidoarjo',
      desc: 'Markaz Design merupakan konsultan kreatif berbasis di Sidoarjo yang berfokus pada pengembangan UMKM melalui solusi branding dan strategi bisnis. Berdiri sejak 2013, menyediakan layanan visual branding.',
      logo: 'https://ui-avatars.com/api/?name=M&background=F3F4F6&color=111&bold=true'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Network & Infrastructure': return 'bg-blue-100 text-blue-700';
      case 'Software House': return 'bg-green-100 text-green-700';
      case 'Hosting & Cloud': return 'bg-purple-100 text-purple-700';
      case 'Creative & Design': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          partner.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(partner.category);
    const matchesCity = selectedCities.length === 0 || selectedCities.includes(partner.city);
    return matchesSearch && matchesCategory && matchesCity;
  });

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const toggleCity = (city: string) => {
    setSelectedCities(prev => prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]);
  };

  return (
    <main>
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Hubungan Industri"
        description="Kemitraan strategis dengan perusahaan teknologi untuk memastikan lulusan kami siap kerja dan terserap di industri."
      />

      <Partners />

      <section className="py-16 md:py-24 bg-surface">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            
            {/* Bento Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
               <div className="bg-accent text-white border-none p-8 flex items-center gap-6 rounded-xl shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                     <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                     <div className="text-4xl font-extrabold mb-1">500+</div>
                     <div className="text-white/80 font-medium">Mitra Industri</div>
                  </div>
               </div>
               <Card className="p-8 flex items-center gap-6 border-border-light hover:-translate-y-1 transition-transform cursor-default">
                  <div className="w-14 h-14 rounded-full bg-surface-alt flex items-center justify-center flex-shrink-0 text-accent border border-border-light">
                     <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                     <div className="text-4xl font-extrabold text-text-main mb-1">20+</div>
                     <div className="text-text-muted font-medium">Kota Tersebar</div>
                  </div>
               </Card>
               <Card className="p-8 flex items-center gap-6 border-border-light hover:-translate-y-1 transition-transform cursor-default">
                  <div className="w-14 h-14 rounded-full bg-surface-alt flex items-center justify-center flex-shrink-0 text-accent border border-border-light">
                     <Layers className="w-7 h-7" />
                  </div>
                  <div>
                     <div className="text-4xl font-extrabold text-text-main mb-1">12+</div>
                     <div className="text-text-muted font-medium">Kategori Industri</div>
                  </div>
               </Card>
            </div>

            {/* List and Filters */}
            <div className="flex flex-col lg:flex-row gap-10">
               <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                  <div>
                     <h3 className="font-bold text-text-main mb-4">Cari Mitra</h3>
                     <input 
                        type="text" 
                        placeholder="Nama atau deskripsi..." 
                        className="w-full px-4 py-3 rounded-xl border border-border-color focus:outline-none focus:ring-2 focus:ring-accent/50 bg-surface-alt"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
                  <div>
                     <h3 className="font-bold text-text-main mb-4">Kategori Industri</h3>
                     <div className="space-y-3">
                        {['Network & Infrastructure', 'Software House', 'Hosting & Cloud', 'Creative & Design'].map(cat => (
                           <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                 type="checkbox" 
                                 className="w-5 h-5 rounded border-border-color text-accent focus:ring-accent accent-accent"
                                 checked={selectedCategories.includes(cat)}
                                 onChange={() => toggleCategory(cat)}
                              />
                              <span className="text-text-muted group-hover:text-text-main transition-colors">{cat}</span>
                           </label>
                        ))}
                     </div>
                  </div>
                  <div>
                     <h3 className="font-bold text-text-main mb-4">Lokasi Kota</h3>
                     <div className="space-y-3">
                        {['Surabaya', 'Malang', 'Sidoarjo'].map(city => (
                           <label key={city} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                 type="checkbox" 
                                 className="w-5 h-5 rounded border-border-color text-accent focus:ring-accent accent-accent"
                                 checked={selectedCities.includes(city)}
                                 onChange={() => toggleCity(city)}
                              />
                              <span className="text-text-muted group-hover:text-text-main transition-colors">{city}</span>
                           </label>
                        ))}
                     </div>
                  </div>
               </aside>

               <div className="flex-1">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPartners.length > 0 ? filteredPartners.map((partner, index) => (
                     <Card key={index} className="flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="w-12 h-12 rounded-xl overflow-hidden bg-border-color flex-shrink-0">
                              <Image src={partner.logo} alt={partner.name} width={48} height={48} className="object-cover" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg text-text-main mb-1">{partner.name}</h3>
                              <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${getCategoryColor(partner.category)}`}>
                                 {partner.category}
                              </span>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                           <MapPin className="w-4 h-4 flex-shrink-0" />
                           <span className="truncate">{partner.address}</span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                           {partner.desc}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border-light">
                           <button className="text-sm font-bold text-text-main hover:text-accent transition-colors">
                              Detail Mitra
                           </button>
                           <button className="w-8 h-8 rounded-full bg-surface-alt border border-border-color flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors">
                              <ExternalLink className="w-4 h-4" />
                           </button>
                        </div>
                     </Card>
                  )) : (
                     <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-border-light">
                        <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-text-main mb-2">Mitra Tidak Ditemukan</h4>
                        <p className="text-text-muted">Coba sesuaikan pencarian atau filter untuk melihat mitra lainnya.</p>
                     </div>
                  )}
                 </div>
               </div>
            </div>

         </div>
      </section>

    </main>
  );
}
