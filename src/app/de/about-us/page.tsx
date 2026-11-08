import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { deAboutUs } from '@/i18n/aboutUs/de';
import AboutUsView from '@/components/aboutUs/AboutUsView';

const canonical = `${SITE_URL}/de/about-us`;

export const metadata: Metadata = {
  title: deAboutUs.seo.title,
  description: deAboutUs.seo.description,
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
    title: deAboutUs.seo.ogTitle,
    description: deAboutUs.seo.ogDescription,
    url: canonical,
    locale: 'de_DE',
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/workshop-pressing.webp`,
        alt: deAboutUs.whyOils.photos.pressingAlt,
      },
    ],
  },
};

export default function GermanAboutPage() {
  return <AboutUsView locale="de" />;
}
