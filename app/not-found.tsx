import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center">
          {/* Big 404 */}
          <div className="relative inline-block mb-8">
            <span
              className="font-mono font-bold select-none"
              style={{
                fontSize: 'clamp(8rem, 20vw, 14rem)',
                lineHeight: 1,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,200,150,0.04) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              404
            </span>
            {/* Glow behind */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
          </div>

          <h1 className="text-2xl md:text-3xl mb-4">
            Cette page n&apos;existe pas
          </h1>
          <p className="max-w-md mx-auto mb-10 text-lg">
            La page que tu cherches a peut-être été déplacée, supprimée, ou n&apos;a jamais existé. Pas de panique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary text-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <Link href="/contact" className="btn-ghost text-center">
              Nous contacter
            </Link>
          </div>

          {/* Decorative terminal line */}
          <div className="mt-16 inline-block">
            <code
              className="text-xs font-mono px-4 py-2 rounded-lg"
              style={{
                color: 'var(--color-text-muted)',
                background: 'var(--color-glass)',
                border: '1px solid var(--color-glass-border)',
              }}
            >
              $ curl -I maad-ai.com/... → <span className="text-em">HTTP 404</span> Not Found
            </code>
          </div>
        </div>
      </section>
    </main>
  )
}
