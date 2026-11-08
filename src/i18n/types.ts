export type Locale = 'en' | 'fr' | 'ar' | 'de';

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  href: string;
}

export const LOCALES: Record<Locale, LocaleInfo> = {
  en: { code: 'en', label: 'English', nativeName: 'English', dir: 'ltr', href: '/' },
  fr: { code: 'fr', label: 'French', nativeName: 'Français', dir: 'ltr', href: '/fr' },
  ar: { code: 'ar', label: 'Arabic', nativeName: 'العربية', dir: 'rtl', href: '/ar' },
  de: { code: 'de', label: 'German', nativeName: 'Deutsch', dir: 'ltr', href: '/de' },
};

export interface HomeDictionary {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    btnProducts: string;
    btnPricing: string;
    btnWhatsapp: string;
    specRows: Array<{ label: string; value: string }>;
  };
  trust: string[];
  brandSplit: {
    eyebrow: string;
    title: string;
    lead: string;
    badge: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
  };
  bestsellers: {
    title: string;
    btnViewAll: string;
    items: Array<{
      title: string;
      text: string;
      linkLabel: string;
      href: string;
      imageSrc: string;
      imageAlt: string;
      imageLabel: string;
    }>;
  };
  steps: {
    title: string;
    items: Array<{
      title: string;
      text: string;
      imageSrc: string;
      imageAlt: string;
      imageLabel: string;
    }>;
  };
  waysToBuy: {
    title: string;
    items: Array<{
      name: string;
      get: string;
      for: string;
      href: string;
      linkLabel: string;
    }>;
  };
  privateLabelBand: {
    badgeNum: string;
    badgeLabel: string;
    title: string;
    description: string;
    btnLearnMore: string;
    btnInquiry: string;
    linkLabel: string;
    href: string;
  };
  bulkSupplier: {
    title: string;
    lead: string;
    bullets: string[];
    btnWholesale: string;
    btnQuote: string;
    shippingText: string;
  };
  quoteForm: {
    title: string;
    description: string;
    interests: string[];
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
    relatedText: {
      intro: string;
      aboutUs: string;
      aboutUsHref: string;
      wholesale: string;
      wholesaleHref: string;
      faq: string;
      faqHref: string;
    };
  };
  ctaBand: string;
}
