import Link from 'next/link';
import type { Locale } from '@/i18n';
import { getArganOilDictionary } from '@/i18n/products';
import Button from '@/components/site/Button';
import PageIntro from '@/components/site/PageIntro';
import PhotoSlot from '@/components/site/PhotoSlot';
import ProductPageLayout, { Block } from '@/components/site/ProductPageLayout';
import DataTable from '@/components/site/DataTable';
import Steps from '@/components/site/Steps';
import FaqList from '@/components/site/FaqList';
import CtaBand from '@/components/site/CtaBand';
import Related from '@/components/site/Related';
import JsonLd from '@/components/site/JsonLd';
import { photoExists, slotVisible } from '@/lib/images';
import { absoluteUrl, breadcrumbSchema, breadcrumbTrail, graph, organizationRef, organizationSchema } from '@/lib/schema';

const PHOTO = '/images/bulk-argan-drums-detail.jpg';

interface ArganOilViewProps {
  locale: Locale;
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function ArganOilView({ locale }: ArganOilViewProps) {
  const dict = getArganOilDictionary(locale);

  const trail = breadcrumbTrail(
    { name: dict.intro.breadcrumbProducts, path: getLocalizedPath('/products', locale) },
    { name: dict.intro.breadcrumbCurrent, path: getLocalizedPath('/products/argan-oil-bulk', locale) },
  );

  const canonicalPath = getLocalizedPath('/products/argan-oil-bulk', locale);

  return (
    <main className="mop-page" id="main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <JsonLd
        data={graph(
          {
            '@type': 'Product',
            '@id': `${absoluteUrl(canonicalPath)}#product`,
            url: absoluteUrl(canonicalPath),
            name: dict.intro.title,
            description: dict.seo.description,
            category: 'Cosmetic oil',
            brand: { '@type': 'Brand', name: 'Moroccan Organic Products' },
            manufacturer: organizationRef,
            ...(photoExists(PHOTO) ? { image: absoluteUrl(PHOTO) } : {}),
          },
          organizationSchema(),
          breadcrumbSchema(trail),
        )}
      />
      <PageIntro
        breadcrumbs={trail}
        title={dict.intro.title}
        lead={dict.intro.lead}
        actions={
          <>
            <Button href={getLocalizedPath('/contact-us', locale)}>{dict.intro.btnQuote}</Button>
            <Button href={getLocalizedPath('/contact-us', locale)} variant="secondary">
              {dict.intro.btnSample}
            </Button>
          </>
        }
      />

      <ProductPageLayout
        media={
          slotVisible(PHOTO) ? (
            <PhotoSlot
              src={PHOTO}
              alt={dict.image.alt}
              label={dict.image.label}
              ratio="4:3"
              priority
              sizes="(max-width: 960px) 100vw, 760px"
            />
          ) : undefined
        }
        facts={dict.facts}
      >
        <Block title={dict.specs.title}>
          <DataTable
            caption={dict.specs.caption}
            head={dict.specs.head}
            rows={dict.specs.rows}
          />
        </Block>

        <Block title={dict.checkBeforeBuying.title}>
          <ul className="mop-list">
            {dict.checkBeforeBuying.points.map((pt, i) => (
              <li key={i}>
                <strong>{pt.title}</strong> {pt.desc}
              </li>
            ))}
          </ul>
        </Block>

        <Block title={dict.howOrderingWorks.title}>
          <Steps
            maxColumns={3}
            items={dict.howOrderingWorks.steps}
          />
        </Block>

        <Block title={dict.faq.title}>
          <FaqList items={dict.faq.items} />
          <Related>
            {dict.faq.relatedText}{' '}
            <Link href={getLocalizedPath('/products/prickly-pear-seed-oil-bulk', locale)}>
              {dict.faq.pricklyPearLinkText}
            </Link>
            ,{' '}
            <Link href={getLocalizedPath('/wholesale', locale)}>
              {dict.faq.wholesaleLinkText}
            </Link>{' '}
            &amp;{' '}
            <Link href={getLocalizedPath('/private-label-moroccan-beauty-products', locale)}>
              {dict.faq.privateLabelLinkText}
            </Link>
            .
          </Related>
        </Block>
      </ProductPageLayout>

      <CtaBand />
    </main>
  );
}
