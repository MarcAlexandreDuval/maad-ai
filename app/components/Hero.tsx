"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 md:px-10 overflow-hidden">

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Emerald orb — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          left: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: 700,
          maxHeight: 700,
          background:
            "radial-gradient(circle, rgba(52,211,153,0.13) 0%, rgba(52,211,153,0.04) 40%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* Blue orb — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          maxWidth: 600,
          maxHeight: 600,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(14,165,233,0.03) 40%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center w-full relative">

        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 border border-[#34D399]/25 bg-[#34D399]/[0.07] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-[#34D399] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              Quebec&apos;s AI Search Agency
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-extrabold text-white mb-7"
            style={
              {
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                fontSize: "clamp(52px, 7vw, 88px)",
              } as React.CSSProperties
            }
          >
            Be the Answer
            <br />
            <span
              style={
                {
                  background:
                    "linear-gradient(135deg, #34D399 0%, #6EE7B7 50%, #34D399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } as React.CSSProperties
              }
            >
              AI Recommends
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="text-base md:text-lg text-[#6B7A8D] leading-relaxed mb-10 max-w-md"
          >
            While your competitors fight for Google rankings, we position your
            business as the trusted answer cited by ChatGPT, Google AI, and
            Perplexity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#34D399] text-[#080A0C] px-7 py-3.5 rounded-xl font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-[#6EE7B7] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(52,211,153,0.35)]"
            >
              Book a Free Strategy Call
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="#services"
              className="text-sm text-[#6B7A8D] border border-white/[0.08] px-6 py-3.5 rounded-xl font-medium hover:text-white hover:border-white/[0.16] transition-all duration-200"
            >
              See how it works
            </Link>
          </motion.div>
        </div>

        {/* Right — AI demo card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          {/* Glow halo */}
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            style={{
              boxShadow:
                "0 0 60px rgba(52,211,153,0.12), 0 0 120px rgba(52,211,153,0.06)",
            }}
          />

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "#0D1117",
              border: "1px solid rgba(52,211,153,0.18)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Browser chrome */}
            <div className="px-5 py-3.5 border-b border-white/[0.06] flex items-center gap-3">
              <div className="flex gap-1.5">
                {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                  <div
                    key={c}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: c, opacity: 0.65 }}
                  />
                ))}
              </div>
              <div className="flex-1 bg-white/[0.04] rounded-md px-3 py-1.5 text-[11px] text-[#6B7A8D] font-mono tracking-wide">
                chatgpt.com · perplexity.ai · google.com/ai
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              {/* Query */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mb-4 flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-md flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #34D399, #0EA5E9)",
                  }}
                />
                <span className="text-sm text-[#9AAABB] font-mono">
                  &quot;Best café in Montréal for remote work?&quot;
                </span>
              </div>

              {/* Cited result */}
              <div
                className="rounded-xl p-4 mb-3 relative"
                style={{
                  background: "rgba(52,211,153,0.05)",
                  border: "1px solid rgba(52,211,153,0.25)",
                  boxShadow: "0 0 20px rgba(52,211,153,0.06)",
                }}
              >
                <div className="absolute top-3 right-3 text-[9px] font-bold tracking-[0.15em] uppercase text-[#34D399]">
                  ✦ Cited
                </div>
                <div
                  className="text-sm font-semibold text-[#34D399] mb-1.5"
                  style={
                    {
                      fontFamily: "var(--font-display)",
                      letterSpacing: "-0.01em",
                    } as React.CSSProperties
                  }
                >
                  ☕ La Finca Café — Montréal
                </div>
                <div className="text-xs text-[#9AAABB] leading-relaxed">
                  A top-rated café known for specialty coffee and excellent wifi.
                  Frequently recommended for remote workers.
                </div>
              </div>

              {/* Non-cited */}
              <div className="border border-white/[0.05] rounded-xl p-3.5 opacity-35">
                <div className="text-xs text-[#6B7A8D]">
                  Café du coin — Limited online presence.
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                <span className="text-[11px] text-[#6B7A8D]">
                  Powered by AEO/GEO · MAAD-AI
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
