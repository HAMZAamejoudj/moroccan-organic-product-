import Link from 'next/link';
import type { Locale } from '@/i18n';
import { getPrivateLabelDictionary } from '@/i18n/privateLabel';
import Button from '@/components/site/Button';
import Section from '@/components/site/Section';
import SectionStack from '@/components/site/SectionStack';
import PageIntro from '@/components/site/PageIntro';
import PhotoSlot from '@/components/site/PhotoSlot';
import { LaunchCards } from '@/components/site/InfoCards';
import Steps from '@/components/site/Steps';
import FaqList from '@/components/site/FaqList';
import Related from '@/components/site/Related';
import JsonLd from '@/components/site/JsonLd';
import { slotVisible } from '@/lib/images';
import { absoluteUrl, breadcrumbSchema, breadcrumbTrail, graph, organizationRef, organizationSchema } from '@/lib/schema';

const HERO_PHOTO = '/images/private-label-bottles.jpg';
const FILLING_PHOTO = '/images/private-label-production.webp';

interface PrivateLabelViewProps {
  locale: Locale;
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function PrivateLabelView({ locale }: PrivateLabelViewProps) {
  const dict = getPrivateLabelDictionary(locale);

  const canonicalPath = getLocalizedPath('/private-label-moroccan-beauty-products', locale);

  const trail = breadcrumbTrail(
    { name: dict.intro.breadcrumbHome, path: getLocalizedPath('/', locale) },
    { name: dict.intro.breadcrumbCurrent, path: canonicalPath },
  );

  const contactPath = getLocalizedPath('/contact-us', locale);

  return (
    <main className="mop-page" id="main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <JsonLd
        data={graph(
          {
            '@type': 'Service',
            '@id': `${absoluteUrl(canonicalPath)}#service`,
            url: absoluteUrl(canonicalPath),
            name: dict.intro.title,
            serviceType: 'Private label manufacturing of cosmetic oils',
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
        actions={<Button href={contactPath}>{dict.intro.btnCta}</Button>}
        media={
          slotVisible(HERO_PHOTO) ? (
            <PhotoSlot
              src={HERO_PHOTO}
              alt={dict.intro.imageAlt}
              label={dict.intro.imageLabel}
              ratio="4:3"
              priority
              sizes="(max-width: 900px) 100vw, 520px"
            />
          ) : undefined
        }
      />

      <SectionStack>
        <Section title={dict.whatYouCanLaunch.sectionTitle}>
          <LaunchCards cards={dict.whatYouCanLaunch.cards} />
        </Section>

        <Section
          title={dict.howItWorks.sectionTitle}
          split
          below={<Steps items={dict.howItWorks.steps} />}
        >
          <p>{dict.howItWorks.leadTimeText}</p>
          {slotVisible(FILLING_PHOTO) && (
            <PhotoSlot
              src={FILLING_PHOTO}
              alt={dict.howItWorks.imageAlt}
              label={dict.howItWorks.imageLabel}
              ratio="3:2"
              sizes="(max-width: 960px) 100vw, 640px"
            />
          )}
        </Section>

        <Section title={dict.packaging.sectionTitle} split>
          <p>{dict.packaging.text}</p>
        </Section>

        <Section title={dict.compliance.sectionTitle} split>
          <p>{dict.compliance.text}</p>
        </Section>

        <Section title={dict.whyOils.sectionTitle} split>
          <p>{dict.whyOils.text}</p>
        </Section>

        <Section title={dict.faq.sectionTitle} split>
          <FaqList items={dict.faq.items} />
          <Related>
            {dict.faq.relatedText}{' '}
            <Link href={getLocalizedPath('/products/argan-oil-bulk', locale)}>
              {dict.faq.relatedArgan}
            </Link>
            ,{' '}
            <Link href={getLocalizedPath('/products/prickly-pear-seed-oil-bulk', locale)}>
              {dict.faq.relatedPricklyPear}
            </Link>
            ,{' '}
            <Link href={getLocalizedPath('/wholesale', locale)}>
              {dict.faq.relatedWholesale}
            </Link>
            ,{' '}
            <Link href={getLocalizedPath('/faq', locale)}>
              {dict.faq.relatedFaq}
            </Link>
            .
          </Related>
        </Section>
      </SectionStack>

      <section className="mop-cta">
        <div className="mop-container">
          <div className="mop-cta__grid">
            <div>
              <h2 className="mop-h2">{dict.ctaBand.title}</h2>
              <p>{dict.ctaBand.lead}</p>
            </div>
            <div className="mop-cta__action">
              <Button href={contactPath} variant="cream">
                {dict.ctaBand.btn}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
