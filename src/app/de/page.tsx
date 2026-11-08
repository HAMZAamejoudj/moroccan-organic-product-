import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { deHome } from '@/i18n/home/de';
import HomeView from '@/components/home/HomeView';

export const metadata: Metadata = {
  title: deHome.seo.title,
  description: deHome.seo.description,
  alternates: {
    canonical: `${SITE_URL}/de`,
    languages: {
      en: `${SITE_URL}/`,
      fr: `${SITE_URL}/fr`,
      ar: `${SITE_URL}/ar`,
      de: `${SITE_URL}/de`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: deHome.seo.ogTitle,
    description: deHome.seo.ogDescription,
    url: `${SITE_URL}/de`,
    locale: 'de_DE',
    siteName: 'Moroccan Organic Products',
  },
};

export default function GermanHomePage() {
  return <HomeView locale="de" />;
}
