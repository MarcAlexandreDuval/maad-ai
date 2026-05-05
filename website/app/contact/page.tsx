import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/ui/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact — Parlons de ton projet",
  description:
    "Contacte MAAD-AI pour discuter de ton projet IA, SEO, AEO ou GEO. Agence québécoise. Réponse en 24h.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${SITE.name}`,
          url: `${SITE.url}/contact`,
          mainEntity: {
            "@type": "LocalBusiness",
            name: SITE.name,
            email: SITE.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: SITE.city,
              addressRegion: SITE.province,
              addressCountry: "CA",
            },
          },
        }}
      />

      <PageHero
        eyebrow="Contact"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        title={
          <>
            On{" "}
            <em className="text-italic-serif text-emerald">se parle</em> ?
          </>
        }
        lede={
          <>
            20 minutes, gratuit. On écoute ton contexte, on te dit honnêtement si on peut
            aider. Pas de pitch commercial, pas de relances, pas de blabla.
          </>
        }
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">
          {/* Left info */}
          <div className="flex flex-col gap-6">
            <GlassCard>
              <div className="label-mono text-emerald mb-3">Écris-nous</div>
              <a
                href={`mailto:${SITE.email}`}
                className="text-display text-xl md:text-2xl hover:text-emerald transition-colors"
              >
                {SITE.email}
              </a>
              <p className="text-sm text-muted mt-3">On répond en 24h. Toujours.</p>
            </GlassCard>

            <GlassCard>
              <div className="label-mono text-emerald mb-3">Basé au</div>
              <div className="text-display text-xl">
                {SITE.province}, {SITE.country}
              </div>
              <p className="text-sm text-muted mt-3">
                On travaille avec des PME de partout au Québec — et au-delà.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="label-mono text-emerald mb-3">Fondateur</div>
              <div className="text-display text-xl">{SITE.founder}</div>
              <p className="text-sm text-muted mt-3">
                C&apos;est probablement moi qui va lire ton message.
              </p>
            </GlassCard>
          </div>

          {/* Right form */}
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Le formulaire</div>
            <h2 className="text-display mb-8">
              Parle-nous de{" "}
              <em className="text-italic-serif text-emerald">ton projet</em>.
            </h2>
            <ContactForm />
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div>
            <div className="label-mono text-emerald mb-3">À quoi t&apos;attendre</div>
            <h2 className="text-display text-3xl md:text-4xl mb-5">
              Un audit gratuit. Pas un pitch.
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Quand tu nous écris, voici ce qui se passe. On lit ton message dans la journée.
              Si ton contexte fit avec ce qu&apos;on fait — visibilité IA (AEO/GEO),
              SEO, agents IA, automatisation, refonte de site web pour PME du Québec —
              on te répond avec un audit gratuit de 15 minutes. Si ça fit pas, on te dit
              honnêtement pourquoi et on t&apos;oriente vers quelqu&apos;un qui peut aider.
              Pas de relances commerciales, pas de blabla.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard>
              <div className="label-mono text-emerald mb-3">Audit AEO / GEO</div>
              <h3 className="text-display text-xl mb-3">
                Es-tu visible sur ChatGPT et Perplexity ?
              </h3>
              <p className="text-sm text-muted">
                On teste tes requêtes cibles, on identifie où ton entreprise apparaît
                (ou pas) dans les réponses des moteurs IA, on te donne 3 fix prioritaires.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="label-mono text-emerald mb-3">Refonte web</div>
              <h3 className="text-display text-xl mb-3">
                Site Next.js codé main, AEO-ready
              </h3>
              <p className="text-sm text-muted">
                Sites construits avec Claude Code, schémas JSON-LD complets, Core Web
                Vitals top 10 %, structure pour être cité par les LLMs dès le jour 1.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="label-mono text-emerald mb-3">Agents IA</div>
              <h3 className="text-display text-xl mb-3">
                Des assistants qui font ton job
              </h3>
              <p className="text-sm text-muted">
                Prospection, qualification de leads, support client, génération de
                contenu — agents IA sur mesure connectés à tes données réelles.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="label-mono text-emerald mb-3">Automatisation</div>
              <h3 className="text-display text-xl mb-3">
                Workflows qui récupèrent 10h+ par semaine
              </h3>
              <p className="text-sm text-muted">
                n8n, Make, Zapier — workflows no-code/low-code qui éliminent les tâches
                répétitives. Connectés à tes outils existants (CRM, courriel, Slack).
              </p>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
