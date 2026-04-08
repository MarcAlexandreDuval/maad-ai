import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles et insights sur le SEO, l\'AEO, le GEO et l\'intelligence artificielle pour les PME du Québec. Stratégies, guides et tendances.',
  openGraph: {
    title: 'Blog | MAAD-AI',
    description: 'Articles et insights sur le SEO, l\'AEO, le GEO et l\'intelligence artificielle pour les PME du Québec.',
    url: 'https://maad-ai.com/blog',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: {
    canonical: 'https://maad-ai.com/blog',
  },
}

const articles = [
  {
    slug: 'guide-aeo-answer-engine-optimization',
    title: 'Le guide complet de l\'AEO (Answer Engine Optimization) en 2026',
    excerpt: 'Découvre comment optimiser ton contenu pour apparaître directement dans les réponses des moteurs de recherche et des assistants IA.',
    date: '2026-03-28',
    category: 'AEO',
  },
  {
    slug: 'geo-generative-engine-optimization-explique',
    title: 'GEO expliqué : comment être cité par ChatGPT, Gemini et Perplexity',
    excerpt: 'Le Generative Engine Optimization est la prochaine frontière du marketing digital. Voici comment positionner ta marque dans les réponses générées par l\'IA.',
    date: '2026-03-15',
    category: 'GEO',
  },
  {
    slug: 'seo-local-pme-quebec',
    title: '7 stratégies SEO local incontournables pour les PME du Québec',
    excerpt: 'Le SEO local reste un levier puissant pour attirer des clients dans ta région. Voici les tactiques qui fonctionnent vraiment en 2026.',
    date: '2026-03-02',
    category: 'SEO',
  },
  {
    slug: 'intelligence-artificielle-pme-guide',
    title: 'L\'IA pour les PME : par où commencer sans se ruiner',
    excerpt: 'L\'intelligence artificielle n\'est plus réservée aux grandes entreprises. Découvre les outils et stratégies accessibles pour automatiser et croître.',
    date: '2026-02-18',
    category: 'IA',
  },
  {
    slug: 'seo-vs-aeo-vs-geo-differences',
    title: 'SEO vs AEO vs GEO : comprendre les différences et choisir la bonne stratégie',
    excerpt: 'Ces trois approches sont complémentaires, pas concurrentes. On t\'explique quand et comment utiliser chacune pour maximiser ta visibilité.',
    date: '2026-02-05',
    category: 'Stratégie',
  },
  {
    slug: 'citations-ia-comment-ca-marche',
    title: 'Comment les citations IA fonctionnent — et pourquoi elles changent tout',
    excerpt: 'Quand une IA recommande ton entreprise, c\'est plus puissant qu\'un lien bleu. Plonge dans la mécanique des citations dans les réponses génératives.',
    date: '2026-01-22',
    category: 'GEO',
  },
]

const categories = ['Tous', 'SEO', 'AEO', 'GEO', 'IA', 'Stratégie']

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog MAAD-AI',
    url: 'https://maad-ai.com/blog',
    description: 'Articles et insights sur le SEO, l\'AEO, le GEO et l\'intelligence artificielle pour les PME du Québec.',
    publisher: {
      '@type': 'Organization',
      name: 'MAAD-AI',
      url: 'https://maad-ai.com',
    },
    inLanguage: 'fr-CA',
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <div className="text-center">
            <span className="badge badge-pulse">Ressources</span>
            <h1 className="mt-6 mb-6">
              Le <span className="gradient-text">blog</span> MAAD-AI
            </h1>
            <p className="max-w-2xl mx-auto text-lg">
              Stratégies, guides et réflexions sur le SEO, l&apos;AEO, le GEO et l&apos;intelligence artificielle appliquée au marketing digital.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tech-tag cursor-pointer transition-all hover:bg-[rgba(0,200,150,0.12)] ${cat === 'Tous' ? 'bg-[rgba(0,200,150,0.12)]' : ''}`}
                style={{ padding: '6px 16px', fontSize: '0.8rem' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.slug}>
                <article className="blog-card h-full">
                  <div className="blog-card-thumb flex items-center justify-center">
                    <span className="text-[var(--color-text-muted)] text-sm font-mono">{article.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="tech-tag">{article.category}</span>
                      <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h3 className="text-lg mb-3" style={{ lineHeight: 1.3 }}>{article.title}</h3>
                    <p className="text-sm">{article.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Tu veux qu'on parle de ta stratégie ?"
        description="Réserve un audit gratuit et découvre comment le SEO, l'AEO et le GEO peuvent propulser ta visibilité."
      />
    </main>
  )
}
