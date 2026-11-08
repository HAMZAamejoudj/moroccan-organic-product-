import { SITE_NAME, SITE_URL } from '@/config/site';
import { businessFacts as facts } from '@/config/businessFacts';

export const ORG_ID = `${SITE_URL}/#organization`;

export const absoluteUrl = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;

const sameAs = Object.values(facts.social).filter((url): url is string => Boolean(url));

/** Full Organization entity. Optional fields appear only when the fact is confirmed (not null). */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    ...(facts.legalName ? { legalName: `${SITE_NAME} ${facts.legalName}` } : {}),
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/assets/images/logo.png`,
    description:
      'Argan oil and prickly pear seed oil manufacturer in Morocco, supplying bulk oils and private label oil products from 50 pieces.',
    // The city appears here only once the address is confirmed in businessFacts.
    ...(facts.address
      ? {
          address: {
            '@type': 'PostalAddress',
            ...(facts.address.city ? { addressLocality: facts.address.city } : {}),
            addressCountry: facts.address.country ?? 'MA',
            ...(facts.address.street ? { streetAddress: facts.address.street } : {}),
            ...(facts.address.postalCode ? { postalCode: facts.address.postalCode } : {}),
          },
        }
      : {}),
    ...(facts.email ? { email: facts.email } : {}),
    ...(facts.phone ? { telephone: facts.phone } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export const organizationRef = { '@id': ORG_ID };

export function webSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: organizationRef,
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/** Home is always the first crumb. */
export function breadcrumbTrail(...crumbs: Crumb[]): Crumb[] {
  return [{ name: 'Home', path: '/' }, ...crumbs];
}

export function breadcrumbSchema(trail: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function graph(...entities: object[]) {
  return { '@context': 'https://schema.org', '@graph': entities };
}
