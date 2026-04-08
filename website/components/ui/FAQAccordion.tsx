import { ReactNode } from "react";

type Item = {
  q: string;
  a: ReactNode;
};

export function FAQAccordion({ items }: { items: Item[] }) {
  return (
    <div className="max-w-4xl">
      {items.map((it, i) => (
        <details key={i} className="faq-item">
          <summary>{it.q}</summary>
          <div>{it.a}</div>
        </details>
      ))}
    </div>
  );
}
