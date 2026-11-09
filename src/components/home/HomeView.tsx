import Link from 'next/link';
import type { Locale } from '@/i18n';
import { getHomeDictionary, getLocaleInfo } from '@/i18n';
import { businessFacts as facts, whatsappHref } from '@/config/businessFacts';
import Button from '@/components/site/Button';
import Section from '@/components/site/Section';
import SectionStack from '@/components/site/SectionStack';
import { BuyCards } from '@/components/site/InfoCards';
import PhotoSlot from '@/components/site/PhotoSlot';
import SpecSheet from '@/components/site/SpecSheet';
import Steps from '@/components/site/Steps';
import FaqList, { type FaqItem } from '@/components/site/FaqList';
import CtaBand from '@/components/site/CtaBand';
import Related from '@/components/site/Related';
import JsonLd from '@/components/site/JsonLd';
import QuoteForm from '@/components/QuoteForm';
import CardGrid, { type CardData } from '@/components/site/CardGrid';
import { Gem, Globe, Tag } from '@/components/Icons';
import { slotVisible } from '@/lib/images';
import { graph, organizationSchema, webSiteSchema } from '@/lib/schema';

interface HomeViewProps {
  locale: Locale;
}

const HERO_PHOTO = '/images/hero-argan-oil.jpg';
const PRIVATE_LABEL_PHOTO = '/images/home-private-label.jpg';

