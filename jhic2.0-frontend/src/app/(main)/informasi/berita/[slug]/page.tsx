import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { newsData } from '@/services/dummyData';

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const news = newsData.find((n) => n.slug === resolvedParams.slug);

  if (!news) {
    notFound();
  }

  // Get other latest news for sidebar (excluding current)
  const latestNews = newsData.filter(n => n.slug !== news.slug).slice(0, 5);

  return (
     <main className="bg-bg-main mx-auto max-w-7xl min-h-screen">
        {/* HERO SECTION */}
        <section className="pt-[90px] lg:pt-[110px] pb-8 px-4 md:px-8">
           <div className="relative  h-[55vh] min-h-[450px] flex items-center justify-center text-center px-6 overflow-hidden rounded-[32px] shadow-2xl">
              {/* Background Image */}
              <Image 
                 src={news.image} 
                 alt={news.title} 
                 fill 
                 className="object-cover"
                 priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>

              {/* Content */}
              <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                  <span className={`text-text-inverse text-[11px] font-extrabold tracking-widest uppercase mb-6 px-5 py-2 ${news.badgeColor} rounded-full shadow-lg`}>
                     {news.categoryLabel}
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-[56px] font-extrabold text-text-inverse leading-[1.2] drop-shadow-xl">
                     {news.title}
                  </h1>
              </div>
           </div>
        </section>
        
        {/* MAIN CONTENT & SIDEBAR */}
        <section className="py-12 md:py-16">
           <div className="container-custom">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                 
                 {/* LEFT: ARTICLE CONTENT */}
                 <article className="lg:w-2/3">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pb-8 mb-8 border-b border-border-light">
                       <div>
                          <p className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-wider mb-1.5">Editor Website</p>
                          <p className="text-sm font-bold text-text-main">Informasi Umum</p>
                       </div>
                       <div>
                          <p className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-wider mb-1.5">Dipublikasikan</p>
                          <div className="flex items-center gap-2 text-sm font-bold text-text-main">
                             <Calendar className="w-4 h-4 text-accent" />
                             {news.date}
                          </div>
                       </div>
                       <div>
                          <p className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-wider mb-1.5">Bagikan</p>
                          <div className="flex items-center gap-4">
                             <button className="text-neutral-400 hover:text-blue-600 transition-colors" aria-label="Share to Facebook"><Calendar className="w-[18px] h-[18px]" /></button>
                             <button className="text-neutral-400 hover:text-blue-400 transition-colors" aria-label="Share to Twitter"><Calendar className="w-[18px] h-[18px]" /></button>
                             <button className="text-neutral-400 hover:text-green-500 transition-colors" aria-label="Share to WhatsApp"><MessageCircle className="w-[18px] h-[18px]" /></button>
                             <button className="text-neutral-400 hover:text-neutral-700 transition-colors" aria-label="Copy Link"><LinkIcon className="w-[18px] h-[18px]" /></button>
                          </div>
                       </div>
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none prose-p:text-text-muted prose-p:leading-[1.8] prose-p:text-[15.5px] prose-headings:text-text-main prose-a:text-accent hover:prose-a:text-accent-hover space-y-6 text-justify">
                       {news.content.map((paragraph, idx) => (
                         <p key={idx}>{paragraph}</p>
                       ))}
                    </div>
                 </article>

                 {/* RIGHT: SIDEBAR */}
                 <aside className="lg:w-1/3 space-y-12 lg:sticky lg:top-28 lg:h-fit">
                    
                    {/* Categories */}
                    <div className="bg-surface p-8 rounded-xl border border-neutral-100 shadow-sm">
                       <h3 className="text-xl font-extrabold text-text-main mb-6 relative inline-block">
                          Kategori Berita
                          <span className="absolute -bottom-2 left-0 w-10 h-[4px] bg-accent rounded-full"></span>
                       </h3>
                       <div className="flex flex-wrap gap-2 pt-2">
                          {['Informasi Umum', 'Prestasi', 'Agenda Sekolah', 'Pengumuman Siswa', 'Pengumuman Pegawai', 'Pengumuman Orang Tua Siswa', 'Karya Siswa'].map((cat, i) => (
                             <Link key={i} href="#" className="px-4 py-2 bg-neutral-50 border border-neutral-100 rounded-xl text-[13.5px] font-bold text-neutral-600 hover:text-accent hover:border-accent hover:bg-accent/5 transition-all">
                                {cat}
                             </Link>
                          ))}
                       </div>
                    </div>

                    {/* Latest News */}
                    <div className="bg-surface p-8 rounded-xl border border-neutral-100 shadow-sm">
                       <h3 className="text-xl font-extrabold text-text-main mb-6 relative inline-block">
                          Info Terbaru
                          <span className="absolute -bottom-2 left-0 w-10 h-[4px] bg-accent rounded-full"></span>
                       </h3>
                       <div className="space-y-6 pt-2">
                          {latestNews.map((n, i) => (
                             <Link key={i} href={`/informasi/berita/${n.slug}`} className="flex items-start gap-4 group">
                                <div className="relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-border-light">
                                   <Image src={n.image} alt={n.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex-1 min-w-0 pt-0.5">
                                   <h4 className="text-[14px] font-bold text-text-main leading-[1.4] group-hover:text-accent transition-colors line-clamp-2 mb-2">{n.title}</h4>
                                   <p className="text-[12px] font-bold text-neutral-400">{n.date}</p>
                                </div>
                             </Link>
                          ))}
                       </div>
                    </div>
                 </aside>

              </div>
           </div>
        </section>
     </main>
  );
}
