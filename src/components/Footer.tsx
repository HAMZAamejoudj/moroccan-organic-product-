import Link from 'next/link';
import { businessFacts, formatAddress, phoneHref } from '@/config/businessFacts';

const socialLinks = [
  { label: 'Facebook', href: businessFacts.social.facebook },
  { label: 'Instagram', href: businessFacts.social.instagram },
  { label: 'LinkedIn', href: businessFacts.social.linkedin },
  { label: 'YouTube', href: businessFacts.social.youtube },
  { label: 'TikTok', href: businessFacts.social.tiktok },
].filter((item): item is { label: string; href: string } => Boolean(item.href));

const productLinks = [
  { href: '/products', label: 'All products' },
  { href: '/products/argan-oil-bulk', label: 'Bulk Argan Oil' },
  { href: '/products/prickly-pear-seed-oil-bulk', label: 'Prickly Pear Seed Oil' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/private-label-moroccan-beauty-products', label: 'Private Label' },
];

const companyLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Footer() {
  const { email, phone, address, openingHours } = businessFacts;
  const tel = phoneHref(phone);
  const addressLine = formatAddress(address);

  return (
    <footer className="mop-footer">
      <div className="mop-container">
        <div className="mop-footer__grid">
          <div>
            <p className="mop-footer__title">Moroccan Organic Products</p>
            <p>
              Argan oil and prickly pear seed oil manufacturer in Morocco. Bulk oils, and private label face oils,
              hair serums and beard oils from 50 pieces.
            </p>
          </div>

          <nav aria-label="Products">
            <p className="mop-footer__title">Products</p>
            <ul>
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="mop-footer__title">Company</p>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mop-footer__title">Contact</p>
            <ul>
              {email && (
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              )}
              {phone && tel && (
                <li>
                  <a href={`tel:${tel}`}>{phone}</a>
                </li>
              )}
              {addressLine && <li>{addressLine}</li>}
              {openingHours && <li>{openingHours}</li>}
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
              {!email && !phone && !addressLine && socialLinks.length === 0 && (
                <li>
                  <Link href="/contact-us">Request a quote</Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="mop-footer__legal">
          &copy; {new Date().getFullYear()} Moroccan Organic Products. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
