import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import CTA from './CTA'

interface ServiceFeature {
  title: string
  description: string
}

interface ServicePageProps {
  badge: string
  title: string
  subtitle: string
  intro: string
  features: ServiceFeature[]
  whyTitle: string
  whyDescription: string
  whyPoints: string[]
  faqItems?: { question: string; answer: string }[]
  breadcrumbLabel: string
  children?: React.ReactNode
}

export default function ServicePageLayout({
  badge,
  title,
  subtitle,
  intro,
  features,
  whyTitle,
  whyDescription,
  whyPoints,
  breadcrumbLabel,
  children,
}: ServicePageProps) {
  return (
    <main>
      {/* Hero */}
      <section className="section pt-32 md:pt-40">
        <div className="container">
          <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: breadcrumbLabel }]} />
          <div className="badge badge-pulse mb-6">{badge}</div>
          <h1 className="mb-6 max-w-3xl">{title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-[var(--color-text-dim)]">{subtitle}</p>
          <Link href="https://calendly.com/marc-alexandre-duval-maad-ai/free-audit" target="_blank" rel="noopener noreferrer" className="btn-primary">
            R&eacute;serve ton audit gratuit
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-[var(--color-text-dim)]">{intro}</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <p className="section-label">Ce qu&apos;on fait</p>
          <h2 className="mb-12">Notre approche</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass-card p-8">
                <div className="step-number mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg mb-3">{f.title}</h3>
                <p className="text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Pourquoi</p>
              <h2 className="mb-6">{whyTitle}</h2>
              <p className="text-[var(--color-text-dim)] leading-relaxed">{whyDescription}</p>
            </div>
            <div className="space-y-4">
              {whyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 glass-card p-5">
                  <svg className="flex-shrink-0 mt-0.5 text-[var(--color-emerald)]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-[var(--color-text-dim)]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {children}

      <CTA />
    </main>
  )
}
