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
      services={[
        {
          href: "/services/conception-web",
          label: "Conception Web",
          number: "v.05",
          desc: "Site marketing rapide et beau, livré en semaines pas en mois. Itérable à mesure que tu apprends ton marché.",
        },
        {
          href: "/services/seo",
          label: "SEO",
          number: "v.01",
          desc: "Base SEO propre dès le départ — contenu ciblé, pas de pages perdues. Plus rentable que les ads.",
        },
        {
          href: "/services/aeo",
          label: "AEO",
          number: "v.03",
          desc: "Deviens la réponse directe sur tes mots-clés — même sans autorité de domaine.",
        },
        {
          href: "/services/agents-ia",
          label: "Agents IA",
          number: "i.01",
          desc: "Un agent IA remplace 3 rôles que tu n'as pas les moyens d'embaucher. Support, sales, ops.",
        },
      ]}
      ctaTitle="T'as pas besoin de plus d'employés. T'as besoin d'IA."
      ctaText="On regarde ton MVP, on identifie le bottleneck #1, et on propose une solution."
    />
  );
}
