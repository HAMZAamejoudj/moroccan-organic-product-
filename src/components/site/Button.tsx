import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'cream';
  external?: boolean;
}

export default function Button({ href, children, variant = 'primary', external = false }: ButtonProps) {
  const className = `mop-btn mop-btn--${variant}`;
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
