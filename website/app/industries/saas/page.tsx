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
      stats={[
        { value: "75 %", label: "des trials SaaS expirent sans conversion" },
        { value: "40 %", label: "des recherches logicielles passent par les IA" },
        { value: "10x", label: "plus de trafic avec un bon SEO de features vs ads" },
        { value: "0 $", label: "de coût marginal par lead quand l'IA te recommande" },
      ]}
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
      challengeIntro="Le SaaS est le secteur le plus compétitif en ligne. Les gros joueurs dominent Google, les IA recommandent les marques connues, et le product-led growth exige une expérience impeccable dès la première minute."
      challenges={[
        {
          title: "Découvrabilité",
          desc: "Tes pages de features ne rankent pas. Les comparatifs et les articles « best X tool » sont dominés par des sites d'affiliation et tes concurrents directs.",
        },
        {
          title: "Activation des trials",
          desc: "Les utilisateurs s'inscrivent mais ne trouvent pas la valeur assez vite. Sans guidance intelligente, ils partent après 3 jours sans avoir atteint le premier « wow moment ».",
        },
        {
          title: "Recommandation par les IA",
          desc: "Quand un prospect demande à ChatGPT ou Perplexity « quel est le meilleur outil pour X », ton nom n'apparaît pas. Tes compétiteurs y sont déjà.",
        },
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
          desc: "Deviens la réponse quand un prospect cherche « comment faire X » — et quand Google AI Overviews répond à sa place.",
        },
        {
          href: "/services/geo",
          label: "GEO",
          number: "v.04",
          desc: "Être cité par ChatGPT, Perplexity et Claude quand un user demande « meilleur outil pour X ». C'est le nouveau SEO.",
        },
        {
          href: "/services/chatbot-ia",
          label: "Chatbot IA",
          number: "i.03",
          desc: "Chatbot d'activation qui guide les trials vers le premier « wow moment ». Il connaît ton produit comme ton meilleur CSM.",
        },
      ]}
      stepsTitle={
        <>
          Comment on fait{" "}
          <span className="text-italic-serif text-emerald">scaler</span> ton SaaS.
        </>
      }
      steps={[
        {
          number: "01",
          title: "Analyse",
          desc: "On audite ton SEO, tes mentions IA, ton taux d'activation et ton funnel complet pour identifier où tu perds le plus.",
        },
        {
          number: "02",
          title: "Positionnement",
          desc: "On construit ta stratégie de contenu : pages features, comparatifs, schema markup, et optimisation AEO/GEO.",
        },
        {
          number: "03",
          title: "Activation",
          desc: "On déploie le chatbot IA entraîné sur ton produit pour guider les trials vers la conversion. Onboarding intelligent 24/7.",
        },
        {
          number: "04",
          title: "Domination",
          desc: "On itère sur les données — quel contenu ranke, quelles IA te citent, quel onboarding convertit. On double la mise sur ce qui marche.",
        },
      ]}
      ctaTitle="Les SaaS qui gagnent en 2026 sont ceux que ChatGPT cite."
      ctaText="On regarde où tu perds déjà. On te dit quoi changer pour renverser ça."
    />
  );
}
