import { IndustryTemplate } from "@/components/ui/IndustryTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Agence IA pour startups au Québec",
  description:
    "Solutions IA et visibilité web pour startups québécoises. Conception web rapide, SEO/AEO, agents IA pour scaler sans embaucher.",
  path: "/industries/startup",
});

export default function StartupPage() {
  return (
    <IndustryTemplate
      eyebrow="Industrie 03 — Startup"
      name="Startup"
      path="/industries/startup"
      schemaDescription="Solutions IA et visibilité web pour startups québécoises"
      title={
        <>
          Du MVP au{" "}
          <span className="text-italic-serif text-emerald">momentum</span>.
        </>
      }
      lede={
        <>
          Une startup n&apos;a pas de temps à perdre. Tu as besoin d&apos;un site qui
          convertit le jour 1, d&apos;une visibilité qui ne coûte pas un bras en Google Ads,
          et d&apos;IA qui fait le travail de 3 employés que tu n&apos;as pas encore les moyens
          d&apos;embaucher.
        </>
      }
      stats={[
        { value: "90 %", label: "des startups échouent — la majorité par manque de visibilité" },
        { value: "3x", label: "moins cher d'acquérir en SEO qu'en Google Ads" },
        { value: "1 agent", label: "IA peut remplacer 3 rôles que tu n'as pas le budget d'embaucher" },
        { value: "2 sem", label: "pour déployer un site marketing qui convertit" },
      ]}
      problemTitle={
        <>
          Zéro ressources.{" "}
          <span className="text-italic-serif text-emerald">Tout</span> à faire.
        </>
      }
      problems={[
        "Ton MVP est prêt mais personne ne sait que t'existes.",
        "Tu brûles en Google Ads sans savoir si ça marche vraiment.",
        "T'as pas les moyens d'embaucher — mais tu travailles 70 h/sem.",
        "Ton site ressemble à un template parce que t'as pas eu le temps.",
      ]}
      challengeIntro="En startup, chaque dollar et chaque heure comptent. Tu ne peux pas te permettre de mauvais choix technologiques ou de mois perdus sur une stratégie qui ne donne rien."
      challenges={[
        {
          title: "Visibilité zéro",
          desc: "Ton produit est bon mais personne ne le trouve. Sans autorité de domaine, sans contenu, sans SEO, tu n'existes pas sur Google — et encore moins sur ChatGPT.",
        },
        {
          title: "Pas de budget marketing",
          desc: "Tu ne peux pas concurrencer les gros sur les ads. Il te faut une stratégie organique qui construit de la valeur à long terme plutôt que de brûler du cash en CPC.",
        },
        {
          title: "Trop de chapeaux",
          desc: "Tu es le CEO, le CTO, le vendeur et le support client. Chaque heure passée sur des tâches répétitives est une heure que tu ne mets pas sur le produit ou les ventes.",
        },
      ]}
      services={[
        {
          href: "/services/conception-web",
          label: "Conception Web",
          number: "v.05",
          desc: "Site marketing rapide et beau, livré en semaines pas en mois. Itérable à mesure que tu apprends ton marché. Pensé conversion dès le jour 1.",
        },
        {
          href: "/services/seo",
          label: "SEO",
          number: "v.01",
          desc: "Base SEO propre dès le départ — contenu ciblé, pages de features, topic clusters. Plus rentable que les ads à moyen terme.",
        },
        {
          href: "/services/aeo",
          label: "AEO",
          number: "v.03",
          desc: "Deviens la réponse directe quand quelqu'un pose une question sur ton domaine — même sans autorité de domaine établie.",
        },
        {
          href: "/services/agents-ia",
          label: "Agents IA",
          number: "i.01",
          desc: "Un agent IA qui gère support, qualification de leads et opérations — les 3 rôles que tu n'as pas les moyens d'embaucher.",
        },
      ]}
      stepsTitle={
        <>
          Comment on lance ta{" "}
          <span className="text-italic-serif text-emerald">fusée</span>.
        </>
      }
      steps={[
        {
          number: "01",
          title: "Cadrage",
          desc: "On comprend ton produit, ton marché et tes priorités. On identifie le bottleneck #1 — visibilité, conversion, ou opérations.",
        },
        {
          number: "02",
          title: "Lancement",
          desc: "On déploie le site, le SEO de base et le premier agent IA en parallèle. Pas de phase de recherche de 3 mois — on livre vite.",
        },
        {
          number: "03",
          title: "Traction",
          desc: "On mesure ce qui fonctionne et on double la mise. Contenu qui ranke, agents qui performent, automations qui libèrent du temps.",
        },
        {
          number: "04",
          title: "Scale",
          desc: "Quand la traction arrive, on scale les systèmes sans ajouter de headcount. Plus de contenu, plus d'agents, plus d'automatisations.",
        },
      ]}
      ctaTitle="T'as pas besoin de plus d'employés. T'as besoin d'IA."
      ctaText="On regarde ton MVP, on identifie le bottleneck #1, et on propose une solution."
    />
  );
}
