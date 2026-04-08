import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { NumberedList, RelatedServices } from "@/components/ui/ServicePageSections";
import { IconWeb } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Conception Site Web Joliette — Sites rapides & SEO-ready",
  description:
    "Conception de sites web à Joliette et dans Lanaudière. Codés main, rapides, SEO-ready, AEO et GEO intégrés dès la conception. Pas de templates.",
  path: "/services/conception-web",
});

const faqs = [
  {
    q: "C'est quoi un site web SEO-ready ?",
    a: "Un site SEO-ready est construit avec l'optimisation intégrée dès la première ligne de code : HTML sémantique, vitesse de chargement (< 2.5s LCP), schema JSON-LD, architecture pensée pour les topic clusters, et contenu extractable pour l'AEO. Ce n'est pas ajouté après — c'est dans les fondations.",
  },
  {
    q: "Comment choisir une agence web à Joliette ?",
    a: "Regarde trois choses : (1) leurs anciens sites : vitesse, code, SEO — pas juste le design ; (2) leur compréhension du AEO et du GEO — pas seulement du SEO classique ; (3) leur stack : Next.js, Astro ou équivalent moderne, pas WordPress par défaut.",
  },
  {
    q: "Vous utilisez WordPress ?",
    a: "Rarement. On préfère Next.js et des stacks modernes pour la performance, la sécurité et la flexibilité. WordPress reste valide pour certains projets (blogs à gros volume, clients qui gèrent eux-mêmes) — on le propose quand c'est le bon outil.",
  },
  {
    q: "Combien de temps pour un nouveau site ?",
    a: "Site vitrine 5-10 pages : 4-6 semaines. Site complexe avec e-commerce ou portail : 8-16 semaines. On livre un site vivant dès semaine 2-3 pour itérer avec toi au lieu d'un gros reveal à la fin.",
  },
];

export default function ConceptionWebPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Conception Web",
            description:
              "Conception de sites web performants avec SEO, AEO et GEO intégrés",
            path: "/services/conception-web",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="v.05 — Conception Web"
        breadcrumbs={[
          { name: "Services", path: "/services/visibilite-web" },
          { name: "Visibilité Web", path: "/services/visibilite-web" },
          { name: "Conception Web", path: "/services/conception-web" },
        ]}
        title={
          <>
            Sites faits pour{" "}
            <span className="text-italic-serif text-emerald">être trouvés</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">Chaque site MAAD-AI est construit avec l&apos;AEO et le GEO intégrés dès la conception — optimisé pour Google ET ChatGPT.</strong>{" "}
            Codés main en Next.js, pas de templates WordPress, pas de page builders lourds.
            Rapide, beau, et fait pour être lu par les humains et les IA.
          </>
        }
        visual={<IconWeb />}
      />

      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Ce qu&apos;on inclut</div>
          <h2 className="text-display max-w-3xl">
            Pas juste{" "}
            <span className="text-italic-serif text-emerald">un site joli</span>.
          </h2>
        </div>
        <NumberedList
          items={[
            {
              n: "01",
              t: "Design sur mesure",
              d: "Design direction complète : typographie, palette, illustrations, animations. Pas de template.",
            },
            {
              n: "02",
              t: "Code moderne",
              d: "Next.js, TypeScript, Tailwind. Core Web Vitals verts. Zéro JavaScript inutile.",
            },
            {
              n: "03",
              t: "SEO intégré",
              d: "Schema JSON-LD, sitemap, robots, meta, OG, HTML sémantique. Dès la première ligne.",
            },
            {
              n: "04",
              t: "AEO intégré",
              d: "Structure question-réponse, premier paragraphe extractable, FAQ schema, définitions citation-ready.",
            },
            {
              n: "05",
              t: "GEO intégré",
              d: "llms.txt, entity clarity, mentions sourcées, données structurées — pour ChatGPT et Perplexity.",
            },
            {
              n: "06",
              t: "CMS si besoin",
              d: "Sanity, Payload ou headless custom — quand tu veux gérer ton contenu toi-même.",
            },
          ]}
        />
      </SectionWrapper>

      {/* Stack */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="label-mono mb-5">Notre stack</div>
            <h2 className="text-display mb-6">
              Pas de{" "}
              <span className="text-italic-serif text-emerald">templates</span>.
              Pas de WordPress par défaut.
            </h2>
            <p className="text-muted leading-relaxed">
              Les sites qu&apos;on livre sont construits pour durer 5 ans. Code propre,
              dépendances à jour, performance garantie. Quand tu veux ajouter une
              fonctionnalité dans 18 mois, elle s&apos;ajoute — pas besoin de tout refaire.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Next.js", use: "React framework" },
              { name: "TypeScript", use: "Type-safety" },
              { name: "Tailwind", use: "Design system" },
              { name: "Sanity", use: "Headless CMS" },
              { name: "Vercel", use: "Hébergement edge" },
              { name: "Framer Motion", use: "Animations" },
            ].map((t) => (
              <div key={t.name} className="glass-flat p-4">
                <div className="font-mono text-sm text-emerald mb-1">{t.name}</div>
                <div className="label-mono text-[0.62rem]">{t.use}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-12">
          <div className="label-mono mb-5">Questions fréquentes</div>
          <h2 className="text-display">
            Avant de{" "}
            <span className="text-italic-serif text-emerald">refaire</span>{" "}
            ton site.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <RelatedServices
        items={[
          { href: "/services/seo", label: "SEO", number: "v.01", desc: "La base technique du site." },
          { href: "/services/seo-local", label: "SEO Local", number: "v.02", desc: "Intégration Google Business Profile." },
          { href: "/services/aeo", label: "AEO", number: "v.03", desc: "Structure pensée pour les moteurs de réponse." },
        ]}
      />

      <CTABanner
        title="Ton site est beau. Personne le trouve."
        text="On le refait. Rapide, optimisé pour Google et ChatGPT, codé main."
      />
    </>
  );
}
