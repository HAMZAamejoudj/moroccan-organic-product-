import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { arHome } from '@/i18n/home/ar';
import HomeView from '@/components/home/HomeView';

export const metadata: Metadata = {
  title: arHome.seo.title,
  description: arHome.seo.description,
  alternates: {
    canonical: `${SITE_URL}/ar`,
    languages: {
      en: `${SITE_URL}`,
      fr: `${SITE_URL}/fr`,
      ar: `${SITE_URL}/ar`,
      de: `${SITE_URL}/de`,
      'x-default': `${SITE_URL}`,
    },
  },
  openGraph: {
    title: arHome.seo.ogTitle,
    description: arHome.seo.ogDescription,
    url: `${SITE_URL}/ar`,
    locale: 'ar_MA',
    siteName: 'Moroccan Organic Products',
  },
};

export default function ArabicHomePage() {
  return <HomeView locale="ar" />;
}
