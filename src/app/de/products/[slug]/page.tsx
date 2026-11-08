import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME } from '@/config/site';
import {
  ALL_PRODUCT_SLUGS,
  getProductDetail,
  isProductDetailSlug,
} from '@/i18n/productDetails';
import ProductDetailView from '@/components/products/ProductDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isProductDetailSlug(slug)) {
    return {};
  }

  const item = getProductDetail(slug, 'de');
  if (!item) {
    return {};
  }

  const canonical = `${SITE_URL}/de/products/${slug}`;

  return {
    title: item.seo.title,
    description: item.seo.description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/products/${slug}`,
        fr: `${SITE_URL}/fr/products/${slug}`,
        ar: `${SITE_URL}/ar/products/${slug}`,
        de: `${SITE_URL}/de/products/${slug}`,
        'x-default': `${SITE_URL}/products/${slug}`,
      },
    },
    openGraph: {
      title: item.seo.ogTitle,
      description: item.seo.ogDescription,
      url: canonical,
      locale: 'de_DE',
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${item.image.src}`,
          alt: item.image.alt,
        },
      ],
    },
  };
}

export default async function GermanProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isProductDetailSlug(slug)) {
    notFound();
  }

  return <ProductDetailView slug={slug} locale="de" />;
}
