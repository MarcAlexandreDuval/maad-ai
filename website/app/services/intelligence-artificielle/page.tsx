import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { IAOverviewContent } from "@/components/ui/IAOverviewContent";

export const metadata = buildMetadata({
  title: "Services IA — Agents, Automatisation, Chatbots",
  description:
    "MAAD-AI offre des agents IA, de l'automatisation de workflows et des chatbots intelligents pour PME du Québec. Trois leviers, un seul objectif : que ton entreprise opère pendant que tu dors.",
  path: "/services/intelligence-artificielle",
});

const faqs = [
  {
    q: "C'est quoi un agent IA vs un chatbot ?",
    a: "Un chatbot répond aux questions. Un agent IA exécute des tâches complètes : il lit tes courriels, crée des tickets, met à jour ton CRM, envoie des rapports. Un agent peut contenir un chatbot, mais l'inverse est rarement vrai.",
  },
  {
    q: "Quels services IA pour une PME québécoise ?",
    a: "Les trois piliers : des agents IA pour automatiser les tâches complexes, de l'automatisation de workflows pour connecter tes outils, et des chatbots pour gérer les conversations avec clients 24/7.",
  },
  {
    q: "Combien de temps pour voir des résultats ?",
    a: "Un pilote simple tourne en 2-4 semaines. Un système complet prend 6-12 semaines. On commence toujours par une preuve de concept mesurable avant de scaler.",
  },
];

export default function IAPillarPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Services Intelligence Artificielle",
            description: "Agents IA, automatisation et chatbots pour PME du Québec",
            path: "/services/intelligence-artificielle",
          }),
          faqSchema(faqs),
        ]}
      />
      <IAOverviewContent faqs={faqs} />
    </>
  );
}
