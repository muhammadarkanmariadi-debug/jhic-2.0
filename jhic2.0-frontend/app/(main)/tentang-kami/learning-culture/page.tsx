"use client";

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { BrainCircuit, Cpu, Sparkles, UserCheck } from 'lucide-react';
import Image from 'next/image';

export default function LearningCulture() {
  const breadcrumbItems = [
    { label: 'Tentang Kami' },
    { label: 'Learning Culture' },
  ];

  const [activeTab, setActiveTab] = useState<'siswa' | 'guru'>('siswa');

  const attitudeSiswa = [
    { letter: 'A', title: 'Act Respectfully', subtitle: 'Menjaga adab kepada guru dan saling menghargai sesama teman.', points: ['Membudayakan 5S (Senyum, Salam, Sapa, Sopan, Santun) saat guru masuk.', 'Mendengarkan saat orang lain (guru/teman) berbicara (tidak menyela).', 'Duduk dengan postur yang baik (tidak menopang kaki/tiduran) sebagai tanda hormat.'] },
    { letter: 'T', title: 'Talk Politely', subtitle: 'Bertutur kata santun, positif, dan menghindari ucapan kasar.', points: ['Menggunakan Magic Words: Maaf, Tolong, dan Terima Kasih.', 'Zero Tolerance terhadap kata-kata kasar (kebun binatang) atau body shaming di dalam kelas.', 'Berbicara menggunakan intonasi yang rendah dan tenang.'] },
    { letter: 'T', title: 'Turn Off Distraction', subtitle: 'Fokus penuh pada materi, tidak bermain game atau medsos saat jam belajar.', points: ['Meletakkan HP di tas/laci (silent mode) saat sesi penjelasan materi.', 'Hanya membuka tab browser yang relevan (tidak membuka game/YouTube di tab lain).', 'Meminta izin jika ada panggilan darurat dari orang tua.'] },
    { letter: 'I', title: 'Involve Actively', subtitle: 'Hadir sepenuhnya, merespon instruksi, dan aktif berpartisipasi.', points: ['Mencatat poin penting tanpa disuruh.', 'Mengangkat tangan untuk menjadi relawan saat guru menawarkan tantangan.', 'Tidak menjadi silent reader atau "patung" di dalam kelas.'] },
    { letter: 'T', title: 'Think Solutions', subtitle: 'Berorientasi pada penyelesaian masalah, bukan mengeluh saat menemui kesulitan.', points: ['Membaca pesan error (debugging) terlebih dahulu sebelum memanggil guru.', 'Mengubah mindset: "Ini susah" menjadi "Ini tantangan baru".', 'Menawarkan solusi alternatif saat diskusi kelompok.'] },
    { letter: 'U', title: 'Use Tech Wisely', subtitle: 'Memanfaatkan teknologi & AI sebagai alat bantu belajar, bukan untuk plagiasi.', points: ['Jujur mencantumkan sumber jika mengutip dari internet/AI.', 'Menggunakan internet sekolah (Wi-Fi) untuk hal produktif (bukan streaming film/game berat).', 'Menjaga keamanan akun dan data pribadi.'] },
    { letter: 'D', title: 'Dare to Ask', subtitle: 'Membangun rasa ingin tahu dan tidak malu bertanya saat belum paham.', points: ['Berani bertanya "Mengapa?" dan "Bagaimana jika?"', 'Mengkonfirmasi pemahaman: "Bu, apakah maksudnya seperti ini...?"', 'Tidak menertawakan teman yang sedang bertanya.'] },
    { letter: 'E', title: 'Eager to Collaborate', subtitle: 'Terbuka untuk bekerja sama, berbagi ilmu, dan berkontribusi dalam tim.', points: ['Tidak "one man show" (kerja sendiri) dalam tugas kelompok.', 'Membantu teman yang tertinggal (Tutor Sebaya).', 'Menerima pembagian tugas dengan lapang dada dan bertanggung jawab menyelesaikannya.'] }
  ];

  const attitudeGuru = [
    { letter: 'A', title: 'Act Respectfully', subtitle: 'Menjaga adab kepada guru dan saling menghargai sesama teman.', points: ['Datang tepat waktu dan memulai kelas dengan salam yang hangat.', 'Menghargai pendapat siswa, tidak memotong pembicaraan siswa dengan kasar.', 'Memberikan teguran secara personal (tidak mempermalukan di depan umum).'] },
    { letter: 'T', title: 'Talk Politely', subtitle: 'Bertutur kata santun, positif, dan menghindari ucapan kasar.', points: ['Menjadi model bahasa baku dan santun (profesional).', 'Tidak menggunakan kata-kata sarkas atau merendahkan kemampuan siswa.'] },
    { letter: 'T', title: 'Turn Off Distraction', subtitle: 'Fokus penuh pada materi, tidak bermain game atau medsos saat jam belajar.', points: ['Membuat kesepakatan "Gadget Time" (kapan HP boleh dipakai untuk riset, kapan harus disimpan).', 'Tidak sibuk dengan HP sendiri saat siswa sedang mengerjakan tugas/diskusi.'] },
    { letter: 'I', title: 'Involve Actively', subtitle: 'Hadir sepenuhnya, merespon instruksi, dan aktif berpartisipasi.', points: ['Menggunakan metode belajar variatif (bukan ceramah satu arah terus menerus).', 'Memberikan apresiasi poin/pujian bagi siswa yang merespon.'] },
    { letter: 'T', title: 'Think Solutions', subtitle: 'Berorientasi pada penyelesaian masalah, bukan mengeluh saat menemui kesulitan.', points: ['Saat siswa bertanya "Error Pak/Bu", jangan langsung beri jawaban. Tanya balik: "Menurutmu error-nya di baris mana? Apa pesan error-nya?"', 'Memberikan studi kasus nyata industri yang memancing nalar kritis.'] },
    { letter: 'U', title: 'Use Tech Wisely', subtitle: 'Memanfaatkan teknologi & AI sebagai alat bantu belajar, bukan untuk plagiasi.', points: ['Melakukan verifikasi tugas (presentasi lisan) untuk memastikan pemahaman.'] },
    { letter: 'D', title: 'Dare to Ask', subtitle: 'Membangun rasa ingin tahu dan tidak malu bertanya saat belum paham.', points: ['Menciptakan zona aman: "Tidak ada pertanyaan bodoh".', 'Membuka sesi tanya jawab secara berkala, bukan hanya di akhir pelajaran.'] },
    { letter: 'E', title: 'Eager to Collaborate', subtitle: 'Terbuka untuk bekerja sama, berbagi ilmu, dan berkontribusi dalam tim.', points: ['Membentuk kelompok secara acak (agar siswa beradaptasi dengan berbagai karakter).', 'Menilai tidak hanya hasil akhir, tapi juga dinamika tim (peer assessment).'] }
  ];

  const currentAttitude = activeTab === 'siswa' ? attitudeSiswa : attitudeGuru;

  const coreValues = [
    {
      title: 'MoLeCul AI Assistant',
      desc: 'Moklet Learning Culture (MoLeCul) adalah kecerdasan buatan (AI) pendamping belajar yang mendampingi siswa untuk berpikir kritis, merefleksikan proses belajar, serta menggunakan teknologi secara beretika.',
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      title: 'ATTITUDE as Foundation',
      desc: 'Sikap dan karakter yang baik (Attitude) adalah nilai fundamental yang ditanamkan melalui budaya sekolah untuk melahirkan lulusan unggul berstandar global.',
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: 'Adaptive Learning',
      desc: 'Kurikulum Merdeka yang disesuaikan dengan kebutuhan industri terkini (Link and Match) mendorong siswa untuk terus adaptif terhadap perkembangan teknologi masa depan.',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Global Digital Talent',
      desc: 'Fokus pada pembentukan talenta digital yang tidak hanya ahli secara teknis (hard skill), namun juga memiliki kemampuan komunikasi, empati, dan integritas (soft skill).',
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <main>
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Learning Culture"
        description="Membentuk Global Digital Talent melalui penguatan karakter dasar (ATTITUDE) dan pemanfaatan teknologi AI yang bertanggung jawab."
      />

      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-light text-sm font-bold text-accent mb-6">
                     <span className="w-2 h-2 rounded-full bg-accent"></span>
                     Moklet Learning Culture
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6 leading-tight">
                     MoLeCul: AI Partner Belajarmu
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed mb-6">
                     Menjawab tantangan era Society 5.0, SMK Telkom Malang meluncurkan MoLeCul (Moklet Learning Culture). Sebuah terobosan inovatif berupa Asisten AI yang dirancang bukan untuk memberikan jawaban instan, melainkan memandu proses berpikir peserta didik.
                  </p>
                  <p className="text-text-muted text-lg leading-relaxed mb-8">
                     MoLeCul hadir layaknya tutor pribadi. Ia memberikan petunjuk, mengoreksi alur logika, dan memastikan integritas akademik tetap terjaga. Melalui cara ini, kompetensi siswa terbentuk secara matang bersama teknologi.
                  </p>
               </div>
               
               <div className="order-1 md:order-2 relative">
                  <div className="absolute inset-0 bg-accent/5 rounded-3xl -rotate-3 scale-105 transition-transform duration-500"></div>
                  <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-border-light bg-white">
                     {/* Placeholder for AI Illustration, since we don't have the exact image */}
                     <div className="absolute inset-0 bg-gradient-to-br from-bg-main to-surface-alt flex flex-col items-center justify-center text-center p-8">
                        <BrainCircuit className="w-24 h-24 text-accent mb-6 opacity-80" />
                        <h3 className="text-2xl font-extrabold text-text-main mb-2">MoLeCul</h3>
                        <p className="text-text-muted font-medium">Your AI Learning Assistant</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-border-light">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6">Pilar Budaya Belajar Moklet</h2>
               <p className="text-text-muted text-lg">
                  Keseimbangan antara penguasaan teknologi mutakhir dan pendidikan karakter.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreValues.map((value, index) => (
                  <Card key={index} className="p-8 hover:-translate-y-2 transition-transform cursor-default h-full flex flex-col bg-surface-alt border-none shadow-none hover:bg-white hover:shadow-xl hover:border-border-light border border-transparent">
                     <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-border-light text-accent flex items-center justify-center mb-6">
                        {value.icon}
                     </div>
                     <h3 className="text-xl font-extrabold text-text-main mb-4">{value.title}</h3>
                     <p className="text-text-muted leading-relaxed">
                        {value.desc}
                     </p>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      {/* ATTITUDE Section */}
      <section className="py-16 md:py-24 bg-surface-alt border-t border-border-light">
         <div className="container max-w-[1000px] mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
               <div className="inline-block bg-accent text-white px-6 py-2 rounded-full font-extrabold text-xl mb-6 shadow-md tracking-widest">
                  ATTITUDE
               </div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6">Manifesto Budaya Belajar</h2>
               <p className="text-text-muted text-lg mb-10">
                  Panduan sikap dan karakter yang dijalankan setiap hari di lingkungan SMK Telkom Malang.
               </p>

               {/* Tabs */}
               <div className="flex inline-flex bg-gray-200 p-1 rounded-2xl shadow-inner mb-8">
                  <button 
                    onClick={() => setActiveTab('siswa')}
                    className={`px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all ${activeTab === 'siswa' ? 'bg-white text-accent shadow-sm' : 'text-gray-500 hover:text-text-main'}`}
                  >
                     Untuk Siswa
                  </button>
                  <button 
                    onClick={() => setActiveTab('guru')}
                    className={`px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all ${activeTab === 'guru' ? 'bg-white text-accent shadow-sm' : 'text-gray-500 hover:text-text-main'}`}
                  >
                     Untuk Guru
                  </button>
               </div>
            </div>
            
            <div className="flex flex-col gap-6">
               {currentAttitude.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-border-light items-start transition-transform hover:-translate-y-1">
                     <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-accent text-white rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-black shadow-md mt-1">
                        {item.letter}
                     </div>
                     <div className="flex-1">
                        <h3 className="text-2xl font-extrabold text-text-main mb-2">{item.title}</h3>
                        <p className="text-text-muted font-medium mb-4">{item.subtitle}</p>
                        <ul className="space-y-3">
                           {item.points.map((point, pIndex) => (
                              <li key={pIndex} className="flex items-start gap-3 text-text-main leading-relaxed">
                                 <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"></span>
                                 <span>{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
