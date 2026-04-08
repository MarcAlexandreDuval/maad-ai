import { PageHero } from "./PageHero";
import { SectionWrapper } from "./SectionWrapper";
import { GlassCard } from "./GlassCard";
import { CTABanner } from "./CTABanner";
import { JsonLd } from "../seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { ReactNode } from "react";

type Service = { href: string; label: string; number: string; desc: string };

type Props = {
  eyebrow: string;
  name: string;
  title: ReactNode;
  lede: ReactNode;
  problemTitle: ReactNode;
  problems: string[];
  services: Service[];
  ctaTitle: string;
  ctaText: string;
  path: string;
  schemaDescription: string;
};

export function IndustryTemplate({
  eyebrow,
  name,
  title,
  lede,
  problemTitle,
  problems,
  services,
  ctaTitle,
  ctaText,
  path,
  schemaDescription,
}: Props) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Solutions IA pour ${name}`,
          description: schemaDescription,
          path,
        })}
      />

      <PageHero
        eyebrow={eyebrow}
        breadcrumbs={[
          { name: "Industries", path: "/industries" },
          { name, path },
        ]}
        title={title}
        lede={lede}
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="label-mono mb-5">Le problème</div>
            <h2 className="text-display mb-6">{problemTitle}</h2>
          </div>
          <div className="flex flex-col gap-3">
            {problems.map((p, i) => (
              <div key={i} className="glass-flat p-5 flex items-start gap-4">
                <span className="label-mono text-emerald flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-muted">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">La solution</div>
          <h2 className="text-display max-w-3xl">
            Services recommandés pour{" "}
            <span className="text-italic-serif text-emerald">{name}</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <GlassCard key={s.href} href={s.href}>
              <div className="label-mono text-emerald mb-3">{s.number}</div>
              <h3 className="text-display text-2xl mb-3">{s.label}</h3>
              <p className="text-sm text-muted">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner title={ctaTitle} text={ctaText} />
    </>
  );
}
