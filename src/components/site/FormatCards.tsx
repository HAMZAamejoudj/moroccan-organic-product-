import type { BulkFormat } from '@/config/businessFacts';

/** One simple text card per container size: the size in Fraunces, its use underneath. */
export default function FormatCards({ formats }: { formats: BulkFormat[] }) {
  return (
    <ul className="mop-format-cards">
      {formats.map((format) => (
        <li className="mop-format-card" key={format.size}>
          <span className="mop-format-card__size">{format.size}</span>
          <span className="mop-format-card__use">{format.use}</span>
        </li>
      ))}
    </ul>
  );
}
