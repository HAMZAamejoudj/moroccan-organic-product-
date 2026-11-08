import type { Locale } from '@/i18n';
import type { WholesaleDictionary } from './types';
import { enWholesale } from './en';
import { frWholesale } from './fr';
import { arWholesale } from './ar';
import { deWholesale } from './de';

export * from './types';

const wholesaleDicts: Record<Locale, WholesaleDictionary> = {
  en: enWholesale,
  fr: frWholesale,
  ar: arWholesale,
  de: deWholesale,
};

export function getWholesaleDictionary(locale: Locale): WholesaleDictionary {
  return wholesaleDicts[locale] || wholesaleDicts.en;
}
