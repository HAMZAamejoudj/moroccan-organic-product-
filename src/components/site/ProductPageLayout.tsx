import type { ReactNode } from 'react';
import Button from './Button';

export interface Fact {
  label: string;
  value: string | null;
}

interface ProductPageLayoutProps {
  /** Photo slot. Leave empty when there is no photo: the page then starts with the facts box. */
  media?: ReactNode;
  facts: Fact[];
  children: ReactNode;
}

/** Key facts box on the right (sticky on desktop), photo and content on the left. Confirmed facts only. */
export default function ProductPageLayout({ media, facts, children }: ProductPageLayoutProps) {
  const rows = facts.filter((fact): fact is { label: string; value: string } => Boolean(fact.value));
  return (
    <section className="mop-product">
      <div className="mop-container">
        <div className={`mop-product__grid${media ? '' : ' mop-product__grid--no-media'}`}>
          {media && <div className="mop-product__media">{media}</div>}
          <aside className="mop-product__facts" aria-label="Key facts">
            <h2 className="mop-h3">Key facts</h2>
            <dl>
              {rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <Button href="/contact-us">Request a Quote</Button>
          </aside>
          <div className="mop-product__body">{children}</div>
        </div>
      </div>
    </section>
  );
}

/** A titled block of the product page body. */
export function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mop-block">
      <h2 className="mop-h2">{title}</h2>
      {children}
    </section>
  );
}
