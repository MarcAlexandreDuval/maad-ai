"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<"ia" | "viz" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-ink/70 border-b border-white/5" : ""
        }`}
      >
        <div className="container-rail flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-2 group" aria-label="MAAD-AI">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border border-emerald rounded-sm rotate-45 group-hover:rotate-[60deg] transition-transform duration-700" />
              <div className="absolute inset-1 bg-emerald/30 rounded-sm rotate-45 group-hover:scale-90 transition-transform duration-700" />
              <div className="absolute inset-2.5 bg-emerald rounded-[2px] rotate-45" />
            </div>
            <span className="text-display text-xl tracking-tight">
              MAAD<span className="text-emerald">-AI</span>
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            <DesktopDropdown
              id="ia"
              label="Intelligence"
              data={NAV.ia}
              activeId={hovered}
              setActiveId={setHovered}
            />
            <DesktopDropdown
              id="viz"
              label="Visibilité"
              data={NAV.visibility}
              activeId={hovered}
              setActiveId={setHovered}
            />
            <Link href="/industries" className="nav-link">
              Industries
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/a-propos" className="nav-link">
              À propos
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex btn btn-primary !py-2.5 !px-5 !text-sm"
            >
              Contacte-nous
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-full"
              aria-label="Menu"
            >
              <span
                className={`block w-4 h-px bg-bone transition-transform ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-4 h-px bg-bone transition-transform ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 pt-24 pb-12 px-6 overflow-y-auto lg:hidden bg-ink/95 backdrop-blur-2xl">
          <div className="max-w-xl mx-auto flex flex-col gap-10">
            <MobileSection title="Intelligence Artificielle" data={NAV.ia} onNavigate={() => setOpen(false)} />
            <MobileSection title="Visibilité Web" data={NAV.visibility} onNavigate={() => setOpen(false)} />
            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <Link href="/industries" className="text-display text-2xl" onClick={() => setOpen(false)}>
                Industries
              </Link>
              <Link href="/blog" className="text-display text-2xl" onClick={() => setOpen(false)}>
                Blog
              </Link>
              <Link href="/a-propos" className="text-display text-2xl" onClick={() => setOpen(false)}>
                À propos
              </Link>
              <Link href="/faq" className="text-display text-2xl" onClick={() => setOpen(false)}>
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

      <style jsx>{`
        .nav-link {
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
          color: var(--bone-muted);
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--bone);
        }
      `}</style>
    </>
  );
}

type DropdownData = {
  label: string;
  pillar: { href: string; label: string };
  items: { href: string; label: string; tagline: string }[];
};

function DesktopDropdown({
  id,
  label,
  data,
  activeId,
  setActiveId,
}: {
  id: "ia" | "viz";
  label: string;
  data: DropdownData;
  activeId: "ia" | "viz" | null;
  setActiveId: (v: "ia" | "viz" | null) => void;
}) {
  const isActive = activeId === id;
  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveId(id)}
      onMouseLeave={() => setActiveId(null)}
    >
      <button
        className={`nav-link flex items-center gap-1.5 ${isActive ? "text-bone" : ""}`}
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
        >
          <path d="M2 4 L5 7 L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>
      {isActive && (
        <div className="absolute top-full left-0 pt-4 min-w-[380px]">
          <div className="glass p-6 animate-fade-in">
            <Link
              href={data.pillar.href}
              className="block pb-3 mb-3 border-b border-white/5 label-mono hover:text-emerald transition-colors"
            >
              → {data.pillar.label}
            </Link>
            <div className="flex flex-col gap-1">
              {data.items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="group flex flex-col gap-0.5 p-3 -mx-3 rounded-lg hover:bg-white/3 transition-colors"
                >
                  <span className="text-display text-lg text-bone group-hover:text-emerald transition-colors">
                    {it.label}
                  </span>
                  <span className="label-mono text-[0.65rem] opacity-60">{it.tagline}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .nav-link {
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
          color: var(--bone-muted);
          transition: color 0.3s ease;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}

function MobileSection({
  title,
  data,
  onNavigate,
}: {
  title: string;
  data: DropdownData;
  onNavigate: () => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="label-mono">{title}</div>
      <Link
        href={data.pillar.href}
        className="text-display text-2xl text-emerald"
        onClick={onNavigate}
      >
        → Vue d&apos;ensemble
      </Link>
      {data.items.map((it) => (
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
