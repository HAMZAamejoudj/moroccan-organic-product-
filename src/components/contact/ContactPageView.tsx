import type { Locale } from '@/i18n';
import { getContactDictionary } from '@/i18n/contact';
import { businessFacts as facts } from '@/config/businessFacts';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/site/JsonLd';
import { absoluteUrl, breadcrumbSchema, breadcrumbTrail, graph, organizationRef, organizationSchema } from '@/lib/schema';
import { Phone, MapPin, MessageCircle, Clock, Mail } from '@/components/Icons';

interface ContactPageViewProps {
  locale: Locale;
}

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function ContactPageView({ locale }: ContactPageViewProps) {
  const dict = getContactDictionary(locale);
  const canonicalPath = getLocalizedPath('/contact-us', locale);

  const trail = breadcrumbTrail(
    { name: locale === 'ar' ? 'الرئيسية' : locale === 'fr' ? 'Accueil' : locale === 'de' ? 'Startseite' : 'Home', path: getLocalizedPath('/', locale) },
    { name: locale === 'ar' ? 'اتصل بنا' : locale === 'fr' ? 'Contact' : locale === 'de' ? 'Kontakt' : 'Contact Us', path: canonicalPath },
  );

  const phoneDisplay = facts.phone || '+212 641 517 831';
  const whatsappUrl = 'https://wa.me/212641517831';
  const telHref = 'tel:+212641517831';
  const email = facts.email;

  return (
    <main className="mop-page mop-contact-page" id="main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <JsonLd
        data={graph(
          {
            '@type': 'ContactPage',
            '@id': `${absoluteUrl(canonicalPath)}#webpage`,
            url: absoluteUrl(canonicalPath),
            name: dict.seo.title,
            description: dict.seo.description,
            about: organizationRef,
          },
          organizationSchema(),
          breadcrumbSchema(trail),
        )}
      />

      {/* Hero Header Section in Site Palette */}
      <section className="mop-contact-hero">
        <svg
          className="mop-contact-hero__decor"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="480" cy="220" r="160" stroke="#b8862b" strokeWidth="1.2" opacity="0.3" />
          <circle cx="480" cy="220" r="260" stroke="#b8862b" strokeWidth="1.2" opacity="0.2" />
          <circle cx="480" cy="220" r="360" stroke="#b8862b" strokeWidth="1.2" opacity="0.14" />
          <circle cx="480" cy="220" r="460" stroke="#b8862b" strokeWidth="1.2" opacity="0.08" />
          <path d="M120 520 C 260 380, 420 380, 560 520" stroke="#b8862b" strokeWidth="1.2" opacity="0.18" />
        </svg>

        <div className="mop-container">
          <div className="mop-contact-hero__grid">
            {/* Left Headline */}
            <div>
              <div className="mop-contact-hero__tag">
                <span className="mop-contact-hero__tag-line" aria-hidden="true" />
                {dict.hero.tag}
              </div>
              <h1 className="mop-contact-hero__title" style={{ whiteSpace: 'pre-line' }}>
                {dict.hero.title}
              </h1>
              <p className="mop-contact-hero__desc">{dict.hero.desc}</p>
            </div>

            {/* Right Side Highlights Card */}
            <div>
              <div className="mop-contact-hero__card">
                <ul>
                  {dict.hero.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <span className="mop-contact-hero__bullet" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dual Cards Section */}
      <section className="mop-contact-section">
        <div className="mop-container">
          <div className="mop-contact-layout">
            {/* Left Card: Direct Contact Channels */}
            <aside className="mop-card-white">
              <div className="mop-card-white__head">
                <h2 className="mop-card-white__title">{dict.directCard.title}</h2>
                <p className="mop-card-white__subtitle">{dict.directCard.subtitle}</p>
              </div>

              {/* Direct Details List */}
              <div className="mop-contact-info-list">
                {/* WhatsApp & Phone */}
                <div className="mop-contact-info-item">
                  <div className="mop-contact-info-icon" aria-hidden="true">
                    <Phone size={20} />
                  </div>
                  <div className="mop-contact-info-text">
                    <span className="mop-contact-info-label">{dict.directCard.phoneLabel}</span>
                    <a
                      className="mop-contact-info-value"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                {email && (
                  <div className="mop-contact-info-item">
                    <div className="mop-contact-info-icon" aria-hidden="true">
                      <Mail size={20} />
                    </div>
                    <div className="mop-contact-info-text">
                      <span className="mop-contact-info-label">{dict.directCard.emailLabel}</span>
                      <a className="mop-contact-info-value" href={`mailto:${email}`}>
                        {email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location */}
                <div className="mop-contact-info-item">
                  <div className="mop-contact-info-icon" aria-hidden="true">
                    <MapPin size={20} />
                  </div>
                  <div className="mop-contact-info-text">
                    <span className="mop-contact-info-label">{dict.directCard.locationLabel}</span>
                    <span className="mop-contact-info-value">{dict.directCard.locationValue}</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="mop-contact-info-item">
                  <div className="mop-contact-info-icon" aria-hidden="true">
                    <Clock size={20} />
                  </div>
                  <div className="mop-contact-info-text">
                    <span className="mop-contact-info-label">{dict.directCard.hoursLabel}</span>
                    <span className="mop-contact-info-value">{dict.directCard.hoursValue}</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mop-contact-actions">
                <a
                  className="mop-contact-action-btn mop-contact-action-btn--primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct message on WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span>{dict.directCard.btnWhatsApp}</span>
                </a>
                <a
                  className="mop-contact-action-btn mop-contact-action-btn--outline"
                  href={telHref}
                  aria-label="Call our office"
                >
                  <Phone size={18} />
                  <span>{dict.directCard.btnCall}</span>
                </a>
              </div>

              {/* Highlight Stat Chips */}
              <div className="mop-contact-chip">
                <span className="mop-contact-chip__label">{dict.directCard.chip1Label}</span>
                <span className="mop-contact-chip__value">{dict.directCard.chip1Value}</span>
              </div>

              <div className="mop-contact-chip">
                <span className="mop-contact-chip__label">{dict.directCard.chip2Label}</span>
                <span className="mop-contact-chip__value">{dict.directCard.chip2Value}</span>
              </div>
            </aside>

            {/* Right Card: Quote Form */}
            <div className="mop-card-white">
              <div className="mop-card-white__head">
                <h2 className="mop-card-white__title">{dict.formCard.title}</h2>
                <p className="mop-card-white__subtitle">{dict.formCard.subtitle}</p>
              </div>

              <ContactForm source="Contact Page" locale={locale} />
            </div>
          </div>

          {/* Footer tagline under cards */}
          <div className="mop-contact-footer-note">{dict.footerNote}</div>
        </div>
      </section>

      {facts.mapsEmbedUrl && (
        <iframe
          src={facts.mapsEmbedUrl}
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          title="Map of our location"
        />
      )}
    </main>
  );
}
