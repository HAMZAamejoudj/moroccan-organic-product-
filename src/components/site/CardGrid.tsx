import Link from 'next/link';
import PhotoSlot from './PhotoSlot';
import { slotVisible } from '@/lib/images';

export interface CardData {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
  /** Photo slot (4:3). Shown only when the file exists (always in development). */
  slot?: { src: string; alt: string; label: string };
}

interface CardGridProps {
  cards: CardData[];
  /** Load the first photo right away (for grids at the top of the page). */
  priorityFirst?: boolean;
  /** Desktop column count (default 2). */
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ cards, priorityFirst = false, columns = 2 }: CardGridProps) {
  // Reserve the 4:3 media area only when at least one card has a visible photo, so rows stay aligned.
  const showMedia = cards.some((card) => card.slot && slotVisible(card.slot.src));
  let firstPhotoUsed = false;

  return (
    <div className={`mop-cards${columns > 2 ? ` mop-cards--${columns}` : ''}`}>
      {cards.map((card) => {
        const hasPhoto = Boolean(card.slot && slotVisible(card.slot.src));
        const priority = priorityFirst && hasPhoto && !firstPhotoUsed;
        if (priority) firstPhotoUsed = true;
        return (
          <article className="mop-card" key={card.title}>
            {showMedia && (
              <div className="mop-card__media">
                {hasPhoto && card.slot && (
                  <PhotoSlot
                    src={card.slot.src}
                    alt={card.slot.alt}
                    label={card.slot.label}
                    ratio="4:3"
                    priority={priority}
                    sizes="(max-width: 700px) 100vw, 540px"
                  />
                )}
              </div>
            )}
            <div className="mop-card__body">
              <h3 className="mop-h3">{card.title}</h3>
              <p>{card.text}</p>
              {card.href && card.linkLabel && (
                <Link className="mop-card__link" href={card.href}>
                  {card.linkLabel}
                </Link>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
