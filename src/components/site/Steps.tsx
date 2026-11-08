import PhotoSlot from './PhotoSlot';
import { slotVisible } from '@/lib/images';

export interface StepItem {
  title: string;
  text?: string;
  /** Small 1:1 photo above the step. Hidden in production while the file is missing. */
  photo?: { src: string; alt: string; label: string };
}

interface StepsProps {
  items: StepItem[];
  /** Most columns on desktop (default: one per step). */
  maxColumns?: number;
}

/** Numbered steps: large 01, 02, 03 in Fraunces. Horizontal on desktop, stacked on mobile. */
export default function Steps({ items, maxColumns }: StepsProps) {
  const columns = Math.min(items.length, maxColumns ?? items.length);
  return (
    <ol className="mop-steps-row" style={{ ['--mop-steps' as string]: columns }}>
      {items.map((item, index) => (
        <li className="mop-step" key={item.title}>
          {item.photo && slotVisible(item.photo.src) && (
            <div className="mop-step__photo">
              <PhotoSlot
                src={item.photo.src}
                alt={item.photo.alt}
                label={item.photo.label}
                ratio="1:1"
                sizes="(max-width: 899px) min(100vw, 420px), min(25vw, 320px)"
              />
            </div>
          )}
          <span className="mop-step__num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="mop-step__title">{item.title}</p>
          {item.text && <p className="mop-step__text">{item.text}</p>}
        </li>
      ))}
    </ol>
  );
}
