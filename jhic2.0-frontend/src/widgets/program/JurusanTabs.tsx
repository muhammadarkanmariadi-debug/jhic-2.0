'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Code2, Server, Gamepad2, Database, GitMerge, Layout, Network, DatabaseBackup, Gamepad, Paintbrush, FileCode2 } from 'lucide-react';
import { programDetails } from '@/services/dummyData';
import { AutoCarousel } from '@/shared/ui/AutoCarousel';

export function JurusanTabs() {
  const [activeTab, setActiveTab] = useState<'rpl' | 'tkj' | 'pg'>('rpl');

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center w-full mb-16">
        <div className="flex gap-1 bg-white border border-border-light rounded-full p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('rpl')}
            className={`px-8 py-2.5 rounded-full text-[15px] font-bold flex items-center gap-2 transition-all ${
              activeTab === 'rpl'
                ? 'bg-accent text-white shadow-md'
                : 'text-text-muted hover:bg-surface-alt'
            }`}
          >
            <Code2 className="w-4 h-4" />
            RPL
          </button>
          <button
            onClick={() => setActiveTab('tkj')}
            className={`px-8 py-2.5 rounded-full text-[15px] font-bold flex items-center gap-2 transition-all ${
              activeTab === 'tkj'
                ? 'bg-accent text-white shadow-md'
                : 'text-text-muted hover:bg-surface-alt'
            }`}
          >
            <Server className="w-4 h-4" />
            TKJ
          </button>
          <button
            onClick={() => setActiveTab('pg')}
            className={`px-8 py-2.5 rounded-full text-[15px] font-bold flex items-center gap-2 transition-all ${
              activeTab === 'pg'
                ? 'bg-accent text-white shadow-md'
                : 'text-text-muted hover:bg-surface-alt'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            PG
          </button>
        </div>
      </div>

      <div className="relative">
        {/* RPL Pane */}
        {activeTab === 'rpl' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto lg:mx-0">
                <div className="absolute top-[10%] right-0 bottom-0 left-[20%] bg-accent rounded-tr-[40px]"></div>
                <div className="absolute top-0 left-0 right-[20%] bottom-[10%] border-2 border-dashed border-border-color rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-[10%] w-[85%] h-[95%]">
                  <Image 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                    alt="RPL Student"
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  <span className="text-accent block">Rekayasa</span>
                  <span className="text-text-main block">Perangkat Lunak</span>
                </h3>
                <p className="text-text-muted leading-relaxed mb-8 text-lg">
                  Mempersiapkan siswa menjadi software engineer handal yang mampu merancang, mengembangkan, dan
                  memelihara aplikasi di berbagai platform. Lulusan RPL dibekali dengan kemampuan coding modern untuk
                  menciptakan solusi teknologi terkini.
                </p>
                <div className="flex items-center gap-3 text-lg font-extrabold text-text-main">
                  <span className="w-6 h-[3px] bg-text-main inline-block"></span>
                  Masa pendidikan 3 tahun
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div className="mb-20">
              <h4 className="text-3xl font-extrabold text-center mb-10 text-text-main">
                Apa saja yang <span className="text-accent">dipelajari?</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { title: 'Pemrograman Web\ndan Perangkat Bergerak', icon: <Layout className="w-5 h-5" /> },
                  { title: 'Basis Data\n& SQL Server', icon: <Database className="w-5 h-5" /> },
                  { title: 'Algoritma &\nStruktur Data', icon: <GitMerge className="w-5 h-5" /> },
                  { title: 'Pemrograman\nBerorientasi Objek', icon: <Code2 className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-dashed border-border-color rounded-xl bg-white hover:border-accent transition-colors">
                    <div className="w-11 h-11 rounded-lg bg-accent text-white flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-text-muted leading-snug whitespace-pre-line">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career */}
            <div>
              <h4 className="text-3xl font-extrabold text-text-main mb-3">Peluang Karir Masa Depan</h4>
              <p className="text-text-muted mb-10 max-w-2xl">
                Jurusan RPL membuka pintu menuju karir cemerlang di berbagai industri teknologi sebagai tenaga ahli perangkat lunak.
              </p>
              <AutoCarousel scrollAmount={300}>
                {programDetails.RPL.careers.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white border border-border-light rounded-2xl p-6 shadow-sm flex flex-col shrink-0 w-[280px] snap-center hover:shadow-md hover:-translate-y-1 transition-all">
                      <div className={`w-12 h-12 rounded-xl ${item.iconBgClass} ${item.iconColorClass} flex items-center justify-center mb-5`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h5 className="text-xl font-extrabold text-text-main mb-2">{item.title}</h5>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </AutoCarousel>
            </div>
          </div>
        )}

        {/* TKJ Pane */}
        {activeTab === 'tkj' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             {/* Hero */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h3 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  <span className="text-accent block">Teknik Komputer</span>
                  <span className="text-text-main block">dan Jaringan</span>
                </h3>
                <p className="text-text-muted leading-relaxed mb-8 text-lg">
                  Membentuk tenaga profesional di bidang infrastruktur IT, jaringan komunikasi data, sistem server,
                  hingga keamanan siber. Lulusan TKJ disiapkan untuk menjaga nadi dunia digital tetap berdetak kencang.
                </p>
                <div className="flex items-center gap-3 text-lg font-extrabold text-text-main">
                  <span className="w-6 h-[3px] bg-text-main inline-block"></span>
                  Masa pendidikan 3 tahun
                </div>
              </div>
              <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto lg:mx-0 order-1 lg:order-2">
                <div className="absolute top-[10%] left-0 bottom-0 right-[20%] bg-accent rounded-tl-[40px]"></div>
                <div className="absolute top-0 right-0 left-[20%] bottom-[10%] border-2 border-dashed border-border-color rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-[10%] w-[85%] h-[95%]">
                  <Image 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
                    alt="TKJ Student"
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div className="mb-20">
              <h4 className="text-3xl font-extrabold text-center mb-10 text-text-main">
                Apa saja yang <span className="text-accent">dipelajari?</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: 'Teknologi Jaringan\nBerbasis Luas (WAN)', icon: <Network className="w-5 h-5" /> },
                  { title: 'Administrasi\nInfrastruktur Jaringan', icon: <Server className="w-5 h-5" /> },
                  { title: 'Administrasi\nSistem Server', icon: <DatabaseBackup className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-dashed border-border-color rounded-xl bg-white hover:border-accent transition-colors">
                    <div className="w-11 h-11 rounded-lg bg-accent text-white flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-text-muted leading-snug whitespace-pre-line">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            Career
            <div>
              <h4 className="text-3xl font-extrabold text-text-main mb-3">Peluang Karir Masa Depan</h4>
              <p className="text-text-muted mb-10 max-w-2xl">
                 Jurusan TKJ akan memastikan Anda siap merambah bidang infrastruktur TI dan telekomunikasi.
              </p>
              <AutoCarousel scrollAmount={300}>
                {programDetails.TKJ.careers.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white border border-border-light rounded-2xl p-6 shadow-sm flex flex-col shrink-0 w-[280px] snap-center hover:shadow-md hover:-translate-y-1 transition-all">
                      <div className={`w-12 h-12 rounded-xl ${item.iconBgClass} ${item.iconColorClass} flex items-center justify-center mb-5`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h5 className="text-xl font-extrabold text-text-main mb-2">{item.title}</h5>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </AutoCarousel>
            </div>
          </div>
        )}

        {/* PG Pane */}
        {activeTab === 'pg' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             {/* Hero */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto lg:mx-0">
                <div className="absolute top-[10%] right-0 bottom-0 left-[20%] bg-accent rounded-tr-[40px]"></div>
                <div className="absolute top-0 left-0 right-[20%] bottom-[10%] border-2 border-dashed border-border-color rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-[10%] w-[85%] h-[95%]">
                  <Image 
                    src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop"
                    alt="PG Student"
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  <span className="text-accent block">Pengembangan</span>
                  <span className="text-text-main block">Gim</span>
                </h3>
                <p className="text-text-muted leading-relaxed mb-8 text-lg">
                  Fokus pada kreasi dan pengembangan produk interaktif (game). Siswa diajarkan bagaimana merancang
                  permainan, aset 2D/3D, logika pemrograman, dan pengolahan audio untuk industri kreatif digital.
                </p>
                <div className="flex items-center gap-3 text-lg font-extrabold text-text-main">
                  <span className="w-6 h-[3px] bg-text-main inline-block"></span>
                  Masa pendidikan 3 tahun
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div className="mb-20">
              <h4 className="text-3xl font-extrabold text-center mb-10 text-text-main">
                Apa saja yang <span className="text-accent">dipelajari?</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: 'Desain Game\n& Skenario', icon: <Gamepad className="w-5 h-5" /> },
                  { title: 'Pembuatan\nAset 2D & 3D', icon: <Paintbrush className="w-5 h-5" /> },
                  { title: 'Pemrograman\nGame Engine', icon: <FileCode2 className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-dashed border-border-color rounded-xl bg-white hover:border-accent transition-colors">
                    <div className="w-11 h-11 rounded-lg bg-accent text-white flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-text-muted leading-snug whitespace-pre-line">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career */}
            <div>
              <h4 className="text-3xl font-extrabold text-text-main mb-3">Peluang Karir Masa Depan</h4>
              <p className="text-text-muted mb-10 max-w-2xl">
                 Jurusan PG melatih Anda menjadi kreator di bidang industri hiburan interaktif masa depan.
              </p>
              <AutoCarousel scrollAmount={300}>
                {programDetails.PG.careers.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white border border-border-light rounded-2xl p-6 shadow-sm flex flex-col shrink-0 w-[280px] snap-center hover:shadow-md hover:-translate-y-1 transition-all">
                      <div className={`w-12 h-12 rounded-xl ${item.iconBgClass} ${item.iconColorClass} flex items-center justify-center mb-5`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h5 className="text-xl font-extrabold text-text-main mb-2">{item.title}</h5>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </AutoCarousel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
