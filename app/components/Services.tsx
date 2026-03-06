"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

const services = [
  {
    tag: "AEO",
    title: "Answer Engine Optimization",
    desc: "Get cited in AI-generated answers on ChatGPT, Gemini, and Perplexity. We optimize your content architecture to be the source AI trusts and quotes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" stroke="#34D399" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="7.5" stroke="#34D399" strokeWidth="1" strokeDasharray="2 2.5" />
        <circle cx="10" cy="2" r="1.2" fill="#34D399" />
        <circle cx="10" cy="18" r="1.2" fill="#34D399" />
        <circle cx="2" cy="10" r="1.2" fill="#34D399" />
        <circle cx="18" cy="10" r="1.2" fill="#34D399" />
      </svg>
    ),
  },
  {
    tag: "GEO",
    title: "Generative Engine Optimization",
    desc: "Build domain authority that generative AI platforms recognize. When AI synthesizes answers, your brand becomes the recommended solution.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1.5" y="1.5" width="17" height="17" rx="3" stroke="#34D399" strokeWidth="1.5" />
        <path d="M1.5 7.5h17M7.5 1.5v17" stroke="#34D399" strokeWidth="1" strokeDasharray="1.5 2" />
        <circle cx="10" cy="10" r="2" fill="#34D399" opacity="0.6" />
      </svg>
    ),
  },
  {
    tag: "Local",
    title: "Local SEO",
    desc: "Own local AI search results. When someone asks 'best [service] near me', AI answers with your name — not your competitor's.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" stroke="#34D399" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="7" r="2" stroke="#34D399" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    tag: "Web",
    title: "AI Websites",
    desc: "Conversion-focused sites built for AI-first indexing. Structured so both humans and AI understand your value proposition instantly.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1.5" y="3.5" width="17" height="13" rx="2" stroke="#34D399" strokeWidth="1.5" />
        <path d="M1.5 7.5h17" stroke="#34D399" strokeWidth="1" />
        <circle cx="4.5" cy="5.5" r="0.8" fill="#34D399" />
        <circle cx="6.8" cy="5.5" r="0.8" fill="#34D399" />
        <path d="M6 11l2.5 2L6 15" stroke="#34D399" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14h4" stroke="#34D399" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: "Automation",
    title: "AI Automation",
    desc: "Automate lead nurturing, follow-ups, and content pipelines with AI workflows that prospect, qualify, and nurture 24/7.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="#34D399" strokeWidth="1.5" />
        <path d="M4.22 4.22l2.83 2.83M12.95 12.95l2.83 2.83M4.22 15.78l2.83-2.83M12.95 7.05l2.83-2.83" stroke="#34D399" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: "Funnels",
    title: "Funnel Creation",
    desc: "End-to-end conversion funnels from AI-search discovery to booked call. We map the journey and build every step.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 4h16l-6 7v5l-4-2V11L2 4z" stroke="#34D399" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B7A8D] mb-6">
            What we do
          </div>
          <h2
            className="font-extrabold text-white mb-5 leading-none"
            style={
              {
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "-0.03em",
              } as React.CSSProperties
            }
          >
            Everything you need
            <br />
            <span className="text-[#34D399]">to win in AI search</span>
          </h2>
          <p className="text-[#6B7A8D] text-base md:text-lg max-w-lg leading-relaxed">
            Six integrated services that work together to make your brand the
            answer AI recommends.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group relative rounded-2xl p-7 cursor-default transition-all duration-300"
              style={
                {
                  background: "#0D1117",
                  border: "1px solid rgba(255,255,255,0.06)",
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(52,211,153,0.3)";
                el.style.boxShadow = "0 0 30px rgba(52,211,153,0.08), inset 0 0 30px rgba(52,211,153,0.02)";
                el.style.background = "linear-gradient(135deg, rgba(52,211,153,0.04) 0%, #0D1117 60%)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
                el.style.background = "#0D1117";
              }}
            >
              {/* Icon */}
              <div className="mb-5 opacity-90">{service.icon}</div>

              {/* Tag */}
              <div className="inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-[#34D399] bg-[#34D399]/[0.08] border border-[#34D399]/[0.15] px-2.5 py-1 rounded-md mb-4">
                {service.tag}
              </div>

              {/* Title */}
              <h3
                className="text-sm font-semibold text-white mb-3 leading-snug"
                style={
                  {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.01em",
                  } as React.CSSProperties
                }
              >
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-[#6B7A8D] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
