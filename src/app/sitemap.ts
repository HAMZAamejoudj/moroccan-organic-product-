import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';
import { ALL_PRODUCT_SLUGS } from '@/i18n/productDetails';

const basePages = [
  '/',
  '/fr',
  '/ar',
  '/de',
  '/products',
  '/fr/products',
  '/ar/products',
  '/de/products',
  '/products/argan-oil-bulk',
  '/fr/products/argan-oil-bulk',
  '/ar/products/argan-oil-bulk',
  '/de/products/argan-oil-bulk',
  '/products/prickly-pear-seed-oil-bulk',
  '/fr/products/prickly-pear-seed-oil-bulk',
  '/ar/products/prickly-pear-seed-oil-bulk',
  '/de/products/prickly-pear-seed-oil-bulk',
  '/wholesale',
  '/fr/wholesale',
  '/ar/wholesale',
  '/de/wholesale',
  '/private-label-moroccan-beauty-products',
  '/fr/private-label-moroccan-beauty-products',
  '/ar/private-label-moroccan-beauty-products',
  '/de/private-label-moroccan-beauty-products',
  '/about-us',
  '/fr/about-us',
  '/ar/about-us',
  '/de/about-us',
  '/faq',
  '/fr/faq',
  '/ar/faq',
  '/de/faq',
  '/contact-us',
  '/fr/contact-us',
  '/ar/contact-us',
  '/de/contact-us',
];

const productDetailPages = ALL_PRODUCT_SLUGS.flatMap((slug) => [
  `/products/${slug}`,
  `/fr/products/${slug}`,
  `/ar/products/${slug}`,
  `/de/products/${slug}`,
]);

const pages = [...basePages, ...productDetailPages];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority:
      path === '/' || path === '/fr' || path === '/ar' || path === '/de'
        ? 1.0
        : path.includes('products') || path.includes('wholesale') || path.includes('private-label')
        ? 0.9
        : 0.8,
  }));
}
