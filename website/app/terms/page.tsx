import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Conditions d'utilisation",
  description:
    "Conditions d'utilisation du site MAAD-AI et des services offerts par MAAD-AI à Joliette, Québec.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Légal"
        breadcrumbs={[{ name: "Conditions", path: "/terms" }]}
        title={
          <>
            Conditions{" "}
            <span className="text-italic-serif text-emerald">d&apos;utilisation</span>.
          </>
        }
        lede={
          <>
            Les règles du jeu quand tu utilises ce site ou travailles avec MAAD-AI.
            Court, clair, sans piège.
          </>
        }
      />

      <SectionWrapper>
        <div className="max-w-3xl flex flex-col gap-10 text-muted leading-relaxed">
          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              01 — Qui on est
            </h2>
            <p>
              {SITE.name} est une agence d&apos;intelligence artificielle opérée par{" "}
              {SITE.founder}, basée à {SITE.city}, {SITE.province}, Canada. Pour toute
              question : {SITE.email}.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              02 — Utilisation du site
            </h2>
            <p>
              Ce site est fourni à titre informatif. Tu peux le consulter librement. Tu
              ne peux pas copier, reproduire, redistribuer ou exploiter commercialement
              son contenu sans autorisation écrite.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              03 — Propriété intellectuelle
            </h2>
            <p>
              Les textes, visuels, code et structure du site appartiennent à MAAD-AI. Les
              marques et logos cités (Google, ChatGPT, Claude, etc.) appartiennent à
              leurs propriétaires respectifs.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              04 — Mandats et livrables
            </h2>
            <p>
              Tout mandat avec MAAD-AI fait l&apos;objet d&apos;un contrat séparé
              précisant la portée, les livrables, le calendrier et les conditions
              financières. Les conditions du site ne remplacent pas ce contrat.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              05 — Limitation de responsabilité
            </h2>
            <p>
              Les informations sur ce site sont fournies de bonne foi mais sans
              garantie. Les résultats en SEO, AEO, GEO et IA dépendent de nombreux
              facteurs et ne peuvent pas être garantis. MAAD-AI ne peut être tenue
              responsable des décisions prises sur la base du contenu public du site.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              06 — Droit applicable
            </h2>
            <p>
              Ces conditions sont régies par les lois du Québec et du Canada. Tout litige
              relève des tribunaux du district judiciaire de Joliette.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              07 — Modifications
            </h2>
            <p>
              On peut modifier ces conditions à tout moment. La date de mise à jour est
              indiquée ci-dessous.
            </p>
            <p className="label-mono text-xs mt-4">Dernière mise à jour — 2026</p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}
