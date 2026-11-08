import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { enProductsCatalog } from '@/i18n/products/en';
import ProductsCatalogView from '@/components/products/ProductsCatalogView';

export const metadata: Metadata = {
  title: enProductsCatalog.seo.title,
  description: enProductsCatalog.seo.description,
  alternates: {
    canonical: `${SITE_URL}/products`,
    languages: {
      en: `${SITE_URL}/products`,
      fr: `${SITE_URL}/fr/products`,
      ar: `${SITE_URL}/ar/products`,
      de: `${SITE_URL}/de/products`,
      'x-default': `${SITE_URL}/products`,
    },
  },
  openGraph: {
    title: enProductsCatalog.seo.ogTitle,
    description: enProductsCatalog.seo.ogDescription,
    url: `${SITE_URL}/products`,
    locale: 'en_US',
    siteName: 'Moroccan Organic Products',
  },
};

export default function ProductsPage() {
  return <ProductsCatalogView locale="en" />;
}
