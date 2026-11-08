import type { Locale } from '@/i18n';
import { ALL_PRODUCT_SLUGS, type ProductDetailItem, type ProductDetailsDictionary, type ProductDetailSlug } from './types';
import { enProductDetails } from './en';
import { frProductDetails } from './fr';
import { arProductDetails } from './ar';
import { deProductDetails } from './de';

export * from './types';

const DICTIONARIES: Record<Locale, ProductDetailsDictionary> = {
  en: enProductDetails,
  fr: frProductDetails,
  ar: arProductDetails,
  de: deProductDetails,
};

export function getProductDetails(locale: Locale): ProductDetailsDictionary {
  return DICTIONARIES[locale] || DICTIONARIES.en;
}

export function isProductDetailSlug(slug: string): slug is ProductDetailSlug {
  return (ALL_PRODUCT_SLUGS as readonly string[]).includes(slug);
}

export function getProductDetail(slug: string, locale: Locale): ProductDetailItem | null {
  if (!isProductDetailSlug(slug)) {
    return null;
  }
  const dict = getProductDetails(locale);
  return dict[slug] || DICTIONARIES.en[slug] || null;
}
