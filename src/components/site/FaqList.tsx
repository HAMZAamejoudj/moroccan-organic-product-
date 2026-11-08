import Link from 'next/link';
import JsonLd from './JsonLd';

export interface FaqItem {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

interface FaqListProps {
  items: FaqItem[];
  /** Emit FAQPage JSON-LD that matches the visible text word for word. */
  schema?: boolean;
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.link ? `${item.answer} ${item.link.label}` : item.answer,
      },
    })),
  };
}

export default function FaqList({ items, schema = true }: FaqListProps) {
  if (items.length === 0) return null;
  return (
    <>
      <div className="mop-faq">
        {items.map((item) => (
          <details key={item.question} className="mop-faq__item">
            <summary>{item.question}</summary>
            <p>
              {item.answer}
              {item.link && (
                <>
                  {' '}
                  <Link href={item.link.href}>{item.link.label}</Link>
                </>
              )}
            </p>
          </details>
        ))}
      </div>
      {schema && <JsonLd data={faqJsonLd(items)} />}
    </>
  );
}
