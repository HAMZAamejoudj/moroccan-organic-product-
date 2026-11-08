import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Crumb } from '@/lib/schema';

interface PageIntroProps {
  title: string;
  lead?: ReactNode;
  actions?: ReactNode;
  /** Visible breadcrumb trail; the matching BreadcrumbList JSON-LD is added by the page. */
  breadcrumbs?: Crumb[];
  /** Optional photo slot shown beside the text on desktop. */
  media?: ReactNode;
}

/** Page header used on inner pages. */
export default function PageIntro({ title, lead, actions, breadcrumbs, media }: PageIntroProps) {
  const text = (
    <div className="mop-measure">
      {breadcrumbs && breadcrumbs.length > 1 && (
        <nav className="mop-breadcrumbs" aria-label="Breadcrumb">
          <ol>
            {breadcrumbs.map((crumb, index) => {
              const last = index === breadcrumbs.length - 1;
              return (
                <li key={crumb.path}>
                  {last ? (
                    <span aria-current="page">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.path}>{crumb.name}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
      <h1 className="mop-h1">{title}</h1>
      {lead && <p className="mop-lead">{lead}</p>}
      {actions && <div className="mop-actions">{actions}</div>}
    </div>
  );

  return (
    <header className="mop-intro">
      <div className="mop-container">
        {media ? (
          <div className="mop-intro__grid">
            {text}
            <div className="mop-intro__media">{media}</div>
          </div>
        ) : (
          text
        )}
      </div>
    </header>
  );
}
