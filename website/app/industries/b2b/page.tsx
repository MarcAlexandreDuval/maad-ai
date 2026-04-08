import { IndustryTemplate } from "@/components/ui/IndustryTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "IA pour entreprises B2B au Québec",
  description:
    "Solutions IA et visibilité web pour entreprises B2B du Québec. Agents SDR, automatisation CRM, SEO local, génération de leads.",
  path: "/industries/b2b",
});

export default function B2BPage() {
  return (
    <IndustryTemplate
      eyebrow="Industrie 01 — B2B"
      name="B2B"
      path="/industries/b2b"
      schemaDescription="Solutions IA, automatisation et visibilité web pour entreprises B2B au Québec"
      title={
        <>
          Pipelines{" "}
          <span className="text-italic-serif text-emerald">prévisibles</span>.
        </>
      }
      lede={
        <>
          Le B2B au Québec a un problème simple : pas assez de leads qualifiés, trop de
          temps passé à les chercher. On automatise la prospection, on optimise ton
          référencement B2B, et on bâtit des agents qui qualifient tes leads pendant que tu
          closes ceux qui comptent.
        </>
      }
      problemTitle={
        <>
          Vendre en B2B au Québec en 2026, c&apos;est{" "}
          <span className="text-italic-serif text-emerald">dur</span>.
        </>
      }
      problems={[
        "Tes commerciaux passent 60 % de leur temps en prospection manuelle.",
        "Ton CRM est rempli de leads froids que personne ne suit.",
        "Ton site ne ranke pas sur les mots-clés B2B de ton secteur.",
        "Tu rates les leads qui arrivent en dehors des heures de bureau.",
      ]}
      services={[
        {
          href: "/services/agents-ia",
          label: "Agents IA",
          number: "i.01",
          desc: "Agents SDR qui qualifient tes leads entrants, enrichissent les données et routent au bon commercial.",
        },
        {
          href: "/services/automatisation",
          label: "Automatisation",
          number: "i.02",
          desc: "Workflows n8n pour synchroniser CRM, email marketing, facturation, signature électronique.",
        },
        {
          href: "/services/seo",
          label: "SEO B2B",
          number: "v.01",
          desc: "Contenu long-tail sur les mots-clés spécifiques de ton secteur. Topic clusters, autorité.",
        },
        {
          href: "/services/seo-local",
          label: "SEO Local",
          number: "v.02",
          desc: "Pour les B2B qui servent une région — Lanaudière, Rive-Nord, Montréal, partout au Québec.",
        },
      ]}
      ctaTitle="Ton pipeline mérite mieux."
      ctaText="On regarde ton contexte, on propose un plan. 20 minutes, gratuit."
    />
  );
}
