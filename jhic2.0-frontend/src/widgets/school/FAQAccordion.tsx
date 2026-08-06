'use client';

import React, { useState } from 'react';
import { ChevronDown, GraduationCap, BookOpen, Building2 } from 'lucide-react';

export function FAQAccordion() {
  const [activeSection, setActiveSection] = useState('ppdb');
  
  // State for toggling individual FAQs
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };

  const sections = [
    { id: 'ppdb', label: 'Seputar PPDB', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'akademik', label: 'Seputar Akademik', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'fasilitas', label: 'Fasilitas & Biaya', icon: <Building2 className="w-5 h-5" /> },
  ];

  const faqs = {
    ppdb: [
      {
        id: 'p1',
        q: 'Kapan pendaftaran PPDB gelombang pertama dibuka?',
        a: 'Pendaftaran gelombang pertama (Jalur Prestasi & Minat Bakat) biasanya dibuka mulai bulan Desember hingga Februari setiap tahun ajaran baru. Silakan pantau website resmi PPDB untuk informasi tanggal pastinya.'
      },
      {
        id: 'p2',
        q: 'Apakah ada syarat nilai minimal untuk mendaftar?',
        a: 'Ya, untuk jalur reguler terdapat syarat nilai minimal rata-rata rapor SMP semester 1-5 sebesar 75. Namun bagi pendaftar jalur prestasi, syarat ini dapat disesuaikan dengan sertifikat prestasi yang dimiliki.'
      },
      {
        id: 'p3',
        q: 'Apakah menerima siswa dari luar kota/pulau?',
        a: 'Sangat menerima. SMK Telkom Malang memiliki siswa yang berasal dari seluruh provinsi di Indonesia. Kami juga bekerja sama dengan beberapa kos/asrama di sekitar sekolah untuk memfasilitasi siswa luar kota.'
      }
    ],
    akademik: [
      {
        id: 'a1',
        q: 'Apa saja jurusan yang ada di SMK Telkom Malang?',
        a: 'Saat ini SMK Telkom Malang memiliki dua jurusan unggulan: Rekayasa Perangkat Lunak (RPL) dan Teknik Komputer & Jaringan (TKJ). Semuanya terakreditasi A dengan kurikulum berbasis industri.'
      },
      {
        id: 'a2',
        q: 'Apakah lulusan SMK Telkom Malang dijamin kerja?',
        a: 'Kami memiliki Bursa Kerja Khusus (BKK) yang aktif menyalurkan lulusan. Mayoritas lulusan kami telah direkrut oleh perusahaan mitra (Telkom Group & Swasta) bahkan sebelum masa wisuda melalui program rekrutmen sekolah (ijon lulusan).'
      }
    ],
    fasilitas: []
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
      
      {/* Sticky Sidebar */}
      <div className="w-full lg:w-1/3 lg:sticky lg:top-[120px] bg-surface rounded-xl p-6 border border-border-light shadow-sm">
        <h3 className="text-xl font-bold text-text-main mb-4">Kategori</h3>
        <ul className="flex flex-col gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => {
                  setActiveSection(section.id);
                  // Optional: smooth scroll to the section if you lay them all out
                  const el = document.getElementById(section.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-left font-semibold transition-colors ${
                  activeSection === section.id
                    ? 'bg-surface text-accent'
                    : 'text-text-main hover:bg-surface-alt'
                }`}
              >
                <span className={activeSection === section.id ? 'text-accent' : 'text-text-muted'}>{section.icon}</span>
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Content */}
      <div className="w-full lg:w-2/3 flex flex-col gap-12">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-[140px]">
            <h2 className="text-2xl font-bold text-text-main flex items-center gap-3 mb-2">
              <span className="text-accent bg-accent/10 p-2 rounded-lg">{section.icon}</span>
              {section.label}
            </h2>
            
            {section.id === 'ppdb' && (
              <p className="text-text-muted mb-6 font-medium">Informasi terkait jadwal, persyaratan, dan alur pendaftaran siswa baru.</p>
            )}
            {section.id === 'akademik' && (
              <p className="text-text-muted mb-6 font-medium">Informasi terkait program keahlian, kurikulum, dan prospek karier lulusan.</p>
            )}

            <div className="flex flex-col gap-4">
              {faqs[section.id as keyof typeof faqs]?.length > 0 ? (
                faqs[section.id as keyof typeof faqs].map((faq) => (
                  <div 
                    key={faq.id} 
                    className={`bg-surface border rounded-lg overflow-hidden transition-all duration-300 ${openFaqId === faq.id ? 'border-accent shadow-sm' : 'border-border-light'}`}
                  >
                    <button 
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-text-main hover:text-accent transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaqId === faq.id ? 'rotate-180 text-accent' : 'text-text-muted'}`} />
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${openFaqId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-text-muted leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-text-muted italic bg-surface-alt px-6 py-4 rounded-xl border border-border-light border-dashed">
                  Belum ada pertanyaan untuk kategori ini.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
