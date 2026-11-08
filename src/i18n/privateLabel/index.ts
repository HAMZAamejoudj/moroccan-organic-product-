import type { Locale } from '@/i18n';
import type { PrivateLabelDictionary } from './types';
import { enPrivateLabel } from './en';
import { frPrivateLabel } from './fr';
import { arPrivateLabel } from './ar';
import { dePrivateLabel } from './de';

export * from './types';

const DICTIONARIES: Record<Locale, PrivateLabelDictionary> = {
  en: enPrivateLabel,
  fr: frPrivateLabel,
  ar: arPrivateLabel,
  de: dePrivateLabel,
};

export function getPrivateLabelDictionary(locale: Locale): PrivateLabelDictionary {
  return DICTIONARIES[locale] || DICTIONARIES.en;
}
