"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import React from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-36 md:py-48 px-6 md:px-10 border-t border-white/[0.07] relative overflow-hidden"
    >
      {/* Large radial emerald glow — strong */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(52,211,153,0.14) 0%, rgba(52,211,153,0.04) 50%, transparent 75%)",
        }}
      />
      {/* Secondary outer glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(52,211,153,0.04) 0%, transparent 60%)",
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center relative"
      >
        <div className="inline-flex items-center gap-2 border border-[#34D399]/25 bg-[#34D399]/[0.07] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-[#34D399] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
          Free strategy call — no commitment
        </div>

        <h2
          className="font-extrabold text-white mb-6 leading-none"
          style={
            {
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 7vw, 80px)",
              letterSpacing: "-0.04em",
            } as React.CSSProperties
          }
        >
          Start showing up
          <br />
          <span className="text-[#34D399]">where buyers search</span>
        </h2>

        <p className="text-[#6B7A8D] text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Book a free 30-minute strategy call. We&apos;ll audit your AI search
          visibility and show you exactly where your brand is missing from the
          conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="https://maad-ai.com/contact"
            className="group inline-flex items-center gap-2.5 bg-[#34D399] text-[#080A0C] px-9 py-4 rounded-xl font-semibold text-base tracking-tight transition-all duration-200 hover:bg-[#6EE7B7] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(52,211,153,0.45),_0_0_0_1px_rgba(52,211,153,0.3)]"
          >
            Book Your Free Call
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href="mailto:info@maad-ai.com"
            className="text-sm text-[#6B7A8D] hover:text-[#9AAABB] transition-colors duration-150"
          >
            or email{" "}
            <span className="text-[#9AAABB] font-medium underline underline-offset-2 decoration-white/20">
              info@maad-ai.com
            </span>
          </a>
        </div>

        <p className="text-xs text-[#6B7A8D]/60">
          No sales pressure. No long-term contracts required for the call.
        </p>
      </motion.div>
    </section>
  );
}
