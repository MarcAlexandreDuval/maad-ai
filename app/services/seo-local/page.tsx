import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'SEO Local Joliette | Référencement local Lanaudière | Google Business Profile',
  description:
    "SEO local pour PME de Joliette, Repentigny, L'Assomption, Terrebonne. Google Business Profile, citations locales, contenu géo-ciblé. Domine le Local Pack.",
  alternates: { canonical: 'https://maad-ai.com/services/seo-local/' },
  openGraph: {
    title: 'SEO Local Joliette | Référencement local Lanaudière | MAAD-AI',
    description: "SEO local pour PME de Joliette et Lanaudière. Google Business Profile, citations, Local Pack.",
    url: 'https://maad-ai.com/services/seo-local/',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function SEOLocalPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Local — Lanaudière & Québec',
    description:
      'Service de référencement local incluant optimisation Google Business Profile, gestion des citations locales et contenu géo-ciblé pour les PME de Lanaudière et du Québec.',
    provider: {
      '@type': 'ProfessionalService',
      name: 'MAAD-AI',
      url: 'https://maad-ai.com',
    },
    areaServed: [
      { '@type': 'Place', name: 'Lanaudière, Québec, Canada' },
      { '@type': 'Place', name: 'Québec, Canada' },
    ],
    serviceType: 'SEO Local',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "C'est quoi le SEO local?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le SEO local est l'optimisation d'un site et d'une fiche Google Business Profile pour apparaître dans les recherches géolocalisées et le Local Pack (la carte Google avec les 3 meilleurs résultats locaux). Il cible les requêtes du type \u00AB plombier Joliette \u00BB ou \u00AB restaurant pr\u00E8s de moi \u00BB.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment appara\u00EEtre dans Google Maps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "\u00C9tapes : 1) Cr\u00E9er et v\u00E9rifier ta fiche Google Business Profile. 2) Remplir tous les champs (cat\u00E9gorie principale, attributs, horaires, photos). 3) Obtenir des avis positifs r\u00E9guliers. 4) Assurer la coh\u00E9rence NAP (Nom, Adresse, T\u00E9l\u00E9phone) sur tous les annuaires. 5) Publier r\u00E9guli\u00E8rement sur ta fiche.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment optimiser Google Business Profile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Choisis la bonne cat\u00E9gorie principale, ajoute toutes les cat\u00E9gories secondaires pertinentes, remplis les attributs, publie minimum 10 photos de qualit\u00E9, r\u00E9ponds \u00E0 toutes les questions et avis, publie une mise \u00E0 jour par semaine, et assure-toi que ton NAP est identique sur ton site et partout ailleurs.",
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
      { '@type': 'ListItem', position: 3, name: 'SEO Local', item: 'https://maad-ai.com/services/seo-local/' },
    ],
  }

  return (
    <ServicePageLayout
      badge="SEO Local · Lanaudière"
      title="SEO local à Joliette, Repentigny, L'Assomption et Terrebonne."
      subtitle="Le SEO local est l'optimisation d'une fiche Google Business Profile et d'un site pour apparaître dans le Local Pack. Si tu n'y es pas, tu laisses tes clients à tes compétiteurs."
      intro="Le SEO local est essentiel pour les PME qui servent une clientèle de proximité — restaurants, cliniques, plombiers, comptables, entrepreneurs de Lanaudière. MAAD-AI optimise ta présence sur Google Maps, ton Google Business Profile et toutes les plateformes locales pour que les gens de Joliette, Repentigny, L'Assomption et Terrebonne te trouvent en premier quand ils cherchent tes services. On travaille avec des données hyper-locales et une stratégie adaptée à la réalité des PME québécoises — ancrage dans les MRC, signaux géographiques, gestion proactive des avis."
      features={[
        {
          title: 'Google Business Profile',
          description:
            'Optimisation complète de ta fiche : catégories, attributs, photos, publications régulières, questions-réponses et gestion des avis pour maximiser ta visibilité dans le Local Pack.',
        },
        {
          title: 'Citations locales',
          description:
            'On s\'assure que ton nom, adresse et numéro de téléphone (NAP) sont identiques et présents sur tous les annuaires pertinents : Pages Jaunes, Yelp, Facebook, et les répertoires locaux québécois.',
        },
        {
          title: 'Contenu géo-ciblé',
          description:
            'Création de pages de service par ville, articles de blogue locaux et contenu qui parle directement à ta communauté. Google adore le contenu localement pertinent.',
        },
        {
          title: 'Gestion des avis',
          description:
            'Stratégie proactive pour générer des avis positifs sur Google et les plateformes clés. On t\'aide aussi à répondre professionnellement aux avis négatifs.',
        },
        {
          title: 'Optimisation mobile locale',
          description:
            'Les recherches locales se font à 78 % sur mobile. On s\'assure que ton site offre une expérience parfaite avec des appels à l\'action adaptés : click-to-call, itinéraire, formulaire rapide.',
        },
        {
          title: 'Rapports de visibilité locale',
          description:
            'Suivi de tes positions dans le Local Pack, de tes impressions sur Google Maps et de chaque appel, visite ou demande d\'itinéraire générés par ta fiche.',
        },
      ]}
      whyTitle="Pourquoi le SEO local est vital pour ta PME ?"
      whyDescription="Les recherches locales mènent à une action concrète dans 76 % des cas. Quand quelqu'un cherche « plombier Joliette » ou « restaurant près de moi », il est prêt à acheter. Le SEO local te place directement devant ces clients à haute intention."
      whyPoints={[
        '76 % des recherches locales mènent à une visite en magasin dans les 24 heures',
        'Le Local Pack (carte Google) capte 44 % des clics sur les recherches locales',
        'Les avis Google influencent directement la décision d\'achat de 88 % des consommateurs',
        'Les recherches « près de moi » ont augmenté de 500 % ces dernières années',
        'Le SEO local offre le meilleur ROI pour les entreprises à clientèle régionale',
      ]}
      breadcrumbLabel="SEO Local"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </ServicePageLayout>
  )
}
