import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'SEO Joliette | Référencement web Lanaudière | Agence SEO Québec',
  description:
    'Agence SEO à Joliette et Lanaudière. Référencement technique, on-page et contenu pour PME québécoises. Fondation SEO solide pour AEO et GEO.',
  alternates: { canonical: 'https://maad-ai.com/services/seo/' },
  openGraph: {
    title: 'SEO Joliette | Référencement web Lanaudière | MAAD-AI',
    description: 'Agence SEO pour PME du Québec. Technique, on-page, contenu, link building.',
    url: 'https://maad-ai.com/services/seo/',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function SEOPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO — Référencement organique',
    description:
      'Service de référencement organique complet pour les PME du Québec : audit technique, on-page, contenu et link building.',
    provider: { '@type': 'ProfessionalService', name: 'MAAD-AI', url: 'https://maad-ai.com' },
    areaServed: { '@type': 'Place', name: 'Québec, Canada' },
    serviceType: 'SEO',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://maad-ai.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://maad-ai.com/services/' },
      { '@type': 'ListItem', position: 3, name: 'SEO', item: 'https://maad-ai.com/services/seo/' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "C'est quoi le SEO?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le SEO (Search Engine Optimization) est l'ensemble des techniques qui optimisent un site web pour qu'il apparaisse en bonne position dans les résultats organiques de Google. Il couvre trois piliers : technique (performance, indexation, structure), on-page (contenu, balises, structure sémantique) et off-page (backlinks, autorité de domaine).",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien coûte le SEO au Québec?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Au Québec, les services SEO pour PME se situent généralement entre 800 $ et 4 000 $ par mois selon la compétitivité du secteur et l'ampleur du mandat. Un audit technique ponctuel coûte entre 1 000 $ et 3 000 $.",
        },
      },
      {
        '@type': 'Question',
        name: 'SEO vs AEO vs GEO — quelle différence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le SEO vise les 10 liens bleus de Google. L'AEO (Answer Engine Optimization) vise la position zéro — featured snippets et Google AI Overviews. Le GEO (Generative Engine Optimization) vise les citations dans ChatGPT, Perplexity, Claude et Gemini. Le SEO reste la fondation : sans fondations techniques solides, l'AEO et le GEO ne performent pas.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        badge="SEO · Référencement organique"
        title="Le SEO reste la fondation — sans lui, l'AEO et le GEO ne performent pas."
        subtitle="Agence SEO à Joliette et Lanaudière. On travaille les trois piliers — technique, on-page, off-page — pour que chaque page de ton site ait le meilleur potentiel de classement sur Google."
        intro="Le SEO (Search Engine Optimization) est l'ensemble des techniques qui optimisent un site web pour qu'il apparaisse en bonne position dans les résultats organiques de Google. Chez MAAD-AI, on positionne le SEO comme la fondation de ta visibilité — sans fondations techniques solides, l'AEO et le GEO ne performent pas. Pour les PME de Joliette, Lanaudière et du Québec, le SEO local est souvent le premier levier de croissance organique. On travaille les trois piliers classiques : technique (Core Web Vitals, indexation, Schema.org), on-page (structure sémantique, balises, contenu) et off-page (backlinks de qualité, autorité de domaine)."
        breadcrumbLabel="SEO"
        features={[
          { title: 'Audit technique', description: 'Analyse complète de la performance, du crawl, de l’indexation et de l’architecture de ton site.' },
          { title: 'Optimisation on-page', description: 'Titres, métas, structure de contenu, balisage sémantique et données structurées.' },
          { title: 'Stratégie de contenu', description: 'Recherche de mots-clés, calendrier éditorial et création d’articles optimisés.' },
          { title: 'Link building', description: 'Acquisition de backlinks de qualité depuis des sites québécois et internationaux.' },
          { title: 'Suivi de performance', description: 'Tableaux de bord en temps réel pour suivre tes positions, ton trafic et tes conversions.' },
          { title: 'Rapports mensuels', description: 'Un rapport clair chaque mois avec les progrès, les actions menées et les prochaines étapes.' },
        ]}
        whyTitle="Pourquoi investir en SEO en 2026"
        whyDescription="Le SEO reste le canal d’acquisition avec le meilleur ROI à long terme. Contrairement à la pub payante, chaque optimisation continue de générer du trafic des mois — voire des années — après avoir été mise en place."
        whyPoints={[
          'Trafic organique = trafic gratuit, qualifié et durable',
          'Crédibilité accrue auprès des prospects qui te trouvent sur Google',
          'Compounding effect : les résultats s’accumulent dans le temps',
          'Base solide pour l’AEO et le GEO — sans SEO, pas de visibilité IA',
          'Mesurable, prévisible, scalable',
        ]}
      />
    </>
  )
}
