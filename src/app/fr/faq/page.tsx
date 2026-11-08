import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { frFaq } from '@/i18n/faq/fr';
import FaqPageView from '@/components/faq/FaqPageView';

const canonical = `${SITE_URL}/fr/faq`;

export const metadata: Metadata = {
  title: frFaq.seo.title,
  description: frFaq.seo.description,
  alternates: {
    canonical,
    languages: {
      en: `${SITE_URL}/faq`,
      fr: `${SITE_URL}/fr/faq`,
      ar: `${SITE_URL}/ar/faq`,
      de: `${SITE_URL}/de/faq`,
      'x-default': `${SITE_URL}/faq`,
    },
  },
  openGraph: {
    title: frFaq.seo.ogTitle,
    description: frFaq.seo.ogDescription,
    url: canonical,
    locale: 'fr_FR',
    siteName: SITE_NAME,
  },
};

export default function FrenchFaqPage() {
  return <FaqPageView locale="fr" />;
}
