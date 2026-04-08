import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import {
  ComparisonTable,
  NumberedList,
  RelatedServices,
} from "@/components/ui/ServicePageSections";
import { IconSeo } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "SEO Joliette — Référencement Google Lanaudière",
  description:
    "Agence SEO à Joliette. Référencement technique, contenu et autorité pour PME de Lanaudière et du Québec. Base solide pour l'AEO et le GEO.",
  path: "/services/seo",
});

const faqs = [
  {
    q: "C'est quoi le SEO ?",
    a: "Le SEO (Search Engine Optimization) est l'ensemble des techniques qui rendent ton site trouvable dans Google : optimisation technique (vitesse, code), contenu de qualité qui répond à des requêtes, et autorité (backlinks, mentions).",
  },
  {
    q: "SEO vs AEO vs GEO ?",
    a: "Le SEO vise à ranker dans les résultats Google classiques. L'AEO vise à devenir la réponse directe (featured snippet, AI Overview). Le GEO vise à être cité par ChatGPT, Perplexity, Claude. Trois disciplines complémentaires — pas en compétition.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Du SEO technique : 2-4 semaines. Du contenu qui ranke : 3-6 mois pour les mots-clés compétitifs. C'est long, c'est normal. Mais c'est l'investissement le plus durable en marketing digital.",
  },
  {
    q: "Vous travaillez avec des PME de Lanaudière ?",
    a: "Oui — Joliette, Repentigny, L'Assomption, Terrebonne, Mascouche. On est basé à Joliette et on comprend le marché local. On travaille aussi à distance avec toute la province.",
  },
];

export default function SeoPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "SEO",
            description: "Référencement Google pour PME de Joliette, Lanaudière et Québec",
            path: "/services/seo",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="v.01 — SEO"
        breadcrumbs={[
          { name: "Services", path: "/services/visibilite-web" },
          { name: "Visibilité Web", path: "/services/visibilite-web" },
          { name: "SEO", path: "/services/seo" },
        ]}
        title={
          <>
            La{" "}
            <span className="text-italic-serif text-emerald">fondation</span>{" "}
            qui ranke.
          </>
        }
        lede={
          <>
            <strong className="text-bone">Le SEO reste la fondation — sans bases techniques solides, l&apos;AEO et le GEO ne performent pas.</strong>{" "}
            On optimise ton site de fond en comble : technique, contenu, autorité. Pour
            Google, pour les AI Overviews, et pour tout ce qui suivra.
          </>
        }
        visual={<IconSeo />}
      />

      {/* 3 piliers du SEO */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Les 3 piliers</div>
          <h2 className="text-display">
            Ce qui fait un SEO{" "}
            <span className="text-italic-serif text-emerald">vraiment</span>{" "}
            solide.
          </h2>
        </div>
        <NumberedList
          items={[
            {
              n: "01",
              t: "Technique",
              d: "Core Web Vitals, crawl, indexation, schema, sitemap, canonicals. Les fondations invisibles qui font tout marcher.",
            },
            {
              n: "02",
              t: "Contenu",
              d: "Recherche de keywords, architecture topic cluster, rédaction optimisée AEO, maillage interne stratégique.",
            },
            {
              n: "03",
              t: "Autorité",
              d: "Backlinks qualitatifs, mentions dans des sources d'autorité, signals d'expertise (E-E-A-T).",
            },
          ]}
        />
      </SectionWrapper>

      {/* Table comparative */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">SEO vs AEO vs GEO</div>
          <h2 className="text-display">
            Trois disciplines.{" "}
            <span className="text-italic-serif text-emerald">Une</span> stratégie.
          </h2>
        </div>
        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="label-mono text-[0.65rem] border-b border-white/10">
                  <th className="text-left p-3 md:p-4 font-normal"></th>
                  <th className="text-left p-3 md:p-4 font-normal">SEO</th>
                  <th className="text-left p-3 md:p-4 font-normal text-emerald">AEO</th>
                  <th className="text-left p-3 md:p-4 font-normal text-emerald">GEO</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["Objectif", "Ranker #1", "Être la réponse", "Être cité par les IA"],
                  ["Plateforme", "Google classique", "Featured snippets, AI Overviews", "ChatGPT, Perplexity, Claude"],
                  ["Format", "Pages longues", "Réponses extractables", "Définitions claires"],
                  ["Impact clic", "↑ trafic", "↓ trafic, ↑ autorité", "↑ mentions, ↑ confiance"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    {row.map((c, j) => (
                      <td
                        key={j}
                        className={`p-3 md:p-4 ${j === 0 ? "text-bone font-medium" : ""}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </SectionWrapper>

      {/* Ancrage local */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="label-mono mb-5">Ancrage local</div>
            <h2 className="text-display mb-6">
              Basé à{" "}
              <span className="text-italic-serif text-emerald">Joliette</span>.
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              On comprend le marché de Lanaudière. On sait qu&apos;un plombier à L&apos;Assomption ne
              compétitionne pas contre un plombier à Montréal. On écrit pour ton public local
              sans négliger ton public provincial.
            </p>
            <p className="text-muted leading-relaxed">
              Pour du SEO purement local (Google Maps, pack local), regarde{" "}
              <a href="/services/seo-local" className="text-emerald hover:underline">
                SEO Local
              </a>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Joliette",
              "Repentigny",
              "L'Assomption",
              "Terrebonne",
              "Mascouche",
              "Saint-Lin",
              "Berthier",
              "Rawdon",
              "Montréal",
              "Laval",
              "Québec",
              "Partout au Québec",
            ].map((city) => (
              <span
                key={city}
                className="glass-flat px-4 py-2 label-mono text-[0.65rem]"
              >
                {city}
              </span>
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
            questions SEO.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <RelatedServices
        items={[
          {
            href: "/services/seo-local",
            label: "SEO Local",
            number: "v.02",
            desc: "Google Maps et recherche locale.",
          },
          {
            href: "/services/aeo",
            label: "AEO",
            number: "v.03",
            desc: "Devenir la réponse directe.",
          },
          {
            href: "/services/geo",
            label: "GEO",
            number: "v.04",
            desc: "Être cité par les IA génératives.",
          },
        ]}
      />

      <CTABanner
        title="On audit ton site gratuitement."
        text="20 minutes. Zéro engagement. On te dit exactement où tu perds du trafic."
      />
    </>
  );
}
