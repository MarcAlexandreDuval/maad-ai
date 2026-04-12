import { IndustryTemplate } from "@/components/ui/IndustryTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "IA pour entreprises B2B au Québec",
  description:
    "Solutions IA et visibilité web pour entreprises B2B du Québec. Agents SDR, automatisation CRM, SEO B2B, génération de leads qualifiés.",
  path: "/industries/b2b",
});

export default function B2BPage() {
  return (
    <IndustryTemplate
      eyebrow="Industrie 01 — B2B"
      name="B2B"
      path="/industries/b2b"
      schemaDescription="Solutions IA, automatisation et visibilité web pour entreprises B2B au Québec"
      title={
        <>
          Pipelines{" "}
          <span className="text-italic-serif text-emerald">prévisibles</span>.
        </>
      }
      lede={
        <>
          Le B2B au Québec a un problème simple : pas assez de leads qualifiés, trop de
          temps passé à les chercher. On automatise la prospection, on optimise ton
          référencement B2B, et on bâtit des agents qui qualifient tes leads pendant que tu
          closes ceux qui comptent.
        </>
      }
      stats={[
        { value: "60 %", label: "du temps commercial perdu en prospection manuelle" },
        { value: "67 %", label: "du parcours B2B se fait en ligne avant le premier appel" },
        { value: "3x", label: "plus de leads qualifiés avec un agent SDR automatisé" },
        { value: "80 %", label: "des décideurs préfèrent un article à un appel à froid" },
      ]}
      problemTitle={
        <>
          Vendre en B2B au Québec en 2026, c&apos;est{" "}
          <span className="text-italic-serif text-emerald">dur</span>.
        </>
      }
      problems={[
        "Tes commerciaux passent 60 % de leur temps en prospection manuelle.",
        "Ton CRM est rempli de leads froids que personne ne suit.",
        "Ton site ne ranke pas sur les mots-clés B2B de ton secteur.",
        "Tu rates les leads qui arrivent en dehors des heures de bureau.",
      ]}
      challengeIntro="Le B2B québécois est en pleine transformation digitale. Les cycles de vente s'allongent, les acheteurs font leurs recherches seuls, et les équipes de vente n'ont pas les outils pour suivre."
      challenges={[
        {
          title: "Génération de leads",
          desc: "Tes sources de leads sont éparpillées — LinkedIn, site web, événements, referrals. Sans système unifié, tu perds des opportunités et tu ne sais pas ce qui fonctionne.",
        },
        {
          title: "Cycle de vente long",
          desc: "En B2B, le cycle de vente dure des semaines, voire des mois. Sans automatisation des suivis et du nurturing, les prospects refroidissent et signent ailleurs.",
        },
        {
          title: "Visibilité en ligne",
          desc: "Tes concurrents investissent en SEO et en contenu. Si tu n'apparais pas quand un décideur cherche ta solution sur Google ou ChatGPT, tu n'existes pas.",
        },
      ]}
      services={[
        {
          href: "/services/agents-ia",
          label: "Agents IA",
          number: "i.01",
          desc: "Agents SDR qui qualifient tes leads entrants, enrichissent les données et routent au bon commercial. Disponibles 24/7, ils répondent en secondes.",
        },
        {
          href: "/services/automatisation",
          label: "Automatisation",
          number: "i.02",
          desc: "Workflows n8n pour synchroniser CRM, email marketing, facturation et signature électronique. Zéro tâche manuelle entre la prospection et la conversion.",
        },
        {
          href: "/services/seo",
          label: "SEO B2B",
          number: "v.01",
          desc: "Contenu long-tail sur les mots-clés spécifiques de ton secteur. Topic clusters, autorité de domaine, et positionnement sur les requêtes à forte intention.",
        },
        {
          href: "/services/aeo",
          label: "AEO",
          number: "v.02",
          desc: "Fais en sorte que ChatGPT, Perplexity et Gemini te recommandent quand un décideur cherche une solution comme la tienne.",
        },
      ]}
      stepsTitle={
        <>
          Comment on transforme ton{" "}
          <span className="text-italic-serif text-emerald">pipeline</span>.
        </>
      }
      steps={[
        {
          number: "01",
          title: "Audit",
          desc: "On analyse ton CRM, ton site, tes canaux d'acquisition et ton processus de vente actuel pour identifier les fuites.",
        },
        {
          number: "02",
          title: "Architecture",
          desc: "On conçoit le système : agents IA, workflows d'automatisation, stratégie de contenu SEO et intégrations CRM.",
        },
        {
          number: "03",
          title: "Déploiement",
          desc: "On bâtit et déploie les outils en production. Chaque composante est testée et connectée à tes systèmes existants.",
        },
        {
          number: "04",
          title: "Optimisation",
          desc: "On mesure les résultats, on ajuste les prompts, les workflows et le contenu. Itération continue basée sur les données.",
        },
      ]}
      ctaTitle="Ton pipeline mérite mieux."
      ctaText="On regarde ton contexte, on propose un plan. 20 minutes, gratuit."
    />
  );
}
