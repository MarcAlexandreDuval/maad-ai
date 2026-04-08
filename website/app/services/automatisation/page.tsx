import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { IconAutomation } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Automatisation IA pour PME — Workflows n8n Québec",
  description:
    "Automatisation de workflows avec n8n, Make et IA pour PME québécoises. Connecte tes outils, élimine le copier-coller, récupère tes soirées.",
  path: "/services/automatisation",
});

const faqs = [
  {
    q: "C'est quoi l'automatisation IA ?",
    a: "L'automatisation IA combine des workflows (n8n, Make) avec des LLMs pour exécuter des processus d'affaires sans intervention humaine. Ex : un nouveau lead arrive → l'IA le qualifie → ton CRM est mis à jour → un courriel personnalisé part automatiquement.",
  },
  {
    q: "Comment automatiser mon entreprise avec l'IA ?",
    a: "On commence toujours par un audit : on liste les tâches répétitives (plus de 3 fois par semaine), on mesure le temps perdu, on identifie les 3 premiers candidats à l'automatisation. On déploie un pilote en 2-3 semaines, puis on étend.",
  },
  {
    q: "Tu utilises n8n ou Zapier ?",
    a: "On privilégie n8n : open source, plus puissant, hébergeable chez toi, pas de limite par exécution. Zapier est plus simple mais devient cher rapidement. Make est un bon compromis pour certains cas. On choisit selon ton contexte.",
  },
  {
    q: "Quels processus je peux automatiser ?",
    a: "Tout ce qui est répétitif : qualification de leads, réponses aux courriels standards, création de factures, mise à jour de CRM, rapports hebdomadaires, onboarding client, suivi d'inventaire, publications réseaux sociaux.",
  },
];

const processes = [
  {
    n: "01",
    t: "Qualification de leads",
    d: "Formulaire rempli → IA enrichit → score → route vers le bon commercial → CRM à jour.",
  },
  {
    n: "02",
    t: "Réponses aux courriels",
    d: "Inbox lu → IA classe → réponses standards envoyées → escalade les cas complexes.",
  },
  {
    n: "03",
    t: "Facturation",
    d: "Contrat signé → facture générée → envoyée au client → suivi de paiement automatisé.",
  },
  {
    n: "04",
    t: "Rapports hebdo",
    d: "Données extraites de tes outils → IA rédige le résumé → Slack ou courriel du lundi matin.",
  },
  {
    n: "05",
    t: "Onboarding client",
    d: "Nouveau client → séquence de courriels → accès créés → données importées → rendez-vous pris.",
  },
  {
    n: "06",
    t: "Contenu social",
    d: "Article blog publié → résumé IA → posts LinkedIn + X + FB générés → planification auto.",
  },
];

export default function AutomatisationPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Automatisation IA",
            description:
              "Automatisation de workflows n8n, Make et IA pour PME québécoises",
            path: "/services/automatisation",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="i.02 — Automatisation"
        breadcrumbs={[
          { name: "Services", path: "/services/intelligence-artificielle" },
          { name: "Intelligence Artificielle", path: "/services/intelligence-artificielle" },
          { name: "Automatisation", path: "/services/automatisation" },
        ]}
        title={
          <>
            Récupère tes{" "}
            <span className="text-italic-serif text-emerald">soirées</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">L&apos;automatisation IA combine workflows et LLMs pour exécuter des processus d&apos;affaires sans intervention humaine.</strong>{" "}
            On connecte tes outils, on élimine le copier-coller, et tu récupères les heures
            que tu brûles chaque semaine sur des tâches que personne devrait faire à la main.
          </>
        }
        visual={<IconAutomation />}
      />

      {/* 6 processus */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">6 processus à automatiser dès aujourd&apos;hui</div>
          <h2 className="text-display max-w-3xl">
            Ce qu&apos;on{" "}
            <span className="text-italic-serif text-emerald">automatise</span> chaque
            mois.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processes.map((p) => (
            <GlassCard key={p.n}>
              <div className="label-mono text-emerald mb-3">{p.n}</div>
              <h3 className="text-display text-xl mb-3">{p.t}</h3>
              <p className="text-sm text-muted">{p.d}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Outils */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="label-mono mb-5">Notre stack</div>
            <h2 className="text-display mb-6">
              On choisit{" "}
              <span className="text-italic-serif text-emerald">le bon outil</span>
              <br />
              pour le bon job.
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Pas de dogme. n8n quand on veut garder le contrôle. Make quand la vitesse prime.
              Zapier quand le client l&apos;exige déjà. Custom quand ça vaut la peine.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                name: "n8n",
                badge: "Préféré",
                d: "Open source. Self-hosted. Aucune limite par workflow. Le couteau suisse moderne.",
              },
              {
                name: "Make",
                d: "Visuel, rapide à prototyper. Parfait pour les scénarios simples et rapides.",
              },
              {
                name: "Zapier",
                d: "L'écosystème le plus large. On l'utilise quand l'intégration custom est impossible.",
              },
              {
                name: "Custom code",
                d: "Quand un workflow ne suffit pas — on code un micro-service Python ou Node.",
              },
            ].map((t) => (
              <div key={t.name} className="glass-flat p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-mono text-lg text-emerald">{t.name}</div>
                  {t.badge && (
                    <span className="label-mono text-[0.6rem] border border-emerald/40 text-emerald px-2 py-0.5 rounded-full">
                      {t.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted">{t.d}</p>
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
            Les{" "}
            <span className="text-italic-serif text-emerald">vraies</span>{" "}
            questions.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      {/* Liens services reliés */}
      <SectionWrapper tight>
        <div className="label-mono mb-6">Services complémentaires</div>
        <div className="grid md:grid-cols-3 gap-5">
          <GlassCard href="/services/agents-ia">
            <div className="label-mono text-emerald mb-2">i.01</div>
            <h3 className="text-display text-xl mb-2">Agents IA</h3>
            <p className="text-sm text-muted">Quand le workflow devient trop complexe — on monte d&apos;un cran.</p>
          </GlassCard>
          <GlassCard href="/services/chatbot-ia">
            <div className="label-mono text-emerald mb-2">i.03</div>
            <h3 className="text-display text-xl mb-2">Chatbot IA</h3>
            <p className="text-sm text-muted">Automatise aussi la conversation — web, WhatsApp, téléphone.</p>
          </GlassCard>
          <GlassCard href="/services/seo-local">
            <div className="label-mono text-emerald mb-2">v.02</div>
            <h3 className="text-display text-xl mb-2">SEO Local</h3>
            <p className="text-sm text-muted">Automatise aussi ta présence Google Maps.</p>
          </GlassCard>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Une heure perdue, c'est une heure payée."
        text="Dis-nous quelles tâches te volent ton temps. On te montre comment les éliminer."
      />
    </>
  );
}
