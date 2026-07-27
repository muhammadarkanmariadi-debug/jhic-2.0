import React from 'react';
import Image from 'next/image';

interface OrgNodeProps {
  title: string;
  name: string;
  image?: string;
  isDashed?: boolean; // Jika ada border luar putus-putus atau koneksi (bisa dipakai nanti)
  className?: string;
}

export function OrgNode({ title, name, image, className = '' }: OrgNodeProps) {
  return (
    <div className={`w-[260px] bg-white rounded-xl overflow-hidden shadow-md border border-border-light relative z-10 mx-auto ${className}`}>
      {/* Header: Jabatan */}
      <div className="bg-accent text-white py-2 px-3 text-center min-h-[44px] flex items-center justify-center">
        <span className="text-[12px] font-bold leading-tight uppercase">
          {title}
        </span>
      </div>
      
      {/* Body: Foto & Nama */}
      <div className="p-3 flex items-center gap-3">
        {/* Foto */}
        <div className="shrink-0 w-14 h-14 bg-gray-200 rounded-lg overflow-hidden border border-border-light relative">
          {image ? (
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 48px, 56px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
               {/* User Avatar Placeholder */}
               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
               </svg>
            </div>
          )}
        </div>
        
        {/* Nama */}
        <div className="flex-1">
          <span className="text-[13px] font-bold text-text-main leading-tight line-clamp-3">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}
