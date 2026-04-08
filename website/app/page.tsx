import Link from "next/link";
import { CTAButton } from "@/components/ui/CTAButton";
import { VideoHero } from "@/components/hero/VideoHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Stat } from "@/components/ui/Stat";
import {
  IconAgents,
  IconAutomation,
  IconChatbot,
  IconSeo,
  IconSeoLocal,
  IconAeo,
  IconGeo,
  IconWeb,
} from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const faqs = [
  {
    q: "C'est quoi une agence IA au Québec ?",
    a: "Une agence IA conçoit, déploie et maintient des systèmes d'intelligence artificielle — agents autonomes, workflows automatisés, chatbots — pour des entreprises. MAAD-AI, basée à Joliette, combine IA et visibilité web (SEO, AEO, GEO) pour les PME du Québec.",
  },
  {
    q: "C'est quoi l'AEO et le GEO ?",
    a: "L'AEO (Answer Engine Optimization) optimise ton contenu pour devenir la réponse directe dans Google (featured snippets, AI Overviews). Le GEO (Generative Engine Optimization) optimise pour être cité par ChatGPT, Perplexity, Claude et Gemini. Complémentaires au SEO classique.",
  },
  {
    q: "Pourquoi une PME a besoin d'IA en 2026 ?",
    a: "Parce que 40 % des recherches Google déclenchent maintenant des AI Overviews, et que tes clients posent leurs questions directement à ChatGPT. Si t'es pas visible là, tu disparais. L'IA permet aussi d'automatiser ce qui te vole tes soirées.",
  },
  {
    q: "Tu travailles avec quelles entreprises ?",
    a: "PME du Québec, principalement B2B, e-commerce, SaaS et startups. Que tu sois à Joliette, Montréal, Québec ou ailleurs dans Lanaudière — on travaille à distance avec toute la province.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Chaque projet est différent. On commence par une conversation : tu nous expliques ton contexte, on regarde si on peut vraiment faire une différence, et on propose un plan. Parle-nous de ton projet via la page contact.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ============ HERO (video intro + background) ============ */}
      <VideoHero />

      {/* ============ MARQUEE ============ */}
      <section className="relative py-14 border-y border-white/5 overflow-hidden">
        <div className="container-rail">
          <div className="label-mono mb-5">Visible partout où on cherche</div>
          <div className="marquee">
            <div className="marquee-track">
              {[
                "Google",
                "ChatGPT",
                "Perplexity",
                "Claude",
                "Gemini",
                "Google Maps",
                "AI Overviews",
              ]
                .concat([
                  "Google",
                  "ChatGPT",
                  "Perplexity",
                  "Claude",
                  "Gemini",
                  "Google Maps",
                  "AI Overviews",
                ])
                .map((p, i) => (
                  <span
                    key={i}
                    className="text-display text-italic-serif text-3xl md:text-4xl text-bone-muted whitespace-nowrap flex items-center gap-12"
                  >
                    {p}
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald inline-block" />
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ POURQUOI MAINTENANT ============ */}
      <SectionWrapper>
        <div className="bg-grid" />
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <div className="label-mono mb-6">01 — Pourquoi maintenant</div>
            <h2 className="text-display mb-8">
              Le paysage de la <span className="text-italic-serif text-emerald">recherche</span>{" "}
              change.
            </h2>
            <p className="text-lg text-muted max-w-lg leading-relaxed">
              Google n&apos;est plus le seul gatekeeper. Tes clients posent leurs questions à
              ChatGPT. Google répond avant même qu&apos;on clique. Si ton entreprise n&apos;est
              pas optimisée pour les moteurs de réponse et les IA génératives, tu deviens
              invisible — même si ton SEO est parfait.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <GlassCard>
              <Stat value="93%" label="des expériences en ligne commencent sur un moteur de recherche" />
            </GlassCard>
            <GlassCard>
              <Stat value="40%" label="des recherches Google affichent maintenant des AI Overviews" accent />
            </GlassCard>
            <GlassCard>
              <Stat value="65%" label="des recherches se terminent sans aucun clic (zero-click)" />
            </GlassCard>
            <GlassCard>
              <Stat value="800M" label="d'utilisateurs actifs de ChatGPT chaque semaine en 2026" accent />
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ SECTION IA ============ */}
      <SectionWrapper id="services">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="label-mono mb-6">02 — Intelligence Artificielle</div>
            <h2 className="text-display max-w-2xl">
              L&apos;IA qui <span className="text-italic-serif text-emerald">travaille pour toi</span>
              <br /> pendant que tu dors.
            </h2>
          </div>
          <Link
            href="/services/intelligence-artificielle"
            className="label-mono hover:text-emerald transition-colors inline-flex items-center gap-2 self-start md:self-end"
          >
            Tous les services IA
            <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/agents-ia"
            icon={<IconAgents />}
            number="i.01"
            title="Agents IA"
            desc="Des systèmes autonomes qui analysent, décident et exécutent — comme un employé qui ne dort jamais. Construits avec CrewAI et LLMs."
          />
          <ServiceCard
            href="/services/automatisation"
            icon={<IconAutomation />}
            number="i.02"
            title="Automatisation"
            desc="Workflows n8n et Make qui connectent tes outils, éliminent le copier-coller, et te rendent tes soirées."
          />
          <ServiceCard
            href="/services/chatbot-ia"
            icon={<IconChatbot />}
            number="i.03"
            title="Chatbot IA"
            desc="Pas un chatbot scripté. Un vrai assistant qui comprend, qualifie, et convertit — sur ton site, WhatsApp, ou par téléphone."
          />
        </div>
      </SectionWrapper>

      {/* ============ SECTION VISIBILITÉ WEB ============ */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="label-mono mb-6">03 — Visibilité Web</div>
            <h2 className="text-display max-w-2xl">
              Visible partout.{" "}
              <span className="text-italic-serif text-emerald">Recommandé</span> par défaut.
            </h2>
          </div>
          <Link
            href="/services/visibilite-web"
            className="label-mono hover:text-emerald transition-colors inline-flex items-center gap-2 self-start md:self-end"
          >
            Tous les services de visibilité
            <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/seo"
            icon={<IconSeo />}
            number="v.01"
            title="SEO"
            desc="La fondation. Sans bases techniques solides, l'AEO et le GEO ne performent pas. On ranke dans Google — toujours."
          />
          <ServiceCard
            href="/services/seo-local"
            icon={<IconSeoLocal />}
            number="v.02"
            title="SEO Local"
            desc="Joliette, Repentigny, Terrebonne, tout Lanaudière. On te fait apparaître dans Google Maps et le pack local."
          />
          <ServiceCard
            href="/services/aeo"
            icon={<IconAeo />}
            number="v.03"
            title="AEO"
            desc="Answer Engine Optimization. Au lieu de ranker #1, tu deviens LA réponse — featured snippets, AI Overviews."
            highlight
          />
          <ServiceCard
            href="/services/geo"
            icon={<IconGeo />}
            number="v.04"
            title="GEO"
            desc="Generative Engine Optimization. Pour être cité et recommandé par ChatGPT, Perplexity, Claude et Gemini."
            highlight
          />
          <ServiceCard
            href="/services/conception-web"
            icon={<IconWeb />}
            number="v.05"
            title="Conception Web"
            desc="Sites rapides, codés main, pas de templates. L'AEO et le GEO intégrés dès la première ligne de HTML."
          />
        </div>
      </SectionWrapper>

      {/* ============ PROCESSUS ============ */}
      <SectionWrapper>
        <div className="mb-16">
          <div className="label-mono mb-6">04 — Comment on travaille</div>
          <h2 className="text-display max-w-3xl">
            Quatre étapes.{" "}
            <span className="text-italic-serif text-emerald">Zéro</span> bullshit.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              n: "01",
              t: "Audit",
              d: "On analyse ta présence : ce qui marche, ce qui bloque, où ton secteur se cache dans ChatGPT.",
            },
            {
              n: "02",
              t: "Stratégie",
              d: "On bâtit un plan clair : quels services, quelles priorités, quels résultats attendre et quand.",
            },
            {
              n: "03",
              t: "Exécution",
              d: "On code, on écrit, on automatise, on déploie. Tu vois les progrès chaque semaine, pas chaque trimestre.",
            },
            {
              n: "04",
              t: "Itération",
              d: "L'IA et les SERPs évoluent vite. On mesure, on ajuste, on double la mise sur ce qui fonctionne.",
            },
          ].map((step) => (
            <GlassCard key={step.n}>
              <div className="flex flex-col gap-5 h-full">
                <div className="text-display text-italic-serif text-6xl text-emerald leading-none">
                  {step.n}
                </div>
                <h3 className="text-display">{step.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.d}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* ============ FAQ ============ */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="label-mono mb-6">05 — Questions fréquentes</div>
            <h2 className="text-display">
              On <span className="text-italic-serif text-emerald">répond</span>
              <br /> directement.
            </h2>
            <p className="text-muted mt-6 max-w-sm">
              Les questions qu&apos;on reçoit en appel. Si la tienne est pas ici, écris-nous.
            </p>
            <div className="mt-8">
              <Link href="/faq" className="btn btn-ghost !py-2 !px-4 !text-sm">
                Toutes les questions
              </Link>
            </div>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </SectionWrapper>

      {/* ============ CTA FINAL ============ */}
      <section className="relative overflow-hidden">
        <div className="container-rail py-24 md:py-32 relative">
          <div className="absolute inset-x-[10%] top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald to-transparent opacity-40" />
          <div className="glass p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald/15 blur-[100px] rounded-full" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <div className="label-mono mb-5">Prêt pour la suite ?</div>
                <h2 className="text-display mb-6">
                  Prêt à devenir{" "}
                  <span className="text-italic-serif text-emerald">la réponse</span> ?
                </h2>
                <p className="text-muted text-lg">
                  Une conversation de 20 minutes. Gratuite. On regarde ton contexte, on te
                  dit honnêtement si on peut aider.
                </p>
              </div>
              <CTAButton href="/contact">Parle-nous de ton projet</CTAButton>
            </div>
          </div>
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
