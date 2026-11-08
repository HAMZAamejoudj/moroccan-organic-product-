import Link from 'next/link';
import type { Locale } from '@/i18n';
import { getProductDetail, type ProductDetailSlug } from '@/i18n/productDetails';
import Button from '@/components/site/Button';
import PageIntro from '@/components/site/PageIntro';
import PhotoSlot from '@/components/site/PhotoSlot';
import ProductPageLayout, { Block } from '@/components/site/ProductPageLayout';
import DataTable from '@/components/site/DataTable';
import Steps from '@/components/site/Steps';
import FaqList from '@/components/site/FaqList';
import Related from '@/components/site/Related';
import JsonLd from '@/components/site/JsonLd';
import { photoExists, slotVisible } from '@/lib/images';
import { absoluteUrl, breadcrumbSchema, breadcrumbTrail, graph, organizationRef, organizationSchema } from '@/lib/schema';

interface ProductDetailViewProps {
  slug: ProductDetailSlug;
  locale: Locale;
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const PRODUCTS_LABEL: Record<Locale, string> = {
  en: 'Products',
  fr: 'Produits',
  ar: 'المنتجات',
  de: 'Produkte',
};

const CTA_LOCALIZED: Record<Locale, { title: string; text: string; button: string }> = {
  en: {
    title: 'Tell us what you need',
    text: 'Tell us your volume requirements, packaging preferences, and delivery destination for a custom quote within 24 hours.',
    button: 'Request a Quote',
  },
  fr: {
    title: 'Parlez-nous de votre projet',
    text: 'Indiquez-nous vos volumes souhaités, votre conditionnement et votre destination pour recevoir un devis sous 24h.',
    button: 'Demander un devis',
  },
  ar: {
    title: 'أخبرنا باحتياجاتك التجارية',
    text: 'شاركنا الكميات المطلوبة وخيارات التعبئة وبلد التوصيل، وسنوافيك بعرض أسعار مخصص وتنافسي خلال 24 ساعة.',
    button: 'طلب تسعيرة تجارية',
  },
  de: {
    title: 'Teilen Sie uns Ihren Bedarf mit',
    text: 'Nennen Sie uns Ihre Mengen, Verpackungswünsche und das Lieferziel für ein unverbindliches Angebot innerhalb von 24 Stunden.',
    button: 'Angebot anfordern',
  },
};

export default function ProductDetailView({ slug, locale }: ProductDetailViewProps) {
  const item = getProductDetail(slug, locale);
  if (!item) return null;

  const productsLabel = PRODUCTS_LABEL[locale] || 'Products';
  const canonicalPath = getLocalizedPath(`/products/${slug}`, locale);

  const trail = breadcrumbTrail(
    { name: productsLabel, path: getLocalizedPath('/products', locale) },
    { name: item.intro.breadcrumbCurrent, path: canonicalPath },
  );

  const contactPath = getLocalizedPath('/contact-us', locale);
  const cta = CTA_LOCALIZED[locale] || CTA_LOCALIZED.en;

  return (
    <main className="mop-page" id="main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <JsonLd
        data={graph(
          {
            '@type': 'Product',
            '@id': `${absoluteUrl(canonicalPath)}#product`,
            url: absoluteUrl(canonicalPath),
            name: item.intro.title,
            description: item.seo.description,
            category: 'Cosmetics & Personal Care',
            brand: { '@type': 'Brand', name: 'Moroccan Organic Products' },
            manufacturer: organizationRef,
            ...(photoExists(item.image.src) ? { image: absoluteUrl(item.image.src) } : {}),
          },
          organizationSchema(),
          breadcrumbSchema(trail),
        )}
      />

      <PageIntro
        breadcrumbs={trail}
        title={item.intro.title}
        lead={item.intro.lead}
        actions={
          <>
            <Button href={contactPath}>{item.intro.btnQuote}</Button>
            <Button href={contactPath} variant="secondary">
              {item.intro.btnSample}
            </Button>
          </>
        }
      />

      <ProductPageLayout
        media={
          slotVisible(item.image.src) ? (
            <PhotoSlot
              src={item.image.src}
              alt={item.image.alt}
              label={item.image.label}
              ratio="4:3"
              priority
              sizes="(max-width: 960px) 100vw, 760px"
            />
          ) : undefined
        }
        facts={item.facts}
      >
        <Block title={item.specs.title}>
          <DataTable
            caption={item.specs.caption}
            head={item.specs.head}
            rows={item.specs.rows}
          />
        </Block>

        <Block title={item.benefits.title}>
          {item.benefits.paragraphs.map((p, idx) => (
            <p key={idx} style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
              {p}
            </p>
          ))}
          {item.benefits.bullets && item.benefits.bullets.length > 0 && (
            <div style={{ marginTop: '1.25rem' }}>
              {item.benefits.bulletsTitle && (
                <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                  {item.benefits.bulletsTitle}
                </h4>
              )}
              <ul className="mop-list">
                {item.benefits.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          )}
        </Block>

        <Block title={item.usageGuide.title}>
          <p style={{ lineHeight: 1.7, marginBottom: item.usageGuide.steps ? '1.25rem' : 0 }}>
            {item.usageGuide.text}
          </p>
          {item.usageGuide.steps && (
            <Steps maxColumns={2} items={item.usageGuide.steps} />
          )}
        </Block>

        <Block title={item.howToOrder.title}>
          <Steps maxColumns={2} items={item.howToOrder.steps} />
        </Block>

        <Block title={item.faq.title}>
          <FaqList items={item.faq.items} />
          <Related>
            {item.faq.relatedText}{' '}
            {item.faq.relatedLinks.map((link, idx) => (
              <span key={idx}>
                {idx > 0 && ', '}
                <Link href={getLocalizedPath(link.href, locale)}>
                  {link.label}
                </Link>
              </span>
            ))}
          </Related>
        </Block>
      </ProductPageLayout>

      <section className="mop-cta">
        <div className="mop-container">
          <div className="mop-cta__grid">
            <div>
              <h2 className="mop-h2">{cta.title}</h2>
              <p>{cta.text}</p>
            </div>
            <div className="mop-cta__action">
              <Button href={contactPath} variant="cream">
                {cta.button}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
