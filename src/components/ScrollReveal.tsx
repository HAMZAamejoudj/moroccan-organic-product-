"use client";

import { useEffect } from 'react';

/**
 * Subtle fade-in on scroll. Content is fully visible without JavaScript:
 * only blocks that start below the fold are hidden here, and they are revealed once.
 * Does nothing when the visitor prefers reduced motion.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('main .mop-section > .mop-container, .mop-cta > .mop-container, .mop-related > .mop-container'),
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = 'shown';
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    targets.forEach((el) => {
      el.dataset.reveal = 'hidden';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
