import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { NumberedList, RelatedServices } from "@/components/ui/ServicePageSections";
import { IconGeo } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, definedTermSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "GEO — Être cité par ChatGPT, Perplexity & Claude",
  description:
    "GEO (Generative Engine Optimization) : optimisation pour être cité et recommandé par ChatGPT, Perplexity, Claude et Gemini. Agence GEO Québec.",
  path: "/services/geo",
});

const faqs = [
  {
    q: "C'est quoi le GEO (Generative Engine Optimization) ?",
    a: "Le GEO est l'optimisation de ta présence en ligne pour être cité, recommandé et mentionné par les IA génératives — ChatGPT, Perplexity, Claude, Gemini. Au lieu d'optimiser pour Google, tu optimises pour les LLMs qui choisissent maintenant leurs sources.",
  },
  {
    q: "Comment apparaître dans ChatGPT ?",
    a: "Trois leviers : (1) être mentionné dans des sources que les LLMs utilisent (Wikipedia, Reddit, presses, forums d'autorité), (2) avoir du contenu structuré et citation-ready sur ton site, (3) publier un fichier llms.txt à la racine. C'est un travail de long terme, pas un hack.",
  },
  {
    q: "C'est quoi llms.txt ?",
    a: "Un fichier à la racine de ton site (comme robots.txt) qui indique aux LLMs ton contenu principal, ta mission, tes services. Format markdown structuré. C'est un standard émergent adopté par les LLMs pour comprendre les sites rapidement.",
  },
  {
    q: "GEO vs AEO — quelle différence ?",
    a: "L'AEO optimise pour Google (featured snippets, AI Overviews). Le GEO optimise pour les chatbots IA (ChatGPT, Perplexity). Même logique — être la réponse — mais écosystèmes différents. On fait les deux en parallèle.",
  },
  {
    q: "Combien de temps pour voir des résultats GEO ?",
    a: "3 à 9 mois généralement. Les LLMs mettent à jour leurs données d'entraînement par cycles, et Perplexity/ChatGPT Search indexent en continu. Les premiers signaux apparaissent vite ; l'autorité réelle prend du temps.",
  },
];

