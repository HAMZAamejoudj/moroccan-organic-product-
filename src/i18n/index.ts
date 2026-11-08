import { enHome } from './home/en';
import { frHome } from './home/fr';
import { arHome } from './home/ar';
import { deHome } from './home/de';
import { LOCALES, type Locale, type HomeDictionary } from './types';

export * from './types';

const homeDictionaries: Record<Locale, HomeDictionary> = {
  en: enHome,
  fr: frHome,
  ar: arHome,
  de: deHome,
};

export function getHomeDictionary(locale: Locale): HomeDictionary {
  return homeDictionaries[locale] || homeDictionaries.en;
}

export function getLocaleInfo(locale: Locale) {
  return LOCALES[locale] || LOCALES.en;
}
