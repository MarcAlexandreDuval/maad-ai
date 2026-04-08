import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'SEO Startup tech',
  description:
    'Stratégies SEO, AEO et GEO pour startups tech au Québec. Croissance organique rapide, content strategy et visibilité IA pour scaler sans brûler ton budget.',
  openGraph: {
    title: 'SEO Startup tech | MAAD-AI',
    description:
      'Croissance organique rapide et scalable pour startups. Sois visible avant même d\'avoir un budget pub.',
    url: 'https://maad-ai.com/industries/startup',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: {
    canonical: 'https://maad-ai.com/industries/startup',
  },
}

const features = [
  {
    title: 'Growth SEO',
    description:
      'Stratégie d\'acquisition organique pensée pour scaler. On identifie les opportunités à fort volume et faible compétition pour générer du trafic rapidement, même avec un domaine jeune.',
  },
  {
    title: 'Stratégie de contenu',
    description:
      'Calendrier éditorial aligné sur ton product roadmap. Chaque article, guide ou landing page sert un objectif précis : attirer, éduquer ou convertir.',
  },
  {
    title: 'Product-led SEO',
    description:
      'On optimise chaque page liée à ton produit — fonctionnalités, cas d\'usage, intégrations — pour capter les utilisateurs qui cherchent exactement ce que tu offres.',
  },
  {
    title: 'Autorité de marque',
    description:
      'Relations presse digitales, mentions dans les médias tech, backlinks de qualité. On construit ta crédibilité pour que Google et les IA te fassent confiance.',
  },
  {
    title: 'Visibilité IA (GEO)',
    description:
      'Les investisseurs et early adopters utilisent les IA pour découvrir de nouvelles solutions. On s\'assure que ta startup est citée dans les réponses de ChatGPT et Perplexity.',
  },
  {
    title: 'Présence investor-ready',
    description:
      'Un SEO solide, c\'est aussi un signal pour les VCs. On structure ta présence en ligne pour que ta marque inspire confiance lors du due diligence.',
  },
]

export default function StartupPage() {
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
        name: 'Startup',
        item: 'https://maad-ai.com/industries/startup',
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
              { label: 'Startup' },
            ]}
          />

          <div className="max-w-3xl">
            <span className="badge badge-pulse mb-6">
              Startup · Croissance rapide
            </span>
            <h1 className="mb-6">
              Scale ta visibilité{' '}
              <span className="gradient-text">aussi vite que ton produit</span>
            </h1>
            <p className="text-lg max-w-2xl">
              En startup, chaque dollar compte. Le SEO organique est ton levier de
              croissance le plus rentable à long terme — et avec l&apos;AEO et le GEO,
              tu peux être visible auprès des early adopters avant même d&apos;avoir un
              budget marketing. On bâtit ta présence pour qu&apos;elle scale avec toi.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-label">Le défi startup</p>
          <h2 className="mb-6">
            Zéro trafic, zéro budget pub —{' '}
            <span className="text-em">un produit à faire connaître</span>
          </h2>
          <p className="mb-4">
            Quand tu lances une startup tech, tu pars de zéro en termes de visibilité
            organique. Ton domaine est jeune, ton autorité est faible et tes
            compétiteurs établis dominent les résultats de recherche. La tentation,
            c&apos;est de tout miser sur le paid — mais ça ne scale pas.
          </p>
          <p className="mb-4">
            Le SEO startup, c&apos;est un jeu différent. Il faut être stratégique :
            cibler les bonnes niches, créer du contenu à forte valeur ajoutée et
            construire une autorité de domaine rapidement. Avec l&apos;arrivée des
            moteurs IA, il y a aussi une fenêtre d&apos;opportunité unique : les
            citations IA sont moins corrélées à l&apos;autorité de domaine que les
            résultats Google classiques.
          </p>
          <p>
            On exploite cette fenêtre pour toi. Notre stratégie combine le growth SEO
            classique avec des tactiques GEO de pointe pour maximiser ta visibilité
            rapidement et durablement.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <p className="section-label">Notre approche</p>
          <h2 className="mb-10">
            Six accélérateurs pour ta{' '}
            <span className="text-em">croissance organique</span>
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

      {/* Startup-specific advantages */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-label">L&apos;avantage startup</p>
          <h2 className="mb-6">
            Pourquoi les startups ont un{' '}
            <span className="text-em">avantage caché</span> en GEO
          </h2>
          <p className="mb-4">
            Les moteurs IA comme ChatGPT et Perplexity ne classent pas le contenu
            exactement comme Google. L&apos;autorité de domaine compte moins que la
            qualité, la fraîcheur et la pertinence du contenu. Pour une startup, ça veut
            dire que tu peux apparaître dans les réponses IA même si ton site a 6 mois.
          </p>
          <p className="mb-4">
            En plus, les startups ont naturellement un avantage : vous êtes agiles, vous
            créez du contenu innovant et vous résolvez des problèmes que les entreprises
            établies ignorent. On capitalise sur cette unicité pour te positionner comme
            LA réponse aux questions émergentes dans ton domaine.
          </p>
          <p>
            Le résultat : une visibilité organique qui croît en parallèle avec ton
            produit, un coût d&apos;acquisition client qui diminue avec le temps, et une
            présence qui impressionne autant tes utilisateurs que tes investisseurs.
          </p>
        </div>
      </section>

      {/* Services recommandés */}
      <section className="section">
        <div className="container">
          <p className="section-label">Services recommand&eacute;s pour les startups</p>
          <h2 className="mb-10">Notre stack pour les startups qui veulent scaler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/services/geo/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">GEO &mdash; ton raccourci d&apos;autorit&eacute;</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Le GEO permet &agrave; une jeune startup d&apos;appara&icirc;tre dans ChatGPT et Perplexity m&ecirc;me sans historique SEO. C&apos;est ton canal le plus rapide vers la visibilit&eacute;.</p>
            </Link>
            <Link href="/services/seo/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">SEO de croissance</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Content marketing SEO qui b&acirc;tit ton autorit&eacute; &agrave; long terme tout en capturant du trafic qualifi&eacute; d&egrave;s les premiers mois.</p>
            </Link>
            <Link href="/services/agents-ia/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">Agents IA pour lean team</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Quand ton &eacute;quipe est petite, un agent IA remplace 10-30 heures par semaine de t&acirc;ches r&eacute;p&eacute;titives &mdash; tu scales ton output sans grossir ton payroll.</p>
            </Link>
            <Link href="/services/automatisation/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">Automatisation du stack startup</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Workflows n8n qui connectent Notion, Linear, Slack, Stripe et ton CRM pour que l&apos;info circule sans intervention manuelle.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
