import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { deFaq } from '@/i18n/faq/de';
import FaqPageView from '@/components/faq/FaqPageView';

const canonical = `${SITE_URL}/de/faq`;

export const metadata: Metadata = {
  title: deFaq.seo.title,
  description: deFaq.seo.description,
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
    title: deFaq.seo.ogTitle,
    description: deFaq.seo.ogDescription,
    url: canonical,
    locale: 'de_DE',
    siteName: SITE_NAME,
  },
};

export default function GermanFaqPage() {
  return <FaqPageView locale="de" />;
}
