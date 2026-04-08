import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Chatbot IA PME Québec | Réceptionniste IA | Assistant virtuel',
  description:
    "Chatbot IA pour PME du Québec. Réceptionniste IA, assistant virtuel entreprise, chatbot site web. Propulsé par LLMs, pas par scripts. Retell AI, WhatsApp, téléphone.",
  alternates: { canonical: 'https://maad-ai.com/services/chatbot-ia/' },
  openGraph: {
    title: 'Chatbot IA PME Québec | MAAD-AI',
    description: "Chatbot IA propulsé par LLMs pour PME québécoises.",
    url: 'https://maad-ai.com/services/chatbot-ia/',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function ChatbotIAPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Chatbot IA',
    description:
      "Développement de chatbots IA propulsés par LLMs pour sites web, WhatsApp, téléphone. Réceptionnistes IA et assistants virtuels pour PME.",
    provider: { '@type': 'ProfessionalService', name: 'MAAD-AI', url: 'https://maad-ai.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Québec' },
    serviceType: 'Chatbot IA',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "C'est quoi un chatbot IA?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un chatbot IA est un assistant conversationnel propulsé par un LLM (comme GPT ou Claude) qui comprend le langage naturel. Contrairement aux chatbots scriptés, il peut répondre à des questions imprévues, qualifier des leads et prendre des rendez-vous de façon fluide.",
        },
      },
      {
        '@type': 'Question',
        name: 'Chatbot vs agent IA — quelle différence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un chatbot est conversationnel : il répond à des questions dans une interface de chat. Un agent IA exécute des tâches de façon autonome en arrière-plan. Un chatbot peut utiliser un agent pour accomplir des actions, mais sa fonction principale est la conversation.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien coûte un chatbot IA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un chatbot IA PME se situe entre 1 500 $ et 8 000 $ selon les intégrations (site web seulement, WhatsApp, téléphone via Retell AI) et la complexité des scénarios. L'abonnement mensuel LLM est généralement entre 50 $ et 300 $.",
        },
      },
      {
        '@type': 'Question',
        name: 'Est-ce qu\u2019un chatbot peut remplacer un réceptionniste?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, pour les tâches standards : répondre aux questions fréquentes, qualifier les appels, prendre des rendez-vous, transférer aux bonnes personnes. Un réceptionniste IA via Retell AI fonctionne 24/7, ne prend pas de pauses et coûte une fraction d'un employé.",
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
      { '@type': 'ListItem', position: 3, name: 'Chatbot IA', item: 'https://maad-ai.com/services/chatbot-ia/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        badge="Chatbot IA · LLM-powered"
        title="Un chatbot IA qui comprend vraiment tes clients. Pas des scripts."
        subtitle="Réceptionniste IA, assistant virtuel, chatbot site web. Propulsé par les LLMs les plus performants (Claude, GPT) — pas par des arbres de décision rigides."
        intro="Contrairement aux chatbots scriptés qui se plantent dès qu'un client formule sa question différemment, nos chatbots utilisent des LLMs pour comprendre le langage naturel. Scénario typique : un client appelle → le chatbot IA comprend sa demande → il qualifie le besoin → il prend le rendez-vous dans ton calendrier → il envoie la confirmation par SMS. Le tout sans intervention humaine. On déploie sur ton site web, WhatsApp Business, ou par téléphone via Retell AI. Pour un e-commerce, un chatbot peut répondre aux 80% de questions répétitives (livraison, retours, stock) et libérer ton équipe pour les cas complexes. Pour un SaaS, il peut qualifier les prospects entrants et booker les démos automatiquement."
        breadcrumbLabel="Chatbot IA"
        features={[
          { title: 'LLM-powered', description: 'Propulsé par Claude, GPT ou Llama selon le cas d\u2019usage. Compréhension naturelle.' },
          { title: 'Multi-canaux', description: 'Site web, WhatsApp Business, téléphone (Retell AI), Messenger, Instagram.' },
          { title: 'Réceptionniste IA', description: 'Répond aux appels 24/7, qualifie, prend rendez-vous, transfère intelligemment.' },
          { title: 'Connaissance de ton business', description: 'Entraîné sur ta documentation, FAQ, catalogue produit. Il parle comme toi.' },
          { title: 'Prise de rendez-vous', description: 'Intégration Google Calendar, Calendly, HubSpot. Le RDV se place tout seul.' },
          { title: 'Escalade humaine', description: 'Si la question est trop complexe, le chatbot transfère à ton équipe avec le contexte.' },
        ]}
        whyTitle="80% des demandes clients sont répétitives — laisse l'IA les gérer"
        whyDescription="Un chatbot IA bien configuré répond à la majorité des questions standards, qualifie les leads et libère ton équipe pour les conversations à haute valeur. Pour les PME qui n'ont pas les moyens d'un réceptionniste à temps plein, c'est un levier énorme — et tes clients ne voient pas la différence."
        whyPoints={[
          'Disponible 24/7 — tes clients ne sont plus limités à tes heures d\u2019ouverture',
          '80% des questions standards résolues sans humain',
          'Coût : une fraction d\u2019un employé, sans les vacances ni les absences',
          'Intégration native avec ton CRM, calendrier et outils existants',
          'Idéal pour e-commerce, SaaS, cliniques, restaurants, services pros',
        ]}
      />
    </>
  )
}
