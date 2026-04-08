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
import { IconAeo } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  serviceSchema,
  faqSchema,
  definedTermSchema,
} from "@/lib/schema";

export const metadata = buildMetadata({
  title: "AEO — Answer Engine Optimization au Québec",
  description:
    "AEO (Answer Engine Optimization) : deviens la réponse directe dans Google AI Overviews, featured snippets, ChatGPT. Agence AEO Québec.",
  path: "/services/aeo",
});

const faqs = [
  {
    q: "C'est quoi l'AEO (Answer Engine Optimization) ?",
    a: "L'AEO est l'optimisation de ton contenu pour devenir la réponse directe affichée par Google et les moteurs de réponse — featured snippets, People Also Ask, AI Overviews. Au lieu de ranker #1, tu deviens la réponse elle-même, affichée au-dessus des résultats classiques.",
  },
  {
    q: "AEO vs SEO — quelle différence ?",
    a: "Le SEO vise à ranker dans les résultats bleus classiques de Google. L'AEO vise à devenir la réponse directe affichée avant les résultats — featured snippet, AI Overview, position zéro. Le SEO cherche le clic ; l'AEO cherche l'autorité et la visibilité sans clic.",
  },
  {
    q: "Comment faire de l'AEO ?",
    a: "Structure ton contenu par questions. Chaque H2 = une question. Premier paragraphe = réponse directe en 50-80 mots. Listes, tableaux, définitions courtes. Schema JSON-LD FAQ et HowTo. Et surtout : des réponses que Google peut extraire sans réécrire.",
  },
  {
    q: "Pourquoi l'AEO est important en 2026 ?",
    a: "65 % des recherches Google en 2026 sont zero-click — l'utilisateur obtient sa réponse sans cliquer. 40 % des recherches affichent des AI Overviews. Si ton contenu n'est pas optimisé pour être la réponse, tu perds en visibilité même si tu rankes #1.",
  },
  {
    q: "Est-ce que l'AEO va tuer mon trafic ?",
    a: "Paradoxalement, non — si tu le fais bien. Être cité dans un AI Overview ou un featured snippet augmente ton autorité perçue et les clics sur les requêtes à forte intention. Ce qui meurt : le trafic sur les requêtes informationnelles faciles. Ce qui grandit : les conversions.",
  },
];

