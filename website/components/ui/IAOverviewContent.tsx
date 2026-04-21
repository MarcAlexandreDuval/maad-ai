"use client";

import Link from "next/link";
import { PageHero } from "./PageHero";
import { SectionWrapper } from "./SectionWrapper";
import { GlassCard } from "./GlassCard";
import { CTABanner } from "./CTABanner";
import { Reveal } from "./Reveal";
import { FAQAccordion } from "./FAQAccordion";
import { UseCasesBento } from "./UseCasesBento";
import {
  AgentsTodoAnim,
  AutomationFlowAnim,
  ChatbotConversationAnim,
} from "@/components/animations/IAServiceAnimations";

type FAQ = { q: string; a: string };

const STATS = [
  { value: "24/7", label: "tes systèmes travaillent sans pause" },
  { value: "3x", label: "plus de rendement au quotidien" },
  { value: "2-4 sem", label: "pour déployer ton premier agent" },
  { value: "1 / 5", label: "PME québécoises utilisent déjà l'IA" },
];

const SERVICES = [
  {
    href: "/services/agents-ia",
    anim: <AgentsTodoAnim />,
    number: "I.01",
    title: "Agents IA",
    desc: "Des employés numériques qui analysent, décident et agissent — 24/7, sans supervision.",
    benefits: [
      "Travaille 24/7 sans pause",
      "Apprend de ton contexte",
      "Connecté à tes outils",
      "Scalable selon tes besoins",
    ],
    cta: "Explorer",
  },
  {
    href: "/services/automatisation",
    anim: <AutomationFlowAnim />,
    number: "I.02",
    title: "Automatisation",
    desc: "Des workflows qui exécutent tes processus répétitifs — tu récupères des heures chaque semaine.",
    benefits: [
      "Connecte tous tes outils",
      "Élimine le travail manuel",
      "Déclenchements intelligents",
      "Monitoring en temps réel",
    ],
    cta: "Explorer",
  },
  {
    href: "/services/chatbot-ia",
    anim: <ChatbotConversationAnim />,
    number: "I.03",
    title: "Chatbot IA",
    desc: "Des assistants qui comprennent, qualifient et convertissent — web, WhatsApp et téléphone.",
    benefits: [
      "Répond instantanément",
      "Qualifie tes leads",
      "Multi-canal (web, voix)",
      "Français et anglais",
    ],
    cta: "Explorer",
  },
];

const USE_CASES = [
  {
    industry: "B2B",
    title: "Agent SDR",
    desc: "Qualifie tes leads entrants, enrichit les infos en temps réel, route vers le bon commercial et crée la fiche CRM. Il travaille quand tu dors, les fins de semaine et pendant tes vacances — sans jamais manquer un lead chaud.",
    metric: "Pipeline prévisible",
  },
  {
    industry: "E-commerce",
    title: "Support 24/7",
    desc: "Répond aux questions produit la nuit, guide les commandes, récupère les paniers abandonnés et trie les tickets par urgence avant que ton équipe arrive le matin.",
    metric: "Support sans rupture",
  },
  {
    industry: "Services",
    title: "Admin automatisé",
    desc: "Gère les rendez-vous, envoie les rappels, prépare les dossiers clients et s'occupe de la facturation récurrente — les tâches répétitives deviennent invisibles.",
    metric: "Agenda libéré",
  },
];

const WHY = [
  {
    title: "Pragmatique",
    desc: "On construit ce qui marche dans ton business — pas ce qui fait cool en démo. Des systèmes qui résolvent de vrais problèmes.",
  },
  {
    title: "Bilingue",
    desc: "Français, anglais, ou les deux. Ton IA parle à tes clients dans leur langue, avec les bonnes nuances québécoises.",
  },
  {
    title: "Mesurable",
    desc: "Chaque système a des métriques claires. Tu vois exactement ce qui travaille, combien ça te fait gagner, et où itérer.",
  },
  {
    title: "Évolutif",
    desc: "On construit pour scaler. Tu commences petit, tu ajoutes des capacités au fur et à mesure que ton entreprise grandit.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Diagnostic",
    desc: "On map tes processus et on identifie où l'IA peut t'aider le plus vite. Pas de solution en cherche d'un problème.",
  },
  {
    number: "02",
    title: "Pilote",
    desc: "On déploie une première version fonctionnelle en 2-4 semaines. Tu vois les résultats avant d'investir plus.",
  },
  {
    number: "03",
    title: "Déploiement",
    desc: "On élargit à tes équipes et à tes outils. Formation incluse. Support pendant les premières semaines.",
  },
  {
    number: "04",
    title: "Évolution",
    desc: "L'IA apprend et s'améliore. On monitore, on ajuste, on ajoute de nouvelles capacités selon ton évolution.",
  },
];

