import type { ProductDetailsDictionary } from '../types';
import { arganHairSerum } from './arganHairSerum';
import { arganBeardOil } from './arganBeardOil';
import { moroccanBlackSoap } from './moroccanBlackSoap';
import { ghassoulClay } from './ghassoulClay';
import { akerFassi } from './akerFassi';
import { nilaPowder } from './nilaPowder';
import { tbrimaPowder } from './tbrimaPowder';

export const frProductDetails: ProductDetailsDictionary = {
  'argan-hair-serum': arganHairSerum,
  'argan-beard-oil': arganBeardOil,
  'moroccan-black-soap': moroccanBlackSoap,
  'ghassoul-clay': ghassoulClay,
  'aker-fassi': akerFassi,
  'nila-powder': nilaPowder,
  'tbrima-powder': tbrimaPowder,
};
