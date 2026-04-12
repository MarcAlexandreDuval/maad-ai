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
      stats={[
        { value: "1-2 %", label: "taux de conversion moyen en e-commerce au Québec" },
        { value: "70 %", label: "des paniers sont abandonnés avant le paiement" },
        { value: "100 ms", label: "de temps de chargement en plus = 7 % de conversion en moins" },
        { value: "24/7", label: "les clients achètent — ton support répond-il ?" },
      ]}
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
      challengeIntro="Le e-commerce au Québec est devenu ultra-compétitif. Les marketplaces dominent Google, les clients s'attendent à des réponses instantanées, et ton site doit performer sur chaque milliseconde."
      challenges={[
        {
          title: "Acquisition de trafic",
          desc: "Les ads coûtent de plus en plus cher, et ton SEO produit est noyé sous Amazon et les gros joueurs. Sans stratégie organique, tu brûles du budget sans retour.",
        },
        {
          title: "Expérience client",
          desc: "Un client qui attend 2 heures pour une réponse sur la taille ou la livraison achète ailleurs. L'expérience post-achat est souvent négligée — retours, avis, fidélisation.",
        },
        {
          title: "Opérations manuelles",
          desc: "Gestion de stock, facturation, suivi de commandes, réponses support — tu passes plus de temps sur la logistique que sur le développement de ton business.",
        },
      ]}
      services={[
        {
          href: "/services/conception-web",
          label: "Conception Web",
          number: "v.05",
          desc: "Site e-commerce rapide, mobile-first, Core Web Vitals verts. Chaque milliseconde de chargement en moins est un pourcentage de conversion en plus.",
        },
        {
          href: "/services/chatbot-ia",
          label: "Chatbot IA",
          number: "i.03",
          desc: "Répond aux questions produit 24/7, guide la commande, récupère les paniers abandonnés. Il connaît ton catalogue comme un vendeur senior.",
        },
        {
          href: "/services/seo",
          label: "SEO",
          number: "v.01",
          desc: "Optimisation des fiches produits et catégories pour Google et les agrégateurs de shopping. Chaque produit devient une porte d'entrée organique.",
        },
        {
          href: "/services/automatisation",
          label: "Automatisation",
          number: "i.02",
          desc: "Workflows pour stock, facturation, suivi, retours et avis clients. Tu gères le business, pas la plomberie.",
        },
      ]}
      stepsTitle={
        <>
          Comment on transforme ta{" "}
          <span className="text-italic-serif text-emerald">boutique</span>.
        </>
      }
      steps={[
        {
          number: "01",
          title: "Diagnostic",
          desc: "On audite ton site, tes taux de conversion, ton parcours client et tes outils existants pour trouver les points de friction.",
        },
        {
          number: "02",
          title: "Optimisation",
          desc: "On corrige les bases : vitesse du site, SEO produit, expérience mobile, et on installe le chatbot IA sur ton catalogue.",
        },
        {
          number: "03",
          title: "Automatisation",
          desc: "On connecte tes outils — CRM, facturation, stock, livraison — pour éliminer les tâches manuelles qui te ralentissent.",
        },
        {
          number: "04",
          title: "Croissance",
          desc: "On itère sur les données : A/B tests, contenu SEO, optimisation du chatbot. Chaque mois, tes métriques montent.",
        },
      ]}
      ctaTitle="Ta boutique peut vendre pendant que tu dors."
      ctaText="On regarde ton site, on identifie les 3 plus gros blocages, et on propose un plan."
    />
  );
}
