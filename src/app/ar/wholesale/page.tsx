import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { arWholesale } from '@/i18n/wholesale/ar';
import WholesaleView from '@/components/wholesale/WholesaleView';

export const metadata: Metadata = {
  title: arWholesale.seo.title,
  description: arWholesale.seo.description,
  alternates: {
    canonical: `${SITE_URL}/ar/wholesale`,
    languages: {
      en: `${SITE_URL}/wholesale`,
      fr: `${SITE_URL}/fr/wholesale`,
      ar: `${SITE_URL}/ar/wholesale`,
      de: `${SITE_URL}/de/wholesale`,
      'x-default': `${SITE_URL}/wholesale`,
    },
  },
  openGraph: {
    title: arWholesale.seo.ogTitle,
    description: arWholesale.seo.ogDescription,
    url: `${SITE_URL}/ar/wholesale`,
    locale: 'ar_MA',
    siteName: 'Moroccan Organic Products',
  },
};

export default function ArabicWholesalePage() {
  return <WholesaleView locale="ar" />;
}
