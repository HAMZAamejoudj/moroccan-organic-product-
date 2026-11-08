import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { enContact } from '@/i18n/contact/en';
import ContactPageView from '@/components/contact/ContactPageView';

const canonical = `${SITE_URL}/contact-us`;

export const metadata: Metadata = {
  title: enContact.seo.title,
  description: enContact.seo.description,
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
    title: enContact.seo.ogTitle,
    description: enContact.seo.ogDescription,
    url: canonical,
    locale: 'en_US',
    siteName: SITE_NAME,
  },
};

export default function ContactPage() {
  return <ContactPageView locale="en" />;
}
