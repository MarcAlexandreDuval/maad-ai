import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTABanner } from "@/components/ui/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "FAQ — Questions fréquentes sur l'IA, l'AEO et le GEO",
  description:
    "Réponses directes aux questions fréquentes sur les agents IA, chatbots, SEO, AEO, GEO et la visibilité web pour PME québécoises.",
  path: "/faq",
});

const faqs: { q: string; a: string; href: string; linkLabel: string }[] = [
  {
    q: "C'est quoi l'AEO (Answer Engine Optimization) ?",
    a: "L'AEO est l'optimisation de contenu pour devenir la réponse directe affichée par Google — featured snippets, AI Overviews, People Also Ask. Au lieu de viser le clic, tu vises l'autorité et la visibilité dans les réponses directes. C'est complémentaire au SEO classique.",
    href: "/services/aeo",
    linkLabel: "En savoir plus sur l'AEO",
  },
  {
    q: "C'est quoi le GEO (Generative Engine Optimization) ?",
    a: "Le GEO est l'optimisation de ta présence pour être cité par ChatGPT, Perplexity, Claude et Gemini. Trois leviers : mentions dans des sources d'autorité, contenu structuré citation-ready, publication d'un llms.txt. Le complément naturel de l'AEO pour l'ère des LLMs.",
    href: "/services/geo",
    linkLabel: "En savoir plus sur le GEO",
  },
  {
    q: "C'est quoi un agent IA ?",
    a: "Un agent IA est un système autonome qui exécute des tâches complexes — analyser, décider, agir dans plusieurs systèmes — sans intervention humaine constante. Contrairement à un chatbot qui répond, un agent livre un résultat concret.",
    href: "/services/agents-ia",
    linkLabel: "Explorer les agents IA",
  },
  {
    q: "C'est quoi un chatbot IA ?",
    a: "Un chatbot IA utilise des LLMs (GPT-4, Claude) pour comprendre et répondre en langage naturel — contrairement aux anciens chatbots scriptés. Il peut être déployé sur web, WhatsApp, Messenger, ou au téléphone avec une voix IA réaliste.",
    href: "/services/chatbot-ia",
    linkLabel: "Explorer les chatbots IA",
  },
  {
    q: "C'est quoi le SEO local ?",
    a: "Le SEO local rend ton entreprise visible dans Google Maps, le pack local et la recherche de proximité. Cinq leviers : Google Business Profile optimisé, avis clients, citations NAP cohérentes, contenu local, backlinks locaux.",
    href: "/services/seo-local",
    linkLabel: "Explorer le SEO Local",
  },
  {
    q: "Pourquoi une PME a besoin d'IA en 2026 ?",
    a: "Parce que 40 % des recherches affichent des AI Overviews, parce que tes clients posent leurs questions à ChatGPT directement, et parce que l'IA peut automatiser des processus qui te volent 10+ heures par semaine. Ne pas s'y mettre maintenant, c'est prendre du retard mesurable.",
    href: "/services/intelligence-artificielle",
    linkLabel: "Voir tous les services IA",
  },
  {
    q: "AEO vs SEO quelle différence ?",
    a: "Le SEO vise à ranker dans les résultats Google classiques. L'AEO vise à devenir la réponse directe affichée avant les résultats (featured snippets, AI Overviews). Le SEO cherche le clic, l'AEO cherche l'autorité. Les deux sont complémentaires et on fait les deux en parallèle.",
    href: "/services/aeo",
    linkLabel: "En savoir plus sur l'AEO",
  },
  {
    q: "Comment apparaître dans ChatGPT ?",
    a: "Trois leviers : (1) être mentionné dans des sources que ChatGPT utilise (Wikipedia, Reddit, presse), (2) structurer ton site avec du schema JSON-LD et un llms.txt, (3) publier du contenu factuel et extractable. Les résultats prennent 3 à 9 mois.",
    href: "/services/geo",
    linkLabel: "En savoir plus sur le GEO",
  },
  {
    q: "Comment automatiser mon entreprise avec l'IA ?",
    a: "Commence par mesurer combien de temps chaque processus te coûte. Choisis le plus douloureux. Automatise-le en 2 semaines avec un pilote minimal. Prouve le ROI. Ensuite seulement, étends à d'autres processus.",
    href: "/services/automatisation",
    linkLabel: "Explorer l'automatisation",
  },
  {
    q: "MAAD-AI travaille avec quel type d'entreprise ?",
    a: "Principalement des PME québécoises en B2B, e-commerce, SaaS et startups. On est basé à Joliette et on couvre toute la province à distance. Tu peux nous contacter peu importe ton industrie — on fera un fit check rapide.",
    href: "/industries",
    linkLabel: "Voir les industries",
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.map((f) => ({ q: f.q, a: f.a })))} />

      <PageHero
        eyebrow="FAQ"
        breadcrumbs={[{ name: "FAQ", path: "/faq" }]}
        title={
          <>
            Les{" "}
            <span className="text-italic-serif text-emerald">vraies</span>{" "}
            questions.
          </>
        }
        lede={
          <>
            Les questions qu&apos;on reçoit chaque semaine. Réponses courtes, liens vers
            les pages qui creusent. Si ta question n&apos;est pas ici, écris-nous.
          </>
        }
      />

      <SectionWrapper>
        <div className="max-w-4xl flex flex-col gap-8">
          {faqs.map((f, i) => (
            <div key={i} className="glass p-7 md:p-8">
              <div className="label-mono text-emerald mb-3">
                Q.{String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-display text-2xl md:text-3xl mb-5">{f.q}</h3>
              <p className="text-muted leading-relaxed mb-6">{f.a}</p>
              <Link
                href={f.href}
                className="label-mono text-emerald hover:underline inline-flex items-center gap-2"
              >
                {f.linkLabel}
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ta question n'est pas ici ?"
        text="Écris-nous. On répond à toutes les questions — même celles qu'on ne met pas sur le site."
      />
    </>
  );
}
