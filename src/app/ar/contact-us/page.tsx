import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { arContact } from '@/i18n/contact/ar';
import ContactPageView from '@/components/contact/ContactPageView';

const canonical = `${SITE_URL}/ar/contact-us`;

export const metadata: Metadata = {
  title: arContact.seo.title,
  description: arContact.seo.description,
  alternates: {
    canonical,
    languages: {
      en: `${SITE_URL}/contact-us`,
      fr: `${SITE_URL}/fr/contact-us`,
      ar: `${SITE_URL}/ar/contact-us`,
      de: `${SITE_URL}/de/contact-us`,
      'x-default': `${SITE_URL}/contact-us`,
    },
  },
  openGraph: {
    title: arContact.seo.ogTitle,
    description: arContact.seo.ogDescription,
    url: canonical,
    locale: 'ar_MA',
    siteName: SITE_NAME,
  },
};

export default function ArabicContactPage() {
  return <ContactPageView locale="ar" />;
}
