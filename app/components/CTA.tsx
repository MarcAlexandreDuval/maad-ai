"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-36 md:py-52 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Deep radial emerald glow — primary */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 55% at 50% 105%, rgba(52,211,153,0.16) 0%, rgba(52,211,153,0.05) 50%, transparent 72%)",
        }}
      />

      {/* Ambient outer glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 70% at 50% 50%, rgba(52,211,153,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Dot grid — subtler version */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center relative"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-[#34D399]/25 bg-[#34D399]/[0.07] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-[#34D399] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse-slow" />
          Free strategy call — no commitment
        </motion.div>

        {/* Headline */}
        <h2
          className="text-white mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(46px, 7vw, 84px)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 0.97,
          } as React.CSSProperties}
        >
          Start showing up
          <br />
          <span
            style={{
              background: "linear-gradient(120deg, #34D399 0%, #6EE7B7 55%, #34D399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            } as React.CSSProperties}
          >
            where buyers search
          </span>
        </h2>

        {/* Subtext */}
        <p
          className="text-[#6B7A8D] mb-12 max-w-lg mx-auto leading-relaxed"
          style={{ fontSize: "16px" } as React.CSSProperties}
        >
          Book a free 30-minute strategy call. We&apos;ll audit your AI search
          visibility and show you exactly where your brand is missing from the
          conversation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="https://maad-ai.com/contact"
            className="group inline-flex items-center gap-2.5 bg-[#34D399] text-[#080A0C] px-9 py-4 rounded-xl font-semibold text-[15px] tracking-[-0.01em] transition-all duration-200 hover:bg-[#6EE7B7] hover:-translate-y-0.5 hover:shadow-btn"
          >
            Book Your Free Call
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href="mailto:info@maad-ai.com"
            className="text-[14px] text-[#6B7A8D] hover:text-[#9AAABB] transition-colors duration-150"
          >
            or email{" "}
            <span className="text-[#9AAABB] font-medium underline underline-offset-4 decoration-white/15">
              info@maad-ai.com
            </span>
          </a>
        </div>

        {/* Trust footnote */}
        <p className="text-[12px] text-[#6B7A8D]/45 tracking-wide">
          No sales pressure · No long-term contracts · English &amp; French
        </p>
      </motion.div>
    </section>
  );
}
