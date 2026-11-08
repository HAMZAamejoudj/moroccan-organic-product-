import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { frProductsCatalog } from '@/i18n/products/fr';
import ProductsCatalogView from '@/components/products/ProductsCatalogView';

export const metadata: Metadata = {
  title: frProductsCatalog.seo.title,
  description: frProductsCatalog.seo.description,
  alternates: {
    canonical: `${SITE_URL}/fr/products`,
    languages: {
      en: `${SITE_URL}/products`,
      fr: `${SITE_URL}/fr/products`,
      ar: `${SITE_URL}/ar/products`,
      de: `${SITE_URL}/de/products`,
      'x-default': `${SITE_URL}/products`,
    },
  },
  openGraph: {
    title: frProductsCatalog.seo.ogTitle,
    description: frProductsCatalog.seo.ogDescription,
    url: `${SITE_URL}/fr/products`,
    locale: 'fr_FR',
    siteName: 'Moroccan Organic Products',
  },
};

export default function FrenchProductsPage() {
  return <ProductsCatalogView locale="fr" />;
}
