import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { deArganOil } from '@/i18n/products/de';
import ArganOilView from '@/components/products/ArganOilView';

export const metadata: Metadata = {
  title: deArganOil.seo.title,
  description: deArganOil.seo.description,
  alternates: {
    canonical: `${SITE_URL}/de/products/argan-oil-bulk`,
    languages: {
      en: `${SITE_URL}/products/argan-oil-bulk`,
      fr: `${SITE_URL}/fr/products/argan-oil-bulk`,
      ar: `${SITE_URL}/ar/products/argan-oil-bulk`,
      de: `${SITE_URL}/de/products/argan-oil-bulk`,
      'x-default': `${SITE_URL}/products/argan-oil-bulk`,
    },
  },
  openGraph: {
    title: deArganOil.seo.ogTitle,
    description: deArganOil.seo.ogDescription,
    url: `${SITE_URL}/de/products/argan-oil-bulk`,
    locale: 'de_DE',
    siteName: 'Moroccan Organic Products',
  },
};

export default function GermanBulkArganOilPage() {
  return <ArganOilView locale="de" />;
}