export default function AeoPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "AEO — Answer Engine Optimization",
            description:
              "Optimisation pour devenir la réponse directe dans Google AI Overviews et featured snippets",
            path: "/services/aeo",
          }),
          faqSchema(faqs),
          definedTermSchema({
            term: "Answer Engine Optimization (AEO)",
            description:
              "L'AEO est l'optimisation de contenu pour devenir la réponse directe affichée par Google et les moteurs de réponse — featured snippets, AI Overviews, People Also Ask.",
            path: "/services/aeo",
          }),
        ]}
      />

      <PageHero
        eyebrow="v.03 — AEO · Prioritaire"
        breadcrumbs={[
          { name: "Services", path: "/services/visibilite-web" },
          { name: "Visibilité Web", path: "/services/visibilite-web" },
          { name: "AEO", path: "/services/aeo" },
        ]}
        title={
          <>
            Deviens{" "}
            <span className="text-italic-serif text-emerald">la réponse</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">L&apos;AEO (Answer Engine Optimization) est l&apos;optimisation de ton contenu pour devenir la réponse directe affichée par Google — featured snippets, AI Overviews, People Also Ask.</strong>{" "}
            Au lieu de lutter pour le clic, tu deviens la réponse elle-même, affichée
            au-dessus de tous les résultats.
          </>
        }
        visual={<IconAeo />}
      />

      {/* Stat bar */}
      <section className="border-y border-white/5 bg-ink-50/30">
        <div className="container-rail py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { v: "65%", l: "des recherches sont zero-click" },
            { v: "40%", l: "affichent des AI Overviews" },
            { v: "8.3×", l: "plus de clics sur position 0" },
            { v: "2026", l: "le présent, pas le futur" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-display text-4xl md:text-5xl text-emerald mb-2">
                {s.v}
              </div>
              <div className="label-mono text-[0.62rem]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AEO vs SEO */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">AEO vs SEO</div>
          <h2 className="text-display">
            Deux disciplines.{" "}
            <span className="text-italic-serif text-emerald">Deux</span>{" "}
            philosophies.
          </h2>
        </div>
        <ComparisonTable
          leftTitle="SEO classique"
          leftItems={[
            "Cherche à ranker #1 dans les 10 liens bleus",
            "Contenu long, pages complètes",
            "Objectif : le clic",
            "Métrique principale : position moyenne",
            "Fonctionne encore — mais pas seul",
          ]}
          rightTitle="AEO"
          rightItems={[
            "Cherche à devenir la réponse directe",
            "Contenu extractable, questions/réponses",
            "Objectif : l'autorité, même sans clic",
            "Métriques : featured snippets, AI Overviews",
            "Le présent et le futur immédiat",
          ]}
        />
      </SectionWrapper>

      {/* Comment faire l'AEO */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Comment faire de l&apos;AEO ?</div>
          <h2 className="text-display max-w-3xl">
            Les 6 règles qu&apos;on applique{" "}
            <span className="text-italic-serif text-emerald">à chaque page</span>.
          </h2>
        </div>
        <NumberedList
          items={[
            {
              n: "01",
              t: "Questions comme structure",
              d: "Chaque H2 = une question réelle que les gens posent. Pas « Nos services », mais « Comment automatiser mon entreprise ? ».",
            },
            {
              n: "02",
              t: "Réponse directe",
              d: "Premier paragraphe de 50 à 80 mots qui répond directement, sans intro. Google extrait ça pour les featured snippets.",
            },
            {
              n: "03",
              t: "Formats extractables",
              d: "Listes numérotées, tableaux comparatifs, définitions en gras. Google adore ce qu'il peut copier sans réécrire.",
            },
            {
              n: "04",
              t: "Schema JSON-LD",
              d: "FAQPage, HowTo, DefinedTerm, Article. On dit à Google exactement ce qu'il regarde.",
            },
            {
              n: "05",
              t: "E-E-A-T",
              d: "Expertise, expérience, autorité, fiabilité. Les signaux que Google utilise pour choisir ses sources.",
            },
            {
              n: "06",
              t: "Intent matching",
              d: "Pas tous les mots-clés valent un featured snippet. On identifie ceux qui sont pêchables, on priorise.",
            },
          ]}
        />
      </SectionWrapper>

      {/* Plateformes */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Les plateformes qu&apos;on cible</div>
          <h2 className="text-display">
            Où ton contenu{" "}
            <span className="text-italic-serif text-emerald">apparaît</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              name: "Google AI Overviews",
              d: "Les réponses IA affichées en haut des SERP depuis 2024.",
            },
            {
              name: "Featured Snippets",
              d: "La « position zéro » classique — extrait affiché au-dessus des résultats.",
            },
            {
              name: "People Also Ask",
              d: "Les questions connexes expansibles dans les SERP.",
            },
            {
              name: "Knowledge Graph",
              d: "La box d'entité sur la droite, pour les marques et concepts.",
            },
          ].map((p) => (
            <GlassCard key={p.name}>
              <h3 className="text-display text-lg mb-3">{p.name}</h3>
              <p className="text-sm text-muted">{p.d}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mb-12">
          <div className="label-mono mb-5">Questions fréquentes</div>
          <h2 className="text-display">
            L&apos;AEO{" "}
            <span className="text-italic-serif text-emerald">expliqué</span>{" "}
            directement.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <RelatedServices
        items={[
          {
            href: "/services/geo",
            label: "GEO",
            number: "v.04",
            desc: "Le cousin de l'AEO pour ChatGPT et Perplexity.",
          },
          {
            href: "/services/seo",
            label: "SEO",
            number: "v.01",
            desc: "La fondation obligatoire sous l'AEO.",
          },
          {
            href: "/industries/saas",
            label: "SaaS",
            number: "industrie",
            desc: "Pourquoi les SaaS doivent prioriser l'AEO.",
          },
        ]}
      />

      <CTABanner
        title="Deviens la réponse. Pas une option parmi 10."
        text="On audit tes pages les plus stratégiques et on te montre comment capturer la position zéro."
      />
    </>
  );
}
