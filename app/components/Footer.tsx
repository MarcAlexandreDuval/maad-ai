import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo-maad-ai.png"
            alt="MAAD-AI"
            width={24}
            height={24}
            className="opacity-70"
          />
          <span
            className="text-sm font-semibold text-white/70"
            style={{ fontFamily: "var(--font-display)" } as React.CSSProperties}
          >
            MAAD-AI
          </span>
          <span className="text-white/20 text-sm">·</span>
          <span className="text-[#6B7A8D] text-xs">
            © {new Date().getFullYear()} · Quebec, Canada
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            { label: "Services", href: "#services" },
            { label: "Why Now", href: "#why-now" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "https://maad-ai.com/contact" },
            { label: "info@maad-ai.com", href: "mailto:info@maad-ai.com" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs text-[#6B7A8D]/70 hover:text-[#9AAABB] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
