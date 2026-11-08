import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { dePrivateLabel } from '@/i18n/privateLabel/de';
import PrivateLabelView from '@/components/privateLabel/PrivateLabelView';

const canonical = `${SITE_URL}/de/private-label-moroccan-beauty-products`;

export const metadata: Metadata = {
  title: dePrivateLabel.seo.title,
  description: dePrivateLabel.seo.description,
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
    title: dePrivateLabel.seo.ogTitle,
    description: dePrivateLabel.seo.ogDescription,
    url: canonical,
    locale: 'de_DE',
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/private-label-bottles.jpg`,
        alt: dePrivateLabel.intro.imageAlt,
      },
    ],
  },
};

export default function GermanPrivateLabelPage() {
  return <PrivateLabelView locale="de" />;
}
