import Link from 'next/link';
import type { Locale } from '@/i18n';
import { getWholesaleDictionary } from '@/i18n/wholesale';
import Button from '@/components/site/Button';
import Section from '@/components/site/Section';
import SectionStack from '@/components/site/SectionStack';
import PageIntro from '@/components/site/PageIntro';
import PhotoSlot from '@/components/site/PhotoSlot';
import DataTable from '@/components/site/DataTable';
import Steps from '@/components/site/Steps';
import FaqList from '@/components/site/FaqList';
import CtaBand from '@/components/site/CtaBand';
import Related from '@/components/site/Related';
import JsonLd from '@/components/site/JsonLd';
import { slotVisible } from '@/lib/images';
import { absoluteUrl, breadcrumbSchema, breadcrumbTrail, graph, organizationRef, organizationSchema } from '@/lib/schema';

const CONTAINERS_PHOTO = '/images/bulk-containers.webp';

interface WholesaleViewProps {
  locale: Locale;
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function WholesaleView({ locale }: WholesaleViewProps) {
  const dict = getWholesaleDictionary(locale);

  const trail = breadcrumbTrail({
    name: dict.intro.breadcrumbWholesale,
    path: getLocalizedPath('/wholesale', locale),
  });

  const canonicalPath = getLocalizedPath('/wholesale', locale);

  const tableRows: Array<[string, string, React.ReactNode]> = [
    ...dict.formats.rows.map(
      (r): [string, string, React.ReactNode] => [r.format, r.sizes, r.bestFor],
    ),
    [
      dict.formats.privateLabelRow.format,
      dict.formats.privateLabelRow.sizes,
      <>
        {dict.formats.privateLabelRow.leadText}
        <Link href={getLocalizedPath('/private-label-moroccan-beauty-products', locale)}>
          {dict.formats.privateLabelRow.linkText}
        </Link>
      </>,
    ],
  ];

  return (
    <main className="mop-page" id="main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <JsonLd
        data={graph(
          {
            '@type': 'Service',
            '@id': `${absoluteUrl(canonicalPath)}#service`,
            url: absoluteUrl(canonicalPath),
            name: dict.intro.title,
            serviceType: 'Wholesale supply of Moroccan cosmetic oils',
            description: dict.seo.description,
            provider: organizationRef,
            areaServed: 'Worldwide',
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
          <Button href={getLocalizedPath('/contact-us', locale)}>
            {dict.intro.btnQuote}
          </Button>
        }
      />

      <SectionStack>
        <Section title={dict.whoWeSupply.sectionTitle} split>
          <ul className="mop-list">
            {dict.whoWeSupply.bullets.map((b, i) => (
              <li key={i}>
                <strong>{b.strong}</strong> {b.text}
              </li>
            ))}
          </ul>
          {slotVisible(CONTAINERS_PHOTO) && (
            <PhotoSlot
              src={CONTAINERS_PHOTO}
              alt={dict.whoWeSupply.imageAlt}
              label={dict.whoWeSupply.imageLabel}
              ratio="3:2"
              sizes="(max-width: 960px) 100vw, 640px"
            />
          )}
        </Section>

        <Section title={dict.formats.sectionTitle}>
          <DataTable
            caption={dict.formats.tableCaption}
            head={dict.formats.tableHead}
            rows={tableRows}
          />
          <p style={{ marginTop: 20 }}>{dict.formats.minimumOrderNote}</p>
        </Section>

        <Section
          title={dict.howToOrder.sectionTitle}
          split
          below={<Steps items={dict.howToOrder.steps} />}
        >
          <h3 className="mop-h3">{dict.howToOrder.whatQuoteIncludesTitle}</h3>
          <p>{dict.howToOrder.whatQuoteIncludesText}</p>
        </Section>

        <Section title={dict.importerDocs.sectionTitle} split>
          <p>{dict.importerDocs.intro}</p>
          <ul className="mop-list">
            {dict.importerDocs.docsList.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
          {dict.importerDocs.certifications.length > 0 && (
            <>
              <h4 className="mop-h4" style={{ marginTop: 24, marginBottom: 12 }}>
                {dict.importerDocs.certificationsTitle}
              </h4>
              <ul className="mop-list">
                {dict.importerDocs.certifications.map((cert) => (
                  <li key={cert.number}>
                    {cert.name} — {cert.body} ({cert.number})
                  </li>
                ))}
              </ul>
            </>
          )}
        </Section>

        <Section title={dict.faq.sectionTitle} split>
          <FaqList items={dict.faq.items} />
          <Related>
            {dict.faq.relatedText}{' '}
            <Link href={getLocalizedPath('/products/argan-oil-bulk', locale)}>
              {dict.faq.arganLinkText}
            </Link>{' '}
            |{' '}
            <Link href={getLocalizedPath('/products/prickly-pear-seed-oil-bulk', locale)}>
              {dict.faq.pricklyPearLinkText}
            </Link>
            . {locale === 'ar' ? 'للمزيد من الاستفسارات؟ زوروا ' : 'More questions? Read the '}{' '}
            <Link href={getLocalizedPath('/faq', locale)}>{dict.faq.faqLinkText}</Link>.
          </Related>
        </Section>
      </SectionStack>

      <CtaBand />
    </main>
  );
}
