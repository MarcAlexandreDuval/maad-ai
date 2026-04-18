import { ReactNode } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { GlassCard } from "./GlassCard";

export function TwoColSection({
  eyebrow,
  title,
  body,
  right,
}: {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  right: ReactNode;
}) {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="label-mono mb-5">{eyebrow}</div>
          <h2 className="text-display mb-6">{title}</h2>
          <div className="text-muted leading-relaxed space-y-4">{body}</div>
        </div>
        <div>{right}</div>
      </div>
    </SectionWrapper>
  );
}

export function NumberedList({
  items,
}: {
  items: { n: string; t: string; d: string }[];
}) {
  // Pick bento variant based on item count
  const variant =
    items.length === 6
      ? "bento-grid--6"
      : items.length === 4
        ? "bento-grid--4"
        : items.length === 3
          ? "bento-grid--3"
          : "bento-grid--6";

  return (
    <div className={`bento-grid ${variant}`}>
      {items.map((item) => (
        <div key={item.n} className="bento-item">
          <article className="bento-card">
            <span className="bento-index" aria-hidden>
              {item.n}
            </span>
            <div className="bento-card__inner">
              <h3 className="bento-title">{item.t}</h3>
              <p className="bento-desc">{item.d}</p>
            </div>
            <div className="bento-halo" aria-hidden />
          </article>
        </div>
      ))}
    </div>
  );
}

export function ComparisonTable({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}) {
  return (
    <GlassCard>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
        <div className="p-2 md:pr-10">
          <div className="label-mono text-bone-muted mb-5">{leftTitle}</div>
          <ul className="space-y-4 text-muted">
            {leftItems.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="text-bone-muted/50">—</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-2 md:pl-10 pt-10 md:pt-2">
          <div className="label-mono text-emerald mb-5">{rightTitle}</div>
          <ul className="space-y-4 text-bone">
            {rightItems.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="text-emerald">→</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlassCard>
  );
}

export function RelatedServices({
  items,
}: {
  items: { href: string; label: string; number: string; desc: string }[];
}) {
  return (
    <SectionWrapper tight>
      <div className="label-mono mb-6">Continue d&apos;explorer</div>
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it) => (
          <GlassCard key={it.href} href={it.href}>
            <div className="label-mono text-emerald mb-2">{it.number}</div>
            <h3 className="text-display text-xl mb-2">{it.label}</h3>
            <p className="text-sm text-muted">{it.desc}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
