import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { INDUSTRIES } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { IndustriesOverviewContent } from "@/components/ui/IndustriesOverviewContent";

export const metadata = buildMetadata({
  title: "Industries — Solutions IA par secteur",
  description:
    "Solutions IA, SEO et visibilité web pour B2B, e-commerce, startups, SaaS, personnalités publiques et immobilier au Québec. Cas d'usage adaptés à chaque industrie.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: INDUSTRIES.map((ind, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: ind.label,
              url: `https://maad-ai.com${ind.href}`,
            })),
          },
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ]}
      />
      <IndustriesOverviewContent />
    </>
  );
}
