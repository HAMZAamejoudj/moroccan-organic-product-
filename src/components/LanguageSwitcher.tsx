"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, type Locale } from '@/i18n';
import { LocaleFlag } from '@/components/Flags';
import { ChevronDown, Check } from '@/components/Icons';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
  showIcon?: boolean;
}

export default function LanguageSwitcher({
  currentLocale,
  className = '',
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Helper to map current pathname to target locale
  function getTargetUrl(targetLocale: Locale): string {
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    const isPrefixed = firstSegment === 'fr' || firstSegment === 'ar' || firstSegment === 'de';

    const restPath = isPrefixed ? segments.slice(1).join('/') : segments.join('/');

    if (targetLocale === 'en') {
      return restPath ? `/${restPath}` : '/';
    } else {
      return restPath ? `/${targetLocale}/${restPath}` : `/${targetLocale}`;
    }
  }

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className={`mop-lang-dropdown-wrapper ${className}`.trim()}
      dir="ltr"
    >
      <button
        type="button"
        className={`mop-lang-trigger ${isOpen ? 'mop-lang-trigger--open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Change language, currently ${currentLocale.toUpperCase()}`}
      >
        <span className="mop-lang-trigger__flag">
          <LocaleFlag locale={currentLocale} width={18} height={12} />
        </span>
        <span className="mop-lang-trigger__code">{currentLocale.toUpperCase()}</span>
        <span
          className={`mop-lang-trigger__chevron ${isOpen ? 'mop-lang-trigger__chevron--rotated' : ''}`}
          aria-hidden="true"
        >
          <ChevronDown size={11} strokeWidth={2.4} />
        </span>
      </button>

      {isOpen && (
        <div
          className="mop-lang-menu"
          role="listbox"
          aria-label="Language options"
          dir="ltr"
        >
          <ul className="mop-lang-menu__list">
            {(Object.keys(LOCALES) as Locale[]).map((code) => {
              const isActive = currentLocale === code;
              return (
                <li
                  key={code}
                  className="mop-lang-menu__item"
                  role="option"
                  aria-selected={isActive}
                >
                  <Link
                    href={getTargetUrl(code)}
                    className={`mop-lang-menu__link ${isActive ? 'mop-lang-menu__link--active' : ''}`}
                    lang={code}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mop-lang-menu__flag">
                      <LocaleFlag locale={code} width={18} height={12} />
                    </span>
                    <span className="mop-lang-menu__code">{code.toUpperCase()}</span>
                    {isActive && (
                      <span className="mop-lang-menu__check" aria-hidden="true">
                        <Check size={12} strokeWidth={2.8} />
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
