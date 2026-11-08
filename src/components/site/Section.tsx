import { Children, type ReactNode } from 'react';

interface SectionProps {
  title?: string;
  /** Custom heading block (replaces the title), for example a big number with an H2. */
  head?: ReactNode;
  id?: string;
  tone?: 'plain' | 'tint';
  /**
   * Editorial 12-column layout: heading in columns 1-4, content in columns 6-12.
   * Falls back to the stacked layout when there is no content beside the heading.
   */
  split?: boolean;
  /** Full-width content shown under the split row (steps, tables, photo grids). */
  below?: ReactNode;
  children?: ReactNode;
}

export default function Section({ title, head, id, tone = 'plain', split = false, below, children }: SectionProps) {
  const heading = head ?? (title ? <h2 className="mop-h2">{title}</h2> : null);
  const hasBody = Children.toArray(children).length > 0;
  const useSplit = split && Boolean(heading) && hasBody;

  return (
    <section className={`mop-section mop-section--${tone}`} id={id}>
      <div className="mop-container">
        {useSplit ? (
          <div className="mop-split12">
            <div className="mop-split12__head">{heading}</div>
            <div className="mop-split12__body">{children}</div>
          </div>
        ) : (
          <>
            {heading}
            {children}
          </>
        )}
        {below && <div className="mop-section__below">{below}</div>}
      </div>
    </section>
  );
}
