import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "À propos — MAAD-AI, agence IA à Joliette",
  description:
    "MAAD-AI est une agence d'intelligence artificielle basée à Joliette, Québec. Fondée par Marc-Alexandre Duval pour rendre l'IA, l'AEO et le GEO accessibles aux PME québécoises.",
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
    "Marc-Alexandre Duval est le fondateur de MAAD-AI, une agence d'intelligence artificielle basée à Joliette, Québec, spécialisée en agents IA, automatisation, AEO et GEO pour les PME du Québec.",
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
  areaServed: { "@type": "AdministrativeArea", name: `${SITE.province}, ${SITE.country}` },
  email: SITE.email,
};

export default function AProposPage() {
  return (
    <>
      <JsonLd data={orgAboutSchema} />
      <JsonLd data={founderSchema} />

      <PageHero
        eyebrow="À propos"
        breadcrumbs={[{ name: "À propos", path: "/a-propos" }]}
        title={
          <>
            L&apos;IA, accessible{" "}
            <span className="text-italic-serif text-emerald">aux PME</span> du Québec.
          </>
        }
        lede={
          <>
            MAAD-AI a été fondée par Marc-Alexandre Duval à Joliette, Québec. Une agence
            d&apos;intelligence artificielle qui construit des agents, automatise des
            processus et optimise la visibilité web des PME québécoises pour Google et
            les IA génératives.
          </>
        }
      />

      <SectionWrapper>
        <div className="max-w-3xl flex flex-col gap-12">
          <div>
            <div className="label-mono text-emerald mb-4">L&apos;histoire</div>
            <h2 className="text-display text-3xl md:text-4xl mb-6">
              Pourquoi <span className="text-italic-serif text-emerald">maintenant</span> ?
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              En 2026, 40 % des recherches sur Google affichent un AI Overview avant même
              le premier résultat classique. ChatGPT, Claude, Perplexity et Gemini sont
              devenus des moteurs de réponse utilisés chaque jour par des millions de
              Québécois. Pour une PME, la règle du jeu a changé : être visible ne suffit
              plus. Il faut être cité.
            </p>
            <p className="text-muted leading-relaxed mb-5">
              MAAD-AI est née de ce constat. Les grandes entreprises ont déjà leurs équipes
              IA, leurs consultants, leurs budgets. Les PME, elles, regardent la vague
              arriver sans savoir par où commencer. On construit pour elles — concrètement,
              rapidement, sans jargon.
            </p>
            <p className="text-muted leading-relaxed">
              On ne vend pas de promesses. On livre des systèmes qui fonctionnent : un
              agent IA qui qualifie tes leads pendant que tu dors, un workflow
              d&apos;automatisation qui récupère dix heures par semaine, une stratégie
              AEO qui place ton contenu dans les réponses de ChatGPT.
            </p>
          </div>

          <div>
            <div className="label-mono text-emerald mb-4">Le fondateur</div>
            <h2 className="text-display text-3xl md:text-4xl mb-6">
              Marc-Alexandre <span className="text-italic-serif text-emerald">Duval</span>
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Autodidacte, vibe coder, basé à Joliette dans Lanaudière. J&apos;ai
              construit MAAD-AI parce que je voyais trop d&apos;entreprises québécoises
              payer cher pour du marketing qui ne convertit pas, et trop de dirigeants
              passer leurs soirées sur des tâches qu&apos;une IA pourrait exécuter en
              trois minutes.
            </p>
            <p className="text-muted leading-relaxed mb-5">
              Mon approche : parler français, vulgariser sans simplifier à outrance,
              livrer des pilotes en deux semaines plutôt que des promesses en six mois.
              Je travaille directement avec les fondateurs et les équipes — pas
              d&apos;intermédiaires, pas de comités.
            </p>
            <p className="text-muted leading-relaxed">
              Quand tu contactes MAAD-AI, c&apos;est probablement moi qui va lire ton
              message.
            </p>
          </div>

          <div>
            <div className="label-mono text-emerald mb-4">La mission</div>
            <h2 className="text-display text-3xl md:text-4xl mb-6">
              Tu es vu. Tu es choisi.{" "}
              <span className="text-italic-serif text-emerald">Tu es recommandé.</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Ces trois étapes résument tout ce qu&apos;on fait. Être vu (SEO, SEO local).
              Être choisi (conception web, chatbot, conversion). Être recommandé (AEO,
              GEO, citation par les IA). Chaque service qu&apos;on offre alimente une de
              ces trois étapes — et on refuse tout ce qui ne rentre pas dans ce cadre.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="label-mono text-emerald mb-6">Les faits</div>
        <h2 className="text-display text-3xl md:text-4xl mb-10">
          MAAD-AI en <span className="text-italic-serif text-emerald">clair</span>.
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Fondée en</div>
            <div className="text-display text-2xl">2024</div>
            <p className="text-sm text-muted mt-3">
              Par Marc-Alexandre Duval, à Joliette.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Basée à</div>
            <div className="text-display text-2xl">
              Joliette, Lanaudière
            </div>
            <p className="text-sm text-muted mt-3">
              Québec, Canada. On couvre toute la province à distance.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Spécialités</div>
            <div className="text-display text-2xl">IA + Visibilité</div>
            <p className="text-sm text-muted mt-3">
              Agents IA, automatisation, chatbots, SEO, AEO, GEO.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Clientèle</div>
            <div className="text-display text-2xl">PME québécoises</div>
            <p className="text-sm text-muted mt-3">
              B2B, e-commerce, SaaS, startups.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Langue de travail</div>
            <div className="text-display text-2xl">Français</div>
            <p className="text-sm text-muted mt-3">
              Québécois, direct, sans jargon corporatif.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Contact</div>
            <a
              href={`mailto:${SITE.email}`}
              className="text-display text-xl hover:text-emerald transition-colors break-all"
            >
              {SITE.email}
            </a>
            <p className="text-sm text-muted mt-3">Réponse en 24h. Toujours.</p>
          </GlassCard>
        </div>
      </SectionWrapper>

      <CTABanner
        title="On se parle ?"
        text="Vingt minutes, gratuit. On écoute ton contexte, on te dit honnêtement si on peut aider."
      />
    </>
  );
}
