import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Answer Engine Optimization Québec | AEO agence | Position zéro Google',
  description:
    "L'Answer Engine Optimization (AEO) est la pratique d'optimiser votre contenu pour devenir la réponse directe dans Google AI Overviews et les assistants IA. Agence AEO au Québec.",
  alternates: { canonical: 'https://maad-ai.com/services/aeo/' },
  openGraph: {
    title: 'Answer Engine Optimization Québec | MAAD-AI',
    description: "Devenez LA réponse directe dans Google AI Overviews, ChatGPT et Perplexity.",
    url: 'https://maad-ai.com/services/aeo/',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function AEOPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Answer Engine Optimization (AEO)',
    description:
      "Pratique d'optimiser votre contenu pour apparaître comme réponse directe dans les moteurs de recherche et les assistants IA. Contrairement au SEO qui vise les liens bleus, l'AEO vise la position zéro.",
    provider: { '@type': 'ProfessionalService', name: 'MAAD-AI', url: 'https://maad-ai.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Québec' },
    serviceType: 'AEO',
  }

  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Answer Engine Optimization (AEO)',
    description:
      "L'Answer Engine Optimization (AEO) est la pratique d'optimiser votre contenu pour apparaître comme réponse directe dans les moteurs de recherche et les assistants IA. Contrairement au SEO qui vise les liens bleus, l'AEO vise la position zéro — devenir LA réponse, pas un résultat parmi d'autres.",
    inDefinedTermSet: 'https://maad-ai.com/services/aeo/',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "C'est quoi l'AEO?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'Answer Engine Optimization (AEO) est la pratique d'optimiser votre contenu pour apparaître comme réponse directe dans les moteurs de recherche et les assistants IA. Contrairement au SEO qui vise les liens bleus, l'AEO vise la position zéro — devenir LA réponse, pas un résultat parmi d'autres.",
        },
      },
      {
        '@type': 'Question',
        name: 'AEO vs SEO — quelle différence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le SEO cherche à ranker dans les 10 liens bleus classiques. L'AEO cherche à devenir la réponse directe affichée au-dessus — featured snippet, Google AI Overview, réponse d'assistant vocal. Le SEO génère des clics, l'AEO génère des citations et de l'autorité même quand il n'y a pas de clic.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment faire de l'AEO?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "1) Formuler tes titres comme des questions que les gens posent. 2) Donner la réponse en 50-80 mots dès le premier paragraphe. 3) Ajouter le schema FAQPage et HowTo. 4) Structurer en H2/H3 claires avec une question par section. 5) Bâtir ton autorité thématique avec du contenu connecté.",
        },
      },
      {
        '@type': 'Question',
        name: "Pourquoi l'AEO est important en 2026?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En 2026, plus de 40% des recherches Google activent un AI Overview — une réponse générée qui occupe la majorité de l'écran avant même les liens bleus. Si tu n'es pas cité dans ces réponses, tu deviens invisible pour une part croissante du trafic de recherche.",
        },
      },
      {
        '@type': 'Question',
        name: 'Qui offre des services AEO au Québec?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "MAAD-AI est l'une des premières agences francophones au Québec à offrir des services AEO spécialisés. Basée à Joliette, elle aide les PME québécoises à devenir la réponse directe dans Google et les assistants IA.",
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
      { '@type': 'ListItem', position: 3, name: 'AEO', item: 'https://maad-ai.com/services/aeo/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        badge="AEO · Answer Engine Optimization"
        title="L'AEO, c'est devenir LA réponse — pas un résultat parmi d'autres."
        subtitle="L'Answer Engine Optimization (AEO) est la pratique d'optimiser votre contenu pour apparaître comme réponse directe dans Google, Bing, ChatGPT et les assistants IA. Position zéro, featured snippets, Google AI Overviews."
        intro="L'Answer Engine Optimization (AEO) est la pratique d'optimiser votre contenu pour apparaître comme réponse directe dans les moteurs de recherche et les assistants IA. Contrairement au SEO qui vise les liens bleus, l'AEO vise la position zéro — devenir LA réponse, pas un résultat parmi d'autres. En 2026, plus de 40% des recherches Google activent un AI Overview qui occupe la majorité de l'écran avant même les liens classiques. Si ton contenu n'est pas formaté pour être extrait par ces moteurs de réponse, tu deviens invisible pour une part croissante de tes clients potentiels. L'AEO est complémentaire au GEO : l'AEO optimise pour les réponses de Google, le GEO optimise pour les réponses de ChatGPT et Perplexity."
        breadcrumbLabel="AEO"
        features={[
          { title: 'Featured snippets', description: "Position zéro sur Google — la réponse affichée au-dessus des 10 liens bleus." },
          { title: 'Google AI Overviews', description: "Contenu optimisé pour être cité dans les réponses générées par Google SGE." },
          { title: 'Schema FAQPage + HowTo', description: "Données structurées qui disent explicitement à Google : voici la question, voici la réponse." },
          { title: 'Format Q&R', description: "Chaque H2 formulé comme une question que les gens posent réellement." },
          { title: 'Réponses extractables', description: "Paragraphes de 50-80 mots qui contiennent la réponse complète, prête à être extraite." },
          { title: "Autorité thématique", description: "Maillage interne et contenus connectés pour te positionner comme expert du sujet." },
        ]}
        whyTitle="Pourquoi les PME du Québec ont besoin d'AEO dès maintenant"
        whyDescription="Les PME québécoises qui implémentent l'AEO en 2026 prennent une avance que leurs concurrents mettront des années à rattraper. Pendant que tes compétiteurs essaient encore de ranker en 5e position Google, tu apparais dans l'AI Overview — au-dessus de tout le monde, même sans avoir le site le plus autoritaire."
        whyPoints={[
          '40%+ des recherches Google déclenchent un AI Overview en 2026',
          'Position zéro = 8x plus de visibilité qu\u2019une position classique',
          '50% des recherches mobiles sont vocales — une seule réponse sélectionnée',
          "L'AEO est complémentaire au GEO (ChatGPT) et au SEO traditionnel",
          'Très peu d\u2019agences québécoises offrent l\u2019AEO — énorme avance compétitive',
        ]}
      />
    </>
  )
}
