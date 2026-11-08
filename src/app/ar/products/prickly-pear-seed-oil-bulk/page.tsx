import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { arPricklyPear } from '@/i18n/products/ar';
import PricklyPearView from '@/components/products/PricklyPearView';

export const metadata: Metadata = {
  title: arPricklyPear.seo.title,
  description: arPricklyPear.seo.description,
  alternates: {
    canonical: `${SITE_URL}/ar/products/prickly-pear-seed-oil-bulk`,
    languages: {
      en: `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
      fr: `${SITE_URL}/fr/products/prickly-pear-seed-oil-bulk`,
      ar: `${SITE_URL}/ar/products/prickly-pear-seed-oil-bulk`,
      de: `${SITE_URL}/de/products/prickly-pear-seed-oil-bulk`,
      'x-default': `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
    },
  },
  openGraph: {
    title: arPricklyPear.seo.ogTitle,
    description: arPricklyPear.seo.ogDescription,
    url: `${SITE_URL}/ar/products/prickly-pear-seed-oil-bulk`,
    locale: 'ar_MA',
    siteName: 'Moroccan Organic Products',
  },
};

export default function ArabicPricklyPearSeedOilPage() {
  return <PricklyPearView locale="ar" />;
}
