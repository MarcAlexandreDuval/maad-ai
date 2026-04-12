"use client";

import { PageHero } from "./PageHero";
import { SectionWrapper } from "./SectionWrapper";
import { GlassCard } from "./GlassCard";
import { CTABanner } from "./CTABanner";
import { Reveal } from "./Reveal";
import { JsonLd } from "../seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { ReactNode } from "react";

type Service = { href: string; label: string; number: string; desc: string };
type Stat = { value: string; label: string };
type Challenge = { title: string; desc: string };
type Step = { number: string; title: string; desc: string };

type Props = {
  eyebrow: string;
  name: string;
  title: ReactNode;
  lede: ReactNode;
  stats: Stat[];
  problemTitle: ReactNode;
  problems: string[];
  challenges: Challenge[];
  challengeIntro: string;
  services: Service[];
  steps: Step[];
  stepsTitle: ReactNode;
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
  stats,
  problemTitle,
  problems,
  challenges,
  challengeIntro,
  services,
  steps,
  stepsTitle,
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

      {/* ============ STATS ============ */}
      <section className="container-rail py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="fade-up" delay={i * 120}>
              <div className="glass-flat p-6 md:p-8 text-center">
                <div className="text-display text-3xl md:text-4xl text-emerald mb-2">
                  {s.value}
                </div>
                <div className="text-muted text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PROBLEMS ============ */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Reveal variant="fade-up">
              <div className="label-mono mb-5">Le problème</div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h2 className="text-display mb-6">{problemTitle}</h2>
            </Reveal>
          </div>
          <div className="flex flex-col gap-3">
            {problems.map((p, i) => (
              <Reveal key={i} variant="fade-up" delay={i * 100}>
                <div className="glass-flat p-5 flex items-start gap-4">
                  <span className="label-mono text-emerald flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-muted">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ============ CHALLENGES / ENJEUX ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Vos enjeux</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-6">
            Ce qui bloque la croissance en{" "}
            <span className="text-italic-serif text-emerald">{name}</span>.
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={180}>
          <p className="text-muted max-w-2xl mb-14">{challengeIntro}</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {challenges.map((c, i) => (
            <Reveal key={c.title} variant="fade-up" delay={i * 150}>
              <div className="glass p-7 md:p-8 h-full">
                <h3 className="text-display text-xl mb-3">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ============ SERVICES ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">La solution</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-14">
            Services recommandés pour{" "}
            <span className="text-italic-serif text-emerald">{name}</span>.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.href} variant="fade-up" delay={i * 150}>
              <GlassCard href={s.href} className="h-full">
                <div className="label-mono text-emerald mb-3">{s.number}</div>
                <h3 className="text-display text-2xl mb-3">{s.label}</h3>
                <p className="text-sm text-muted">{s.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ============ PROCESS / APPROCHE ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Notre approche</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-14">{stepsTitle}</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.number} variant="fade-up" delay={i * 150}>
              <div className="glass-flat p-7 md:p-8 h-full">
                <div className="text-display text-5xl text-emerald/20 mb-4">
                  {s.number}
                </div>
                <h3 className="text-display text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <Reveal variant="fade-up">
        <CTABanner title={ctaTitle} text={ctaText} />
      </Reveal>
    </>
  );
}
