import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { frPrivateLabel } from '@/i18n/privateLabel/fr';
import PrivateLabelView from '@/components/privateLabel/PrivateLabelView';

const canonical = `${SITE_URL}/fr/private-label-moroccan-beauty-products`;

export const metadata: Metadata = {
  title: frPrivateLabel.seo.title,
  description: frPrivateLabel.seo.description,
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
    title: frPrivateLabel.seo.ogTitle,
    description: frPrivateLabel.seo.ogDescription,
    url: canonical,
    locale: 'fr_FR',
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/private-label-bottles.jpg`,
        alt: frPrivateLabel.intro.imageAlt,
      },
    ],
  },
};

export default function FrenchPrivateLabelPage() {
  return <PrivateLabelView locale="fr" />;
}
