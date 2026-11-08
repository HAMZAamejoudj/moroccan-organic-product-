import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { deWholesale } from '@/i18n/wholesale/de';
import WholesaleView from '@/components/wholesale/WholesaleView';

export const metadata: Metadata = {
  title: deWholesale.seo.title,
  description: deWholesale.seo.description,
  alternates: {
    canonical: `${SITE_URL}/de/wholesale`,
    languages: {
      en: `${SITE_URL}/wholesale`,
      fr: `${SITE_URL}/fr/wholesale`,
      ar: `${SITE_URL}/ar/wholesale`,
      de: `${SITE_URL}/de/wholesale`,
      'x-default': `${SITE_URL}/wholesale`,
    },
  },
  openGraph: {
    title: deWholesale.seo.ogTitle,
    description: deWholesale.seo.ogDescription,
    url: `${SITE_URL}/de/wholesale`,
    locale: 'de_DE',
    siteName: 'Moroccan Organic Products',
  },
};

export default function GermanWholesalePage() {
  return <WholesaleView locale="de" />;
}
