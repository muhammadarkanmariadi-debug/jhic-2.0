import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar,  Link as LinkIcon, MessageCircle } from 'lucide-react';

export default function NewsDetailPage() {
  return (
     <main className="bg-bg-main min-h-screen">
        {/* HERO SECTION */}
        <section className="relative w-full h-[50vh] min-h-[400px] mt-[70px] lg:mt-[90px] flex items-center justify-center text-center px-4 overflow-hidden">
           {/* Background Image */}
           <Image 
              src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&q=80" 
              alt="Hero Berita" 
              fill 
              className="object-cover"
              priority
           />
           {/* Overlay */}
           <div className="absolute inset-0 bg-black/60"></div>

           {/* Content */}
           <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
               <span className="text-white text-[10px] font-extrabold tracking-widest uppercase mb-6 px-4 py-1.5 bg-accent/90 rounded-full">Karya Siswa</span>
               <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.3] drop-shadow-md">
                  Siswa Jurusan Pengembangan Gim SMK Telkom Malang Ciptakan Game Edukasi AR untuk Kenalkan Batik Malang kepada Anak-anak
               </h1>
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
                          <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">Editor Website</p>
                          <p className="text-sm font-bold text-text-main">Informasi Umum</p>
                       </div>
                       <div>
                          <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">Dipublikasikan</p>
                          <div className="flex items-center gap-2 text-sm font-bold text-text-main">
                             <Calendar className="w-4 h-4 text-accent" />
                             19 July 2023
                          </div>
                       </div>
                       <div>
                          <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">Bagikan</p>
                          <div className="flex items-center gap-4">
                             <button className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Share to Facebook"><Calendar className="w-[18px] h-[18px]" /></button>
                             <button className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Share to Twitter"><Calendar className="w-[18px] h-[18px]" /></button>
                             <button className="text-gray-400 hover:text-green-500 transition-colors" aria-label="Share to WhatsApp"><MessageCircle className="w-[18px] h-[18px]" /></button>
                             <button className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="Copy Link"><LinkIcon className="w-[18px] h-[18px]" /></button>
                          </div>
                       </div>
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none prose-p:text-text-muted prose-p:leading-[1.8] prose-p:text-[15.5px] prose-headings:text-text-main prose-a:text-accent hover:prose-a:text-accent-hover space-y-6 text-justify">
                       <p>Pelestarian budaya lokal tidak lagi harus dilakukan melalui cara-cara konvensional. Dua siswa Jurusan Pengembangan Gim SMK Telkom Malang membuktikan bahwa teknologi dapat menjadi jembatan yang efektif untuk mengenalkan budaya kepada generasi muda. Lewat inovasi board game berbasis Augmented Reality (AR) bernama Nwasena Seri Batik Malang, mereka menghadirkan pengalaman belajar batik yang interaktif, menyenangkan, sekaligus relevan dengan dunia anak-anak masa kini.</p>
                       <p>Inovasi tersebut dikembangkan oleh Alyan Riqha dan Naura Sahrina, siswa kelas XI Jurusan Pengembangan Gim SMK Telkom Malang. Nwasena memadukan permainan papan dengan teknologi Augmented Reality (AR), yaitu teknologi yang memproyeksikan objek digital seperti gambar 3D maupun 2D, teks, dan animasi ke dunia nyata secara real-time melalui gawai.</p>
                       <p>Melalui kartu AR yang tersedia dalam permainan, pemain dapat memindai berbagai konten digital untuk mengenal motif batik Malang. Filosofi di balik setiap motif, hingga informasi budaya yang disajikan secara menarik. Pendekatan ini membuat proses belajar terasa seperti bermain, bukan mengikuti pembelajaran formal di dalam kelas.</p>
                       <p>Ketua tim Nwasena, Alyan Riqha, menjelaskan bahwa ide pengembangan game ini berawal dari hasil observasi yang mereka lakukan di sejumlah sekolah dasar. Dari pengamatan tersebut, tim menemukan masih banyak anak yang belum mengenal Batik Malang.</p>
                       <p>"Berangkat dari kondisi tersebut, tim mengembangkan media pembelajaran yang menggabungkan unsur permainan, budaya, dan teknologi agar proses belajar menjadi lebih menarik, interaktif, dan mudah dipahami," ujar Alyan.</p>
                       <p>Menurutnya, konsep permainan sengaja dirancang berbeda dari media pembelajaran pada umumnya. Anak-anak diajak mengenal budaya melalui aktivitas bermain sehingga mereka tidak merasa sedang mengikuti proses belajar di kelas.</p>
                       <p>"Pendekatan ini dirancang agar anak-anak dapat mempelajari budaya tanpa merasa sedang mengikuti pembelajaran formal di kelas," tambahnya.</p>
                       <p>Untuk memastikan seluruh materi yang disampaikan akurat, tim menggandeng Soendari Batik sebagai mitra validasi budaya. Seluruh konten dalam permainan, mulai dari pengenalan motif, filosofi, hingga informasi budaya, dikaji bersama pelaku batik lokal agar informasi yang diterima pemain tetap valid.</p>
                       <p>Kolaborasi tersebut juga memberikan pengalaman belajar yang lebih nyata. Pemain tidak hanya mengenal batik melalui teori, tetapi juga diperkenalkan pada proses membatik secara lebih dekat sehingga menumbuhkan rasa kepedulian terhadap budaya sedari dini.</p>
                    </div>
                 </article>

                 {/* RIGHT: SIDEBAR */}
                 <aside className="lg:w-1/3 space-y-12">
                    
                    {/* Categories */}
                    <div>
                       <h3 className="text-lg font-extrabold text-text-main mb-6 relative inline-block">
                          Kategori Berita
                          <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-accent rounded-full"></span>
                       </h3>
                       <ul className="space-y-4">
                          {['Informasi Umum', 'Prestasi', 'Agenda Sekolah', 'Pengumuman Siswa', 'Pengumuman Pegawai', 'Pengumuman Orang Tua Siswa', 'Karya Siswa'].map((cat, i) => (
                             <li key={i}>
                                <Link href="#" className="group flex items-center gap-3">
                                   <div className="w-1.5 h-1.5 rounded-full bg-border-color group-hover:bg-accent transition-colors" />
                                   <span className="text-[14.5px] font-bold text-gray-600 group-hover:text-accent transition-colors">{cat}</span>
                                </Link>
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Latest News */}
                    <div>
                       <h3 className="text-lg font-extrabold text-text-main mb-6 relative inline-block">
                          Info Terbaru
                          <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-accent rounded-full"></span>
                       </h3>
                       <div className="space-y-5">
                          {[
                             { title: "Siswa Jurusan Pengembangan Gim SMK Telkom Malang Ciptakan Game Edukasi AR untuk Kenalkan Batik Malang kepada Anak-anak", date: "19 July 2023", img: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=200&h=200&fit=crop" },
                             { title: "Belum Lulus, Siswa SMK Telkom Sudah Diterima 34 Kampus Luar Negeri Sekaligus", date: "03 July 2023", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop" },
                             { title: "Belajar Teknologi dengan Standar Global di SMK Telkom Malang", date: "02 January 2024", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop" },
                             { title: "Festival Talenta Digital, Telkom Gandeng Tech Giants untuk SMK Telkom Malang", date: "10 January 2024", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=200&fit=crop" },
                             { title: "SMK Telkom Malang Resmi Hadirkan Moklet.AI, AI Pendamping Pembelajaran Berbasis Model Learning Culture", date: "25 January 2024", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop" }
                          ].map((news, i) => (
                             <Link key={i} href="#" className="flex items-start gap-4 group">
                                <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-border-light">
                                   <Image src={news.img} alt={news.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex-1 min-w-0 pt-0.5">
                                   <h4 className="text-[13px] font-bold text-text-main leading-[1.4] group-hover:text-accent transition-colors line-clamp-2 mb-1">{news.title}</h4>
                                   <p className="text-[11px] font-semibold text-gray-400">{news.date}</p>
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
