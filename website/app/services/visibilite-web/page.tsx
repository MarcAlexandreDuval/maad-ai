import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTABanner } from "@/components/ui/CTABanner";
import {
  IconSeo,
  IconSeoLocal,
  IconAeo,
  IconGeo,
  IconWeb,
} from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Visibilité Web — SEO, SEO Local, AEO, GEO, Conception",
  description:
    "MAAD-AI combine SEO, AEO et GEO pour rendre ta PME québécoise visible dans Google, les AI Overviews, ChatGPT et Perplexity. Approche intégrée.",
  path: "/services/visibilite-web",
});

const services = [
  {
    icon: <IconSeo />,
    href: "/services/seo",
    label: "SEO",
    def: "La fondation. Optimisation technique, contenu et autorité pour ranker dans Google.",
  },
  {
    icon: <IconSeoLocal />,
    href: "/services/seo-local",
    label: "SEO Local",
    def: "Google Maps, pack local, avis. Pour être trouvé par les clients du quartier.",
  },
  {
    icon: <IconAeo />,
    href: "/services/aeo",
    label: "AEO",
    def: "Answer Engine Optimization. Deviens la réponse directe — featured snippets et AI Overviews.",
    priority: true,
  },
  {
    icon: <IconGeo />,
    href: "/services/geo",
    label: "GEO",
    def: "Generative Engine Optimization. Sois cité et recommandé par ChatGPT, Perplexity, Claude.",
    priority: true,
  },
  {
    icon: <IconWeb />,
    href: "/services/conception-web",
    label: "Conception Web",
    def: "Sites codés main, rapides, avec l'AEO et le GEO intégrés dès la conception.",
  },
];

const faqs = [
  {
    q: "Différence entre SEO, AEO et GEO ?",
    a: "Le SEO optimise pour ranker dans les résultats classiques de Google. L'AEO optimise pour devenir la réponse directe (featured snippets, AI Overviews). Le GEO optimise pour être cité par les LLMs (ChatGPT, Perplexity, Claude, Gemini). Complémentaires.",
  },
  {
    q: "Comment améliorer sa visibilité en ligne en 2026 ?",
    a: "Cinq leviers : (1) SEO technique et contenu, (2) SEO local pour Google Maps, (3) AEO pour devenir la réponse Google, (4) GEO pour être cité par les IA, (5) un site web conçu pour être trouvé. Ces cinq leviers agissent ensemble.",
  },
  {
    q: "Est-ce que le SEO est mort en 2026 ?",
    a: "Non. Le SEO reste la fondation — mais tout seul, il ne suffit plus. 40 % des recherches affichent des AI Overviews. 65 % des recherches sont zero-click. Ton site doit ranker ET être extractable ET être cité par les LLMs.",
  },
];

export default function VisibilitePillarPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Visibilité Web",
            description: "SEO, SEO Local, AEO, GEO et conception web pour PME Québec",
            path: "/services/visibilite-web",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Pôle 02 — Visibilité Web"
        breadcrumbs={[
          { name: "Services", path: "/services/visibilite-web" },
          { name: "Visibilité Web", path: "/services/visibilite-web" },
        ]}
        title={
          <>
            Visible partout.{" "}
            <span className="text-italic-serif text-emerald">Partout</span>.
          </>
        }
        lede={
          <>
            MAAD-AI combine SEO, AEO et GEO — une approche intégrée que très peu
            d&apos;agences au Québec offrent. Tu apparais dans Google, dans les AI Overviews,
            dans ChatGPT, et dans la recherche locale.
          </>
        }
      />

      {/* Évolution SEO → AEO → GEO */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">L&apos;évolution de la recherche</div>
          <h2 className="text-display max-w-3xl">
            La game a{" "}
            <span className="text-italic-serif text-emerald">changé</span> trois
            fois.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              era: "2005 → 2020",
              name: "SEO",
              d: "Des liens bleus. Tu rankes #1, tu gagnes. Keywords, backlinks, contenu.",
              status: "Fondation",
            },
            {
              era: "2020 → 2024",
              name: "AEO",
              d: "Featured snippets. Google répond directement. Tu ne cliques plus — ton contenu doit être extractable.",
              status: "Accélération",
            },
            {
              era: "2024 → ?",
              name: "GEO",
              d: "ChatGPT, Perplexity, Claude. Les LLMs choisissent qui citer. Nouvelles règles, nouveau jeu.",
              status: "Présent",
            },
          ].map((era) => (
            <GlassCard key={era.name}>
              <div className="label-mono text-emerald mb-2">{era.era}</div>
              <h3 className="text-display text-3xl mb-3">{era.name}</h3>
              <p className="text-sm text-muted mb-5">{era.d}</p>
              <div className="label-mono text-[0.62rem] pt-4 border-t border-white/5">
                {era.status}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 5 services */}
      <SectionWrapper>
        <div className="mb-14 max-w-3xl">
          <div className="label-mono mb-5">Les 5 leviers</div>
          <h2 className="text-display">
            Cinq services.{" "}
            <span className="text-italic-serif text-emerald">Une</span> stratégie.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <GlassCard key={s.href} href={s.href}>
              <div className="flex items-start justify-between mb-5">
                {s.icon}
                <div className="label-mono text-emerald">v.0{i + 1}</div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-display text-2xl">{s.label}</h3>
                {s.priority && (
                  <span className="label-mono text-[0.6rem] text-emerald border border-emerald/40 px-2 py-0.5 rounded-full">
                    PRIORITAIRE
                  </span>
                )}
              </div>
              <p className="text-sm text-muted">{s.def}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Inter-pillar */}
      <SectionWrapper>
        <GlassCard>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="label-mono mb-3">Combo gagnant</div>
              <h3 className="text-display text-2xl md:text-3xl mb-3">
                Visible sans{" "}
                <span className="text-italic-serif text-emerald">IA</span>, c&apos;est du
                trafic sans action.
              </h3>
              <p className="text-muted">
                Combine nos services de visibilité avec notre pôle{" "}
                <Link
                  href="/services/intelligence-artificielle"
                  className="text-emerald hover:underline"
                >
                  Intelligence Artificielle
                </Link>{" "}
                — et chaque visiteur devient un client qualifié.
              </p>
            </div>
            <Link href="/services/intelligence-artificielle" className="btn btn-ghost whitespace-nowrap">
              Voir Intelligence Artificielle
            </Link>
          </div>
        </GlassCard>
      </SectionWrapper>

      <CTABanner
        title="Prêt à être trouvé partout ?"
        text="On audit ton site gratuitement. On te dit où tu te caches. Sans engagement."
      />
    </>
  );
}
