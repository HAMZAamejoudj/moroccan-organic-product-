import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { frWholesale } from '@/i18n/wholesale/fr';
import WholesaleView from '@/components/wholesale/WholesaleView';

export const metadata: Metadata = {
  title: frWholesale.seo.title,
  description: frWholesale.seo.description,
  alternates: {
    canonical: `${SITE_URL}/fr/wholesale`,
    languages: {
      en: `${SITE_URL}/wholesale`,
      fr: `${SITE_URL}/fr/wholesale`,
      ar: `${SITE_URL}/ar/wholesale`,
      de: `${SITE_URL}/de/wholesale`,
      'x-default': `${SITE_URL}/wholesale`,
    },
  },
  openGraph: {
    title: frWholesale.seo.ogTitle,
    description: frWholesale.seo.ogDescription,
    url: `${SITE_URL}/fr/wholesale`,
    locale: 'fr_FR',
    siteName: 'Moroccan Organic Products',
  },
};

export default function FrenchWholesalePage() {
  return <WholesaleView locale="fr" />;
}
