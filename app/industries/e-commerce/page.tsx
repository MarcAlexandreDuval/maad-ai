import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'SEO E-commerce Québec',
  description:
    'Optimisation SEO, AEO et GEO pour les boutiques en ligne au Québec. Fiches produits, rich snippets, vitesse et conversions.',
  openGraph: {
    title: 'SEO E-commerce Québec | MAAD-AI',
    description:
      'Plus de trafic qualifié, plus de ventes. Stratégies SEO complètes pour les boutiques en ligne québécoises.',
    url: 'https://maad-ai.com/industries/e-commerce',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: {
    canonical: 'https://maad-ai.com/industries/e-commerce',
  },
}

const features = [
  {
    title: 'SEO de fiches produits',
    description:
      'Titres, descriptions et balises optimisés pour chaque produit. On structure tes données pour que Google affiche tes prix, avis et disponibilités directement dans les résultats.',
  },
  {
    title: 'Optimisation de catégories',
    description:
      'Architecture de navigation et contenu de catégories pensés pour capter le trafic à forte intention d\'achat. Tes pages catégories deviennent de vrais aimants à trafic.',
  },
  {
    title: 'Rich snippets & données structurées',
    description:
      'Implémentation complète du balisage Schema.org : Product, Review, Offer, FAQ. Tes résultats Google se démarquent visuellement et attirent plus de clics.',
  },
  {
    title: 'Vitesse du site & Core Web Vitals',
    description:
      'Audit de performance complet : compression d\'images, lazy loading, optimisation du code. Chaque milliseconde gagnée, c\'est des conversions en plus.',
  },
  {
    title: 'Optimisation des conversions',
    description:
      'Analyse du parcours d\'achat, tests A/B, amélioration des pages produits. On ne se contente pas d\'amener du trafic — on s\'assure qu\'il convertit.',
  },
  {
    title: 'Visibilité marketplace & IA',
    description:
      'Stratégie GEO pour que tes produits soient recommandés par les assistants IA. Quand quelqu\'un demande « quel est le meilleur [produit] au Québec », c\'est toi qui apparais.',
  },
]

export default function EcommercePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://maad-ai.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://maad-ai.com/industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'E-commerce',
        item: 'https://maad-ai.com/industries/e-commerce',
      },
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="section pt-32 md:pt-40">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Industries', href: '/industries' },
              { label: 'E-commerce' },
            ]}
          />

          <div className="max-w-3xl">
            <span className="badge badge-pulse mb-6">
              E-commerce · Boutiques en ligne
            </span>
            <h1 className="mb-6">
              Chaque recherche est une{' '}
              <span className="gradient-text">opportunité de vente</span>
            </h1>
            <p className="text-lg max-w-2xl">
              Au Québec, le commerce en ligne explose — mais la compétition aussi. Pour
              sortir du lot, ta boutique doit être visible là où tes clients cherchent :
              Google, Google Shopping, et maintenant les réponses générées par l&apos;IA.
              On optimise chaque page pour maximiser tes ventes organiques.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-label">Le défi e-commerce</p>
          <h2 className="mb-6">
            Des milliers de produits,{' '}
            <span className="text-em">une seule première page</span>
          </h2>
          <p className="mb-4">
            En e-commerce, le référencement ne se résume pas à quelques mots-clés. Avec
            des centaines, voire des milliers de fiches produits, chaque page doit
            travailler pour toi. Une mauvaise structure, des descriptions dupliquées ou
            des temps de chargement trop longs, et c&apos;est Amazon ou Walmart qui
            ramasse ton trafic.
          </p>
          <p className="mb-4">
            L&apos;AEO ajoute une couche supplémentaire : quand un acheteur demande à
            un assistant IA « quel est le meilleur [produit] à acheter au Québec »,
            c&apos;est ta boutique qui doit être recommandée. Pour ça, il faut un
            contenu structuré, des avis authentiques et une autorité de domaine solide.
          </p>
          <p>
            Notre approche combine l&apos;optimisation technique à grande échelle avec
            une stratégie de contenu qui renforce la confiance — autant pour Google que
            pour les IA génératives.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <p className="section-label">Notre approche</p>
          <h2 className="mb-10">
            Six leviers pour <span className="text-em">vendre plus</span> en ligne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass-card p-6">
                <div className="step-number mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg mb-3">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="glass-card p-8">
              <p className="text-4xl font-bold gradient-text mb-2">53%</p>
              <p className="text-sm">
                du trafic e-commerce provient de la recherche organique
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-4xl font-bold gradient-text mb-2">10x</p>
              <p className="text-sm">
                plus de clics pour le résultat #1 vs le résultat #10 sur Google
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-4xl font-bold gradient-text mb-2">40%</p>
              <p className="text-sm">
                des acheteurs commencent leur recherche produit par une IA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services recommandés */}
      <section className="section">
        <div className="container">
          <p className="section-label">Services recommand&eacute;s pour le e-commerce</p>
          <h2 className="mb-10">Notre stack pour booster ton e-commerce</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/services/seo/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">SEO e-commerce technique</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Fiches produits optimis&eacute;es, rich snippets, Core Web Vitals et architecture de cat&eacute;gories pour capturer chaque intention de recherche produit.</p>
            </Link>
            <Link href="/services/aeo/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">AEO pour les requ&ecirc;tes produits</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Pour &ecirc;tre la r&eacute;ponse directe quand un acheteur demande &laquo;&nbsp;quel est le meilleur X&nbsp;?&nbsp;&raquo; dans Google AI Overviews.</p>
            </Link>
            <Link href="/services/chatbot-ia/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">Chatbot IA de vente</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Un assistant conversationnel qui guide tes visiteurs vers le bon produit, r&eacute;pond aux objections et augmente ton taux de conversion 24/7.</p>
            </Link>
            <Link href="/services/automatisation/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">Automatisation e-commerce</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Workflows n8n qui connectent Shopify, ton inventaire, ton CRM et tes campagnes email pour automatiser abandons de panier, relances et upsell.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
