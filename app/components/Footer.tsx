import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex flex-col items-start gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="MAAD-AI" width={64} height={64} className="w-16 h-16 opacity-90" />
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-white">MAAD</span>
                <span className="text-em">-AI</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
              Agence SEO, AEO &amp; GEO pour les PME du Qu&eacute;bec. Joliette, Lanaudi&egrave;re.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/services/agents-ia/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Agents IA</Link></li>
              <li><Link href="/services/automatisation/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Automatisation</Link></li>
              <li><Link href="/services/chatbot-ia/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Chatbot IA</Link></li>
              <li><Link href="/services/seo/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">SEO</Link></li>
              <li><Link href="/services/seo-local/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">SEO Local</Link></li>
              <li><Link href="/services/aeo/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">AEO</Link></li>
              <li><Link href="/services/geo/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">GEO</Link></li>
              <li><Link href="/services/conception-web/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Conception Web</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-4">Entreprise</h4>
            <ul className="space-y-2.5">
              <li><Link href="/a-propos/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">&Agrave; propos</Link></li>
              <li><Link href="/blog/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Blog</Link></li>
              <li><Link href="/contact/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Contact</Link></li>
              <li><Link href="/faq/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2.5">
              <li><Link href="/industries/b2b/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">B2B</Link></li>
              <li><Link href="/industries/e-commerce/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">E-commerce</Link></li>
              <li><Link href="/industries/startup/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Startup</Link></li>
              <li><Link href="/industries/saas/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">SaaS</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} MAAD-AI. Tous droits r&eacute;serv&eacute;s. Joliette, Qu&eacute;bec.
          </p>
          <div className="flex gap-6">
            <Link href="/terms/" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Conditions</Link>
            <Link href="/privacy/" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Confidentialit&eacute;</Link>
            <Link href="/contact/" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-emerald)] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
