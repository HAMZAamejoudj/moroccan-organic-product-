import type { Locale } from '@/i18n';
import { getFaqDictionary } from '@/i18n/faq';
import Button from '@/components/site/Button';
import Section from '@/components/site/Section';
import SectionStack from '@/components/site/SectionStack';
import PageIntro from '@/components/site/PageIntro';
import FaqList, { faqJsonLd, type FaqItem } from '@/components/site/FaqList';
import JsonLd from '@/components/site/JsonLd';
import { breadcrumbSchema, breadcrumbTrail, graph } from '@/lib/schema';

interface FaqPageViewProps {
  locale: Locale;
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function FaqPageView({ locale }: FaqPageViewProps) {
  const dict = getFaqDictionary(locale);
  const canonicalPath = getLocalizedPath('/faq', locale);

  const trail = breadcrumbTrail(
    { name: dict.intro.breadcrumbHome, path: getLocalizedPath('/', locale) },
    { name: dict.intro.breadcrumbCurrent, path: canonicalPath },
  );

  const contactPath = getLocalizedPath('/contact-us', locale);

  // Map groups and localize links inside items
  const localizeItems = (items: FaqItem[]): FaqItem[] =>
    items.map((item) => ({
      ...item,
      link: item.link
        ? {
            label: item.link.label,
            href: getLocalizedPath(item.link.href, locale),
          }
        : undefined,
    }));

  const groups = [
    { title: dict.groups.oils.title, items: localizeItems(dict.groups.oils.items) },
    { title: dict.groups.ordering.title, items: localizeItems(dict.groups.ordering.items) },
    { title: dict.groups.shipping.title, items: localizeItems(dict.groups.shipping.items) },
  ];

  const allItems = groups.flatMap((group) => group.items);

  return (
    <main className="mop-page" id="main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <PageIntro
        title={dict.intro.title}
        lead={dict.intro.lead}
        breadcrumbs={trail}
      />

      <SectionStack>
        {groups.map((group) => (
          <Section key={group.title} title={group.title} split>
            <FaqList items={group.items} schema={false} />
          </Section>
        ))}
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

      <JsonLd data={faqJsonLd(allItems)} />
      <JsonLd data={graph(breadcrumbSchema(trail))} />
    </main>
  );
}
