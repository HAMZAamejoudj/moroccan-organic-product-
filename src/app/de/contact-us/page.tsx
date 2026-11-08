import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { deContact } from '@/i18n/contact/de';
import ContactPageView from '@/components/contact/ContactPageView';

const canonical = `${SITE_URL}/de/contact-us`;

export const metadata: Metadata = {
  title: deContact.seo.title,
  description: deContact.seo.description,
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
    title: deContact.seo.ogTitle,
    description: deContact.seo.ogDescription,
    url: canonical,
    locale: 'de_DE',
    siteName: SITE_NAME,
  },
};

export default function GermanContactPage() {
  return <ContactPageView locale="de" />;
}
