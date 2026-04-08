import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Generative Engine Optimization Québec | GEO agence | Visibilité ChatGPT',
  description:
    "Le Generative Engine Optimization (GEO) est l'optimisation de votre présence pour être cité par ChatGPT, Perplexity, Claude et Gemini. Agence GEO au Québec.",
  alternates: { canonical: 'https://maad-ai.com/services/geo/' },
  openGraph: {
    title: 'Generative Engine Optimization Québec | MAAD-AI',
    description: "Soyez cité et recommandé par ChatGPT, Perplexity, Claude et Gemini.",
    url: 'https://maad-ai.com/services/geo/',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function GEOPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Generative Engine Optimization (GEO)',
    description:
      "Optimisation de votre présence en ligne pour être cité et recommandé par les moteurs IA génératifs comme ChatGPT, Perplexity, Claude et Gemini.",
    provider: { '@type': 'ProfessionalService', name: 'MAAD-AI', url: 'https://maad-ai.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Québec' },
    serviceType: 'Generative Engine Optimization',
  }

  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Generative Engine Optimization (GEO)',
    description:
      "Le Generative Engine Optimization (GEO) est l'optimisation de votre présence en ligne pour être cité et recommandé par les moteurs IA génératifs comme ChatGPT, Perplexity, Claude et Gemini.",
    inDefinedTermSet: 'https://maad-ai.com/services/geo/',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "C'est quoi le GEO?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le Generative Engine Optimization (GEO) est l'optimisation de votre présence en ligne pour être cité et recommandé par les moteurs IA génératifs comme ChatGPT, Perplexity, Claude et Gemini. Contrairement au SEO (Google) et à l'AEO (featured snippets), le GEO vise les LLMs qui construisent leurs réponses à partir de sources qu'ils jugent fiables.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment apparaître dans ChatGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "1) Définir ton entité clairement (qui tu es, ce que tu fais) sur ton site. 2) Publier un fichier llms.txt à la racine de ton domaine. 3) Ajouter des données structurées Schema.org complètes. 4) Bâtir des mentions cohérentes de ta marque sur des sources que ChatGPT considère fiables. 5) Créer du contenu avec des définitions citation-ready.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment être cité par Perplexity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Perplexity utilise une recherche web en temps réel (RAG) pour construire ses réponses. Pour être cité : optimise ton SEO technique, utilise des définitions claires et extractables, publie du contenu factuel avec des données chiffrées, et assure-toi que ton Schema.org est complet. Perplexity privilégie les sources qui démontrent de l'autorité sur un sujet précis.",
        },
      },
      {
        '@type': 'Question',
        name: 'SEO vs AEO vs GEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le SEO optimise pour les liens bleus Google. L'AEO optimise pour les featured snippets et Google AI Overviews. Le GEO optimise pour être cité par ChatGPT, Perplexity, Claude et Gemini. Les trois sont complémentaires : un bon GEO dépend d'un bon SEO technique, et l'AEO partage des pratiques avec les deux.",
        },
      },
      {
        '@type': 'Question',
        name: "C'est quoi llms.txt?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "llms.txt est un fichier standardisé placé à la racine d'un site (monsite.com/llms.txt) qui guide les LLMs sur comment interpréter le site : qui est l'entité, quels sont les services, comment citer la marque. C'est l'équivalent GEO de robots.txt — un signal officiel aux moteurs IA génératifs.",
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
      { '@type': 'ListItem', position: 3, name: 'GEO', item: 'https://maad-ai.com/services/geo/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        badge="GEO · Generative Engine Optimization"
        title="Le GEO, c'est être cité par ChatGPT, Perplexity, Claude et Gemini."
        subtitle="Le Generative Engine Optimization (GEO) est l'optimisation de ta présence en ligne pour être identifié, sélectionné et recommandé par les moteurs IA génératifs."
        intro="Le Generative Engine Optimization (GEO) est l'optimisation de votre présence en ligne pour être cité et recommandé par les moteurs IA génératifs comme ChatGPT, Perplexity, Claude et Gemini. Comment les LLMs choisissent leurs sources? Trois mécanismes : (1) leurs training data — ce qui était sur le web au moment du cutoff, (2) le RAG et la recherche web en temps réel pour Perplexity et ChatGPT Browse, et (3) des signaux de confiance comme la cohérence des informations, le Schema.org, les citations croisées et l'autorité du domaine. Chez MAAD-AI, on structure ton contenu pour cocher les trois cases. L'AEO optimise pour les réponses de Google. Le GEO optimise pour les réponses de ChatGPT et Perplexity. Les deux sont complémentaires et aussi critiques l'un que l'autre en 2026."
        breadcrumbLabel="GEO"
        features={[
          { title: 'llms.txt', description: "Fichier officiel à la racine du site qui guide les LLMs sur ton entité et tes services." },
          { title: 'Entity clarity', description: "Définitions claires, citation-ready, de qui tu es et ce que tu fais — formatées pour extraction par LLM." },
          { title: 'Schema.org complet', description: "ProfessionalService, Organization, Person, DefinedTerm — tout ce qui donne du contexte aux crawlers IA." },
          { title: 'Citation building', description: "Mentions cohérentes sur sources fiables (médias, répertoires, forums spécialisés) que les LLMs utilisent comme signal d\u2019autorité." },
          { title: 'Cross-platform consistency', description: "Même NAP, même description, mêmes claims partout sur le web — les LLMs cross-référencent." },
          { title: 'Monitoring LLM', description: "Suivi mensuel de tes citations dans ChatGPT, Perplexity, Claude, Gemini. On mesure ta share of voice générative." },
        ]}
        whyTitle="En 2026, tes clients demandent à ChatGPT avant de googler"
        whyDescription="Les acheteurs B2B et SaaS utilisent de plus en plus ChatGPT et Perplexity pour comparer les solutions et obtenir des recommandations. Si ton entreprise n'est pas citée dans ces réponses, tu es invisible pour une part de marché qui grandit chaque mois. Le GEO est ton meilleur marketing long-terme — une fois cité par un LLM, tu es recommandé à chaque requête similaire."
        whyPoints={[
          "25%+ des recherches en 2026 passent par un moteur génératif (ChatGPT, Perplexity)",
          "Une fois dans les training data d\u2019un LLM, tu es cité pour des années",
          "Perplexity indexe le web en temps réel — tu peux y apparaître dès maintenant",
          "Les acheteurs B2B et SaaS utilisent ChatGPT pour comparer les fournisseurs",
          "Très peu d\u2019agences québécoises offrent le GEO — avance compétitive énorme",
        ]}
      />
    </>
  )
}
