import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Info } from 'lucide-react';

type StatusVariant = 'success' | 'error' | 'warning' | 'info';

interface StatusProps {
  variant?: StatusVariant;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const iconByVariant: Record<StatusVariant, React.ReactNode> = {
  success: <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />,
  error: <XCircle className="w-5 h-5 shrink-0 mt-0.5" />,
  warning: <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />,
  info: <Info className="w-5 h-5 shrink-0 mt-0.5" />,
};

const containerByVariant: Record<StatusVariant, string> = {
  success: 'bg-success-soft border-success/25 text-success-strong',
  error: 'bg-error-soft border-error-border text-error-strong',
  warning: 'bg-warning-soft border-warning/30 text-warning',
  info: 'bg-info-soft border-info/30 text-info',
};

export function Status({
  variant = 'info',
  title,
  children,
  className = '',
}: StatusProps) {
  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm font-semibold ${containerByVariant[variant]} ${className}`}
    >
      <span aria-hidden className="shrink-0">
        {iconByVariant[variant]}
      </span>
      <div className="flex-1 leading-relaxed">
        {title && <div className="font-extrabold mb-0.5">{title}</div>}
        {children}
      </div>
    </div>
  );
}