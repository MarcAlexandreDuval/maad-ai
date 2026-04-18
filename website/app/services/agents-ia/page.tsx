import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { UseCasesBento } from "@/components/ui/UseCasesBento";
import { IconAgents } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Agents IA pour PME — Création sur mesure au Québec",
  description:
    "Création d'agents IA autonomes pour PME québécoises. Des systèmes qui analysent, décident et agissent sans intervention humaine constante.",
  path: "/services/agents-ia",
});

const faqs = [
  {
    q: "C'est quoi un agent IA ?",
    a: "Un agent IA est un collaborateur numérique autonome qui exécute des tâches complexes — analyser de l'information, prendre des décisions, interagir avec d'autres outils — sans supervision constante. Il apprend de ton contexte et s'améliore avec le temps.",
  },
  {
    q: "Agent IA vs chatbot — quelle différence ?",
    a: "Un chatbot répond à des questions. Un agent IA exécute des tâches : il lit ton inbox, classe les messages, crée des tâches dans ton CRM, envoie des rappels, génère des rapports. L'agent agit ; le chatbot cause.",
  },
  {
    q: "Combien de temps pour déployer un agent ?",
    a: "Un agent simple : 2 à 4 semaines. Un système complet : 6 à 12 semaines. On commence toujours par un pilote minimal avec un résultat mesurable avant de scaler.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Ça dépend de la complexité et du nombre de tâches à automatiser. En général, un agent bien conçu se rentabilise en 3 à 6 mois — le coût d'un employé, la disponibilité d'une équipe.",
  },
];

const useCases = [
  {
    industry: "B2B",
    agent: "Agent SDR",
    desc: "Qualifie tes leads entrants, enrichit les infos, route vers le bon commercial, crée la fiche CRM.",
  },
  {
    industry: "E-commerce",
    agent: "Agent support",
    desc: "Lit les tickets, répond aux questions standards, escalade les cas complexes, suit les livraisons.",
  },
  {
    industry: "SaaS",
    agent: "Agent onboarding",
    desc: "Guide les nouveaux clients, détecte les blocages, déclenche des sessions humaines au bon moment.",
  },
  {
    industry: "Services pro",
    agent: "Agent admin",
    desc: "Gère les rendez-vous, envoie les rappels, prépare les dossiers clients, facture.",
  },
];

const benefits = [
  {
    title: "Disponible 24/7",
    desc: "Ton agent travaille pendant que tu dors, pendant tes vacances, pendant les fins de semaine. Pas de temps mort, pas d'absences.",
  },
  {
    title: "Scalable instantanément",
    desc: "Un agent peut traiter 1 ou 1000 tâches en parallèle sans effort supplémentaire. Ta croissance ne dépend plus de ton headcount.",
  },
  {
    title: "Apprend ton contexte",
    desc: "Il mémorise les conversations précédentes, ton jargon, tes procédures. Plus le temps passe, plus il devient compétent.",
  },
  {
    title: "Rentabilité rapide",
    desc: "Un agent remplace des heures de travail manuel. La plupart de nos clients récupèrent leur investissement en 3 à 6 mois.",
  },
];

