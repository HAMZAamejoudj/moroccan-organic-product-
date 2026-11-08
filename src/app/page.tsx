import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { enHome } from '@/i18n/home/en';
import HomeView from '@/components/home/HomeView';

export const metadata: Metadata = {
  title: enHome.seo.title,
  description: enHome.seo.description,
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      fr: `${SITE_URL}/fr`,
      ar: `${SITE_URL}/ar`,
      de: `${SITE_URL}/de`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: enHome.seo.ogTitle,
    description: enHome.seo.ogDescription,
    url: `${SITE_URL}/`,
    locale: 'en_US',
    siteName: 'Moroccan Organic Products',
  },
};

export default function HomePage() {
  return <HomeView locale="en" />;
}
