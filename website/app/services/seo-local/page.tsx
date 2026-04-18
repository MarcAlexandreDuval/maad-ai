import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { NumberedList, RelatedServices } from "@/components/ui/ServicePageSections";
import { IconSeoLocal } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "SEO Local Joliette — Google Maps & Pack Local",
  description:
    "Agence SEO local à Joliette. Google Business Profile, pack local, avis, citations. Apparais dans Google Maps pour Joliette, Repentigny, Terrebonne.",
  path: "/services/seo-local",
});

const faqs = [
  {
    q: "Comment apparaître dans Google Maps ?",
    a: "Il faut un Google Business Profile complet et optimisé, des avis positifs réguliers, des citations cohérentes (NAP) dans les annuaires, du contenu local sur ton site, et une proximité géographique avec le chercheur. On travaille sur les 5 leviers en parallèle.",
  },
  {
    q: "Comment optimiser Google Business Profile ?",
    a: "Catégorie principale précise, photos hebdo, posts réguliers, réponses aux avis (tous, même négatifs), questions/réponses préremplies, produits/services listés, horaires à jour, zone de service définie. Et de la constance — pas une optimisation one-shot.",
  },
  {
    q: "Combien d'avis pour ranker dans le pack local ?",
    a: "Il n'y a pas de seuil magique. Mais on observe qu'à partir de 30-50 avis avec une note moyenne > 4.5, tu commences à dominer ton pack local — dans la mesure où les autres signaux sont alignés.",
  },
  {
    q: "Tu couvres quelles villes de Lanaudière ?",
    a: "Toute la région : Joliette, Repentigny, L'Assomption, Terrebonne, Mascouche, Saint-Lin-Laurentides, Berthierville, Rawdon, Lavaltrie, Saint-Charles-Borromée. Et au-delà.",
  },
];

export default function SeoLocalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "SEO Local",
            description:
              "SEO local et optimisation Google Business Profile pour PME de Lanaudière",
            path: "/services/seo-local",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="v.02 — SEO Local"
        breadcrumbs={[
          { name: "Services", path: "/services/visibilite-web" },
          { name: "Visibilité Web", path: "/services/visibilite-web" },
          { name: "SEO Local", path: "/services/seo-local" },
        ]}
        title={
          <>
            Trouvé dans{" "}
            <span className="text-italic-serif text-emerald">ton quartier</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">Le SEO local rend ta PME visible dans Google Maps, le pack local et la recherche de proximité.</strong>{" "}
            Quand quelqu&apos;un cherche « plombier Joliette », tu apparais — avant la
            compétition, avec de vrais avis, et un profil qui donne envie d&apos;appeler.
          </>
        }
        visual={<IconSeoLocal />}
      />

      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">5 leviers du SEO local</div>
          <h2 className="text-display max-w-3xl">
            Ce qu&apos;on travaille en{" "}
            <span className="text-italic-serif text-emerald">parallèle</span>.
          </h2>
        </div>
        <NumberedList
          items={[
            {
              n: "01",
              t: "Google Business Profile",
              d: "Optimisation complète : catégories, photos, posts, produits, Q&R, zone de service, attributs.",
            },
            {
              n: "02",
              t: "Avis clients",
              d: "Collecte automatisée, réponses à 100 % des avis, stratégie de volume et fraîcheur.",
            },
            {
              n: "03",
              t: "Citations NAP",
              d: "Cohérence du Nom, Adresse, Téléphone dans 50+ annuaires : Yelp, YP, Bing, Apple Maps.",
            },
            {
              n: "04",
              t: "Contenu local",
              d: "Pages de villes, études de cas locales, contenu ancré dans Lanaudière et Québec.",
            },
            {
              n: "05",
              t: "Backlinks locaux",
              d: "Chambres de commerce, médias locaux, partenaires, événements. Pertinence > volume.",
            },
            {
              n: "06",
              t: "Schema LocalBusiness",
              d: "Données structurées pour que Google comprenne qui tu es, où, et ce que tu offres.",
            },
          ]}
        />
      </SectionWrapper>

      {/* Villes */}
      <SectionWrapper>
        <div className="mb-12 max-w-2xl">
          <div className="label-mono mb-5">Où on travaille</div>
          <h2 className="text-display">
            De Joliette à{" "}
            <span className="text-italic-serif text-emerald">partout</span>.
          </h2>
          <p className="text-muted mt-4">
            On est basé à Joliette, mais on couvre toute la région de Lanaudière et la
            Rive-Nord. Et on travaille à distance avec n&apos;importe quelle PME québécoise.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "Joliette",
            "Repentigny",
            "L'Assomption",
            "Terrebonne",
            "Mascouche",
            "Saint-Lin-Laurentides",
            "Berthierville",
            "Rawdon",
            "Lavaltrie",
            "Saint-Charles-Borromée",
            "Notre-Dame-des-Prairies",
            "Saint-Jean-de-Matha",
            "Chertsey",
            "Crabtree",
          ].map((city) => (
            <span
              key={city}
              className="glass-flat px-4 py-2 label-mono text-[0.65rem]"
            >
              {city}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-12">
          <div className="label-mono mb-5">Questions fréquentes</div>
          <h2 className="text-display">
            Le SEO local{" "}
            <span className="text-italic-serif text-emerald">démystifié</span>.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <BlogCTA topic="le SEO local, Google Maps et la visibilité de quartier" />

      <RelatedServices
        items={[
          { href: "/services/seo", label: "SEO", number: "v.01", desc: "La fondation organique pour tout ton site." },
          { href: "/services/conception-web", label: "Conception Web", number: "v.05", desc: "Un site local-ready dès le départ." },
          { href: "/industries/b2b", label: "B2B Local", number: "industrie", desc: "Solutions SEO local pour services B2B." },
        ]}
      />

      <CTABanner
        title="Tes compétiteurs dominent Google Maps ?"
        text="On fait un audit local gratuit. On te dit où tu perds, et comment reprendre ta place."
      />
    </>
  );
}
