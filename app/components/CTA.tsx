import Link from 'next/link'

interface CTAProps {
  title?: string
  description?: string
}

export default function CTA({
  title = 'Pr\u00eat \u00e0 devenir la r\u00e9ponse\u00a0?',
  description = 'R\u00e9serve ton audit gratuit et d\u00e9couvre comment le SEO, l\u2019AEO et le GEO peuvent transformer ta visibilit\u00e9 en ligne.',
}: CTAProps) {
  return (
    <section className="section relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-[var(--color-emerald)] opacity-[0.04] blur-[120px]" />
      </div>

      <div className="container text-center relative">
        <h2 className="mb-6">{title}</h2>
        <p className="max-w-xl mx-auto mb-10 text-lg">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://calendly.com/marc-alexandre-duval-maad-ai/free-audit" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            R&eacute;serve ton audit gratuit
          </Link>
          <Link href="/contact/" className="btn-ghost text-center">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
