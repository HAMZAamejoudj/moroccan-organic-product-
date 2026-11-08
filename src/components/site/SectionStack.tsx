import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import Section from './Section';

/**
 * Gives consecutive sections alternating backgrounds (#FBF8F3, #F3EDE3),
 * so hidden sections never break the rhythm.
 */
export default function SectionStack({
  children,
  start = 'plain',
}: {
  children: ReactNode;
  start?: 'plain' | 'tint';
}) {
  let index = start === 'tint' ? 1 : 0;
  const items = Children.toArray(children).map((child) => {
    if (isValidElement(child) && child.type === Section) {
      const tone = index % 2 === 0 ? 'plain' : 'tint';
      index += 1;
      return cloneElement(child as ReactElement<{ tone?: string }>, { tone });
    }
    return child;
  });
  return <>{items}</>;
}
