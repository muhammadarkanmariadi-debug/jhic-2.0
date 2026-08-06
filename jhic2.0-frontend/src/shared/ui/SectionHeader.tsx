import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  /** Render the eyebrow as a pill chip (`rounded-full bg-accent/10`). */
  pill?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  eyebrow, 
  title, 
  description, 
  align = 'center',
  pill = false,
  className = ''
}) => {
  return (
    <div className={`max-w-[680px] flex flex-col ${align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <div className={pill
            ? "mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent"
            : "font-bold text-sm tracking-[0.08em] uppercase text-accent mb-3"}>
          {eyebrow}
        </div>
      )}
      
      <h2 className={`text-2xl font-extrabold text-text-main leading-[1.1] relative inline-block pb-6 
        after:content-[''] after:absolute after:bottom-0 after:w-12 after:h-[3px] after:bg-accent after:rounded-sm
        ${align === 'center' ? 'after:left-1/2 after:-translate-x-1/2' : 'after:left-0'}
      `}>
        {title}
      </h2>
      
      {description && (
        <p className="mt-4 text-lg text-text-muted leading-[1.7]">
          {description}
        </p>
      )}
    </div>
  );
};
