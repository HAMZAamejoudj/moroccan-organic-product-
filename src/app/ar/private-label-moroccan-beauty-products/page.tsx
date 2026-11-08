import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { arPrivateLabel } from '@/i18n/privateLabel/ar';
import PrivateLabelView from '@/components/privateLabel/PrivateLabelView';

const canonical = `${SITE_URL}/ar/private-label-moroccan-beauty-products`;

export const metadata: Metadata = {
  title: arPrivateLabel.seo.title,
  description: arPrivateLabel.seo.description,
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
    title: arPrivateLabel.seo.ogTitle,
    description: arPrivateLabel.seo.ogDescription,
    url: canonical,
    locale: 'ar_MA',
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/private-label-bottles.jpg`,
        alt: arPrivateLabel.intro.imageAlt,
      },
    ],
  },
};

export default function ArabicPrivateLabelPage() {
  return <PrivateLabelView locale="ar" />;
}
