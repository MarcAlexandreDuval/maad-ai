import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { IconAgents } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Agents IA pour PME — Création sur mesure au Québec",
  description:
    "Création d'agents IA autonomes pour PME québécoises. CrewAI, n8n, LLMs. Systèmes qui analysent, décident et agissent sans intervention humaine constante.",
  path: "/services/agents-ia",
});

const faqs = [
  {
    q: "C'est quoi un agent IA ?",
    a: "Un agent IA est un système d'intelligence artificielle autonome qui exécute des tâches complexes — analyser des données, prendre des décisions, interagir avec d'autres systèmes — sans intervention humaine constante. Il peut orchestrer plusieurs outils et mémoriser du contexte entre les interactions.",
  },
  {
    q: "Agent IA vs chatbot — quelle différence ?",
    a: "Un chatbot répond à des questions. Un agent IA exécute des tâches : il lit ton inbox, classe les messages, crée des tâches dans ton CRM, envoie des rappels, génère des rapports. L'agent agit ; le chatbot cause.",
  },
  {
    q: "Combien de temps pour déployer un agent ?",
    a: "Un agent simple : 2 à 4 semaines. Un système multi-agents complet : 6 à 12 semaines. On commence toujours par un pilote minimal avant de scaler.",
  },
  {
    q: "Tu utilises quelles technos ?",
    a: "CrewAI comme framework d'orchestration, n8n pour les triggers et intégrations, LLMs (GPT-4, Claude, Gemini) selon le cas d'usage. On évite les black-box SaaS quand c'est possible — on garde le contrôle.",
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

export default function AgentsIAPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Agents IA",
            description:
              "Création d'agents IA autonomes pour PME québécoises utilisant CrewAI et LLMs",
            path: "/services/agents-ia",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="i.01 — Agents IA"
        breadcrumbs={[
          { name: "Services", path: "/services/intelligence-artificielle" },
          { name: "Intelligence Artificielle", path: "/services/intelligence-artificielle" },
          { name: "Agents IA", path: "/services/agents-ia" },
        ]}
        title={
          <>
            Des employés{" "}
            <span className="text-italic-serif text-emerald">qui ne dorment jamais</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">Un agent IA est un système d&apos;intelligence artificielle autonome qui exécute des tâches complexes — analyser, décider, agir — sans intervention humaine constante.</strong>{" "}
            Pas un chatbot. Pas un script Zapier. Un vrai collaborateur numérique.
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
              <div className="label-mono text-bone-muted mb-5">Chatbot classique</div>
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
            <span className="text-italic-serif text-emerald">faire pour toi</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((u) => (
            <GlassCard key={u.agent}>
              <div className="label-mono text-emerald mb-3">{u.industry}</div>
              <h3 className="text-display text-2xl mb-3">{u.agent}</h3>
              <p className="text-muted">{u.desc}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Stack technique */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="label-mono mb-5">Stack technique</div>
            <h2 className="text-display mb-6">
              Les{" "}
              <span className="text-italic-serif text-emerald">bons outils</span> —
              pas ceux à la mode.
            </h2>
            <p className="text-muted leading-relaxed">
              On privilégie l&apos;open source quand c&apos;est possible, on garde tes
              données chez toi, et on évite les black-box qui dépendent d&apos;un seul
              fournisseur.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "CrewAI", use: "Orchestration multi-agents" },
              { name: "n8n", use: "Triggers + intégrations" },
              { name: "GPT-4", use: "Raisonnement général" },
              { name: "Claude", use: "Analyse de documents" },
              { name: "Pinecone", use: "Mémoire vectorielle" },
              { name: "Retell AI", use: "Voix téléphonique" },
            ].map((t) => (
              <div
                key={t.name}
                className="glass-flat p-4"
              >
                <div className="font-mono text-sm text-emerald mb-1">{t.name}</div>
                <div className="label-mono text-[0.62rem]">{t.use}</div>
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
            <span className="text-italic-serif text-emerald">chaque semaine</span>.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      {/* Liens services reliés */}
      <SectionWrapper tight>
        <div className="label-mono mb-6">Continue d&apos;explorer</div>
        <div className="grid md:grid-cols-3 gap-5">
          <GlassCard href="/services/automatisation">
            <div className="label-mono text-emerald mb-2">i.02</div>
            <h3 className="text-display text-xl mb-2">Automatisation</h3>
            <p className="text-sm text-muted">Workflows n8n pour connecter tes outils.</p>
          </GlassCard>
          <GlassCard href="/services/chatbot-ia">
            <div className="label-mono text-emerald mb-2">i.03</div>
            <h3 className="text-display text-xl mb-2">Chatbot IA</h3>
            <p className="text-sm text-muted">Assistants conversationnels avec LLMs.</p>
          </GlassCard>
          <GlassCard href="/industries/b2b">
            <div className="label-mono text-emerald mb-2">industries</div>
            <h3 className="text-display text-xl mb-2">Solutions B2B</h3>
            <p className="text-sm text-muted">Comment on applique les agents IA au B2B.</p>
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
