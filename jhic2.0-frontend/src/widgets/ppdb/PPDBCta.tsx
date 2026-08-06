import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/shared/ui/Button';

export function PPDBCta() {
  return (
    <div className="bg-accent rounded-xl p-10 md:p-16 lg:p-20 relative overflow-hidden text-center shadow-xl">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-surface/5 rotate-12 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[120%] bg-black/10 -rotate-12 blur-2xl rounded-full"></div>
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-white/10 rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-inverse mb-6 leading-tight">
          Langkah pertamamu dimulai di sini.
        </h2>
        <p className="text-text-inverse/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Akses portal SPMB sekarang untuk mengisi formulir dan melengkapi berkas pendaftaranmu.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            href="https://ppdb.smktelkom-mlg.sch.id" 
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-accent shadow-lg"
            icon={ArrowRight}
          >
            Akses Portal SPMB
          </Button>
          <Link 
            href="/hubungi-kami/faq" 
            className="w-full sm:w-auto bg-transparent hover:bg-surface/10 text-text-inverse font-bold px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white transition-all flex items-center justify-center text-lg"
          >
            Baca FAQ Dulu
          </Link>
        </div>
      </div>
    </div>
  );
}
