import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { INDUSTRIES } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

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

      <PageHero
        eyebrow="Industries"
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
        title={
          <>
            Chaque secteur a{" "}
            <span className="text-italic-serif text-emerald">ses blocages</span>.
          </>
        }
        lede={
          <>
            On adapte nos services à ton industrie : les priorités d&apos;un SaaS ne sont
            pas celles d&apos;un e-commerce, et un B2B n&apos;a pas les mêmes enjeux qu&apos;une
            startup. Six terrains de jeu, six approches.
          </>
        }
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <GlassCard key={ind.href} href={ind.href}>
              <div className="flex flex-col gap-4 h-full">
                <div className="label-mono text-emerald">
                  0{i + 1}
                </div>
                <h3 className="text-display text-3xl md:text-4xl">{ind.label}</h3>
                <p className="text-muted">{ind.desc}</p>
                <div className="mt-auto pt-6 label-mono flex items-center gap-2 text-emerald">
                  Explorer →
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ton industrie n'est pas listée ?"
        text="On travaille aussi avec du manufacturier, des services pro, des OBNL. Écris-nous."
      />
    </>
  );
}
