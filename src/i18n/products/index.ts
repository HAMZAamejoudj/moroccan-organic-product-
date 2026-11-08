import type { Locale } from '@/i18n';
import type { ProductsCatalogDictionary, ArganOilDictionary, PricklyPearDictionary } from './types';
import { enProductsCatalog, enArganOil, enPricklyPear } from './en';
import { frProductsCatalog, frArganOil, frPricklyPear } from './fr';
import { arProductsCatalog, arArganOil, arPricklyPear } from './ar';
import { deProductsCatalog, deArganOil, dePricklyPear } from './de';

export * from './types';

const catalogDicts: Record<Locale, ProductsCatalogDictionary> = {
  en: enProductsCatalog,
  fr: frProductsCatalog,
  ar: arProductsCatalog,
  de: deProductsCatalog,
};

const arganDicts: Record<Locale, ArganOilDictionary> = {
  en: enArganOil,
  fr: frArganOil,
  ar: arArganOil,
  de: deArganOil,
};

const pricklyPearDicts: Record<Locale, PricklyPearDictionary> = {
  en: enPricklyPear,
  fr: frPricklyPear,
  ar: arPricklyPear,
  de: dePricklyPear,
};

export function getProductsCatalogDictionary(locale: Locale): ProductsCatalogDictionary {
  return catalogDicts[locale] || catalogDicts.en;
}

export function getArganOilDictionary(locale: Locale): ArganOilDictionary {
  return arganDicts[locale] || arganDicts.en;
}

export function getPricklyPearDictionary(locale: Locale): PricklyPearDictionary {
  return pricklyPearDicts[locale] || pricklyPearDicts.en;
}
