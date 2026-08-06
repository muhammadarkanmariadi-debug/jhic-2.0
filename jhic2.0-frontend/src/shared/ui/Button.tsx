import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon | React.ElementType;
  iconPosition?: 'left' | 'right';
  /** When set, renders as a Next.js `<Link>` styled as a button. */
  href?: string;
  /** Passed to `<Link>` when `href` is external/open-in-new-tab. */
  target?: string;
  rel?: string;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-200 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2';

const sizeStyles = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-14 px-6 text-base',
};

const variantStyles = {
  primary: 'bg-accent text-accent-text shadow-accent hover:bg-accent-hover hover:-translate-y-0.5',
  secondary: 'bg-surface text-text-main border border-border-color shadow-sm hover:border-accent hover:text-accent hover:-translate-y-0.5',
  ghost: 'bg-transparent text-text-main hover:bg-black/5',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'right',
      href,
      target,
      rel,
      children,
      ...props
    },
    ref
  ) => {
    const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const content = (
      <>
        {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes} target={target} rel={rel}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';