import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { dePricklyPear } from '@/i18n/products/de';
import PricklyPearView from '@/components/products/PricklyPearView';

export const metadata: Metadata = {
  title: dePricklyPear.seo.title,
  description: dePricklyPear.seo.description,
  alternates: {
    canonical: `${SITE_URL}/de/products/prickly-pear-seed-oil-bulk`,
    languages: {
      en: `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
      fr: `${SITE_URL}/fr/products/prickly-pear-seed-oil-bulk`,
      ar: `${SITE_URL}/ar/products/prickly-pear-seed-oil-bulk`,
      de: `${SITE_URL}/de/products/prickly-pear-seed-oil-bulk`,
      'x-default': `${SITE_URL}/products/prickly-pear-seed-oil-bulk`,
    },
  },
  openGraph: {
    title: dePricklyPear.seo.ogTitle,
    description: dePricklyPear.seo.ogDescription,
    url: `${SITE_URL}/de/products/prickly-pear-seed-oil-bulk`,
    locale: 'de_DE',
    siteName: 'Moroccan Organic Products',
  },
};

export default function GermanPricklyPearSeedOilPage() {
  return <PricklyPearView locale="de" />;
}
