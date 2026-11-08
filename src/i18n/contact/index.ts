import type { Locale } from '@/i18n';
import type { ContactDictionary } from './types';
import { enContact } from './en';
import { frContact } from './fr';
import { arContact } from './ar';
import { deContact } from './de';

export * from './types';

const DICTIONARIES: Record<Locale, ContactDictionary> = {
  en: enContact,
  fr: frContact,
  ar: arContact,
  de: deContact,
};

export function getContactDictionary(locale: Locale): ContactDictionary {
  return DICTIONARIES[locale] || DICTIONARIES.en;
}
