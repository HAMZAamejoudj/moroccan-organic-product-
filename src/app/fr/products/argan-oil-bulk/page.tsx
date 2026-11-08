import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { frArganOil } from '@/i18n/products/fr';
import ArganOilView from '@/components/products/ArganOilView';

export const metadata: Metadata = {
  title: frArganOil.seo.title,
  description: frArganOil.seo.description,
  alternates: {
    canonical: `${SITE_URL}/fr/products/argan-oil-bulk`,
    languages: {
      en: `${SITE_URL}/products/argan-oil-bulk`,
      fr: `${SITE_URL}/fr/products/argan-oil-bulk`,
      ar: `${SITE_URL}/ar/products/argan-oil-bulk`,
      de: `${SITE_URL}/de/products/argan-oil-bulk`,
      'x-default': `${SITE_URL}/products/argan-oil-bulk`,
    },
  },
  openGraph: {
    title: frArganOil.seo.ogTitle,
    description: frArganOil.seo.ogDescription,
    url: `${SITE_URL}/fr/products/argan-oil-bulk`,
    locale: 'fr_FR',
    siteName: 'Moroccan Organic Products',
  },
};

export default function FrenchBulkArganOilPage() {
  return <ArganOilView locale="fr" />;
}
