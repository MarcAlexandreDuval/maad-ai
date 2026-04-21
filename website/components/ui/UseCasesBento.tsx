"use client";

import { Reveal } from "./Reveal";

type Item = {
  label: string;
  title: string;
  desc: string;
  metric?: string;
  features?: string[];
};

/**
 * Asymmetric bento grid for "use cases" style sections.
 * Works best with 3 or 4 items. Creates visual rhythm via
 * col-span variations instead of a flat 2×2 grid.
 */
export function UseCasesBento({ items }: { items: Item[] }) {
  // 4-item diagonal bento: big/small, small/big
  // 3-item layout: big on left, 2 stacked on right
  const layout4 = ["bento-item--lg", "bento-item--sm", "bento-item--sm", "bento-item--lg"];
  const layout3 = ["bento-item--tall", "bento-item--sm", "bento-item--sm"];

  const spans = items.length === 3 ? layout3 : layout4;

  return (
    <div className={`bento-grid ${items.length === 3 ? "bento-grid--3" : "bento-grid--4"}`}>
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          variant="fade-up"
          delay={i * 120}
          className={`bento-item ${spans[i] || "bento-item--sm"}`}
        >
          <article className="bento-card">
            <span className="bento-index" aria-hidden>
              0{i + 1}
            </span>
            <div className="bento-card__inner">
              <div className="bento-label">{item.label}</div>
              <h3 className="bento-title">{item.title}</h3>
              <p className="bento-desc">{item.desc}</p>
              {item.features && item.features.length > 0 && (
                <ul className="bento-features">
                  {item.features.map((f) => (
                    <li key={f} className="bento-features__item">
                      <span className="bento-features__check" aria-hidden>
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.metric && (
                <div className="bento-metric">
                  <span className="bento-metric__value">{item.metric}</span>
                </div>
              )}
            </div>
            <div className="bento-halo" aria-hidden />
          </article>
        </Reveal>
      ))}
    </div>
  );
}
