import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Conception site web Joliette | Création site web Lanaudière',
  description:
    'Agence web à Joliette. Conception de sites web rapides, mobile-first et optimisés pour Google ET ChatGPT. SEO, AEO et GEO intégrés dès la conception.',
  alternates: { canonical: 'https://maad-ai.com/services/conception-web/' },
  openGraph: {
    title: 'Conception site web Joliette | MAAD-AI',
    description: 'Agence web à Joliette. Sites optimisés pour Google ET ChatGPT dès la conception.',
    url: 'https://maad-ai.com/services/conception-web/',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function ConceptionWebPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Conception de sites web',
    description:
      "Conception et développement de sites web modernes, rapides, SEO-ready et optimisés dès la première ligne de code pour l'AEO et le GEO.",
    provider: { '@type': 'ProfessionalService', name: 'MAAD-AI', url: 'https://maad-ai.com' },
    areaServed: [
      { '@type': 'City', name: 'Joliette' },
      { '@type': 'AdministrativeArea', name: 'Lanaudière' },
      { '@type': 'AdministrativeArea', name: 'Québec' },
    ],
    serviceType: 'Conception web',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Combien coûte un site web à Joliette?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "À Joliette, un site web PME professionnel se situe généralement entre 3 500 $ et 12 000 $ selon la complexité. Chez MAAD-AI, nos sites incluent d'office le SEO technique, l'AEO et le GEO — ce que les agences traditionnelles facturent en extra.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment choisir une agence web à Joliette?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vérifie trois choses : 1) Leur site à elles est-il rapide et bien positionné? 2) Livrent-elles du code sur mesure ou des templates WordPress? 3) Intègrent-elles le SEO, l'AEO et le GEO dès la conception ou est-ce une option payante après-coup?",
        },
      },
      {
        '@type': 'Question',
        name: "C'est quoi un site web SEO-ready?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un site SEO-ready est construit dès le départ avec une structure sémantique propre, des données structurées (Schema.org), des balises meta optimisées, une performance élevée (Core Web Vitals) et un sitemap. Ce n'est pas un ajout — c'est la fondation.",
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
      { '@type': 'ListItem', position: 3, name: 'Conception Web', item: 'https://maad-ai.com/services/conception-web/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageLayout
        badge="Conception Web · Joliette"
        title="Des sites web optimisés pour Google ET pour ChatGPT."
        subtitle="Agence web à Joliette. On conçoit des sites rapides, mobile-first et optimisés dès la première ligne de code — pas juste pour les humains, mais aussi pour les moteurs IA qui vont te recommander."
        intro="Contrairement aux agences web traditionnelles de Joliette et Lanaudière, chaque site MAAD-AI est construit avec l'AEO et le GEO intégrés dès la conception. Ton site est optimisé pour Google ET pour ChatGPT, Perplexity et Claude. Pas de templates WordPress — HTML/CSS/React sur mesure. Core Web Vitals 95+. Schema.org complet. Mobile-first pour les 60%+ de trafic mobile au Québec. C'est la fondation de toute ta stratégie de visibilité — SEO, AEO et GEO ne performent pas sans fondations techniques solides."
        breadcrumbLabel="Conception Web"
        features={[
          { title: 'Code sur mesure', description: 'Pas de templates. React, Next.js, HTML/CSS custom pour chaque client.' },
          { title: 'Mobile-first', description: "Conçu d'abord pour mobile — là où 60% de tes visiteurs québécois arrivent." },
          { title: 'Core Web Vitals 95+', description: 'Score Lighthouse 95+. Chargement sous 2 secondes. Google récompense la vitesse.' },
          { title: 'SEO + AEO + GEO natifs', description: 'Schema.org, llms.txt, contenu citation-ready. Pas un ajout — la fondation.' },
          { title: 'Conversion-first', description: 'CTA stratégiques, parcours utilisateur fluide, formulaires optimisés.' },
          { title: 'Analytics intégré', description: 'GA4, Search Console, tracking conversions. Tu sais ce qui performe.' },
        ]}
        whyTitle="Ton site, c'est ta première impression auprès des humains ET des IA"
        whyDescription="En 2026, tes prospects ne font plus juste une recherche Google — ils demandent à ChatGPT, Perplexity ou Claude de leur recommander une solution. Un site qui n'est pas optimisé pour ces moteurs IA est invisible pour une part croissante de tes clients potentiels. À Joliette et en Lanaudière, tu peux être le premier de ton secteur à avoir un site qui performe sur les deux fronts."
        whyPoints={[
          'Plus de 60% du trafic web au Québec provient du mobile',
          'Google pénalise les sites lents dans son classement (Core Web Vitals)',
          '75% des utilisateurs jugent ta crédibilité sur le design de ton site',
          'Les moteurs IA (ChatGPT, Perplexity) deviennent une source de trafic majeure',
          "C'est la fondation de toute stratégie SEO, AEO et GEO",
        ]}
      />
    </>
  )
}
