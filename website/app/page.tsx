import Link from "next/link";
import { CTAButton } from "@/components/ui/CTAButton";
import { VideoHero } from "@/components/hero/VideoHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Stat } from "@/components/ui/Stat";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { BrandLogos } from "@/components/ui/BrandLogos";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Counter } from "@/components/ui/Counter";
import {
  AgentsTodoAnim,
  AutomationFlowAnim,
  ChatbotConversationAnim,
} from "@/components/animations/IAServiceAnimations";
import {
  SeoRankClimbAnim,
  SeoLocalMapAnim,
  AeoSnippetAnim,
  GeoChatCitationAnim,
  WebResponsiveAnim,
} from "@/components/animations/VisibilityServiceAnimations";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const faqs: { q: string; a: React.ReactNode; aText: string }[] = [
  {
    q: "C'est quoi une agence IA au Québec?",
    aText:
      "Une agence IA aide les entreprises à intégrer l'intelligence artificielle dans leurs opérations — agents autonomes, automatisation de workflows, chatbots intelligents. MAAD-AI se spécialise avec les PME du Québec.",
    a: (
      <>
        Une agence IA aide les entreprises à intégrer l&apos;intelligence
        artificielle dans leurs opérations — agents autonomes, automatisation
        de workflows, chatbots intelligents.{" "}
        <Link href="/a-propos" className="faq-link">
          MAAD-AI
        </Link>{" "}
        se spécialise avec les PME du Québec.
      </>
    ),
  },
  {
    q: "C'est quoi l'AEO et le GEO?",
    aText:
      "L'AEO (Answer Engine Optimization) optimise ton contenu pour apparaître en position zéro dans Google — featured snippets et AI Overviews. Le GEO (Generative Engine Optimization) fait en sorte que ChatGPT, Perplexity et Claude te citent et te recommandent. Les deux sont complémentaires au SEO.",
    a: (
      <>
        L&apos;
        <Link href="/services/aeo" className="faq-link">
          AEO
        </Link>{" "}
        (Answer Engine Optimization) optimise ton contenu pour apparaître en
        position zéro dans Google — featured snippets et AI Overviews. Le{" "}
        <Link href="/services/geo" className="faq-link">
          GEO
        </Link>{" "}
        (Generative Engine Optimization) fait en sorte que ChatGPT, Perplexity
        et Claude te citent et te recommandent. Les deux sont complémentaires
        au SEO.
      </>
    ),
  },
  {
    q: "Pourquoi une PME a besoin d'IA en 2026?",
    aText:
      "Parce que tes compétiteurs automatisent déjà. L'IA réduit les tâches manuelles, accélère tes processus et te rend disponible 24/7 via des chatbots et des agents. Les PME qui n'adoptent pas l'IA se font dépasser — pas dans 5 ans, maintenant.",
    a: (
      <>
        Parce que tes compétiteurs automatisent déjà.{" "}
        <Link
          href="/services/intelligence-artificielle"
          className="faq-link"
        >
          L&apos;IA
        </Link>{" "}
        réduit les tâches manuelles, accélère tes processus et te rend
        disponible 24/7 via des chatbots et des agents. Les PME qui
        n&apos;adoptent pas l&apos;IA se font dépasser — pas dans 5 ans,
        maintenant.
      </>
    ),
  },
  {
    q: "Tu travailles avec quelles entreprises?",
    aText:
      "Principalement des PME du Québec dans les secteurs B2B, e-commerce, startup et SaaS. Des entreprises qui veulent dominer leur marché en ligne — pas juste exister.",
    a: (
      <>
        Principalement des{" "}
        <Link href="/industries" className="faq-link">
          PME du Québec
        </Link>{" "}
        dans les secteurs B2B, e-commerce, startup et SaaS. Des entreprises
        qui veulent dominer leur marché en ligne — pas juste exister.
      </>
    ),
  },
  {
    q: "Comment on commence?",
    aText:
      "Écris-nous via la page contact. On regarde ton contexte, on te dit honnêtement si on peut aider et comment. Pas de pitch, pas de pression — juste une conversation directe.",
    a: (
      <>
        Écris-nous via la{" "}
        <Link href="/contact" className="faq-link">
          page contact
        </Link>
        . On regarde ton contexte, on te dit honnêtement si on peut aider et
        comment. Pas de pitch, pas de pression — juste une conversation
        directe.
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={faqSchema(faqs.map((f) => ({ q: f.q, a: f.aText })))}
      />

      {/* ============ HERO (video intro + background) ============ */}
      <VideoHero />

      <SectionDivider />

      {/* ============ SIGNATURE LINE (h1 SEO, premium) ============ */}
      <section aria-label="Identité" className="signature-line">
        <div className="container-rail">
          <Reveal variant="fade-up">
            <div className="signature-line__inner">
              <span className="signature-line__rule" aria-hidden />
              <div className="signature-line__text">
                <span className="label-mono signature-line__eyebrow">
                  MAAD-AI
                </span>
                <h1 className="signature-line__h1">
                  IA et visibilité web pour les PME du Québec
                </h1>
              </div>
              <span className="signature-line__rule" aria-hidden />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BRAND LOGOS MARQUEE ============ */}
      <section className="relative py-16 overflow-hidden">
        <Reveal variant="fade-in" duration={1200}>
          <BrandLogos />
        </Reveal>
      </section>

      <SectionDivider />

      {/* ============ POURQUOI MAINTENANT ============ */}
      <SectionWrapper>
        <div className="bg-grid" />
        <section aria-labelledby="why-now-heading">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">
            {/* Left column */}
            <div className="flex flex-col gap-8">
              <Reveal variant="fade-up">
                <div className="label-mono">01 — Pourquoi maintenant</div>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2 id="why-now-heading" className="text-display max-w-xl">
                  Google répond. ChatGPT recommande.{" "}
                  <em className="text-italic-serif text-emerald">
                    T&apos;es où&nbsp;?
                  </em>
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={220}>
                <p className="text-lg text-muted max-w-lg leading-relaxed">
                  Google n&apos;est plus le seul gatekeeper. Tes clients posent
                  leurs questions à ChatGPT — et si t&apos;es pas optimisé pour
                  les moteurs de réponse, tu deviens invisible.
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={340}>
                <Link href="/services/visibilite-web" className="inline-cta">
                  On t&apos;optimise pour les deux
                </Link>
              </Reveal>
            </div>

            {/* Right column — 2x2 stat grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              role="list"
            >
              {[
                {
                  value: 93,
                  suffix: "%",
                  label: "des expériences en ligne commencent sur un moteur de recherche",
                  accent: false,
                },
                {
                  value: 40,
                  suffix: "%",
                  label: "des recherches Google affichent maintenant des AI Overviews",
                  accent: true,
                },
                {
                  value: 65,
                  suffix: "%",
                  label: "des recherches se terminent sans aucun clic (zero-click)",
                  accent: false,
                },
                {
                  value: 800,
                  suffix: "M",
                  label: "d'utilisateurs actifs de ChatGPT chaque semaine en 2026",
                  accent: true,
                },
              ].map((s, i) => (
                <Reveal key={s.label} variant="fade-up" delay={i * 150}>
                  <div className="stat-card" role="listitem">
                    <Counter
                      value={s.value}
                      suffix={s.suffix}
                      duration={1700}
                      className={`stat-number ${
                        s.accent
                          ? "stat-number--accent"
                          : "stat-number--default"
                      }`}
                    />
                    <span className="stat-card-label">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ SECTION IA ============ */}
      <SectionWrapper id="services">
        <section aria-labelledby="ia-heading">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <Reveal variant="fade-up">
                <div className="label-mono mb-6">
                  02 — Intelligence artificielle
                </div>
              </Reveal>
              <Reveal variant="fade-up" delay={120}>
                <h2 id="ia-heading" className="text-display">
                  L&apos;IA qui{" "}
                  <em className="text-italic-serif text-emerald">
                    travaille
                  </em>
                  .
                  <br />
                  Pendant que tu dors.
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={220}>
                <p className="text-muted text-lg leading-relaxed mt-6 max-w-xl">
                  Agents autonomes, automatisations et chatbots — on construit
                  l&apos;infrastructure IA des PME du Québec pendant que tu te
                  concentres sur ce qui compte.
                </p>
              </Reveal>
            </div>
            <Reveal variant="fade-up" delay={300}>
              <Link
                href="/services/intelligence-artificielle"
                className="label-mono hover:text-emerald transition-colors inline-flex items-center gap-2 self-start md:self-end group"
              >
                Tous les services IA
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6" role="list">
            {[
              {
                href: "/services/agents-ia",
                anim: <AgentsTodoAnim />,
                number: "I.01",
                title: "Agents IA",
                desc: "Des agents IA autonomes qui analysent, décident et exécutent — comme un employé qui ne dort jamais. Construits avec CrewAI et LLMs.",
                cta: "En savoir plus sur nos agents IA",
              },
              {
                href: "/services/automatisation",
                anim: <AutomationFlowAnim />,
                number: "I.02",
                title: "Automatisation",
                desc: "Automatisation IA avec n8n et Make — connecte tes outils, élimine le copier-coller, et récupère tes soirées.",
                cta: "Découvrir l'automatisation IA",
              },
              {
                href: "/services/chatbot-ia",
                anim: <ChatbotConversationAnim />,
                number: "I.03",
                title: "Chatbot IA",
                desc: "Chatbot IA intelligent qui comprend, qualifie et convertit — sur ton site, WhatsApp ou par téléphone.",
                cta: "Voir nos chatbots IA",
              },
            ].map((s, i) => (
              <Reveal key={s.href} variant="fade-up" delay={i * 150}>
                <article role="listitem" className="h-full">
                  <Link href={s.href} className="block h-full ia-card">
                    {s.anim}
                    <span className="ia-card-number">{s.number}</span>
                    <h3 className="ia-card-title">{s.title}</h3>
                    <p className="ia-card-desc">{s.desc}</p>
                    <span className="ia-card-cta">
                      {s.cta} <span aria-hidden>→</span>
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ SECTION VISIBILITÉ WEB ============ */}
      <SectionWrapper>
        <section aria-labelledby="visibility-heading">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <Reveal variant="fade-up">
                <div className="label-mono mb-6">03 — Visibilité web</div>
              </Reveal>
              <Reveal variant="fade-up" delay={120}>
                <h2 id="visibility-heading" className="text-display">
                  Visible sur Google.
                  <br />
                  <em className="text-italic-serif text-emerald">
                    Recommandé
                  </em>{" "}
                  par ChatGPT.
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={220}>
                <p className="text-muted text-lg leading-relaxed mt-6 max-w-xl">
                  Le SEO te rend trouvable. L&apos;AEO te met en position zéro.
                  Le GEO te fait citer par les IA. On fait les trois.
                </p>
              </Reveal>
            </div>
            <Reveal variant="fade-up" delay={300}>
              <Link
                href="/services/visibilite-web"
                className="label-mono hover:text-emerald transition-colors inline-flex items-center gap-2 self-start md:self-end group"
              >
                Tous les services de visibilité
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="viz-bento">
            {[
              {
                href: "/services/aeo",
                anim: <AeoSnippetAnim />,
                number: "V.01",
                title: "AEO",
                desc: "Answer Engine Optimization. Au lieu de ranker #1, tu deviens LA réponse — featured snippets, AI Overviews, assistants vocaux.",
                cta: "Découvrir l'AEO",
                size: "xl" as const,
                priority: true,
              },
              {
                href: "/services/geo",
                anim: <GeoChatCitationAnim />,
                number: "V.02",
                title: "GEO",
                desc: "Generative Engine Optimization. Pour être cité et recommandé par ChatGPT, Perplexity, Claude et Gemini — pas juste indexé.",
                cta: "Découvrir le GEO",
                size: "lg" as const,
                priority: true,
              },
              {
                href: "/services/seo",
                anim: <SeoRankClimbAnim />,
                number: "V.03",
                title: "SEO",
                desc: "La fondation. Sans bases techniques solides, l'AEO et le GEO ne performent pas. On te ranke dans Google — pour de vrai.",
                cta: "Voir le SEO",
                size: "md" as const,
                priority: false,
              },
              {
                href: "/services/seo-local",
                anim: <SeoLocalMapAnim />,
                number: "V.04",
                title: "SEO Local",
                desc: "Ton quartier, ta ville, ta région. On te fait apparaître dans Google Maps et le pack local — partout au Québec.",
                cta: "Voir le SEO local",
                size: "md" as const,
                priority: false,
              },
              {
                href: "/services/conception-web",
                anim: <WebResponsiveAnim />,
                number: "V.05",
                title: "Conception Web",
                desc: "Sites rapides, codés main, pas de templates. L'AEO et le GEO intégrés dès la première ligne de code.",
                cta: "Voir la conception web",
                size: "md" as const,
                priority: false,
              },
            ].map((s, i) => (
              <article
                key={s.href}
                className={`viz-bento-item viz-bento-item--${s.size}`}
              >
                <Reveal
                  variant="fade-up"
                  delay={i * 120}
                  className="viz-bento-reveal"
                >
                  <Link
                    href={s.href}
                    className={`block h-full ia-card ${s.priority ? "ia-card--priority" : ""}`}
                  >
                    {s.anim}
                    <span className="ia-card-number">{s.number}</span>
                    <h3 className="ia-card-title">{s.title}</h3>
                    <p className="ia-card-desc">{s.desc}</p>
                    <span className="ia-card-cta">
                      {s.cta} <span aria-hidden>→</span>
                    </span>
                  </Link>
                </Reveal>
              </article>
            ))}
          </div>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ PROCESSUS ============ */}
      <SectionWrapper>
        <section aria-labelledby="process-heading">
          <div className="mb-12 max-w-2xl">
            <Reveal variant="fade-up">
              <div className="label-mono mb-6">04 — Comment on travaille</div>
            </Reveal>
            <Reveal variant="fade-up" delay={120}>
              <h2 id="process-heading" className="text-display">
                Quatre étapes.{" "}
                <em className="text-italic-serif text-emerald">Zéro</em>{" "}
                bullshit.
              </h2>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={220}>
            <ProcessTimeline />
          </Reveal>
        </section>
      </SectionWrapper>

      <SectionDivider />

      {/* ============ FAQ ============ */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal variant="fade-up">
              <div className="label-mono mb-6">05 — Questions fréquentes</div>
            </Reveal>
            <Reveal variant="fade-up" delay={120}>
              <h2 className="text-display whitespace-nowrap">
                On <em className="text-italic-serif text-emerald">répond</em>.
                Directement.
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={220}>
              <p className="text-muted mt-6 max-w-sm">
                Sur l&apos;IA, le SEO, l&apos;AEO et le GEO. Si ta question est
                pas ici, écris-nous.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={320}>
              <div className="mt-8">
                <Link href="/faq" className="btn btn-ghost !py-2 !px-4 !text-sm">
                  Toutes les questions →
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={120}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
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
                    PRÊT POUR LA SUITE&nbsp;?
                  </div>
                  <h2 className="text-display cta-final__title">
                    Prêt à passer à{" "}
                    <em className="text-italic-serif text-emerald">
                      l&apos;IA
                    </em>
                    ?
                  </h2>
                  <p className="text-muted text-lg cta-final__sub">
                    Écris-nous. On regarde ton contexte, on te dit honnêtement
                    si on peut aider — et comment.
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

function ServiceCard({
  href,
  icon,
  number,
  title,
  desc,
  highlight,
}: {
  href: string;
  icon: React.ReactNode;
  number: string;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <GlassCard href={href} className="group">
      <div className="flex flex-col gap-5 h-full">
        <div className="flex items-start justify-between">
          <div className="flex-1">{icon}</div>
          <div className="label-mono text-emerald">{number}</div>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-display text-2xl">{title}</h3>
          {highlight && (
            <span className="label-mono text-[0.6rem] text-emerald border border-emerald/40 px-2 py-0.5 rounded-full">
              PRIORITAIRE
            </span>
          )}
        </div>
        <p className="text-sm text-muted leading-relaxed">{desc}</p>
        <div className="mt-auto pt-4 label-mono flex items-center gap-2 text-emerald opacity-60 group-hover:opacity-100 transition-opacity">
          Explorer
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </GlassCard>
  );
}
