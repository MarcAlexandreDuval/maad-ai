"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

/* ─── Shared transition ───────────────────────────────── */
const t = (delay = 0) => ({ duration: 0.7, delay });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 px-6 md:px-10 overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.038) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Emerald orb — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%", left: "-12%",
          width: "60vw", height: "60vw",
          maxWidth: 760, maxHeight: 760,
          background:
            "radial-gradient(circle, rgba(52,211,153,0.14) 0%, rgba(52,211,153,0.04) 45%, transparent 70%)",
        }}
      />

      {/* Blue orb — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-25%", right: "-10%",
          width: "50vw", height: "50vw",
          maxWidth: 640, maxHeight: 640,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(14,165,233,0.03) 45%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center w-full relative">

        {/* ── Left — copy ────────────────────────────────── */}
        <div className="flex flex-col">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0)}
          >
            <span className="section-label mb-8 inline-flex">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse-slow"
              />
              Quebec&apos;s AI Search Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.09)}
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 6.5vw, 84px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.98,
              color: "#F0F4F8",
            } as React.CSSProperties}
          >
            Be the Answer
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, #34D399 0%, #6EE7B7 55%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              } as React.CSSProperties}
            >
              AI Recommends
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.18)}
            className="text-[#6B7A8D] leading-relaxed mb-10 max-w-[420px]"
            style={{ fontSize: "16px", fontWeight: 400 } as React.CSSProperties}
          >
            While your competitors fight for Google rankings, we position your
            brand as the trusted answer cited by ChatGPT, Google AI, and
            Perplexity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.27)}
            className="flex flex-wrap gap-3 items-center"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#34D399] text-[#080A0C] px-7 py-3.5 rounded-xl font-semibold text-[14px] tracking-[-0.01em] transition-all duration-200 hover:bg-[#6EE7B7] hover:-translate-y-0.5 hover:shadow-btn"
            >
              Book a Free Strategy Call
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 text-[14px] text-[#6B7A8D] border border-white/[0.07] px-6 py-3.5 rounded-xl font-medium hover:text-white hover:border-white/[0.14] transition-all duration-200"
            >
              See how it works
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t(0.45)}
            className="flex items-center gap-5 mt-8"
          >
            {["ChatGPT", "Perplexity", "Google AI", "Gemini"].map((name) => (
              <span key={name} className="text-[11px] text-[#6B7A8D]/60 font-medium tracking-wide">
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right — Premium AI demo card ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.18 }}
          className="relative animate-float"
        >
          {/* Outer glow halo */}
          <div
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.08) 0%, transparent 70%)",
            }}
          />

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "#0B0F14",
              border: "1px solid rgba(52,211,153,0.18)",
              boxShadow:
                "0 0 0 1px rgba(52,211,153,0.06), 0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-3 px-5 py-3.5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.055)", background: "rgba(255,255,255,0.015)" }}
            >
              <div className="flex gap-1.5">
                {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                  <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.6 }} />
                ))}
              </div>
              <div
                className="flex-1 rounded-md px-3 py-1 text-[11px] text-[#6B7A8D] font-mono tracking-wide"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                AI Citation Analyzer — MAAD-AI
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse-slow" />
                <span className="text-[10px] text-[#34D399] font-medium tracking-wide">LIVE</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3.5">

              {/* Query */}
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <svg className="flex-shrink-0 text-[#6B7A8D]" width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <span className="text-[12px] text-[#9AAABB] font-mono flex-1">
                  &quot;Best café in Montréal for remote work?&quot;
                </span>
                <span className="text-[10px] text-[#6B7A8D]/60 font-medium">3 platforms</span>
              </div>

              {/* Platform scanning row */}
              <div className="flex items-center gap-2 px-1">
                {["ChatGPT", "Perplexity", "Google AI"].map((p, i) => (
                  <div key={p} className="flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: i === 1 ? "#34D399" : "rgba(255,255,255,0.2)", animationDelay: `${i * 0.3}s` }}
                    />
                    <span className="text-[10px] text-[#6B7A8D]/70">{p}</span>
                    {i < 2 && <span className="text-[#6B7A8D]/30 text-xs">·</span>}
                  </div>
                ))}
                <span className="ml-auto text-[10px] text-[#34D399]/70 font-mono">Analyzing...</span>
              </div>

              {/* Result 1 — CITED */}
              <div
                className="rounded-xl p-4 relative overflow-hidden"
                style={{
                  background: "rgba(52,211,153,0.045)",
                  border: "1px solid rgba(52,211,153,0.22)",
                  boxShadow: "0 0 24px rgba(52,211,153,0.06)",
                }}
              >
                {/* Subtle shimmer line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)" }}
                />

                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded-full"
                      style={{ color: "#34D399", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)" }}
                    >
                      ✦ Cited
                    </div>
                    <span className="text-[10px] text-[#6B7A8D]">High confidence</span>
                  </div>
                  <span
                    className="text-[11px] font-bold tabular-nums"
                    style={{ color: "#34D399" }}
                  >
                    98%
                  </span>
                </div>

                {/* Confidence bar */}
                <div className="h-1 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "98%",
                      background: "linear-gradient(90deg, #34D399, #6EE7B7)",
                      boxShadow: "0 0 8px rgba(52,211,153,0.5)",
                    }}
                  />
                </div>

                <div
                  className="text-[13px] font-semibold text-[#34D399] mb-1"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" } as React.CSSProperties}
                >
                  ☕ La Finca Café — Montréal
                </div>
                <div className="text-[11px] text-[#9AAABB] leading-relaxed">
                  Top-rated for specialty coffee and reliable wifi.
                  Consistently cited for remote workers.
                </div>
              </div>

              {/* Result 2 — NOT CITED */}
              <div
                className="rounded-xl p-4 relative"
                style={{
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  opacity: 0.5,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded-full"
                      style={{ color: "#6B7A8D", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      ○ Not cited
                    </div>
                    <span className="text-[10px] text-[#6B7A8D]">Low visibility</span>
                  </div>
                  <span className="text-[11px] font-bold tabular-nums text-[#6B7A8D]">12%</span>
                </div>
                <div className="h-1 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full w-[12%]" style={{ background: "rgba(255,255,255,0.2)" }} />
                </div>
                <div className="text-[13px] text-[#6B7A8D]" style={{ fontFamily: "var(--font-display)" } as React.CSSProperties}>
                  Café du coin
                </div>
                <div className="text-[11px] text-[#6B7A8D]/70 mt-0.5">No structured AI presence detected.</div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse-slow" />
                  <span className="text-[11px] text-[#6B7A8D]">MAAD-AI · AEO/GEO Engine</span>
                </div>
                <span className="text-[10px] text-[#6B7A8D]/50 font-mono">v2.4.1</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
