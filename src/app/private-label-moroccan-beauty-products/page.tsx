import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { enPrivateLabel } from '@/i18n/privateLabel/en';
import PrivateLabelView from '@/components/privateLabel/PrivateLabelView';

const canonical = `${SITE_URL}/private-label-moroccan-beauty-products`;

export const metadata: Metadata = {
  title: enPrivateLabel.seo.title,
  description: enPrivateLabel.seo.description,
  alternates: {
    canonical,
    languages: {
      en: `${SITE_URL}/private-label-moroccan-beauty-products`,
      fr: `${SITE_URL}/fr/private-label-moroccan-beauty-products`,
      ar: `${SITE_URL}/ar/private-label-moroccan-beauty-products`,
      de: `${SITE_URL}/de/private-label-moroccan-beauty-products`,
      'x-default': `${SITE_URL}/private-label-moroccan-beauty-products`,
    },
  },
  openGraph: {
    title: enPrivateLabel.seo.ogTitle,
    description: enPrivateLabel.seo.ogDescription,
    url: canonical,
    locale: 'en_US',
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/private-label-bottles.jpg`,
        alt: enPrivateLabel.intro.imageAlt,
      },
    ],
  },
};

export default function PrivateLabelPage() {
  return <PrivateLabelView locale="en" />;
}
