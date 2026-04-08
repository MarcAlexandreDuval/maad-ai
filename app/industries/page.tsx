import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'Industries | SEO & IA par secteur',
  description:
    'Découvre comment MAAD-AI adapte ses stratégies SEO, AEO et GEO à chaque industrie : B2B, e-commerce, startup et SaaS. Expertise sectorielle au Québec.',
  openGraph: {
    title: 'Industries | SEO & IA par secteur — MAAD-AI',
    description:
      "Stratégies SEO, AEO et GEO adaptées à ton secteur d'activité. Expertise multisectorielle au Québec.",
    url: 'https://maad-ai.com/industries',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: {
    canonical: 'https://maad-ai.com/industries',
  },
}

const industries = [
  {
    title: 'B2B',
    slug: 'b2b',
    description:
      'Cycles de vente longs, décideurs multiples, contenu stratégique. On positionne ta marque comme LA référence dans ton industrie.',
    tag: 'Cycle de vente long',
  },
  {
    title: 'E-commerce',
    slug: 'e-commerce',
    description:
      'Fiches produits optimisées, rich snippets, vitesse de chargement. Chaque clic compte quand tu vends en ligne au Québec.',
    tag: 'Boutiques en ligne',
  },
  {
    title: 'Startup',
    slug: 'startup',
    description:
      'Croissance rapide, budget lean, visibilité maximale. On bâtit ta présence organique pendant que tu scales.',
    tag: 'Croissance rapide',
  },
  {
    title: 'SaaS',
    slug: 'saas',
    description:
      'Pages de fonctionnalités, comparatifs, documentation. On fait découvrir ton logiciel aux moteurs de recherche et aux IA.',
    tag: 'Logiciel en ligne',
  },
]

export default function IndustriesPage() {
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
          <Breadcrumb items={[{ label: 'Industries' }]} />

          <div className="max-w-3xl">
            <p className="section-label">Expertise sectorielle</p>
            <h1 className="mb-6">
              Industries qu&apos;on{' '}
              <span className="gradient-text">propulse</span>
            </h1>
            <p className="text-lg max-w-2xl">
              Chaque industrie a ses propres réalités : cycles de vente, comportements
              d&apos;achat, canaux de découverte. On adapte nos stratégies SEO, AEO et
              GEO pour que ta visibilité colle parfaitement à ton marché — pas de
              recette générique, juste des résultats concrets.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                <div className="glass-card p-8 h-full flex flex-col justify-between group cursor-pointer">
                  <div>
                    <span className="badge badge-pulse mb-4">{ind.tag}</span>
                    <h3 className="mb-3">{ind.title}</h3>
                    <p>{ind.description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[var(--color-emerald)] font-semibold text-sm">
                    Découvrir
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sector Expertise */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-label">Pourquoi c&apos;est important</p>
          <h2 className="mb-6">
            Le SEO générique, c&apos;est <span className="text-em">fini</span>
          </h2>
          <p className="mb-4">
            Un site e-commerce et une plateforme SaaS ne se positionnent pas de la même
            façon. Les intentions de recherche, les formats de contenu et les signaux de
            confiance varient d&apos;un secteur à l&apos;autre. Google et les moteurs IA
            le savent — et ils récompensent les sites qui démontrent une vraie expertise
            dans leur domaine.
          </p>
          <p>
            Chez MAAD-AI, on combine la connaissance sectorielle avec les dernières
            avancées en intelligence artificielle pour créer des stratégies qui parlent
            autant aux algorithmes qu&apos;à tes clients potentiels. Le résultat : plus
            de trafic qualifié, plus de conversions, et une présence durable dans les
            réponses générées par l&apos;IA.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  )
}
