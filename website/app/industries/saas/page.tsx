import { IndustryTemplate } from "@/components/ui/IndustryTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "SEO SaaS Québec — AEO & GEO pour éditeurs logiciels",
  description:
    "SEO, AEO et GEO pour SaaS québécois. SEO de fonctionnalités, être cité par ChatGPT, chatbot onboarding. Stack moderne pour scaler.",
  path: "/industries/saas",
});

export default function SaaSPage() {
  return (
    <IndustryTemplate
      eyebrow="Industrie 04 — SaaS"
      name="SaaS"
      path="/industries/saas"
      schemaDescription="Solutions SEO, AEO, GEO et IA pour SaaS québécois"
      title={
        <>
          SEO de feature.{" "}
          <span className="text-italic-serif text-emerald">Activation</span> par
          IA.
        </>
      }
      lede={
        <>
          Un SaaS a deux courbes à nourrir : l&apos;acquisition (ranker sur les requêtes
          de fonctionnalité) et l&apos;activation (que les trials deviennent des clients
          payants). Les deux ont été réinventées par l&apos;IA et par l&apos;AEO. On te
          rattrape.
        </>
      }
      problemTitle={
        <>
          Ranker est{" "}
          <span className="text-italic-serif text-emerald">dur</span>. Activer
          l&apos;est encore plus.
        </>
      }
      problems={[
        "Les éditeurs SaaS dominants écrasent tes mots-clés de fonctionnalité.",
        "ChatGPT recommande tes compétiteurs quand un utilisateur demande « meilleur outil pour X ».",
        "Tes trials expirent sans que les users aient compris la valeur.",
        "Ton onboarding compte sur un humain — ça ne scale pas.",
      ]}
      services={[
        {
          href: "/services/seo",
          label: "SEO SaaS",
          number: "v.01",
          desc: "Pages de fonctionnalités, comparatifs, alternatives, cas d'usage. Topic clusters pensés pour le buyer's journey SaaS.",
        },
        {
          href: "/services/aeo",
          label: "AEO",
          number: "v.03",
          desc: "Deviens la réponse quand un prospect cherche « comment faire X » — et quand Google AI Overviews répond.",
        },
        {
          href: "/services/geo",
          label: "GEO",
          number: "v.04",
          desc: "Être cité par ChatGPT, Perplexity et Claude quand un user demande « meilleur outil pour X ». Crucial.",
        },
        {
          href: "/services/chatbot-ia",
          label: "Chatbot IA",
          number: "i.03",
          desc: "Chatbot d'activation qui guide les trials vers le premier « wow moment » — ton taux d'activation double.",
        },
      ]}
      ctaTitle="Les SaaS qui gagnent en 2026 sont ceux que ChatGPT cite."
      ctaText="On regarde où tu perds déjà. On te dit quoi changer pour renverser ça."
    />
  );
}
