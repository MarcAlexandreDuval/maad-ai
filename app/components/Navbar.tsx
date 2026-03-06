"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Now",  href: "#why-now" },
  { label: "FAQ",      href: "#faq" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glass backing layer */}
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          background: "rgba(8,10,12,0.72)",
          borderBottom: "1px solid rgba(255,255,255,0.055)",
        } as React.CSSProperties}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/logo-maad-ai.png"
            alt="MAAD-AI"
            width={28}
            height={28}
            className="opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            priority
          />
          <span
            className="text-[13px] font-semibold text-white/80 group-hover:text-white transition-colors duration-200 hidden sm:block"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" } as React.CSSProperties}
          >
            MAAD-AI
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-[#6B7A8D] hover:text-white transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <Link
          href="#contact"
          className="inline-flex items-center bg-[#34D399] text-[#080A0C] px-5 py-2 rounded-lg text-[13px] font-semibold tracking-[-0.01em] transition-all duration-200 hover:bg-[#6EE7B7] hover:shadow-glow-sm hover:-translate-y-px"
        >
          Book a Call
        </Link>

      </div>
    </motion.header>
  );
}
