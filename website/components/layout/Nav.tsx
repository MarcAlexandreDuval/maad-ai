"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { NAV, INDUSTRIES } from "@/lib/site";

type DropdownId = "services" | "industries" | null;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<DropdownId>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function openDropdown(id: Exclude<DropdownId, null>) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(id);
  }
  function closeDropdownDelayed() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdown(null), 140);
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pt-4 md:pt-5 pointer-events-none">
        <div className="container-rail relative flex justify-end lg:justify-center pointer-events-none">
          {/* Pill (desktop) / compact wrapper (mobile) */}
          <div
            className={`nav-pill pointer-events-auto flex items-center w-auto justify-start gap-2 md:gap-3 transition-all duration-500 ${
              scrolled ? "nav-pill--scrolled" : ""
            }`}
          >
            {/* Desktop nav links — borderless, part of the outer pill only */}
            <nav className="hidden lg:flex items-center gap-0.5 px-1">
              <Link href="/" className="nav-link">
                Accueil
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("services")}
                onMouseLeave={closeDropdownDelayed}
              >
                <button
                  className={`nav-link flex items-center gap-1.5 ${
                    dropdown === "services" ? "nav-link--active" : ""
                  }`}
                  aria-haspopup="true"
                  aria-expanded={dropdown === "services"}
                >
                  Services
                  <Chevron open={dropdown === "services"} />
                </button>
              </div>

              {/* Industries dropdown */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("industries")}
                onMouseLeave={closeDropdownDelayed}
              >
                <button
                  className={`nav-link flex items-center gap-1.5 ${
                    dropdown === "industries" ? "nav-link--active" : ""
                  }`}
                  aria-haspopup="true"
                  aria-expanded={dropdown === "industries"}
                >
                  Industries
                  <Chevron open={dropdown === "industries"} />
                </button>
              </div>

              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <Link href="/a-propos" className="nav-link">
                À propos
              </Link>
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2 pl-1 md:pl-2">
              <Link href="/contact" className="hidden lg:inline-flex nav-cta group">
                Contacte-nous
                <ArrowUpRight />
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden w-14 h-14 mr-1 flex flex-col items-center justify-center gap-[7px] rounded-full hover:bg-white/5 transition-colors"
                aria-label="Menu"
                aria-expanded={open}
              >
                <span
                  className={`block w-7 h-[2px] bg-emerald rounded-full transition-transform duration-300 ${
                    open ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block w-7 h-[2px] bg-emerald rounded-full transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-7 h-[2px] bg-emerald rounded-full transition-transform duration-300 ${
                    open ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>

        </div>

        {/* Desktop Services mega-dropdown */}
        {dropdown === "services" && (
          <div
            className="hidden lg:block container-rail pointer-events-none"
            onMouseEnter={() => openDropdown("services")}
            onMouseLeave={closeDropdownDelayed}
          >
            <div className="flex justify-center mt-3">
              <div className="mega pointer-events-auto animate-fade-down w-[min(760px,calc(100vw-3rem))]">
                <div className="grid grid-cols-2 gap-0 divide-x divide-white/5">
                  <MegaColumn
                    eyebrow="Intelligence Artificielle"
                    pillar={NAV.ia.pillar}
                    items={NAV.ia.items}
                    onNavigate={() => setDropdown(null)}
                  />
                  <MegaColumn
                    eyebrow="Visibilité Web"
                    pillar={NAV.visibility.pillar}
                    items={NAV.visibility.items}
                    onNavigate={() => setDropdown(null)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Industries dropdown */}
        {dropdown === "industries" && (
          <div
            className="hidden lg:block container-rail pointer-events-none"
            onMouseEnter={() => openDropdown("industries")}
            onMouseLeave={closeDropdownDelayed}
          >
            <div className="flex justify-center mt-3">
              <div className="mega pointer-events-auto animate-fade-down w-[min(440px,calc(100vw-3rem))]">
                <div className="p-6">
                  <div className="label-mono text-emerald mb-4 text-[0.62rem]">
                    Industries desservies
                  </div>
                  <Link
                    href="/industries"
                    onClick={() => setDropdown(null)}
                    className="group flex items-center justify-between pb-3 mb-3 border-b border-white/5 hover:text-emerald transition-colors"
                  >
                    <span className="text-display text-base">Vue d&apos;ensemble</span>
                    <span className="text-emerald opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                  <div className="flex flex-col">
                    {INDUSTRIES.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setDropdown(null)}
                        className="group flex flex-col gap-0.5 py-2.5 px-3 -mx-3 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="text-display text-base text-bone group-hover:text-emerald transition-colors">
                          {it.label}
                        </span>
                        <span className="label-mono text-[0.6rem] opacity-55">
                          {it.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile fullscreen menu */}
      {open && (
        <div className="fixed inset-0 z-40 pt-28 pb-12 px-6 overflow-y-auto lg:hidden">
          <div className="max-w-xl mx-auto flex flex-col gap-10 bg-ink/90 backdrop-blur-2xl rounded-3xl border border-white/10 px-6 py-8 shadow-2xl">
            <Link
              href="/"
              className="text-display text-3xl"
              onClick={() => setOpen(false)}
            >
              Accueil
            </Link>

            <MobileSection
              title="Intelligence Artificielle"
              pillar={NAV.ia.pillar}
              items={NAV.ia.items}
              onNavigate={() => setOpen(false)}
            />
            <MobileSection
              title="Visibilité Web"
              pillar={NAV.visibility.pillar}
              items={NAV.visibility.items}
              onNavigate={() => setOpen(false)}
            />

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <div className="label-mono text-emerald">Industries</div>
              <Link
                href="/industries"
                className="text-display text-2xl text-emerald"
                onClick={() => setOpen(false)}
              >
                → Vue d&apos;ensemble
              </Link>
              {INDUSTRIES.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="flex flex-col gap-0.5"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-display text-xl">{it.label}</span>
                  <span className="label-mono text-[0.62rem] opacity-60">{it.desc}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-5 pt-6 border-t border-white/10">
              <Link
                href="/a-propos"
                className="text-display text-2xl"
                onClick={() => setOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/blog"
                className="text-display text-2xl"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="text-display text-2xl"
                onClick={() => setOpen(false)}
              >
                FAQ
              </Link>
            </div>

            <Link
              href="/contact"
              className="btn btn-primary justify-center w-full"
              onClick={() => setOpen(false)}
            >
              Contacte-nous
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

type PillarItem = { href: string; label: string };
type ServiceItem = { href: string; label: string; tagline: string };

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 4 L5 7 L8 4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden
    >
      <path
        d="M4 10 L10 4 M10 4 H5 M10 4 V9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MegaColumn({
  eyebrow,
  pillar,
  items,
  onNavigate,
}: {
  eyebrow: string;
  pillar: PillarItem;
  items: ServiceItem[];
  onNavigate: () => void;
}) {
  return (
    <div className="p-6">
      <div className="label-mono text-emerald mb-4 text-[0.62rem]">{eyebrow}</div>
      <Link
        href={pillar.href}
        onClick={onNavigate}
        className="group flex items-center justify-between pb-3 mb-3 border-b border-white/5 hover:text-emerald transition-colors"
      >
        <span className="text-display text-base">{pillar.label}</span>
        <span className="text-emerald opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </span>
      </Link>
      <div className="flex flex-col">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            onClick={onNavigate}
            className="group flex flex-col gap-0.5 py-2.5 px-3 -mx-3 rounded-lg hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-display text-base text-bone group-hover:text-emerald transition-colors">
              {it.label}
            </span>
            <span className="label-mono text-[0.6rem] opacity-55">{it.tagline}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileSection({
  title,
  pillar,
  items,
  onNavigate,
}: {
  title: string;
  pillar: PillarItem;
  items: ServiceItem[];
  onNavigate: () => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="label-mono text-emerald">{title}</div>
      <Link
        href={pillar.href}
        className="text-display text-2xl text-emerald"
        onClick={onNavigate}
      >
        → {pillar.label}
      </Link>
      {items.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          className="flex flex-col gap-0.5"
          onClick={onNavigate}
        >
          <span className="text-display text-xl">{it.label}</span>
          <span className="label-mono text-[0.62rem] opacity-60">{it.tagline}</span>
        </Link>
      ))}
    </div>
  );
}
