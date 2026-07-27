import React from 'react';

export const Card = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-surface border border-border-color rounded-xl p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
};
