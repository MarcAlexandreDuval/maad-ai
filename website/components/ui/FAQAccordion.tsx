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
          <summary>
            <h3 className="faq-question">{it.q}</h3>
          </summary>
          <div>
            <p>{it.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
