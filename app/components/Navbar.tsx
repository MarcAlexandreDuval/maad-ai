'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-3 md:top-4 left-0 right-0 z-50 px-4 md:px-8">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className={`liquid-glass rounded-full pl-2 pr-4 py-1.5 md:py-2 font-display text-base md:text-lg font-bold tracking-tight transition-all inline-flex items-center gap-2 ${
            scrolled ? 'shadow-lg shadow-black/30' : ''
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="MAAD-AI" width={32} height={32} className="w-8 h-8 md:w-9 md:h-9" />
          <span>
            <span className="text-white">MAAD</span>
            <span className="text-[#00c896]">-AI</span>
          </span>
        </Link>

        {/* Desktop Nav (centered pill) */}
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center">
          <Link href="/services/" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">Services</Link>
          <Link href="/industries/" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">Industries</Link>
          <Link href="/blog/" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">Blog</Link>
          <Link href="/a-propos/" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">&Agrave; propos</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="https://calendly.com/marc-alexandre-duval-maad-ai/free-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#00c896] hover:bg-[#00dea6] text-black rounded-full px-4 py-2.5 text-sm font-semibold transition-all hover:shadow-[0_0_30px_rgba(0,200,150,0.35)]"
          >
            Audit gratuit
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden liquid-glass rounded-full w-11 h-11 flex flex-col items-center justify-center gap-1"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-3 transition-all duration-300 ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
        <div className="liquid-glass rounded-3xl p-6 flex flex-col gap-1 max-w-6xl mx-auto">
          <Link href="/services/" onClick={() => setOpen(false)} className="px-4 py-3 text-base font-medium text-white/80 hover:text-white transition-colors">Services</Link>
          <Link href="/industries/" onClick={() => setOpen(false)} className="px-4 py-3 text-base font-medium text-white/80 hover:text-white transition-colors">Industries</Link>
          <Link href="/blog/" onClick={() => setOpen(false)} className="px-4 py-3 text-base font-medium text-white/80 hover:text-white transition-colors">Blog</Link>
          <Link href="/a-propos/" onClick={() => setOpen(false)} className="px-4 py-3 text-base font-medium text-white/80 hover:text-white transition-colors">&Agrave; propos</Link>
          <Link
            href="https://calendly.com/marc-alexandre-duval-maad-ai/free-audit"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#00c896] text-black rounded-full px-5 py-3 text-sm font-semibold text-center"
          >
            Audit gratuit
          </Link>
        </div>
      </div>
    </header>
  )
}
