import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="container-rail py-14 md:py-16">
        {/* Top: logo block + nav columns */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          {/* Brand block — centered on mobile, left on desktop */}
          <div className="w-full lg:max-w-md flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link
              href="/"
              aria-label="MAAD-AI — accueil"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <span className="text-bone group-hover:text-emerald transition-colors duration-500">
                <Logo size={44} />
              </span>
              <span className="text-display text-xl leading-none">
                MAAD<span className="text-emerald">-AI</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-7">
              Agence d&apos;intelligence artificielle.
              <br />
              {SITE.city}, {SITE.region}, {SITE.province}.
            </p>
            <SocialIcons className="justify-center lg:justify-start" />
          </div>

          {/* Nav columns — centered on mobile, left on desktop */}
          <nav className="w-full lg:w-auto grid grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-8 label-mono text-[0.68rem] text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="text-emerald opacity-80 mb-1">Services</div>
              <Link
                href="/services/intelligence-artificielle"
                className="hover:text-emerald transition-colors"
              >
                Intelligence Artificielle
              </Link>
              <Link
                href="/services/visibilite-web"
                className="hover:text-emerald transition-colors"
              >
                Visibilité Web
              </Link>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="text-emerald opacity-80 mb-1">Explorer</div>
              <Link href="/industries" className="hover:text-emerald transition-colors">
                Industries
              </Link>
              <Link href="/blog" className="hover:text-emerald transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="hover:text-emerald transition-colors">
                FAQ
              </Link>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="text-emerald opacity-80 mb-1">Entreprise</div>
              <Link href="/a-propos" className="hover:text-emerald transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="hover:text-emerald transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>

        <div className="divider-glow my-12" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-6 label-mono text-[0.62rem] md:text-[0.65rem]">
          {/* Left stack: copyright */}
          <div className="opacity-70">
            © 2026 {SITE.name} — Tous droits réservés.
          </div>

          {/* Right stack: legal links — stacked on mobile, stacked on desktop too */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <Link href="/terms" className="hover:text-emerald transition-colors">
              Conditions d&apos;utilisation
            </Link>
            <Link href="/privacy" className="hover:text-emerald transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
