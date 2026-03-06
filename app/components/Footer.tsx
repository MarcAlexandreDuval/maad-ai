import Link from "next/link";
import Image from "next/image";
import React from "react";

const links = [
  { label: "Services",  href: "#services" },
  { label: "Why Now",   href: "#why-now" },
  { label: "FAQ",       href: "#faq" },
  { label: "Contact",   href: "https://maad-ai.com/contact" },
  { label: "info@maad-ai.com", href: "mailto:info@maad-ai.com" },
];

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-7"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo-maad-ai.png"
            alt="MAAD-AI"
            width={22}
            height={22}
            className="opacity-60"
          />
          <span
            className="text-[13px] font-semibold text-white/60"
            style={{ fontFamily: "var(--font-display)" } as React.CSSProperties}
          >
            MAAD-AI
          </span>
          <span className="text-white/15 text-sm select-none">·</span>
          <span className="text-[12px] text-[#6B7A8D]/60">
            © {new Date().getFullYear()} · Quebec, Canada
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[12px] text-[#6B7A8D]/55 hover:text-[#9AAABB] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </footer>
  );
}
