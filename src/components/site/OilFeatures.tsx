import Link from 'next/link';
import PhotoSlot from './PhotoSlot';
import { slotVisible } from '@/lib/images';

export interface FeatureData {
  title: string;
  text: string;
  href: string;
  linkLabel: string;
  slot: { src: string; alt: string; label: string };
}

/**
 * Split rows with a big Fraunces number. With a photo: photo on one side, text on the other,
 * alternating. Without a photo (production): a text-only row, so there is never an empty half.
 */
export default function OilFeatures({ items }: { items: FeatureData[] }) {
  return (
    <div className="mop-features">
      {items.map((item, index) => {
        const number = String(index + 1).padStart(2, '0');
        const hasPhoto = slotVisible(item.slot.src);

        if (!hasPhoto) {
          return (
            <article className="mop-feature mop-feature--text" key={item.title}>
              <div>
                <span className="mop-feature__num" aria-hidden="true">
                  {number}
                </span>
                <h3 className="mop-h3 mop-h3--lg">{item.title}</h3>
              </div>
              <div>
                <p>{item.text}</p>
                <Link className="mop-card__link" href={item.href}>
                  {item.linkLabel}
                </Link>
              </div>
            </article>
          );
        }

        return (
          <article className={`mop-feature${index % 2 === 1 ? ' mop-feature--reverse' : ''}`} key={item.title}>
            <div className="mop-feature__media">
              <PhotoSlot
                src={item.slot.src}
                alt={item.slot.alt}
                label={item.slot.label}
                ratio="4:3"
                sizes="(max-width: 900px) 100vw, 540px"
              />
            </div>
            <div className="mop-feature__body">
              <span className="mop-feature__num" aria-hidden="true">
                {number}
              </span>
              <h3 className="mop-h3 mop-h3--lg">{item.title}</h3>
              <p>{item.text}</p>
              <Link className="mop-card__link" href={item.href}>
                {item.linkLabel}
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
