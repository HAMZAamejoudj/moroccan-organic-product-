import type { Locale } from '@/i18n';
import type { FaqDictionary } from './types';
import { enFaq } from './en';
import { frFaq } from './fr';
import { arFaq } from './ar';
import { deFaq } from './de';

export * from './types';

const DICTIONARIES: Record<Locale, FaqDictionary> = {
  en: enFaq,
  fr: frFaq,
  ar: arFaq,
  de: deFaq,
};

export function getFaqDictionary(locale: Locale): FaqDictionary {
  return DICTIONARIES[locale] || DICTIONARIES.en;
}
