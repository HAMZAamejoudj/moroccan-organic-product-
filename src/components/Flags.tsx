import type { SVGProps } from 'react';
import type { Locale } from '@/i18n';

export interface FlagProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * United Kingdom Flag (Union Jack)
 * Standard 3:2 ratio with crisp geometry
 */
export function FlagUK({ width = 21, height = 14, className = '', style, ...props }: FlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      width={width}
      height={height}
      className={className}
      style={{
        borderRadius: '3px',
        flexShrink: 0,
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.12)',
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      <rect width="60" height="40" fill="#012169" />
      {/* White diagonal saltire */}
      <path stroke="#ffffff" strokeWidth="7" d="M0 0l60 40M60 0L0 40" />
      {/* Red diagonal saltire */}
      <path stroke="#C8102E" strokeWidth="4.2" d="M0 0l60 40M60 0L0 40" />
      {/* White St George Cross */}
      <path stroke="#ffffff" strokeWidth="11" d="M30 0v40M0 20h60" />
      {/* Red St George Cross */}
      <path stroke="#C8102E" strokeWidth="6.5" d="M30 0v40M0 20h60" />
    </svg>
  );
}

/**
 * France Flag
 * Vertical tricolor: Blue, White, Red
 */
export function FlagFR({ width = 21, height = 14, className = '', style, ...props }: FlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      width={width}
      height={height}
      className={className}
      style={{
        borderRadius: '3px',
        flexShrink: 0,
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.12)',
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="40" x="0" fill="#002395" />
      <rect width="20" height="40" x="20" fill="#ffffff" />
      <rect width="20" height="40" x="40" fill="#ED2939" />
    </svg>
  );
}

/**
 * Moroccan Flag
 * Authentic red field with interlaced green pentagram star in center
 */
export function FlagMA({ width = 21, height = 14, className = '', style, ...props }: FlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      width={width}
      height={height}
      className={className}
      style={{
        borderRadius: '3px',
        flexShrink: 0,
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.12)',
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      <rect width="60" height="40" fill="#C1272D" />
      {/* Pentagram star: stroke with authentic green */}
      <path
        d="M30 9.5 L35.88 28.09 L20.49 16.91 L39.51 16.91 L24.12 28.09 Z"
        fill="none"
        stroke="#006233"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * German Flag
 * Horizontal tricolor: Black, Red, Gold
 */
export function FlagDE({ width = 21, height = 14, className = '', style, ...props }: FlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      width={width}
      height={height}
      className={className}
      style={{
        borderRadius: '3px',
        flexShrink: 0,
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.12)',
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      <rect width="60" height="13.33" y="0" fill="#000000" />
      <rect width="60" height="13.33" y="13.33" fill="#DD0000" />
      <rect width="60" height="13.34" y="26.66" fill="#FFCE00" />
    </svg>
  );
}

/**
 * Helper to get the flag for a given Locale code
 */
export function LocaleFlag({
  locale,
  width = 21,
  height = 14,
  className = '',
}: {
  locale: Locale;
  width?: number;
  height?: number;
  className?: string;
}) {
  switch (locale) {
    case 'en':
      return <FlagUK width={width} height={height} className={className} />;
    case 'fr':
      return <FlagFR width={width} height={height} className={className} />;
    case 'ar':
      return <FlagMA width={width} height={height} className={className} />;
    case 'de':
      return <FlagDE width={width} height={height} className={className} />;
  }
}
