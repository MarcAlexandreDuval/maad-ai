import { IndustryTemplate } from "@/components/ui/IndustryTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "IA pour e-commerce au Québec",
  description:
    "Solutions IA, chatbot et visibilité web pour boutiques en ligne québécoises. Conception web, SEO produit, automatisation, chatbot support 24/7.",
  path: "/industries/e-commerce",
});

export default function EcommercePage() {
  return (
    <IndustryTemplate
      eyebrow="Industrie 02 — E-commerce"
      name="E-commerce"
      path="/industries/e-commerce"
      schemaDescription="Solutions IA et visibilité web pour boutiques en ligne québécoises"
      title={
        <>
          Trafic qualifié.{" "}
          <span className="text-italic-serif text-emerald">Conversion</span> sans
          friction.
        </>
      }
      lede={
        <>
          Un e-commerce qui performe a trois problèmes en parallèle : amener le bon trafic,
          le convertir sans friction, et garder le client. On fait les trois avec la même
          intensité — pas juste du trafic, pas juste un chatbot.
        </>
      }
      problemTitle={
        <>
          Trop de visiteurs.{" "}
          <span className="text-italic-serif text-emerald">Pas assez</span> de
          ventes.
        </>
      }
      problems={[
        "Ton taux de conversion plafonne à 1-2 %.",
        "Les clients posent des questions à 22h — personne pour répondre.",
        "Tes fiches produits ne rankent pas dans Google ni dans ChatGPT.",
        "Le support client gruge 30 % du temps de ton équipe.",
      ]}
      services={[
        {
          href: "/services/conception-web",
          label: "Conception Web",
          number: "v.05",
          desc: "Site e-commerce rapide, mobile-first, Core Web Vitals verts. Parce que 100ms de plus = 7 % de conversion de moins.",
        },
        {
          href: "/services/chatbot-ia",
          label: "Chatbot IA",
          number: "i.03",
          desc: "Répond aux questions produit 24/7, guide la commande, récupère les paniers abandonnés.",
        },
        {
          href: "/services/seo",
          label: "SEO",
          number: "v.01",
          desc: "Optimisation des fiches produits et catégories pour Google et les agrégateurs de shopping.",
        },
        {
          href: "/services/automatisation",
          label: "Automatisation",
          number: "i.02",
          desc: "Workflows pour stock, facturation, suivi, retours, avis clients. Tu gères le business, pas la plomberie.",
        },
      ]}
      ctaTitle="Ta boutique peut vendre pendant que tu dors."
      ctaText="On regarde ton site, on identifie les 3 plus gros blocages, et on propose un plan."
    />
  );
}
