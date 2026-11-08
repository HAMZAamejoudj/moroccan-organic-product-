import Link from 'next/link';
import type { Locale } from '@/i18n';
import { getAboutUsDictionary } from '@/i18n/aboutUs';
import { businessFacts as facts, phoneHref } from '@/config/businessFacts';
import Button from '@/components/site/Button';
import Section from '@/components/site/Section';
import SectionStack from '@/components/site/SectionStack';
import PageIntro from '@/components/site/PageIntro';
import PhotoSlot from '@/components/site/PhotoSlot';
import { Columns } from '@/components/site/InfoCards';
import FaqList from '@/components/site/FaqList';
import Related from '@/components/site/Related';
import JsonLd from '@/components/site/JsonLd';
import { slotVisible } from '@/lib/images';
import { absoluteUrl, breadcrumbSchema, breadcrumbTrail, graph, organizationRef, organizationSchema } from '@/lib/schema';

const PHOTOS = {
  pressing: '/images/workshop-pressing.webp',
  team: '/images/team-packing.webp',
  filling: '/images/filling-labelling.webp',
};

interface AboutUsViewProps {
  locale: Locale;
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function AboutUsView({ locale }: AboutUsViewProps) {
  const dict = getAboutUsDictionary(locale);
  const canonicalPath = getLocalizedPath('/about-us', locale);

  const trail = breadcrumbTrail(
    { name: dict.intro.breadcrumbHome, path: getLocalizedPath('/', locale) },
    { name: dict.intro.breadcrumbCurrent, path: canonicalPath },
  );

  const showPhotoGrid = Object.values(PHOTOS).every((src) => slotVisible(src));
  const contactPath = getLocalizedPath('/contact-us', locale);
  const tel = phoneHref(facts.phone);

  return (
    <main className="mop-page" id="main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <JsonLd
        data={graph(
          {
            '@type': 'AboutPage',
            '@id': `${absoluteUrl(canonicalPath)}#webpage`,
            url: absoluteUrl(canonicalPath),
            name: dict.seo.title,
            description: dict.seo.description,
            mainEntity: organizationRef,
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
            <Button href={contactPath}>{dict.intro.btnQuote}</Button>
            <Button href={getLocalizedPath('/products', locale)} variant="secondary">
              {dict.intro.btnOils}
            </Button>
          </>
        }
      />

      <SectionStack>
        <Section
          split
          title={dict.whyOils.sectionTitle}
          below={
            showPhotoGrid ? (
              <div className="mop-editorial">
                <PhotoSlot
                  className="mop-editorial__tall"
                  src={PHOTOS.pressing}
                  alt={dict.whyOils.photos.pressingAlt}
                  label={dict.whyOils.photos.pressingLabel}
                  ratio="fill"
                  sizes="(max-width: 900px) 50vw, 540px"
                />
                <PhotoSlot
                  src={PHOTOS.team}
                  alt={dict.whyOils.photos.teamAlt}
                  label={dict.whyOils.photos.teamLabel}
                  ratio="3:2"
                  sizes="(max-width: 900px) 50vw, 540px"
                />
                <PhotoSlot
                  src={PHOTOS.filling}
                  alt={dict.whyOils.photos.fillingAlt}
                  label={dict.whyOils.photos.fillingLabel}
                  ratio="3:2"
                  sizes="(max-width: 900px) 50vw, 540px"
                />
              </div>
            ) : null
          }
        >
          {dict.whyOils.paragraphs.map((p, idx) => (
            <p key={idx} style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
              {p}
            </p>
          ))}
        </Section>

        <Section title={dict.whatWeDo.sectionTitle} split>
          <ul className="mop-list">
            {dict.whatWeDo.operations.map((op, idx) => (
              <li key={idx}>{op}</li>
            ))}
          </ul>
        </Section>

        <Section title={dict.howWeWork.sectionTitle}>
          <Columns items={dict.howWeWork.columns} />
        </Section>

        <Section title={dict.visitWorkshop.sectionTitle} split>
          <dl className="mop-details">
            <dt>{dict.visitWorkshop.addressLabel}</dt>
            <dd>{dict.visitWorkshop.addressValue}</dd>

            {facts.email && (
              <>
                <dt>{dict.visitWorkshop.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${facts.email}`}>{facts.email}</a>
                </dd>
              </>
            )}

            {tel && facts.phone && (
              <>
                <dt>{dict.visitWorkshop.phoneLabel}</dt>
                <dd>
                  <a href={`tel:${tel}`}>{facts.phone}</a>
                </dd>
              </>
            )}

            <dt>{dict.visitWorkshop.hoursLabel}</dt>
            <dd>{dict.visitWorkshop.hoursValue}</dd>
          </dl>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--mop-muted)' }}>
            {dict.visitWorkshop.appointmentNote}
          </p>
        </Section>

        <Section title={dict.faq.sectionTitle} split>
          <FaqList items={dict.faq.items} />
          <Related>
            {dict.faq.relatedText}{' '}
            <Link href={getLocalizedPath('/wholesale', locale)}>
              {dict.faq.relatedWholesale}
            </Link>{' '}
            &amp;{' '}
            <Link href={getLocalizedPath('/private-label-moroccan-beauty-products', locale)}>
              {dict.faq.relatedPrivateLabel}
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
