"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/** Sticky "Request a Quote" bar for phones. Hidden on the contact page and on larger screens. */
export default function MobileCta() {
  const pathname = usePathname();
  if (pathname === '/contact-us') return null;

  return (
    <>
      <div className="mop-mobilebar">
        <Link className="mop-btn mop-btn--primary" href="/contact-us">
          Request a Quote
        </Link>
      </div>
      <div className="mop-mobilebar-spacer" aria-hidden="true" />
    </>
  );
}
