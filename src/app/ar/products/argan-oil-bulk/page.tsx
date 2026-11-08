import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { arArganOil } from '@/i18n/products/ar';
import ArganOilView from '@/components/products/ArganOilView';

export const metadata: Metadata = {
  title: arArganOil.seo.title,
  description: arArganOil.seo.description,
  alternates: {
    canonical: `${SITE_URL}/ar/products/argan-oil-bulk`,
    languages: {
      en: `${SITE_URL}/products/argan-oil-bulk`,
      fr: `${SITE_URL}/fr/products/argan-oil-bulk`,
      ar: `${SITE_URL}/ar/products/argan-oil-bulk`,
      de: `${SITE_URL}/de/products/argan-oil-bulk`,
      'x-default': `${SITE_URL}/products/argan-oil-bulk`,
    },
  },
  openGraph: {
    title: arArganOil.seo.ogTitle,
    description: arArganOil.seo.ogDescription,
    url: `${SITE_URL}/ar/products/argan-oil-bulk`,
    locale: 'ar_MA',
    siteName: 'Moroccan Organic Products',
  },
};

export default function ArabicBulkArganOilPage() {
  return <ArganOilView locale="ar" />;
}
