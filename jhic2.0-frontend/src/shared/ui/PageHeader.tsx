import React from 'react';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';

interface PageHeaderProps {
  breadcrumbItems: { label: string; href?: string }[];
  title: React.ReactNode;
  description: string;
  align?: 'left' | 'center';
}

export function PageHeader({ breadcrumbItems, title, description, align = 'center' }: PageHeaderProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const descAlignClass = align === 'center' ? 'mx-auto' : '';

  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-12 bg-surface">
      <div className={`container max-w-[1200px] mx-auto px-4 md:px-6 relative flex flex-col ${alignClass}`}>
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold text-text-main leading-[1.1] mb-6 mt-4">
          {title}
        </h1>
        <p className={`text-lg text-text-muted leading-relaxed max-w-2xl ${descAlignClass}`}>
          {description}
        </p>
      </div>
    </section>
  );
}
