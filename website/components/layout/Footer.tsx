import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="container-rail py-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-5">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 border border-emerald rounded-sm rotate-45" />
                <div className="absolute inset-2 bg-emerald rounded-[1px] rotate-45" />
              </div>
              <span className="text-display text-lg">
                MAAD<span className="text-emerald">-AI</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Agence d&apos;intelligence artificielle.
              <br />
              {SITE.city}, {SITE.region}, {SITE.province}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 label-mono">
            <Link href="/services/intelligence-artificielle" className="hover:text-emerald transition-colors">
              Services IA
            </Link>
            <Link href="/services/visibilite-web" className="hover:text-emerald transition-colors">
              Visibilité Web
            </Link>
            <Link href="/industries" className="hover:text-emerald transition-colors">
              Industries
            </Link>
            <Link href="/blog" className="hover:text-emerald transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-emerald transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-emerald transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="divider-glow my-10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 label-mono text-[0.65rem]">
          <div>
            © 2026 {SITE.name} — Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <a href={`mailto:${SITE.email}`} className="hover:text-emerald transition-colors">
              {SITE.email}
            </a>
            <Link href="/terms" className="hover:text-emerald transition-colors">
              Conditions
            </Link>
            <Link href="/privacy" className="hover:text-emerald transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