export default function AgentsIAPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Agents IA",
            description:
              "Création d'agents IA autonomes pour PME québécoises",
            path: "/services/agents-ia",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="i.01 — Agents IA"
        breadcrumbs={[
          {
            name: "Intelligence Artificielle",
            path: "/services/intelligence-artificielle",
          },
          { name: "Agents IA", path: "/services/agents-ia" },
        ]}
        title={
          <>
            Des employés{" "}
            <span className="text-italic-serif text-emerald">
              qui ne dorment jamais
            </span>
            .
          </>
        }
        lede={
          <>
            <strong className="text-bone">
              Un agent IA, c&apos;est un collaborateur numérique autonome qui
              analyse, décide et exécute — sans supervision constante.
            </strong>{" "}
            Pas un chatbot. Un vrai bras droit qui travaille en continu.
          </>
        }
        visual={<IconAgents />}
      />

      {/* Comparaison agent vs chatbot */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">La vraie différence</div>
          <h2 className="text-display">
            Agent IA{" "}
            <span className="text-italic-serif text-emerald">vs</span> Chatbot.
          </h2>
        </div>
        <GlassCard>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="p-2 md:pr-10">
              <div className="label-mono text-bone-muted mb-5">
                Chatbot classique
              </div>
              <ul className="space-y-4 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-bone-muted/50">—</span>
                  Répond à des questions prédéfinies
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bone-muted/50">—</span>
                  Pas de mémoire entre les sessions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bone-muted/50">—</span>
                  Un seul canal (souvent le site web)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bone-muted/50">—</span>
                  N&apos;exécute aucune tâche — il cause
                </li>
              </ul>
            </div>
            <div className="p-2 md:pl-10 pt-10 md:pt-2">
              <div className="label-mono text-emerald mb-5">Agent IA</div>
              <ul className="space-y-4 text-bone">
                <li className="flex items-start gap-3">
                  <span className="text-emerald">→</span>
                  Raisonne, planifie, exécute
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald">→</span>
                  Mémoire long terme + contexte
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald">→</span>
                  Connecté à tous tes outils
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald">→</span>
                  Livre des résultats, pas juste des réponses
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </SectionWrapper>

      {/* Cas d'usage */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Cas d&apos;usage concrets</div>
          <h2 className="text-display max-w-3xl">
            Ce qu&apos;un agent peut{" "}
            <span className="text-italic-serif text-emerald">faire pour toi</span>
            .
          </h2>
        </div>
        <UseCasesBento
          items={useCases.map((u) => ({
            label: u.industry,
            title: u.agent,
            desc: u.desc,
          }))}
        />
      </SectionWrapper>

      {/* Bénéfices */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="label-mono mb-5">Pourquoi un agent IA</div>
            <h2 className="text-display mb-6">
              Les{" "}
              <span className="text-italic-serif text-emerald">bénéfices</span> concrets.
            </h2>
            <p className="text-muted leading-relaxed">
              Un agent IA bien conçu, c&apos;est comme embaucher un employé qui
              ne prend jamais de congé, travaille à l&apos;échelle et
              s&apos;améliore chaque jour. Avec un coût d&apos;opération ridicule
              comparé à la productivité livrée.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="glass-flat p-5">
                <div className="text-display text-base mb-2">{b.title}</div>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mb-12">
          <div className="label-mono mb-5">Questions fréquentes</div>
          <h2 className="text-display">
            Ce qu&apos;on nous demande{" "}
            <span className="text-italic-serif text-emerald">
              chaque semaine
            </span>
            .
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <BlogCTA topic="les agents IA, l'automatisation et la visibilité web" />

      {/* Liens services reliés */}
      <SectionWrapper tight>
        <div className="label-mono mb-6">Continue d&apos;explorer</div>
        <div className="grid md:grid-cols-3 gap-5">
          <GlassCard href="/services/automatisation">
            <div className="label-mono text-emerald mb-2">i.02</div>
            <h3 className="text-display text-xl mb-2">Automatisation</h3>
            <p className="text-sm text-muted">
              Workflows qui connectent tous tes outils.
            </p>
          </GlassCard>
          <GlassCard href="/services/chatbot-ia">
            <div className="label-mono text-emerald mb-2">i.03</div>
            <h3 className="text-display text-xl mb-2">Chatbot IA</h3>
            <p className="text-sm text-muted">
              Assistants conversationnels intelligents.
            </p>
          </GlassCard>
          <GlassCard href="/industries/b2b">
            <div className="label-mono text-emerald mb-2">industries</div>
            <h3 className="text-display text-xl mb-2">Solutions B2B</h3>
            <p className="text-sm text-muted">
              Comment on applique les agents IA au B2B.
            </p>
          </GlassCard>
        </div>
      </SectionWrapper>

      <CTABanner
        title="On bâtit ton premier agent."
        text="On commence par un pilote. Une tâche. Un résultat mesurable. On scale ensuite."
      />
    </>
  );
}
