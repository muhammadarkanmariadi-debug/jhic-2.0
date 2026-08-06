'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/shared/ui/Button';
import { Status } from '@/shared/ui/Status';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    const newErrors: Record<string, string> = {};

    if (formData.name.length < 3) newErrors.name = 'Nama lengkap wajib diisi (min. 3 karakter).';
    if (formData.phone.length < 9) newErrors.phone = 'Nomor WhatsApp tidak valid (hanya angka, min. 9 digit).';
    if (!formData.email.includes('@')) newErrors.email = 'Format email tidak valid.';
    if (!formData.category) newErrors.category = 'Pilih salah satu kategori.';
    if (formData.message.length < 10) newErrors.message = 'Pesan wajib diisi (min. 10 karakter).';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSuccess(true);
      // Simulate API call
      setTimeout(() => setSuccess(false), 5000);
      setFormData({ name: '', phone: '', email: '', category: '', message: '' });
    }
  };

  return (
    <div className="bg-surface rounded-xl shadow-sm border border-border-light overflow-hidden flex flex-col lg:flex-row">
      
      {/* Contact Info Side */}
      <div className="w-full lg:w-2/5 bg-surface p-10 md:p-12 relative overflow-hidden flex flex-col justify-between">
        {/* Decorative shapes */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-text-main mb-4">Informasi Kontak</h3>
          <p className="text-text-muted leading-relaxed mb-10">
            Kami selalu terbuka untuk mendengarkan masukan dan menjawab pertanyaan Anda. Jangan ragu untuk menghubungi kami melalui form di samping atau kontak di bawah ini.
          </p>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-accent shadow-sm shrink-0 border border-border-light">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-main mb-1">Telepon</h4>
                <p className="text-text-muted">(0341) 720510</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-accent shadow-sm shrink-0 border border-border-light">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-main mb-1">Email</h4>
                <p className="text-text-muted">info@smktelkom-mlg.sch.id</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-accent shadow-sm shrink-0 border border-border-light">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-main mb-1">Lokasi</h4>
                <p className="text-text-muted leading-relaxed">Jl. Danau Ranau, Sawojajar, Kedungkandang, Kota Malang, Jawa Timur 65139</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-3/5 p-10 md:p-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-bold text-text-main mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="Masukkan nama" 
                className="w-full px-4 py-3 rounded-xl border border-border-light bg-surface-alt focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <p className="text-error text-xs mt-1.5 font-medium">{errors.name}</p>}
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-bold text-text-main mb-2">Nomor WhatsApp</label>
              <input 
                type="tel" 
                placeholder="08xxx" 
                className="w-full px-4 py-3 rounded-xl border border-border-light bg-surface-alt focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
              />
              {errors.phone && <p className="text-error text-xs mt-1.5 font-medium">{errors.phone}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-text-main mb-2">Email</label>
            <input 
              type="email" 
              placeholder="email@contoh.com" 
              className="w-full px-4 py-3 rounded-xl border border-border-light bg-surface-alt focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <p className="text-error text-xs mt-1.5 font-medium">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-bold text-text-main mb-2">Kategori Pertanyaan</label>
            <select 
              className="w-full px-4 py-3 rounded-xl border border-border-light bg-surface-alt focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer"
              value={formData.category}
              onChange={e => setFormData({...formData, category: e.target.value})}
            >
              <option value="">Pilih kategori</option>
              <option value="ppdb">Informasi PPDB</option>
              <option value="akademik">Akademik & Kurikulum</option>
              <option value="kerja-sama">Kerja Sama Industri</option>
              <option value="lainnya">Lainnya</option>
            </select>
            {errors.category && <p className="text-error text-xs mt-1.5 font-medium">{errors.category}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-bold text-text-main mb-2">Pesan Anda</label>
            <textarea 
              placeholder="Tuliskan detail pertanyaan atau keluhan Anda di sini..." 
              className="w-full px-4 py-3 rounded-xl border border-border-light bg-surface-alt focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y min-h-[120px]"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>
            {errors.message && <p className="text-error text-xs mt-1.5 font-medium">{errors.message}</p>}
          </div>
          
          <Button type="submit" size="lg" className="w-full mt-2">
            Kirim Pesan
            <Send className="w-5 h-5" />
          </Button>
          
          {success && (
            <Status variant="success" className="mt-2 w-full">
              Pesan Anda berhasil dikirim! Tim kami akan segera merespons.
            </Status>
          )}
        </form>
      </div>

    </div>
  );
}
