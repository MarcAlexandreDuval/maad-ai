import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { IconAgents, IconAutomation, IconChatbot } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Services IA — Agents, Automatisation, Chatbots",
  description:
    "MAAD-AI offre des agents IA, de l'automatisation de workflows et des chatbots intelligents pour PME du Québec. CrewAI, n8n, LLMs — sous un même toit.",
  path: "/services/intelligence-artificielle",
});

const services = [
  {
    icon: <IconAgents />,
    href: "/services/agents-ia",
    label: "Agents IA",
    def: "Systèmes autonomes qui analysent, décident et agissent sans intervention humaine constante.",
    inclus: ["Architecture multi-agents (CrewAI)", "Connexion à tes outils et APIs", "Mémoire long terme", "Orchestration"],
    pour: "PME qui veulent déléguer des tâches complexes à des systèmes intelligents.",
  },
  {
    icon: <IconAutomation />,
    href: "/services/automatisation",
    label: "Automatisation",
    def: "Workflows qui exécutent des processus d'affaires en continu, sans copier-coller.",
    inclus: ["Workflows n8n / Make", "Intégration 500+ outils", "Enrichissement IA", "Monitoring"],
    pour: "Équipes qui perdent des heures sur des tâches répétitives chaque semaine.",
  },
  {
    icon: <IconChatbot />,
    href: "/services/chatbot-ia",
    label: "Chatbot IA",
    def: "Assistants conversationnels qui comprennent, qualifient et convertissent — sur web, WhatsApp et téléphone.",
    inclus: ["LLMs (GPT-4, Claude)", "Base de connaissances custom", "Intégration CRM", "Voix via Retell AI"],
    pour: "Commerces et services qui veulent être disponibles 24/7 sans embaucher.",
  },
];

const faqs = [
  {
    q: "C'est quoi un agent IA vs un chatbot ?",
    a: "Un chatbot répond aux questions. Un agent IA exécute des tâches complètes : il lit tes courriels, crée des tickets, met à jour ton CRM, envoie des rapports. Un agent peut contenir un chatbot, mais l'inverse est rarement vrai.",
  },
  {
    q: "Quels services IA pour une PME québécoise ?",
    a: "Les trois piliers : des agents IA pour automatiser les tâches complexes (analyse, décision), de l'automatisation de workflows pour connecter tes outils, et des chatbots pour gérer les conversations avec clients 24/7.",
  },
  {
    q: "Vous utilisez quelles technologies ?",
    a: "On travaille principalement avec CrewAI (agents), n8n et Make (automatisation), LLMs (GPT, Claude, Gemini), Retell AI (chatbot vocal), et des APIs custom. Stack pragmatique, pas à la mode.",
  },
];

export default function IAPillarPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Services Intelligence Artificielle",
            description: "Agents IA, automatisation et chatbots pour PME du Québec",
            path: "/services/intelligence-artificielle",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Pôle 01 — Intelligence Artificielle"
        breadcrumbs={[
          { name: "Services", path: "/services/intelligence-artificielle" },
          { name: "Intelligence Artificielle", path: "/services/intelligence-artificielle" },
        ]}
        title={
          <>
            L&apos;IA qui travaille.{" "}
            <span className="text-italic-serif text-emerald">Concrètement.</span>
          </>
        }
        lede={
          <>
            Trois services, un seul objectif : que ton entreprise opère pendant que tu dors.
            MAAD-AI est l&apos;une des seules agences au Québec à offrir des agents IA, de
            l&apos;automatisation de workflows et des chatbots intelligents sous un même toit.
          </>
        }
      />

      {/* 3 services — deep cards */}
      <SectionWrapper>
        <div className="mb-14 max-w-3xl">
          <div className="label-mono mb-5">Ce qu&apos;on fait</div>
          <h2 className="text-display">
            Trois leviers pour{" "}
            <span className="text-italic-serif text-emerald">tout déléguer</span>.
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {services.map((s, i) => (
            <GlassCard key={s.href} href={s.href}>
              <div className="grid md:grid-cols-[140px_1fr_auto] gap-8 items-start">
                <div>{s.icon}</div>
                <div>
                  <div className="label-mono text-emerald mb-2">i.0{i + 1}</div>
                  <h3 className="text-display text-3xl md:text-4xl mb-4">{s.label}</h3>
                  <p className="text-muted mb-5 max-w-2xl">{s.def}</p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div>
                      <div className="label-mono text-[0.62rem] mb-2">Ce qui est inclus</div>
                      <ul className="text-sm text-muted space-y-1">
                        {s.inclus.map((it) => (
                          <li key={it} className="flex items-start gap-2">
                            <span className="text-emerald mt-1.5">—</span>
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="max-w-sm">
                      <div className="label-mono text-[0.62rem] mb-2">Pour qui</div>
                      <p className="text-sm text-muted">{s.pour}</p>
                    </div>
                  </div>
                </div>
                <div className="label-mono text-emerald opacity-60 self-end">
                  Explorer →
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Why MAAD-AI */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="label-mono mb-5">Pourquoi nous</div>
            <h2 className="text-display mb-6">
              Pas juste des{" "}
              <span className="text-italic-serif text-emerald">prompts</span>.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              N&apos;importe qui peut te vendre un workflow Zapier. On construit des systèmes
              qui intègrent ton contexte, tes outils, ta langue et ton marché. L&apos;IA,
              c&apos;est juste un outil — ce qui compte, c&apos;est l&apos;architecture.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { t: "Stack moderne", d: "CrewAI, n8n, LLMs de pointe — pas de techno périmée." },
              { t: "Fait au Québec", d: "Ton contexte, ta langue, ta réalité de PME québécoise." },
              { t: "Mesurable", d: "Chaque système a des métriques. Tu vois ce qui roule." },
              { t: "Évolutif", d: "On construit pour 100x, pas pour la démo de lundi." },
            ].map((c) => (
              <GlassCard key={c.t}>
                <div className="text-display text-xl mb-2">{c.t}</div>
                <p className="text-sm text-muted">{c.d}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Inter-pillar link */}
      <SectionWrapper>
        <GlassCard>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="label-mono mb-3">Combo gagnant</div>
              <h3 className="text-display text-2xl md:text-3xl mb-3">
                L&apos;IA sans visibilité, c&apos;est un moteur sans essence.
              </h3>
              <p className="text-muted">
                Nos services IA s&apos;intègrent à notre pôle{" "}
                <Link href="/services/visibilite-web" className="text-emerald hover:underline">
                  Visibilité Web
                </Link>{" "}
                — pour que les gens qui profitent de ton IA te trouvent en premier.
              </p>
            </div>
            <Link
              href="/services/visibilite-web"
              className="btn btn-ghost whitespace-nowrap"
            >
              Voir Visibilité Web
            </Link>
          </div>
        </GlassCard>
      </SectionWrapper>

      <CTABanner
        title="Ton IA commence par une conversation."
        text="20 minutes. Gratuit. On comprend ton contexte, on te dit si c'est un fit."
      />
    </>
  );
}
