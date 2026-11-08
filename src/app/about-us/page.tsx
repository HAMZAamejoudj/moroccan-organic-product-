import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { enAboutUs } from '@/i18n/aboutUs/en';
import AboutUsView from '@/components/aboutUs/AboutUsView';

const canonical = `${SITE_URL}/about-us`;

export const metadata: Metadata = {
  title: enAboutUs.seo.title,
  description: enAboutUs.seo.description,
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
    title: enAboutUs.seo.ogTitle,
    description: enAboutUs.seo.ogDescription,
    url: canonical,
    locale: 'en_US',
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/workshop-pressing.webp`,
        alt: enAboutUs.whyOils.photos.pressingAlt,
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutUsView locale="en" />;
}