export default function HomeView({ locale }: HomeViewProps) {
  const dict = getHomeDictionary(locale);
  const locInfo = getLocaleInfo(locale);
  const waDigits = facts.whatsapp ? facts.whatsapp.replace(/\D/g, '') : '212641517831';
  const waMessage = encodeURIComponent(
    locale === 'ar'
      ? 'السلام عليكم، أود الاستفسار عن منتجاتكم المغربية الطبيعية.'
      : locale === 'fr'
      ? 'Bonjour, je souhaite me renseigner sur vos produits bio marocains.'
      : locale === 'de'
      ? 'Hallo, ich interessiere mich für Ihre marokkanischen Bio-Produkte.'
      : 'Hello, I would like to inquire about your Moroccan organic products.'
  );
  const whatsapp = `https://wa.me/${waDigits}?text=${waMessage}`;
  const showHeroPhoto = slotVisible(HERO_PHOTO);
  const showPrivateLabelPhoto = slotVisible(PRIVATE_LABEL_PHOTO);

  const bestsellers: CardData[] = dict.bestsellers.items.map((item) => ({
    title: item.title,
    text: item.text,
    href: item.href,
    linkLabel: item.linkLabel,
    slot: {
      src: item.imageSrc,
      alt: item.imageAlt,
      label: item.imageLabel,
    },
  }));

  const steps = dict.steps.items.map((item) => ({
    title: item.title,
    text: item.text,
    photo: {
      src: item.imageSrc,
      alt: item.imageAlt,
      label: item.imageLabel,
    },
  }));

  const faqItems: FaqItem[] = dict.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <main className="mop-page" id="main" lang={locale} dir={locInfo.dir}>
      <JsonLd data={graph(organizationSchema(), webSiteSchema())} />

      {/* Hero Section */}
      <section className="mop-hero">
        <div className="mop-container">
          <div className="mop-hero__grid">
            <div>
              <p className="mop-eyebrow">{dict.hero.eyebrow}</p>
              <h1 className="mop-h1">{dict.hero.title}</h1>
              <p className="mop-lead">{dict.hero.lead}</p>
              <div className="mop-actions">
                <Button href="/products">{dict.hero.btnProducts}</Button>
                <Button href="/contact-us" variant="secondary">
                  {dict.hero.btnPricing}
                </Button>
                {whatsapp && (
                  <Button href={whatsapp} variant="secondary" external>
                    {dict.hero.btnWhatsapp}
                  </Button>
                )}
              </div>
            </div>
            <div className="mop-hero__media">
              {showHeroPhoto ? (
                <PhotoSlot
                  src={HERO_PHOTO}
                  alt={dict.hero.title}
                  label={dict.hero.specRows[0]?.label || 'Argan oil'}
                  ratio="4:5"
                  priority
                  sizes="(max-width: 900px) 100vw, 520px"
                />
              ) : (
                <SpecSheet rows={dict.hero.specRows} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="mop-trust">
        <div className="mop-container">
          <ul className="mop-trust__list" style={{ ['--mop-trust-count' as string]: dict.trust.length }}>
            {dict.trust.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>

      <SectionStack start="tint">
        {/* Brand Split Feature Section */}
        <Section>
          <div className="mop-brand-split">
            <div className="mop-brand-split__media">
              <PhotoSlot
                src="/images/workshop-filling.jpg"
                alt="Moroccan argan oil production workshop in Marrakech"
                label="Workshop"
                ratio="3:4"
                sizes="(max-width: 959px) 100vw, 480px"
              />
            </div>
            <div className="mop-brand-split__copy">
              <p className="mop-eyebrow">{dict.brandSplit.eyebrow}</p>
              <h2 className="mop-h2">{dict.brandSplit.title}</h2>
              <p className="mop-lead">{dict.brandSplit.lead}</p>
              <ul className="mop-feature-rows">
                <li className="mop-feature-row">
                  <span className="mop-feature-row__icon" aria-hidden="true">
                    <Gem strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="mop-h3">{dict.brandSplit.features[0].title}</h3>
                    <p>{dict.brandSplit.features[0].desc}</p>
                  </div>
                </li>
                <li className="mop-feature-row">
                  <span className="mop-feature-row__icon" aria-hidden="true">
                    <Tag strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="mop-h3">{dict.brandSplit.features[1].title}</h3>
                    <p>{dict.brandSplit.features[1].desc}</p>
                  </div>
                </li>
                <li className="mop-feature-row">
                  <span className="mop-feature-row__icon" aria-hidden="true">
                    <Globe strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="mop-h3">{dict.brandSplit.features[2].title}</h3>
                    <p>{dict.brandSplit.features[2].desc}</p>
                  </div>
                </li>
              </ul>
              <p className="mop-badge">{dict.brandSplit.badge}</p>
            </div>
          </div>
        </Section>

        {/* Bestsellers Section */}
        <Section title={dict.bestsellers.title}>
          <CardGrid cards={bestsellers} columns={4} priorityFirst />
          <div className="mop-actions">
            <Button href="/products" variant="secondary">
              {dict.bestsellers.btnViewAll}
            </Button>
          </div>
        </Section>

        {/* From Kernel to Bottle (Steps) */}
        <Section title={dict.steps.title}>
          <Steps items={steps} />
        </Section>

        {/* Three Ways to Buy */}
        <Section title={dict.waysToBuy.title}>
          <BuyCards cards={dict.waysToBuy.items} />
        </Section>
      </SectionStack>

      {/* Private Label Highlight Band */}
      <section className="mop-section mop-section--tint">
        <div className="mop-container">
          <div className="mop-band">
            {showPrivateLabelPhoto ? (
              <PhotoSlot
                src={PRIVATE_LABEL_PHOTO}
                alt={dict.privateLabelBand.title}
                label="Private label"
                ratio="4:3"
                sizes="(max-width: 900px) 100vw, 560px"
              />
            ) : (
              <p className="mop-bigstat mop-bigstat--solo">
                <span className="mop-bigstat__num">{dict.privateLabelBand.badgeNum}</span>
                <span className="mop-bigstat__label">{dict.privateLabelBand.badgeLabel}</span>
              </p>
            )}
            <div>
              {showPrivateLabelPhoto && (
                <p className="mop-bigstat">
                  <span className="mop-bigstat__num">{dict.privateLabelBand.badgeNum}</span>
                  <span className="mop-bigstat__label">{dict.privateLabelBand.badgeLabel}</span>
                </p>
              )}
              <h2 className="mop-h2">{dict.privateLabelBand.title}</h2>
              <p>
                {dict.privateLabelBand.description}{' '}
                <Link href={dict.privateLabelBand.href}>{dict.privateLabelBand.linkLabel}</Link>
              </p>
              <div className="mop-actions">
                <Button href={dict.privateLabelBand.href}>{dict.privateLabelBand.btnLearnMore}</Button>
                <Button href="/contact-us" variant="secondary">
                  {dict.privateLabelBand.btnInquiry}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionStack>
        {/* Bulk Supplier Section */}
        <Section title={dict.bulkSupplier.title} split>
          <div>
            <p>{dict.bulkSupplier.lead}</p>
            <ul className="mop-list">
              {dict.bulkSupplier.bullets.map((bullet, idx) => (
                <li key={idx}>
                  <strong>{bullet.split('—')[0]}</strong>
                  {bullet.includes('—') ? ` — ${bullet.split('—')[1]}` : ''}
                </li>
              ))}
            </ul>
            <div className="mop-actions">
              <Button href="/wholesale">{dict.bulkSupplier.btnWholesale}</Button>
              <Button href="/contact-us" variant="secondary">
                {dict.bulkSupplier.btnQuote}
              </Button>
            </div>
          </div>
          <p>{dict.bulkSupplier.shippingText}</p>
        </Section>

        {/* Fast Quote Form */}
        <Section title={dict.quoteForm.title} split>
          <p>{dict.quoteForm.description}</p>
          <QuoteForm source={`Home page (${locale.toUpperCase()})`} interests={dict.quoteForm.interests} variant="short" />
        </Section>

        {/* FAQ Section */}
        <Section title={dict.faq.title} split>
          <FaqList items={faqItems} />
          <Related>
            {dict.faq.relatedText.intro}{' '}
            <Link href={dict.faq.relatedText.aboutUsHref}>{dict.faq.relatedText.aboutUs}</Link>
            {', '}
            <Link href={dict.faq.relatedText.wholesaleHref}>{dict.faq.relatedText.wholesale}</Link>
            {' '}&{' '}
            <Link href={dict.faq.relatedText.faqHref}>{dict.faq.relatedText.faq}</Link>.
          </Related>
        </Section>
      </SectionStack>

      {/* CTA Footer Band */}
      <CtaBand sentence={dict.ctaBand} />
    </main>
  );
}