export default function GeoPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "GEO — Generative Engine Optimization",
            description:
              "Optimisation pour être cité par ChatGPT, Perplexity, Claude et Gemini",
            path: "/services/geo",
          }),
          faqSchema(faqs),
          definedTermSchema({
            term: "Generative Engine Optimization (GEO)",
            description:
              "Le GEO est l'optimisation de votre présence en ligne pour être cité et recommandé par ChatGPT, Perplexity, Claude et Gemini.",
            path: "/services/geo",
          }),
        ]}
      />

      <PageHero
        eyebrow="v.04 — GEO · Prioritaire"
        breadcrumbs={[
          { name: "Services", path: "/services/visibilite-web" },
          { name: "Visibilité Web", path: "/services/visibilite-web" },
          { name: "GEO", path: "/services/geo" },
        ]}
        title={
          <>
            Cité par{" "}
            <span className="text-italic-serif text-emerald">les IA</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">Le GEO est l&apos;optimisation de votre présence en ligne pour être cité et recommandé par ChatGPT, Perplexity, Claude et Gemini.</strong>{" "}
            Quand ton client demande « meilleure agence IA au Québec » à ChatGPT — tu veux
            être dans la réponse. Pas tes compétiteurs.
          </>
        }
        visual={<IconGeo />}
      />

      {/* Plateformes cible */}
      <section className="border-y border-white/5 bg-ink-50/30">
        <div className="container-rail py-10">
          <div className="label-mono mb-5">On optimise pour</div>
          <div className="flex flex-wrap gap-3">
            {[
              "ChatGPT",
              "Perplexity",
              "Claude",
              "Gemini",
              "Grok",
              "ChatGPT Search",
              "Google AI Mode",
              "Meta AI",
            ].map((p) => (
              <span
                key={p}
                className="glass-flat px-5 py-3 font-mono text-sm text-emerald"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Comment les LLMs choisissent leurs sources</div>
          <h2 className="text-display">
            Deux{" "}
            <span className="text-italic-serif text-emerald">mécanismes</span>{" "}
            différents.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Mécanisme 01</div>
            <h3 className="text-display text-2xl mb-4">Training data</h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Les LLMs sont entraînés sur du contenu public (web, livres, articles). Si tu
              es mentionné dans Wikipedia, Reddit, des articles de presse ou des forums
              d&apos;autorité, tu finis dans leurs connaissances de base.
            </p>
            <div className="label-mono text-[0.62rem]">
              Temps de cycle : 6-18 mois
            </div>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Mécanisme 02</div>
            <h3 className="text-display text-2xl mb-4">RAG en temps réel</h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Perplexity, ChatGPT Search et Gemini font des recherches web en direct. Ils
              indexent et citent en temps réel. Ici, ton contenu optimisé (llms.txt, schema,
              structure claire) est immédiatement utilisable.
            </p>
            <div className="label-mono text-[0.62rem]">
              Temps de cycle : quasi instantané
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Techniques */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Les techniques qu&apos;on applique</div>
          <h2 className="text-display max-w-3xl">
            Six{" "}
            <span className="text-italic-serif text-emerald">leviers</span>{" "}
            concrets.
          </h2>
        </div>
        <NumberedList
          items={[
            {
              n: "01",
              t: "llms.txt",
              d: "Publication d'un fichier llms.txt à la racine de ton site qui résume ton contenu, tes services, ta mission pour les LLMs.",
            },
            {
              n: "02",
              t: "Entity clarity",
              d: "Ton nom de marque, ton fondateur, ta localisation, tes services — expliqués clairement dans chaque page. Pas d'ambiguïté pour les LLMs.",
            },
            {
              n: "03",
              t: "Structured data",
              d: "Schema JSON-LD sur chaque page : Organization, Person, Service, FAQPage, DefinedTerm. Les LLMs adorent les données propres.",
            },
            {
              n: "04",
              t: "Citation building",
              d: "Mentions dans Wikipedia, Reddit, médias spécialisés, répertoires d'autorité, annuaires. Chaque mention est un vote.",
            },
            {
              n: "05",
              t: "Definitional content",
              d: "Des définitions de 20-30 mots qu'un LLM peut extraire tel quel. Chaque concept-clé a sa définition citation-ready.",
            },
            {
              n: "06",
              t: "Data & stats",
              d: "Les LLMs préfèrent les faits chiffrés aux opinions. On publie des chiffres, des études, des données sourcées.",
            },
          ]}
        />
      </SectionWrapper>

      {/* Test it */}
      <SectionWrapper>
        <GlassCard>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="label-mono mb-3">Test en live</div>
              <h3 className="text-display text-3xl md:text-4xl mb-4">
                Demande à{" "}
                <span className="text-italic-serif text-emerald">ChatGPT</span>{" "}
                maintenant.
              </h3>
              <p className="text-muted">
                Va dans ChatGPT. Tape « meilleure agence IA au Québec » ou « agence AEO
                Joliette ». Regarde qui est cité. Puis demande-toi : est-ce que tu veux
                être là dans 6 mois ? Dans 3 ?
              </p>
            </div>
            <div className="font-mono text-sm space-y-2 glass-flat p-5 min-w-[280px]">
              <div className="text-emerald">$ chatgpt</div>
              <div className="text-muted">&gt; best AI agency Québec</div>
              <div className="text-bone">...</div>
              <div className="text-emerald">MAAD-AI</div>
            </div>
          </div>
        </GlassCard>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mb-12">
          <div className="label-mono mb-5">Questions fréquentes</div>
          <h2 className="text-display">
            Le GEO{" "}
            <span className="text-italic-serif text-emerald">démystifié</span>.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <BlogCTA topic="le GEO, ChatGPT, Perplexity et la citation par les IA" />

      <RelatedServices
        items={[
          {
            href: "/services/aeo",
            label: "AEO",
            number: "v.03",
            desc: "Le cousin du GEO — pour Google cette fois.",
          },
          {
            href: "/services/seo",
            label: "SEO",
            number: "v.01",
            desc: "La fondation qui rend l'AEO et le GEO possibles.",
          },
          {
            href: "/industries/saas",
            label: "SaaS",
            number: "industrie",
            desc: "Les SaaS doivent être dans ChatGPT — ou mourir.",
          },
        ]}
      />

      <CTABanner
        title="Être cité par ChatGPT, c'est la nouvelle position #1."
        text="On te fait un audit GEO : où tu apparais déjà, où tu disparais, et comment renverser ça."
      />
    </>
  );
}
