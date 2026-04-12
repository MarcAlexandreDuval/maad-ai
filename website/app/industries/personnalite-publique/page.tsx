import { IndustryTemplate } from "@/components/ui/IndustryTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "IA pour personnalités publiques et créateurs au Québec",
  description:
    "Solutions IA et visibilité web pour personnalités publiques, créateurs de contenu et influenceurs au Québec. Image de marque, automatisation, SEO personnel.",
  path: "/industries/personnalite-publique",
});

export default function PersonnalitePubliquePage() {
  return (
    <IndustryTemplate
      eyebrow="Industrie 05 — Personnalité publique"
      name="Personnalité publique"
      path="/industries/personnalite-publique"
      schemaDescription="Solutions IA, automatisation et visibilité web pour personnalités publiques et créateurs au Québec"
      title={
        <>
          Ton image,{" "}
          <span className="text-italic-serif text-emerald">amplifiée</span>.
        </>
      }
      lede={
        <>
          Tu as le talent et l&apos;audience — mais pas le temps de tout gérer. On automatise
          ta présence en ligne, on optimise ta visibilité sur Google et les IA, et on bâtit
          les outils qui font scaler ton image sans sacrifier l&apos;authenticité.
        </>
      }
      stats={[
        { value: "82 %", label: "des gens cherchent ton nom sur Google avant de te suivre" },
        { value: "5 sec", label: "pour faire une première impression sur ton site web" },
        { value: "47 %", label: "des opportunités sont perdues par manque de réponse rapide" },
        { value: "24/7", label: "ton audience interagit — même quand tu dors" },
      ]}
      problemTitle={
        <>
          Être visible en 2026, c&apos;est un{" "}
          <span className="text-italic-serif text-emerald">métier</span>.
        </>
      }
      problems={[
        "Tu passes plus de temps à gérer ta présence en ligne qu'à créer du contenu.",
        "Tes DM et courriels s'accumulent sans réponse — tu perds des opportunités.",
        "Ton nom ne ressort pas quand on te cherche sur Google ou les IA.",
        "Tu n'as pas de système pour convertir ton audience en revenus concrets.",
      ]}
      challengeIntro="En tant que personnalité publique ou créateur, ton image EST ton business. Mais gérer cette image à l'échelle demande des systèmes que tu n'as pas le temps de bâtir toi-même."
      challenges={[
        {
          title: "Gestion de la demande",
          desc: "Collaborations, demandes médias, messages de fans, propositions commerciales — tout arrive en même temps et dans des canaux différents. Sans système, les meilleures opportunités passent sous le radar.",
        },
        {
          title: "Présence en ligne fragmentée",
          desc: "Tu es sur Instagram, TikTok, YouTube — mais quand quelqu'un Google ton nom, c'est le néant. Pas de site, pas de SEO, pas de contrôle sur ta narrative en ligne.",
        },
        {
          title: "Monétisation de l'audience",
          desc: "Tu as les followers mais pas le funnel. Pas de système pour convertir l'attention en revenus — coaching, formations, événements, produits. L'audience sans conversion, c'est du vanity.",
        },
      ]}
      services={[
        {
          href: "/services/chatbot-ia",
          label: "Chatbot IA",
          number: "i.01",
          desc: "Un assistant qui répond à ton audience 24/7, filtre les demandes et redirige les opportunités sérieuses vers toi. Il parle comme toi.",
        },
        {
          href: "/services/automatisation",
          label: "Automatisation",
          number: "i.02",
          desc: "Workflows pour gérer tes réseaux, tes courriels, ta facturation et tes collaborations automatiquement. Zéro tâche admin qui te ralentit.",
        },
        {
          href: "/services/seo",
          label: "SEO personnel",
          number: "v.01",
          desc: "Ton nom, ton expertise, tes projets — positionnés sur les bons mots-clés. Quand quelqu'un te cherche, il te trouve (et pas un homonyme).",
        },
        {
          href: "/services/aeo",
          label: "AEO",
          number: "v.02",
          desc: "Deviens la réponse quand quelqu'un demande à ChatGPT ou Perplexity qui est expert dans ton domaine. La recommandation par les IA, c'est le nouveau bouche-à-oreille.",
        },
      ]}
      stepsTitle={
        <>
          Comment on amplifie ton{" "}
          <span className="text-italic-serif text-emerald">image</span>.
        </>
      }
      steps={[
        {
          number: "01",
          title: "Portrait",
          desc: "On comprend ta marque personnelle, ton audience, tes sources de revenus et tes objectifs. On identifie ce qui manque.",
        },
        {
          number: "02",
          title: "Fondation",
          desc: "On bâtit ta présence web : site professionnel, SEO de ton nom, chatbot IA configuré avec ta personnalité et tes FAQ.",
        },
        {
          number: "03",
          title: "Automatisation",
          desc: "On connecte tes canaux et on automatise le tri des demandes, le suivi des collaborations et la gestion des revenus.",
        },
        {
          number: "04",
          title: "Amplification",
          desc: "On optimise ta présence sur les IA (AEO/GEO), on itère sur le contenu SEO, et on scale ce qui fonctionne.",
        },
      ]}
      ctaTitle="Ton image mérite mieux qu'un feed mal géré."
      ctaText="On regarde ton contexte, on propose un plan. 20 minutes, gratuit."
    />
  );
}
