import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { enPricklyPear } from '@/i18n/products/en';
import PricklyPearView from '@/components/products/PricklyPearView';

export const metadata: Metadata = {
  title: enPricklyPear.seo.title,
  description: enPricklyPear.seo.description,
  alternates: {
    canonical: `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
    languages: {
      en: `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
      fr: `${SITE_URL}/fr/products/prickly-pear-seed-oil-bulk`,
      ar: `${SITE_URL}/ar/products/prickly-pear-seed-oil-bulk`,
      de: `${SITE_URL}/de/products/prickly-pear-seed-oil-bulk`,
      'x-default': `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
    },
  },
  openGraph: {
    title: enPricklyPear.seo.ogTitle,
    description: enPricklyPear.seo.ogDescription,
    url: `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
    locale: 'en_US',
    siteName: 'Moroccan Organic Products',
  },
};

export default function PricklyPearSeedOilPage() {
  return <PricklyPearView locale="en" />;
}
