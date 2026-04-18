import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { IconChatbot } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Chatbot IA pour PME — Assistant virtuel Québec",
  description:
    "Chatbots IA intelligents pour PME québécoises. Pas des scripts — des LLMs. Sur ton site, WhatsApp ou téléphone avec Retell AI.",
  path: "/services/chatbot-ia",
});

const faqs = [
  {
    q: "C'est quoi un chatbot IA ?",
    a: "Un chatbot IA est un assistant conversationnel qui utilise des LLMs (GPT-4, Claude) pour comprendre les intentions, répondre en langage naturel et agir — contrairement aux anciens chatbots scriptés qui suivent un arbre de décision rigide.",
  },
  {
    q: "Est-ce qu'un chatbot peut remplacer un réceptionniste ?",
    a: "Pour 70-80 % des demandes standards : oui. Prise de rendez-vous, réponses aux questions fréquentes, qualification. Mais un chatbot bien conçu sait aussi quand escalader à un humain — pas juste tout intercepter.",
  },
  {
    q: "Ça marche sur quels canaux ?",
    a: "Site web (widget ou page dédiée), WhatsApp Business, Messenger, Instagram, SMS, et téléphone via Retell AI (voix IA réaliste). Tu choisis les canaux selon où tes clients te parlent déjà.",
  },
  {
    q: "Comment ça s'intègre à mon CRM ?",
    a: "Chaque conversation peut créer ou mettre à jour une fiche dans ton CRM (HubSpot, Pipedrive, Zoho, etc.). Les leads qualifiés arrivent directement dans le pipeline avec tout le contexte de la conversation.",
  },
];

const scenarios = [
  {
    n: "01",
    title: "Prise de rendez-vous",
    flow: [
      "Client visite le site à 22h",
      "Chatbot propose un RDV",
      "Chatbot qualifie le besoin",
      "Créneau réservé dans Google Calendar",
      "Confirmation par SMS",
    ],
  },
  {
    n: "02",
    title: "Support 24/7",
    flow: [
      "Client pose une question",
      "Chatbot cherche dans ta base de connaissances",
      "Réponse contextualisée en 2 secondes",
      "Si bloqué : ticket créé automatiquement",
      "Humain prend le relais le lendemain",
    ],
  },
  {
    n: "03",
    title: "Qualification de lead",
    flow: [
      "Visiteur engage la conversation",
      "Chatbot pose les bonnes questions",
      "Score de qualité calculé",
      "Lead chaud routé à l'équipe sales",
      "Lead froid mis en nurturing",
    ],
  },
];

export default function ChatbotIAPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Chatbot IA",
            description:
              "Chatbots IA intelligents avec LLMs pour PME québécoises",
            path: "/services/chatbot-ia",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="i.03 — Chatbot IA"
        breadcrumbs={[
          { name: "Services", path: "/services/intelligence-artificielle" },
          { name: "Intelligence Artificielle", path: "/services/intelligence-artificielle" },
          { name: "Chatbot IA", path: "/services/chatbot-ia" },
        ]}
        title={
          <>
            Conversation.{" "}
            <span className="text-italic-serif text-emerald">Conversion</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">Un chatbot IA utilise des LLMs pour comprendre, répondre et agir en langage naturel — contrairement aux chatbots scriptés qui suivent un arbre rigide.</strong>{" "}
            Sur ton site, dans WhatsApp, ou au téléphone avec une voix IA indiscernable d&apos;un humain.
          </>
        }
        visual={<IconChatbot />}
      />

      {/* 3 scénarios */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Scénarios concrets</div>
          <h2 className="text-display max-w-3xl">
            Comment ça{" "}
            <span className="text-italic-serif text-emerald">marche</span>{" "}
            vraiment.
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {scenarios.map((s) => (
            <GlassCard key={s.n}>
              <div className="label-mono text-emerald mb-3">{s.n}</div>
              <h3 className="text-display text-2xl mb-5">{s.title}</h3>
              <ol className="space-y-3">
                {s.flow.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="font-mono text-[0.7rem] text-emerald border border-emerald/30 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Canaux */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="label-mono mb-5">Les canaux</div>
            <h2 className="text-display mb-6">
              Là où tes clients{" "}
              <span className="text-italic-serif text-emerald">te parlent déjà</span>.
            </h2>
            <p className="text-muted leading-relaxed">
              Un chatbot qui reste sur ton site, c&apos;est un assistant qui attend. Le vrai
              jeu : être là où la conversation se passe. WhatsApp pour les PME de services,
              téléphone pour les commerces, Messenger pour l&apos;e-commerce.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Web widget", d: "Intégré au site — flottant ou pleine page" },
              { name: "WhatsApp", d: "Via WhatsApp Business API" },
              { name: "Téléphone", d: "Voix IA via Retell AI — indiscernable" },
              { name: "Messenger", d: "FB Messenger + Instagram DMs" },
              { name: "SMS", d: "Pour les rappels et confirmations" },
              { name: "Email", d: "Triage automatique de l'inbox" },
            ].map((c) => (
              <div key={c.name} className="glass-flat p-4">
                <div className="font-mono text-sm text-emerald mb-1">{c.name}</div>
                <div className="text-xs text-muted">{c.d}</div>
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
            <span className="text-italic-serif text-emerald">toujours</span>.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <BlogCTA topic="les chatbots IA, la conversion et le support automatisé" />

      {/* Liens */}
      <SectionWrapper tight>
        <div className="label-mono mb-6">Combos qui marchent</div>
        <div className="grid md:grid-cols-3 gap-5">
          <GlassCard href="/services/agents-ia">
            <div className="label-mono text-emerald mb-2">i.01</div>
            <h3 className="text-display text-xl mb-2">Agents IA</h3>
            <p className="text-sm text-muted">Un chatbot dans un agent — pour orchestrer l&apos;ensemble.</p>
          </GlassCard>
          <GlassCard href="/services/automatisation">
            <div className="label-mono text-emerald mb-2">i.02</div>
            <h3 className="text-display text-xl mb-2">Automatisation</h3>
            <p className="text-sm text-muted">Connecte ton chatbot à tous tes outils via n8n.</p>
          </GlassCard>
          <GlassCard href="/services/conception-web">
            <div className="label-mono text-emerald mb-2">v.05</div>
            <h3 className="text-display text-xl mb-2">Conception Web</h3>
            <p className="text-sm text-muted">Un site fait pour héberger ton chatbot sans friction.</p>
          </GlassCard>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ton premier client IA, c'est lundi."
        text="On peut déployer un chatbot pilote en 2 semaines. Dis-nous ton cas d'usage."
      />
    </>
  );
}
