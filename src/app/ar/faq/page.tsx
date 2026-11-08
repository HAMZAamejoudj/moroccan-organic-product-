import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { arFaq } from '@/i18n/faq/ar';
import FaqPageView from '@/components/faq/FaqPageView';

const canonical = `${SITE_URL}/ar/faq`;

export const metadata: Metadata = {
  title: arFaq.seo.title,
  description: arFaq.seo.description,
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
    title: arFaq.seo.ogTitle,
    description: arFaq.seo.ogDescription,
    url: canonical,
    locale: 'ar_MA',
    siteName: SITE_NAME,
  },
};

export default function ArabicFaqPage() {
  return <FaqPageView locale="ar" />;
}
