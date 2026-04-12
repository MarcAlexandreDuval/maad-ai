import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "À propos — MAAD-AI, agence IA au Québec",
  description:
    "MAAD-AI est une agence d'intelligence artificielle au Québec. Fondée par Marc-Alexandre Duval pour rendre l'IA, l'AEO et le GEO accessibles aux PME québécoises.",
  path: "/a-propos",
});

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.founder,
  jobTitle: "Fondateur",
  worksFor: { "@type": "Organization", name: SITE.name, url: SITE.url },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.province,
    addressCountry: "CA",
  },
  description:
    "Marc-Alexandre Duval est le fondateur de MAAD-AI, une agence d'intelligence artificielle au Québec, spécialisée en agents IA, automatisation, AEO et GEO pour les PME.",
};

const orgAboutSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  foundingDate: "2024",
  founder: { "@type": "Person", name: SITE.founder },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.province,
      addressCountry: "CA",
    },
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: `${SITE.province}, ${SITE.country}`,
  },
  email: SITE.email,
};

/* ------------------------------------------------------------------ */

const PILLARS: {
  icon: React.ReactNode;
  title: string;
  text: string;
}[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Transparent",
    text: "Tu parles directement au fondateur. Pas de chargé de compte, pas de comités, pas de relances. Réponse en 24 h.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14.5" y1="4" x2="9.5" y2="20" />
      </svg>
    ),
    title: "Technique",
    text: "On code. Agents IA, automatisations n8n, schema JSON-LD, chatbots sur mesure. Pas de slides, du concret.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Mesurable",
    text: "Chaque livrable est mesuré. Position Google, citations IA, heures récupérées. Si ça performe pas, on ajuste.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Bilingue",
    text: "Français et anglais. On travaille avec des PME du Québec et des clients partout dans le monde.",
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "Fondation",
    text: "Marc-Alexandre Duval lance MAAD-AI au Québec. Premiers projets en automatisation IA et SEO pour des PME québécoises.",
  },
  {
    year: "2025",
    title: "Spécialisation AEO & GEO",
    text: "MAAD-AI devient une des premières agences au Québec à offrir l'optimisation pour les moteurs de réponse — ChatGPT, Perplexity, Claude.",
  },
  {
    year: "2025",
    title: "Agents IA & chatbots",
    text: "Développement d'agents autonomes sur mesure avec CrewAI et LLMs. Lancement du service chatbot IA pour PME.",
  },
  {
    year: "2026",
    title: "Croissance et expansion",
    text: "Clients partout au Québec et au-delà. Nouveaux services de conception web optimisée IA et pack complet IA + Visibilité.",
  },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd data={orgAboutSchema} />
      <JsonLd data={founderSchema} />

      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="À propos"
        breadcrumbs={[{ name: "À propos", path: "/a-propos" }]}
        title={
          <>
            L&apos;IA, accessible{" "}
            <em className="text-italic-serif text-emerald">aux PME</em> du
            Québec.
          </>
        }
        lede={
          <>
            MAAD-AI a été fondée par Marc-Alexandre Duval au Québec. Une
            agence qui construit des agents IA, automatise des processus et
            positionne les PME québécoises sur Google, ChatGPT et Perplexity.
          </>
        }
      />

      <SectionDivider />

      {/* ============ 4 ENGAGEMENTS ============ */}
      <SectionWrapper>
        <section aria-labelledby="pillars-heading">
          <Reveal variant="fade-up">
            <div className="label-mono mb-6">01 — Ce qui nous définit</div>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <h2 id="pillars-heading" className="text-display max-w-2xl mb-14">
              Quatre engagements.{" "}
              <em className="text-italic-serif text-emerald">Zéro</em>{" "}
              compromis.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} variant="fade-up" delay={i * 120}>
                <GlassCard className="h-full">
                  <div className="about-pillar-icon">{p.icon}</div>
                  <h3 className="text-display text-xl mb-3">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ CHIFFRES — bande horizontale ============ */}
      <Reveal variant="fade-in">
        <section className="about-stats-strip" aria-label="Chiffres clés">
          <div className="container-rail">
            <div className="about-stats-strip__inner">
              {[
                { num: "24h", label: "Temps de réponse max" },
                { num: "2 sem", label: "Premier livrable" },
                { num: "FR/EN", label: "Bilingue" },
                { num: "100%", label: "À distance" },
              ].map((s) => (
                <div key={s.label} className="about-stats-strip__item">
                  <span className="about-stats-strip__num">{s.num}</span>
                  <span className="about-stats-strip__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <SectionDivider />

      {/* ============ L'HISTOIRE ============ */}
      <SectionWrapper>
        <section aria-labelledby="story-heading">
          <div className="max-w-3xl">
            <Reveal variant="fade-up">
              <div className="label-mono text-emerald mb-6">
                02 — Pourquoi maintenant
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h2
                id="story-heading"
                className="text-display text-3xl md:text-4xl mb-8"
              >
                Le jeu a{" "}
                <em className="text-italic-serif text-emerald">changé</em>.
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <div className="about-prose">
                <p>
                  En 2026, 40 % des recherches sur Google affichent un AI
                  Overview avant même le premier résultat classique. ChatGPT,
                  Claude, Perplexity et Gemini sont devenus des moteurs de
                  réponse utilisés chaque jour par des millions de Québécois.
                  Pour une PME, la règle du jeu a changé : être visible ne
                  suffit plus. Il faut être{" "}
                  <Link
                    href="/services/aeo"
                    className="text-italic-serif text-emerald hover:underline"
                  >
                    cité
                  </Link>
                  .
                </p>
                <p>
                  MAAD-AI est née de ce constat. Les grandes entreprises ont déjà
                  leurs équipes IA, leurs consultants, leurs budgets. Les PME,
                  elles, regardent la vague arriver sans savoir par où commencer.
                  On construit pour elles — concrètement, rapidement, sans
                  jargon.
                </p>
                <p>
                  On ne vend pas de promesses. On livre des systèmes qui
                  fonctionnent : un agent IA qui qualifie tes leads pendant que
                  tu dors, un workflow d&apos;automatisation qui récupère dix
                  heures par semaine, une stratégie AEO qui place ton contenu
                  dans les réponses de ChatGPT.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ LE FONDATEUR ============ */}
      <SectionWrapper>
        <section aria-labelledby="founder-heading">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
            {/* Photo placeholder */}
            <Reveal variant="fade-up">
              <div className="about-founder-visual">
                <div className="about-founder-visual__frame">
                  <div className="about-founder-visual__initials">MAD</div>
                </div>
                <div className="label-mono text-center mt-4 text-emerald">
                  {SITE.founder}
                </div>
                <div className="label-mono text-center mt-1 opacity-50">
                  Fondateur, MAAD-AI
                </div>
              </div>
            </Reveal>

            {/* Bio */}
            <div>
              <Reveal variant="fade-up">
                <div className="label-mono text-emerald mb-6">
                  03 — Le fondateur
                </div>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2
                  id="founder-heading"
                  className="text-display text-3xl md:text-4xl mb-8"
                >
                  Marc-Alexandre{" "}
                  <em className="text-italic-serif text-emerald">Duval</em>
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={200}>
                <div className="about-prose">
                  <p>
                    Autodidacte, développeur, basé au Québec.
                    J&apos;ai construit MAAD-AI parce que je voyais trop
                    d&apos;entreprises québécoises payer cher pour du marketing
                    qui ne convertit pas, et trop de dirigeants passer leurs
                    soirées sur des tâches qu&apos;une IA pourrait exécuter en
                    trois minutes.
                  </p>
                  <p>
                    Mon approche : parler français, vulgariser sans simplifier à
                    outrance, livrer des pilotes en deux semaines plutôt que des
                    promesses en six mois. Je travaille directement avec les
                    fondateurs et les équipes — pas d&apos;intermédiaires, pas
                    de comités.
                  </p>
                  <p>
                    Quand tu contactes MAAD-AI, c&apos;est moi qui va lire ton
                    message.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ LA MISSION ============ */}
      <SectionWrapper>
        <section aria-labelledby="mission-heading">
          <div className="max-w-3xl">
            <Reveal variant="fade-up">
              <div className="label-mono text-emerald mb-6">
                04 — La mission
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h2
                id="mission-heading"
                className="text-display text-3xl md:text-4xl mb-8"
              >
                Vu. Choisi.{" "}
                <em className="text-italic-serif text-emerald">Recommandé</em>.
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <div className="about-prose">
                <p>
                  Ces trois mots résument tout ce qu&apos;on fait. Être{" "}
                  <strong>vu</strong> (SEO, SEO local). Être{" "}
                  <strong>choisi</strong> (conception web, chatbot, conversion).
                  Être <strong>recommandé</strong> (AEO, GEO, citation par les
                  IA). Chaque service qu&apos;on offre alimente une de ces trois
                  étapes — et on refuse tout ce qui ne rentre pas dans ce cadre.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={300}>
              <div className="about-mission-flow">
                {[
                  {
                    word: "Vu",
                    services: "SEO, SEO Local, Conception Web",
                    href: "/services/visibilite-web",
                  },
                  {
                    word: "Choisi",
                    services: "Chatbot IA, Agents IA, Automatisation",
                    href: "/services/intelligence-artificielle",
                  },
                  {
                    word: "Recommandé",
                    services: "AEO, GEO, Schema JSON-LD",
                    href: "/services/aeo",
                  },
                ].map((m, i) => (
                  <React.Fragment key={m.word}>
                    {i > 0 && (
                      <span className="about-mission-flow__arrow" aria-hidden>
                        →
                      </span>
                    )}
                    <Link
                      href={m.href}
                      className="about-mission-flow__step"
                    >
                      <span className="about-mission-flow__word">
                        {m.word}
                      </span>
                      <span className="about-mission-flow__services">
                        {m.services}
                      </span>
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ TIMELINE ============ */}
      <SectionWrapper>
        <section aria-labelledby="timeline-heading">
          <Reveal variant="fade-up">
            <div className="label-mono mb-6">05 — Notre histoire</div>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <h2
              id="timeline-heading"
              className="text-display text-3xl md:text-4xl mb-14"
            >
              Du Québec{" "}
              <em className="text-italic-serif text-emerald">au monde</em>.
            </h2>
          </Reveal>

          <div className="about-timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={i} variant="fade-up" delay={i * 150}>
                <div className="about-timeline__item">
                  <div className="about-timeline__dot" />
                  <div className="about-timeline__year">{t.year}</div>
                  <h3 className="about-timeline__title">{t.title}</h3>
                  <p className="about-timeline__text">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ CTA FINAL ============ */}
      <section className="relative overflow-hidden">
        <div className="container-rail py-24 md:py-32 relative">
          <Reveal variant="fade-in" duration={1400}>
            <div className="absolute inset-x-[10%] top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald to-transparent opacity-40" />
          </Reveal>
          <Reveal variant="scale-in" duration={1100}>
            <div className="cta-final">
              <div className="cta-final__halo cta-final__halo--tr" />
              <div className="cta-final__halo cta-final__halo--bl" />
              <div className="cta-final__grid" aria-hidden />
              <div className="cta-final__content">
                <div className="max-w-2xl">
                  <div className="cta-final__eyebrow label-mono">
                    <span className="cta-final__dot" aria-hidden />
                    ON SE PARLE&nbsp;?
                  </div>
                  <h2 className="text-display cta-final__title">
                    Vingt minutes.{" "}
                    <em className="text-italic-serif text-emerald">Gratuit</em>.
                  </h2>
                  <p className="text-muted text-lg cta-final__sub">
                    On écoute ton contexte, on te dit honnêtement si on peut
                    aider — et comment.
                  </p>
                </div>
                <div className="cta-final__action">
                  <CTAButton href="/contact">
                    Parle-nous de ton projet
                  </CTAButton>
                  <span className="cta-final__hint label-mono">
                    Réponse sous 24 h
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
