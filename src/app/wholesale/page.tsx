import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { enWholesale } from '@/i18n/wholesale/en';
import WholesaleView from '@/components/wholesale/WholesaleView';

export const metadata: Metadata = {
  title: enWholesale.seo.title,
  description: enWholesale.seo.description,
  alternates: {
    canonical: `${SITE_URL}/wholesale`,
    languages: {
      en: `${SITE_URL}/wholesale`,
      fr: `${SITE_URL}/fr/wholesale`,
      ar: `${SITE_URL}/ar/wholesale`,
      de: `${SITE_URL}/de/wholesale`,
      'x-default': `${SITE_URL}/wholesale`,
    },
  },
  openGraph: {
    title: enWholesale.seo.ogTitle,
    description: enWholesale.seo.ogDescription,
    url: `${SITE_URL}/wholesale`,
    locale: 'en_US',
    siteName: 'Moroccan Organic Products',
  },
};

export default function WholesalePage() {
  return <WholesaleView locale="en" />;
}
