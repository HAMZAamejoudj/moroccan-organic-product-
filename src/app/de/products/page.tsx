import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { deProductsCatalog } from '@/i18n/products/de';
import ProductsCatalogView from '@/components/products/ProductsCatalogView';

export const metadata: Metadata = {
  title: deProductsCatalog.seo.title,
  description: deProductsCatalog.seo.description,
  alternates: {
    canonical: `${SITE_URL}/de/products`,
    languages: {
      en: `${SITE_URL}/products`,
      fr: `${SITE_URL}/fr/products`,
      ar: `${SITE_URL}/ar/products`,
      de: `${SITE_URL}/de/products`,
      'x-default': `${SITE_URL}/products`,
    },
  },
  openGraph: {
    title: deProductsCatalog.seo.ogTitle,
    description: deProductsCatalog.seo.ogDescription,
    url: `${SITE_URL}/de/products`,
    locale: 'de_DE',
    siteName: 'Moroccan Organic Products',
  },
};

export default function GermanProductsPage() {
  return <ProductsCatalogView locale="de" />;
}