export function IAOverviewContent({ faqs }: { faqs: FAQ[] }) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          {
            name: "Intelligence Artificielle",
            path: "/services/intelligence-artificielle",
          },
        ]}
        title={
          <>
            L&apos;IA qui travaille.{" "}
            <span className="text-italic-serif text-emerald">Concrètement.</span>
          </>
        }
        lede={
          <>
            Trois services, un seul objectif : augmenter ton rendement, éliminer
            les tâches répétitives et faire opérer ton entreprise pendant que tu
            te concentres sur ce qui compte. Agents, automatisations, chatbots —
            on bâtit l&apos;infrastructure IA des PME du Québec.
          </>
        }
      />

      {/* ============ STATS ============ */}
      <section className="container-rail py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
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

      {/* ============ SERVICES (homepage-style cards) ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Ce qu&apos;on fait</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-14">
            Trois leviers pour{" "}
            <span className="text-italic-serif text-emerald">tout déléguer</span>.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6" role="list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.href} variant="fade-up" delay={i * 150}>
              <article role="listitem" className="h-full">
                <Link href={s.href} className="block h-full ia-card">
                  {s.anim}
                  <span className="ia-card-number">{s.number}</span>
                  <h3 className="ia-card-title">{s.title}</h3>
                  <p className="ia-card-desc">{s.desc}</p>

                  <div className="ia-card-benefits">
                    <div className="label-mono text-[0.62rem] opacity-70 mb-2">
                      Bénéfices clés
                    </div>
                    <ul className="space-y-1.5">
                      {s.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-baseline gap-2 text-sm text-muted"
                        >
                          <span className="text-emerald leading-none">→</span>
                          <span className="flex-1">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="ia-card-cta">
                    {s.cta} <span aria-hidden>→</span>
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ============ POURQUOI NOUS ============ */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal variant="fade-up">
              <div className="label-mono mb-5">Pourquoi nous</div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h2 className="text-display mb-6">
                Pas juste des{" "}
                <span className="text-italic-serif text-emerald">prompts</span>.
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={180}>
              <p className="text-muted text-lg leading-relaxed">
                N&apos;importe qui peut te vendre un workflow Zapier. On construit
                des systèmes qui comprennent ton contexte, parlent ta langue et
                s&apos;intègrent à ton opération réelle. L&apos;IA, c&apos;est un
                outil — ce qui compte, c&apos;est comment on l&apos;utilise.
              </p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY.map((c, i) => (
              <Reveal key={c.title} variant="fade-up" delay={i * 120}>
                <GlassCard className="h-full">
                  <div className="text-display text-xl mb-2">{c.title}</div>
                  <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ============ PROCESSUS ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Comment on procède</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-14">
            Quatre étapes,{" "}
            <span className="text-italic-serif text-emerald">zéro bullshit</span>.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
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

      {/* ============ CAS D'USAGE CONCRETS ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Résultats concrets</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-14">
            Ce que l&apos;IA a{" "}
            <span className="text-italic-serif text-emerald">vraiment</span>{" "}
            changé pour nos clients.
          </h2>
        </Reveal>
        <UseCasesBento
          items={USE_CASES.map((u) => ({
            label: u.industry,
            title: u.title,
            desc: u.desc,
            metric: u.metric,
          }))}
        />
      </SectionWrapper>

      {/* ============ FAQ ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Questions fréquentes</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-14">
            Ce qu&apos;on nous demande{" "}
            <span className="text-italic-serif text-emerald">chaque semaine</span>.
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={180}>
          <FAQAccordion items={faqs} />
        </Reveal>
      </SectionWrapper>

      {/* ============ BLOG CTA ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <GlassCard>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="label-mono mb-3">Pour aller plus loin</div>
                <h3 className="text-display text-2xl md:text-3xl mb-3">
                  Envie d&apos;en{" "}
                  <span className="text-italic-serif text-emerald">
                    savoir plus
                  </span>{" "}
                  sur l&apos;IA ?
                </h3>
                <p className="text-muted">
                  On publie des guides et des analyses sur l&apos;IA, les agents,
                  l&apos;automatisation et comment les PME du Québec peuvent en
                  profiter concrètement.
                </p>
              </div>
              <Link
                href="/blog"
                className="btn btn-ghost whitespace-nowrap"
              >
                Lire le blog →
              </Link>
            </div>
          </GlassCard>
        </Reveal>
      </SectionWrapper>

      <Reveal variant="fade-up">
        <CTABanner
          title="Ton IA commence par une conversation."
          text="20 minutes. Gratuit. On comprend ton contexte, on te dit si c'est un fit."
        />
      </Reveal>
    </>
  );
}
