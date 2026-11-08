import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { arProductsCatalog } from '@/i18n/products/ar';
import ProductsCatalogView from '@/components/products/ProductsCatalogView';

export const metadata: Metadata = {
  title: arProductsCatalog.seo.title,
  description: arProductsCatalog.seo.description,
  alternates: {
    canonical: `${SITE_URL}/ar/products`,
    languages: {
      en: `${SITE_URL}/products`,
      fr: `${SITE_URL}/fr/products`,
      ar: `${SITE_URL}/ar/products`,
      de: `${SITE_URL}/de/products`,
      'x-default': `${SITE_URL}/products`,
    },
  },
  openGraph: {
    title: arProductsCatalog.seo.ogTitle,
    description: arProductsCatalog.seo.ogDescription,
    url: `${SITE_URL}/ar/products`,
    locale: 'ar_MA',
    siteName: 'Moroccan Organic Products',
  },
};

export default function ArabicProductsPage() {
  return <ProductsCatalogView locale="ar" />;
}
