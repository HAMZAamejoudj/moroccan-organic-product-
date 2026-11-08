import type { ReactNode } from 'react';

/** The related-links line: it sits inside the last section of the page, never alone. */
export default function Related({ children }: { children: ReactNode }) {
  return <p className="mop-related">{children}</p>;
}
