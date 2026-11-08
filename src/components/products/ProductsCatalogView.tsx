import type { Locale } from '@/i18n';
import { getProductsCatalogDictionary } from '@/i18n/products';
import Button from '@/components/site/Button';
import Section from '@/components/site/Section';
import SectionStack from '@/components/site/SectionStack';
import PageIntro from '@/components/site/PageIntro';
import CardGrid, { type CardData } from '@/components/site/CardGrid';
import CtaBand from '@/components/site/CtaBand';
import JsonLd from '@/components/site/JsonLd';
import { absoluteUrl, breadcrumbSchema, breadcrumbTrail, graph, organizationRef } from '@/lib/schema';

interface ProductsCatalogViewProps {
  locale: Locale;
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const VIEW_PRODUCT_LABEL: Record<Locale, string> = {
  en: 'View product details',
  fr: 'Voir la fiche produit',
  ar: 'عرض تفاصيل المنتج',
  de: 'Produktdetails ansehen',
};

export default function ProductsCatalogView({ locale }: ProductsCatalogViewProps) {
  const dict = getProductsCatalogDictionary(locale);

  const trail = breadcrumbTrail({
    name: dict.intro.breadcrumbProducts,
    path: getLocalizedPath('/products', locale),
  });

  const productPages = [
    { name: dict.cosmeticOils.items.argan.title, path: getLocalizedPath('/products/argan-oil-bulk', locale) },
    { name: dict.cosmeticOils.items.pricklyPear.title, path: getLocalizedPath('/products/prickly-pear-seed-oil-bulk', locale) },
    { name: dict.readyToBrand.items.hairSerum.title, path: getLocalizedPath('/products/argan-hair-serum', locale) },
    { name: dict.readyToBrand.items.beardOil.title, path: getLocalizedPath('/products/argan-beard-oil', locale) },
    { name: dict.traditional.items.blackSoap.title, path: getLocalizedPath('/products/moroccan-black-soap', locale) },
    { name: dict.traditional.items.ghassoul.title, path: getLocalizedPath('/products/ghassoul-clay', locale) },
    { name: dict.traditional.items.akerFassi.title, path: getLocalizedPath('/products/aker-fassi', locale) },
    { name: dict.traditional.items.nila.title, path: getLocalizedPath('/products/nila-powder', locale) },
    { name: dict.traditional.items.tbrima.title, path: getLocalizedPath('/products/tbrima-powder', locale) },
  ];

  const cosmeticOils: CardData[] = [
    {
      title: dict.cosmeticOils.items.argan.title,
      text: dict.cosmeticOils.items.argan.text,
      href: getLocalizedPath('/products/argan-oil-bulk', locale),
      linkLabel: dict.cosmeticOils.items.argan.linkLabel,
      slot: {
        src: '/images/argan-oil-bulk.jpg',
        alt: dict.cosmeticOils.items.argan.imageAlt,
        label: dict.cosmeticOils.items.argan.imageLabel,
      },
    },
    {
      title: dict.cosmeticOils.items.pricklyPear.title,
      text: dict.cosmeticOils.items.pricklyPear.text,
      href: getLocalizedPath('/products/prickly-pear-seed-oil-bulk', locale),
      linkLabel: dict.cosmeticOils.items.pricklyPear.linkLabel,
      slot: {
        src: '/images/prickly-pear-seed-oil.jpg',
        alt: dict.cosmeticOils.items.pricklyPear.imageAlt,
        label: dict.cosmeticOils.items.pricklyPear.imageLabel,
      },
    },
  ];

  const readyToBrand: CardData[] = [
    {
      title: dict.readyToBrand.items.hairSerum.title,
      text: dict.readyToBrand.items.hairSerum.text,
      href: getLocalizedPath('/products/argan-hair-serum', locale),
      linkLabel: dict.readyToBrand.items.hairSerum.linkLabel,
      slot: {
        src: '/images/argan-hair-serum.jpg',
        alt: dict.readyToBrand.items.hairSerum.imageAlt,
        label: dict.readyToBrand.items.hairSerum.imageLabel,
      },
    },
    {
      title: dict.readyToBrand.items.beardOil.title,
      text: dict.readyToBrand.items.beardOil.text,
      href: getLocalizedPath('/products/argan-beard-oil', locale),
      linkLabel: dict.readyToBrand.items.beardOil.linkLabel,
      slot: {
        src: '/images/argan-beard-oil.jpg',
        alt: dict.readyToBrand.items.beardOil.imageAlt,
        label: dict.readyToBrand.items.beardOil.imageLabel,
      },
    },
  ];

  const traditional: CardData[] = [
    {
      title: dict.traditional.items.blackSoap.title,
      text: dict.traditional.items.blackSoap.text,
      href: getLocalizedPath('/products/moroccan-black-soap', locale),
      linkLabel: VIEW_PRODUCT_LABEL[locale],
      slot: {
        src: '/images/moroccan-black-soap.jpg',
        alt: dict.traditional.items.blackSoap.imageAlt,
        label: dict.traditional.items.blackSoap.imageLabel,
      },
    },
    {
      title: dict.traditional.items.ghassoul.title,
      text: dict.traditional.items.ghassoul.text,
      href: getLocalizedPath('/products/ghassoul-clay', locale),
      linkLabel: VIEW_PRODUCT_LABEL[locale],
      slot: {
        src: '/images/ghassoul-clay.jpg',
        alt: dict.traditional.items.ghassoul.imageAlt,
        label: dict.traditional.items.ghassoul.imageLabel,
      },
    },
    {
      title: dict.traditional.items.akerFassi.title,
      text: dict.traditional.items.akerFassi.text,
      href: getLocalizedPath('/products/aker-fassi', locale),
      linkLabel: VIEW_PRODUCT_LABEL[locale],
      slot: {
        src: '/images/aker-fassi.jpg',
        alt: dict.traditional.items.akerFassi.imageAlt,
        label: dict.traditional.items.akerFassi.imageLabel,
      },
    },
    {
      title: dict.traditional.items.nila.title,
      text: dict.traditional.items.nila.text,
      href: getLocalizedPath('/products/nila-powder', locale),
      linkLabel: VIEW_PRODUCT_LABEL[locale],
      slot: {
        src: '/images/nila-powder.jpg',
        alt: dict.traditional.items.nila.imageAlt,
        label: dict.traditional.items.nila.imageLabel,
      },
    },
    {
      title: dict.traditional.items.tbrima.title,
      text: dict.traditional.items.tbrima.text,
      href: getLocalizedPath('/products/tbrima-powder', locale),
      linkLabel: VIEW_PRODUCT_LABEL[locale],
      slot: {
        src: '/images/tbrima-powder.jpg',
        alt: dict.traditional.items.tbrima.imageAlt,
        label: dict.traditional.items.tbrima.imageLabel,
      },
    },
  ];

  const canonicalPath = getLocalizedPath('/products', locale);

  return (
    <main className="mop-page" id="main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <JsonLd
        data={graph(
          {
            '@type': 'CollectionPage',
            '@id': `${absoluteUrl(canonicalPath)}#webpage`,
            url: absoluteUrl(canonicalPath),
            name: dict.intro.title,
            description: dict.seo.description,
            about: organizationRef,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: productPages.map((page, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: page.name,
                url: absoluteUrl(page.path),
              })),
            },
          },
          breadcrumbSchema(trail),
        )}
      />
      <PageIntro
        breadcrumbs={trail}
        title={dict.intro.title}
        lead={dict.intro.lead}
      />

      <SectionStack>
        <Section title={dict.cosmeticOils.sectionTitle}>
          <CardGrid cards={cosmeticOils} priorityFirst />
        </Section>

        <Section title={dict.readyToBrand.sectionTitle}>
          <CardGrid cards={readyToBrand} />
        </Section>

        <Section title={dict.traditional.sectionTitle}>
          <CardGrid cards={traditional} columns={3} />
        </Section>

        <Section title={dict.formatGuide.sectionTitle} split>
          <ul className="mop-list">
            {dict.formatGuide.points.map((pt, i) => (
              <li key={i}>
                <strong>{pt.strong}</strong> {pt.text}
              </li>
            ))}
          </ul>
          <div className="mop-actions">
            <Button href={getLocalizedPath('/contact-us', locale)}>{dict.formatGuide.btnQuote}</Button>
            <Button href={getLocalizedPath('/wholesale', locale)} variant="secondary">
              {dict.formatGuide.btnWholesale}
            </Button>
          </div>
        </Section>
      </SectionStack>

      <CtaBand />
    </main>
  );
}
