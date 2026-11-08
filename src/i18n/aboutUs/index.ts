import type { Locale } from '@/i18n';
import type { AboutUsDictionary } from './types';
import { enAboutUs } from './en';
import { frAboutUs } from './fr';
import { arAboutUs } from './ar';
import { deAboutUs } from './de';

export * from './types';

const DICTIONARIES: Record<Locale, AboutUsDictionary> = {
  en: enAboutUs,
  fr: frAboutUs,
  ar: arAboutUs,
  de: deAboutUs,
};

export function getAboutUsDictionary(locale: Locale): AboutUsDictionary {
  return DICTIONARIES[locale] || DICTIONARIES.en;
}
