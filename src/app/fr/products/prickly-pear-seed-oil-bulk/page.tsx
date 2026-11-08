import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { frPricklyPear } from '@/i18n/products/fr';
import PricklyPearView from '@/components/products/PricklyPearView';

export const metadata: Metadata = {
  title: frPricklyPear.seo.title,
  description: frPricklyPear.seo.description,
  alternates: {
    canonical: `${SITE_URL}/fr/products/prickly-pear-seed-oil-bulk`,
    languages: {
      en: `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
      fr: `${SITE_URL}/fr/products/prickly-pear-seed-oil-bulk`,
      ar: `${SITE_URL}/ar/products/prickly-pear-seed-oil-bulk`,
      de: `${SITE_URL}/de/products/prickly-pear-seed-oil-bulk`,
      'x-default': `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
    },
  },
  openGraph: {
    title: frPricklyPear.seo.ogTitle,
    description: frPricklyPear.seo.ogDescription,
    url: `${SITE_URL}/fr/products/prickly-pear-seed-oil-bulk`,
    locale: 'fr_FR',
    siteName: 'Moroccan Organic Products',
  },
};

export default function FrenchPricklyPearSeedOilPage() {
  return <PricklyPearView locale="fr" />;
}
