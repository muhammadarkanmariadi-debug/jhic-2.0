import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav className="flex text-sm text-text-muted font-semibold mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center hover:text-accent transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Beranda
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                {isLast || !item.href ? (
                  <span className="text-text-main">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
