'use client';

import React from 'react';
import { Search, KeyRound, Server, CalendarDays } from 'lucide-react';
import Link from 'next/link';

export function ServiceDeskGrid() {
  const services = [
    {
      title: 'Reset Password',
      description: 'Reset sandi Email Microsoft 365, MyLMS, atau Siakad.',
      icon: <KeyRound className="w-8 h-8" />,
      color: 'text-accent',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Infrastruktur IT',
      description: 'Bantuan konektivitas Wi-Fi, lab komputer, dan perangkat inventaris.',
      icon: <Server className="w-8 h-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pendaftaran Event',
      description: 'Bantuan pendaftaran sistem kompetisi, seminar, atau ujian.',
      icon: <CalendarDays className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="flex flex-col items-center">
      
      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-12 relative">
        <input 
          type="text" 
          placeholder="Cari layanan (contoh: reset password)..." 
          className="w-full py-4 pl-14 pr-6 rounded-full border border-border-light shadow-sm text-text-main focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-lg"
        />
        <Search className="w-6 h-6 text-text-muted absolute left-5 top-1/2 -translate-y-1/2" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((service, idx) => (
          <Link 
            key={idx} 
            href="#" 
            className="bg-white border border-border-light rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.bgColor} ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-text-main mb-3">{service.title}</h3>
            <p className="text-text-muted leading-relaxed text-sm">{service.description}</p>
          </Link>
        ))}
      </div>
      
    </div>
  );
}
