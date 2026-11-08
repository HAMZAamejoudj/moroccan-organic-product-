"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { Locale } from '@/i18n';

const navTranslations: Record<
  Locale,
  {
    links: Array<{ href: string; label: string }>;
    cta: string;
    menu: string;
    close: string;
  }
> = {
  en: {
    links: [
      { href: '/products', label: 'Products' },
      { href: '/wholesale', label: 'Wholesale' },
      { href: '/private-label-moroccan-beauty-products', label: 'Private Label' },
      { href: '/about-us', label: 'About' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact-us', label: 'Contact' },
    ],
    cta: 'Request a Quote',
    menu: 'Menu',
    close: 'Close',
  },
  fr: {
    links: [
      { href: '/products', label: 'Produits' },
      { href: '/wholesale', label: 'Vente en gros' },
      { href: '/private-label-moroccan-beauty-products', label: 'Marque blanche' },
      { href: '/about-us', label: 'À propos' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact-us', label: 'Contact' },
    ],
    cta: 'Demander un devis',
    menu: 'Menu',
    close: 'Fermer',
  },
  ar: {
    links: [
      { href: '/products', label: 'المنتجات' },
      { href: '/wholesale', label: 'بيع الجملة' },
      { href: '/private-label-moroccan-beauty-products', label: 'العلامة الخاصة' },
      { href: '/about-us', label: 'من نحن' },
      { href: '/faq', label: 'الأسئلة الشائعة' },
      { href: '/contact-us', label: 'اتصل بنا' },
    ],
    cta: 'طلب عرض أسعار',
    menu: 'القائمة',
    close: 'إغلاق',
  },
  de: {
    links: [
      { href: '/products', label: 'Produkte' },
      { href: '/wholesale', label: 'Großhandel' },
      { href: '/private-label-moroccan-beauty-products', label: 'Private Label' },
      { href: '/about-us', label: 'Über uns' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact-us', label: 'Kontakt' },
    ],
    cta: 'Angebot anfordern',
    menu: 'Menü',
    close: 'Schließen',
  },
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const firstSegment = pathname.split('/').filter(Boolean)[0];
  const currentLocale: Locale =
    firstSegment === 'fr' || firstSegment === 'ar' || firstSegment === 'de' ? firstSegment : 'en';

  const t = navTranslations[currentLocale] || navTranslations.en;

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Escape closes, body does not scroll behind the drawer, focus moves into it.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.querySelector<HTMLElement>('a')?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab' && drawerRef.current) {
        const focusable = [
          toggleRef.current,
          ...Array.from(drawerRef.current.querySelectorAll<HTMLElement>('a')),
        ].filter((el): el is HTMLElement => Boolean(el));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  const getLocalizedHref = (path: string) => {
    if (currentLocale === 'en') return path;
    return `/${currentLocale}${path}`;
  };

  const isActive = (href: string) => {
    const locHref = getLocalizedHref(href);
    return pathname === locHref || pathname.startsWith(`${locHref}/`);
  };

  return (
    <>
      <a className="mop-skip" href="#main">
        Skip to content
      </a>
      <header className="mop-header">
        <div className="mop-container mop-header__bar">
          <Link className="mop-header__logo" href={currentLocale === 'en' ? '/' : `/${currentLocale}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/logo.svg" alt="Moroccan Organic Products - home" width={249} height={52} />
          </Link>

          <nav className="mop-nav" aria-label="Main">
            <ul>
              {t.links.map((link) => (
                <li key={link.href}>
                  <Link href={getLocalizedHref(link.href)} aria-current={isActive(link.href) ? 'page' : undefined}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mop-nav__lang-item">
                <LanguageSwitcher currentLocale={currentLocale} />
              </li>
            </ul>
          </nav>

          <Link className="mop-btn mop-btn--primary mop-header__cta" href={getLocalizedHref('/contact-us')}>
            {t.cta}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="mop-menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span className="mop-menu-btn__label">{open ? t.close : t.menu}</span>
          </button>
        </div>

        {open && (
          <div className="mop-drawer" id="mobile-menu" ref={drawerRef}>
            <nav aria-label="Mobile">
              <div className="mop-drawer__lang-wrap">
                <LanguageSwitcher currentLocale={currentLocale} />
              </div>
              <ul>
                {t.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={getLocalizedHref(link.href)}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                className="mop-btn mop-btn--primary"
                href={getLocalizedHref('/contact-us')}
                onClick={() => setOpen(false)}
              >
                {t.cta}
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
