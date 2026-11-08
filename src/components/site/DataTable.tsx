import type { ReactNode } from 'react';

interface DataTableProps {
  head: string[];
  rows: ReactNode[][];
  caption?: string;
}

export default function DataTable({ head, rows, caption }: DataTableProps) {
  return (
    <div className="mop-table-wrap" tabIndex={0} role="region" aria-label={caption ?? 'Table'}>
      <table className="mop-table">
        {caption && <caption className="mop-sr-only">{caption}</caption>}
        <thead>
          <tr>
            {head.map((label) => (
              <th key={label} scope="col">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
