export interface SpecRow {
  label: string;
  value: string;
}

/** A product data sheet: used in the home hero while there is no photo. Confirmed facts only. */
export default function SpecSheet({ rows }: { rows: SpecRow[] }) {
  return (
    <div className="mop-sheet">
      <p className="mop-sheet__label">Product sheet</p>
      <dl className="mop-sheet__rows">
        {rows.map((row) => (
          <div className="mop-sheet__row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
