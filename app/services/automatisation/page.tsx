import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Automatisation IA PME Québec | Workflows n8n | Automatisation processus',
  description:
    "Automatisation IA pour PME du Québec. Workflows n8n, intégrations d'outils, automatisation de processus métier. Libère 10-30 heures par semaine.",
  alternates: { canonical: 'https://maad-ai.com/services/automatisation/' },
  openGraph: {
    title: 'Automatisation IA PME Québec | MAAD-AI',
    description: "Workflows n8n et automatisation de processus pour PME québécoises.",
    url: 'https://maad-ai.com/services/automatisation/',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function AutomatisationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatisation IA',
    description:
      "Automatisation de processus métier pour PME québécoises avec n8n, intégrations multi-outils et workflows IA.",
    provider: { '@type': 'ProfessionalService', name: 'MAAD-AI', url: 'https://maad-ai.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Québec' },
    serviceType: 'Automatisation IA',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "C'est quoi l'automatisation IA?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'automatisation IA est l'utilisation d'outils (n8n, Make, Zapier) combinés à des modèles d'IA pour exécuter automatiquement des processus métier répétitifs — de l'entrée de données jusqu'à la prise de décision complexe. Contrairement à l'automatisation classique, elle peut comprendre le langage naturel et s'adapter.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment automatiser son entreprise avec l'IA?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "5 processus faciles à automatiser : 1) Qualification de leads entrants. 2) Réponses aux emails fréquents. 3) Entrée de données entre CRM et outils. 4) Génération de rapports hebdomadaires. 5) Suivis post-vente et relances. On commence généralement par le processus qui consomme le plus d'heures par semaine.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps pour automatiser un processus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un workflow n8n simple (connexion 2-3 outils) se livre en 3-5 jours. Un workflow complexe avec logique IA et branches multiples prend 2-4 semaines. Un système multi-agents autonome peut nécessiter 1-2 mois de conception, test et itération.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://maad-ai.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://maad-ai.com/services/' },
      { '@type': 'ListItem', position: 3, name: 'Automatisation', item: 'https://maad-ai.com/services/automatisation/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        badge="Automatisation · n8n + IA"
        title="Automatise ce qui te coûte 10 à 30 heures par semaine."
        subtitle="Workflows n8n, intégrations multi-outils, automatisation de processus métier. On utilise n8n parce qu'il est self-hosted, open-source et infiniment plus flexible que Zapier ou Make."
        intro="L'automatisation IA est l'utilisation d'outils modernes (n8n, Make, Zapier) combinés à des modèles d'IA pour exécuter automatiquement des processus métier répétitifs — de l'entrée de données jusqu'à la prise de décision complexe. Chez MAAD-AI, on privilégie n8n : self-hosted, open-source, et infiniment plus flexible que les alternatives SaaS fermées. Pour une entreprise B2B, on automatise la qualification de leads, le nurturing et la mise à jour CRM. Pour un e-commerce, on automatise les suivis de commande, les demandes de remboursement et la gestion des avis. Pour un SaaS, on automatise l'onboarding client et les rapports d'usage. Les PME qui adoptent l'automatisation IA maintenant économisent typiquement 10 à 30 heures par semaine — avec un ROI en moins de 6 mois."
        breadcrumbLabel="Automatisation"
        features={[
          { title: 'Workflows n8n', description: "Self-hosted, open-source, 400+ intégrations. On connecte tes outils en pipelines intelligents." },
          { title: 'Audit de processus', description: "On cartographie tes workflows actuels pour identifier ceux avec le meilleur ROI d'automatisation." },
          { title: 'Logique IA intégrée', description: "Branches de décision propulsées par Claude/GPT pour traiter le langage naturel et les cas ambigus." },
          { title: 'Intégrations CRM', description: "HubSpot, Pipedrive, Salesforce, Notion, Airtable — synchronisation bidirectionnelle sans copier-coller." },
          { title: 'Dashboard ROI', description: "Suivi du temps économisé, des tâches exécutées et des erreurs évitées par l'automatisation." },
          { title: 'Documentation', description: "Chaque workflow est documenté pour que ton équipe puisse le modifier sans dépendre de nous." },
        ]}
        whyTitle="Les PME qui automatisent maintenant prennent une avance compétitive durable"
        whyDescription="Automatiser n'est plus un luxe réservé aux grandes entreprises. Avec n8n et les LLMs modernes, une PME québécoise peut déployer des systèmes qui rivalisent avec ceux des Fortune 500 — à une fraction du coût. Le temps libéré se réinvestit dans la croissance : prospection, service client, innovation."
        whyPoints={[
          'Économise 10 à 30 heures par semaine sur les tâches répétitives',
          "ROI typique en moins de 6 mois pour la plupart des workflows",
          'Réponse instantanée aux prospects = taux de conversion jusqu\u2019à 3x',
          'Scale ton entreprise sans embaucher — même effort, plus de volume',
          'n8n self-hosted : aucune fuite de données vers un SaaS tiers',
        ]}
      />
    </>
  )
}
