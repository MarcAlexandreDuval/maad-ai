"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Now", href: "#why-now" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/[0.07] backdrop-blur-xl [background:rgba(8,10,12,0.75)]"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <Image
          src="/logo-maad-ai.png"
          alt="MAAD-AI"
          width={32}
          height={32}
          className="opacity-90 group-hover:opacity-100 transition-opacity"
          priority
        />
        <span
          className="text-sm font-semibold text-white hidden sm:block"
          style={{ fontFamily: "var(--font-display)" }}
        >
          MAAD-AI
        </span>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-7 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm font-medium text-[#6B7A8D] hover:text-white transition-colors duration-150"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#contact"
        className="bg-[#34D399] text-[#080A0C] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#6EE7B7] transition-all duration-150 hover:-translate-y-px"
      >
        Book a Call
      </Link>
    </motion.nav>
  );
}
