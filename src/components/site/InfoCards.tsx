import Link from 'next/link';

export interface BuyCardData {
  name: string;
  get: string;
  for: string;
  href: string;
  linkLabel: string;
}

/** Three equal cards. The middle one has the green border. */
export function BuyCards({ cards }: { cards: BuyCardData[] }) {
  return (
    <div className="mop-buy-cards">
      {cards.map((card, index) => (
        <article className={`mop-buy-card${index === 1 ? ' mop-buy-card--accent' : ''}`} key={card.name}>
          <h3 className="mop-buy-card__name">{card.name}</h3>
          <div>
            <p className="mop-buy-card__label">What you get</p>
            <p className="mop-buy-card__value">{card.get}</p>
          </div>
          <div>
            <p className="mop-buy-card__label">For</p>
            <p className="mop-buy-card__value">{card.for}</p>
          </div>
          <Link className="mop-card__link" href={card.href}>
            {card.linkLabel}
          </Link>
        </article>
      ))}
    </div>
  );
}

export interface ColumnItem {
  title: string;
  text: string;
}

/** Equal columns (3, or 4 when four items) with a thin top line. */
export function Columns({ items }: { items: ColumnItem[] }) {
  return (
    <div className="mop-cols" style={{ ['--mop-cols' as string]: Math.min(Math.max(items.length, 1), 4) }}>
      {items.map((item) => (
        <div className="mop-col" key={item.title}>
          <h3 className="mop-h3">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export interface LaunchCardData {
  name: string;
  text: string;
  tag: string;
}

/** Product cards in a 2x2 grid: large name, short text, a "From 50 pieces" tag. */
export function LaunchCards({ cards }: { cards: LaunchCardData[] }) {
  return (
    <div className="mop-launch">
      {cards.map((card) => (
        <article className="mop-launch-card" key={card.name}>
          <h3 className="mop-launch-card__name">{card.name}</h3>
          <p>{card.text}</p>
          <span className="mop-tag">{card.tag}</span>
        </article>
      ))}
    </div>
  );
}
