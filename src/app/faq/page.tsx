import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { enFaq } from '@/i18n/faq/en';
import FaqPageView from '@/components/faq/FaqPageView';

const canonical = `${SITE_URL}/faq`;

export const metadata: Metadata = {
  title: enFaq.seo.title,
  description: enFaq.seo.description,
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
    title: enFaq.seo.ogTitle,
    description: enFaq.seo.ogDescription,
    url: canonical,
    locale: 'en_US',
    siteName: SITE_NAME,
  },
};

export default function FaqPage() {
  return <FaqPageView locale="en" />;
}
