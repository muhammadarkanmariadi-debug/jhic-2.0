import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ContentCardProps {
  image: string;
  title: string;
  description: string;
  category?: string;
  date?: string;
  href?: string;
  readMoreText?: string;
  onClick?: () => void;
}

export function ContentCard({
  image,
  title,
  description,
  category,
  date,
  href = '#',
  readMoreText = 'Baca selengkapnya',
  onClick
}: ContentCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className="bg-surface rounded-xl overflow-hidden border border-border-light shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group flex flex-col h-full text-left"
    >
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {category && (
          <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-text-main text-xs font-bold px-3 py-1.5 rounded-full capitalize">
            {category}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {date && (
          <div className="text-sm font-bold text-text-muted mb-2">{date}</div>
        )}
        <h3 className="text-lg font-bold text-text-main leading-snug mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {description}
        </p>
        <div className="mt-auto flex items-center text-accent font-bold text-sm">
          {readMoreText}
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
