import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { frHome } from '@/i18n/home/fr';
import HomeView from '@/components/home/HomeView';

export const metadata: Metadata = {
  title: frHome.seo.title,
  description: frHome.seo.description,
  alternates: {
    canonical: `${SITE_URL}/fr`,
    languages: {
      en: `${SITE_URL}/`,
      fr: `${SITE_URL}/fr`,
      ar: `${SITE_URL}/ar`,
      de: `${SITE_URL}/de`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: frHome.seo.ogTitle,
    description: frHome.seo.ogDescription,
    url: `${SITE_URL}/fr`,
    locale: 'fr_FR',
    siteName: 'Moroccan Organic Products',
  },
};

export default function FrenchHomePage() {
  return <HomeView locale="fr" />;
}
