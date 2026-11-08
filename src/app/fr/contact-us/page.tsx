import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/config/site';
import { frContact } from '@/i18n/contact/fr';
import ContactPageView from '@/components/contact/ContactPageView';

const canonical = `${SITE_URL}/fr/contact-us`;

export const metadata: Metadata = {
  title: frContact.seo.title,
  description: frContact.seo.description,
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
    title: frContact.seo.ogTitle,
    description: frContact.seo.ogDescription,
    url: canonical,
    locale: 'fr_FR',
    siteName: SITE_NAME,
  },
};

export default function FrenchContactPage() {
  return <ContactPageView locale="fr" />;
}
