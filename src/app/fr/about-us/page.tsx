import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { frAboutUs } from '@/i18n/aboutUs/fr';
import AboutUsView from '@/components/aboutUs/AboutUsView';

const canonical = `${SITE_URL}/fr/about-us`;

export const metadata: Metadata = {
  title: frAboutUs.seo.title,
  description: frAboutUs.seo.description,
  alternates: {
    canonical,
    languages: {
      en: `${SITE_URL}/about-us`,
      fr: `${SITE_URL}/fr/about-us`,
      ar: `${SITE_URL}/ar/about-us`,
      de: `${SITE_URL}/de/about-us`,
      'x-default': `${SITE_URL}/about-us`,
    },
  },
  openGraph: {
    title: frAboutUs.seo.ogTitle,
    description: frAboutUs.seo.ogDescription,
    url: canonical,
    locale: 'fr_FR',
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/workshop-pressing.webp`,
        alt: frAboutUs.whyOils.photos.pressingAlt,
      },
    ],
  },
};

export default function FrenchAboutPage() {
  return <AboutUsView locale="fr" />;
}
