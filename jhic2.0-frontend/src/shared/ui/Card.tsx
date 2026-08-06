import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Apply the standard hover lift / shadow treatment. */
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = false }: CardProps) => {
  const interactive = hover
    ? 'transition-all duration-300 hover:shadow-md hover:-translate-y-1'
    : '';
  return (
    <div className={`bg-surface border border-border-light rounded-xl shadow-sm ${interactive} ${className}`}>
      {children}
    </div>
  );
};
