import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Agent IA Québec | Création agent IA entreprise PME',
  description:
    "Création d'agents IA sur mesure pour PME du Québec. Automatisation de tâches complexes avec CrewAI, n8n et LLMs. Agent IA B2B, SaaS, e-commerce.",
  alternates: { canonical: 'https://maad-ai.com/services/agents-ia/' },
  openGraph: {
    title: 'Agent IA Québec | MAAD-AI',
    description: "Création d'agents IA sur mesure pour les PME du Québec.",
    url: 'https://maad-ai.com/services/agents-ia/',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function AgentsIAPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création d\u2019agents IA',
    description:
      "Développement d'agents IA autonomes sur mesure pour entreprises et PME québécoises. Utilisation de CrewAI, n8n, LLMs et OpenRouter pour automatiser des tâches complexes.",
    provider: { '@type': 'ProfessionalService', name: 'MAAD-AI', url: 'https://maad-ai.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Québec' },
    serviceType: 'Agent IA',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "C'est quoi un agent IA?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un agent IA est un système d'intelligence artificielle autonome qui peut exécuter des tâches complexes — analyser des données, prendre des décisions et interagir avec d'autres systèmes — sans intervention humaine constante. Contrairement à un chatbot qui répond à des questions, un agent IA agit.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien coûte un agent IA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un agent IA sur mesure pour PME commence généralement à partir de 2 500 $ pour un agent simple (automatisation d'une tâche) et peut atteindre 15 000 $+ pour un système multi-agents complexe. Le ROI se mesure en heures économisées par semaine.",
        },
      },
      {
        '@type': 'Question',
        name: 'Agent IA vs chatbot — quelle différence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un chatbot répond à des questions dans une conversation. Un agent IA exécute des tâches : il peut lire tes emails, mettre à jour ton CRM, générer un rapport, envoyer une facture — de façon autonome. Le chatbot parle, l'agent agit.",
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
      { '@type': 'ListItem', position: 3, name: 'Agents IA', item: 'https://maad-ai.com/services/agents-ia/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        badge="Agents IA · Autonomes"
        title="Un agent IA est un système autonome qui exécute des tâches complexes sans supervision."
        subtitle="On conçoit des agents IA sur mesure pour les PME du Québec. Ils analysent, décident, interagissent avec tes outils — et te libèrent des heures chaque semaine."
        intro="Un agent IA est un système d'intelligence artificielle autonome qui peut exécuter des tâches complexes — analyser des données, prendre des décisions et interagir avec d'autres systèmes — sans intervention humaine constante. Chez MAAD-AI, on utilise CrewAI, n8n, OpenRouter et les LLMs les plus performants (Claude, GPT, Llama) pour automatiser concrètement tes opérations. Pour une entreprise B2B, un agent IA peut qualifier tes leads, mettre à jour ton CRM et relancer les prospects dormants. Pour un SaaS, un agent de support peut résoudre 40% des tickets sans humain. Pour un e-commerce, un agent peut gérer les suivis post-achat, les demandes de remboursement et l'analyse des avis."
        breadcrumbLabel="Agents IA"
        features={[
          { title: 'Conception sur mesure', description: "On comprend ton workflow actuel, puis on conçoit l'agent qui s'intègre dedans." },
          { title: 'Tech stack moderne', description: 'CrewAI, n8n, OpenRouter, LangChain. Les outils que les vraies équipes IA utilisent.' },
          { title: 'Multi-agents', description: 'Plusieurs agents qui collaborent — un pour la recherche, un pour la rédaction, un pour l\u2019action.' },
          { title: "Intégration tes outils", description: 'HubSpot, Notion, Google Workspace, Slack, Airtable, Shopify — on connecte l\u2019agent à ton stack.' },
          { title: 'Supervision humaine', description: 'Chaque agent inclut des points de validation humaine pour les décisions critiques.' },
          { title: 'Mesure du ROI', description: 'Dashboard de suivi : heures économisées, tâches complétées, taux de succès.' },
        ]}
        whyTitle="Les agents IA ne remplacent pas ton équipe — ils la libèrent des tâches répétitives"
        whyDescription="Les PME québécoises qui adoptent les agents IA maintenant prennent une avance compétitive difficile à rattraper. Pendant que tes concurrents hésitent, tu peux automatiser 10-20 heures par semaine de travail répétitif et réinvestir ce temps dans la croissance."
        whyPoints={[
          "Automatisation de tâches complexes (analyse, décision, exécution), pas juste des workflows linéaires",
          "Intégration avec tous tes outils (CRM, email, Slack, Notion, Shopify, etc.)",
          'ROI mesurable : 10-30 heures par semaine libérées selon le cas d\u2019usage',
          'Tech stack évolutif — ton agent s\u2019améliore avec les nouveaux modèles LLM',
          'Idéal pour B2B (prospection), SaaS (support), e-commerce (opérations)',
        ]}
      />
    </>
  )
}
