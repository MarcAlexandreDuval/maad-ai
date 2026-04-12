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
    </>
  );
}
