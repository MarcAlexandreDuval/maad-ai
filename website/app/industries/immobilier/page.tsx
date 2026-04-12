import { IndustryTemplate } from "@/components/ui/IndustryTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "IA pour courtiers et agences immobilières au Québec",
  description:
    "Solutions IA et visibilité web pour courtiers immobiliers et agences au Québec. SEO local, chatbot de pré-qualification, automatisation de suivis.",
  path: "/industries/immobilier",
});

export default function ImmobilierPage() {
  return (
    <IndustryTemplate
      eyebrow="Industrie 06 — Immobilier"
      name="Immobilier"
      path="/industries/immobilier"
      schemaDescription="Solutions IA, automatisation et visibilité web pour courtiers et agences immobilières au Québec"
      title={
        <>
          Leads qualifiés,{" "}
          <span className="text-italic-serif text-emerald">automatiquement</span>.
        </>
      }
      lede={
        <>
          En immobilier, le premier à répondre gagne le mandat. On bâtit des systèmes
          qui captent tes leads 24/7, les pré-qualifient par IA, et te positionnent
          en tête de Google Maps dans ton secteur — pendant que tu es en visite.
        </>
      }
      stats={[
        { value: "78 %", label: "des acheteurs commencent leur recherche en ligne" },
        { value: "5 min", label: "temps moyen avant qu'un lead immobilier refroidisse" },
        { value: "3x", label: "plus de mandats pour les courtiers visibles localement" },
        { value: "35 %", label: "des leads sont perdus par manque de suivi rapide" },
      ]}
      problemTitle={
        <>
          Vendre de l&apos;immobilier en 2026, c&apos;est une{" "}
          <span className="text-italic-serif text-emerald">course</span>.
        </>
      }
      problems={[
        "Tu rates des leads parce que tu réponds 3 heures trop tard.",
        "Ton profil Google Business ne ranke pas dans le pack local de ton secteur.",
        "Tu passes tes soirées à répondre aux mêmes questions sur tes propriétés.",
        "Tes suivis post-visite tombent dans l'oubli — et le client signe ailleurs.",
      ]}
      challengeIntro="L'immobilier au Québec est hyper local et hyper compétitif. Les acheteurs cherchent en ligne, comparent en ligne, et choisissent le courtier qui répond le plus vite et qui apparaît en premier."
      challenges={[
        {
          title: "Vitesse de réponse",
          desc: "Un lead immobilier qui attend 30 minutes est un lead perdu. Mais tu ne peux pas répondre instantanément quand tu es en visite, en négociation ou en route. Tu as besoin d'un système qui répond pour toi.",
        },
        {
          title: "Visibilité locale",
          desc: "Quand quelqu'un cherche « courtier immobilier [ta ville] » sur Google, tu dois apparaître dans le pack local. Sans SEO local optimisé, tes compétiteurs récoltent les leads à ta place.",
        },
        {
          title: "Suivi des prospects",
          desc: "Entre les acheteurs, les vendeurs, les visites et les suivis, tout tombe entre les craques. Sans CRM automatisé, tu perds des mandats par simple oubli de relance.",
        },
      ]}
      services={[
        {
          href: "/services/chatbot-ia",
          label: "Chatbot IA",
          number: "i.01",
          desc: "Un assistant qui répond instantanément aux acheteurs, pré-qualifie les leads et prend les rendez-vous. Il connaît tes listings et répond en ton nom.",
        },
        {
          href: "/services/automatisation",
          label: "Automatisation",
          number: "i.02",
          desc: "Suivis automatiques post-visite, nurturing par courriel, synchronisation CRM et alertes de nouveaux leads. Zéro prospect oublié.",
        },
        {
          href: "/services/seo-local",
          label: "SEO Local",
          number: "v.01",
          desc: "Domine le pack local dans ton quartier, ta ville, ta région. Google Maps, avis optimisés, et profil Google Business qui convertit.",
        },
        {
          href: "/services/conception-web",
          label: "Conception Web",
          number: "v.02",
          desc: "Un site rapide, optimisé SEO, avec listings intégrés et formulaires de contact pensés pour la conversion immobilière.",
        },
      ]}
      stepsTitle={
        <>
          Comment on remplit ton{" "}
          <span className="text-italic-serif text-emerald">agenda</span>.
        </>
      }
      steps={[
        {
          number: "01",
          title: "Analyse",
          desc: "On audite ta présence locale, ton Google Business, ton site et ton processus de suivi pour identifier où tu perds des mandats.",
        },
        {
          number: "02",
          title: "Visibilité",
          desc: "On optimise ton SEO local, ton profil Google, et on bâtit un site qui convertit les visiteurs en demandes de visite.",
        },
        {
          number: "03",
          title: "Automatisation",
          desc: "On déploie le chatbot IA et les workflows de suivi. Chaque lead est capté, qualifié et relancé automatiquement.",
        },
        {
          number: "04",
          title: "Performance",
          desc: "On mesure les résultats — leads générés, temps de réponse, taux de conversion — et on optimise chaque mois.",
        },
      ]}
      ctaTitle="Tes leads méritent une réponse en secondes, pas en heures."
      ctaText="On regarde ton contexte, on propose un plan. 20 minutes, gratuit."
    />
  );
}
