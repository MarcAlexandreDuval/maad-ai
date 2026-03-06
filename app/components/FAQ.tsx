"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import React from "react";

const faqs = [
  {
    q: "What exactly is AEO and GEO?",
    a: "Answer Engine Optimization (AEO) optimizes your content to be directly cited by AI assistants — ChatGPT, Perplexity, Google AI Overviews. Generative Engine Optimization (GEO) builds brand authority so generative AI models recommend you when synthesizing answers. Together, they ensure you're the answer AI gives, not just a link in a list.",
  },
  {
    q: "How long before I start seeing results?",
    a: "AI citation visibility typically begins within 30–60 days for brands with existing online presence. Full authority across major platforms — ChatGPT, Perplexity, Google AI, Copilot — usually consolidates over 3–6 months. Unlike traditional SEO, AI citations compound quickly: once an AI model trusts your source, it cites you broadly.",
  },
  {
    q: "How is this different from traditional SEO?",
    a: "Traditional SEO optimizes for ranking in a list of links users click. AEO/GEO optimizes for being the answer AI surfaces before users even see a list. The goal isn't a position — it's being cited as the authoritative source. This requires different content architecture, entity building, and structured data strategies most SEO agencies have never touched.",
  },
  {
    q: "Which AI platforms will my brand appear on?",
    a: "We optimize for all major AI discovery surfaces: ChatGPT (including Browse and GPT-4o), Google AI Overviews, Perplexity, Microsoft Copilot, and Claude. Each platform uses different trust signals and training data — we build a unified content authority strategy that covers all of them simultaneously.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We work primarily with service businesses in Quebec and across Canada: legal, medical, real estate, financial services, agencies, and local businesses. If your customers ask AI questions before buying your service, we can position you as the answer. We work in both English and French.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-28 md:py-36 px-6 md:px-10 border-t border-white/[0.06]"
    >
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-label mb-6 inline-flex">FAQ</span>
          <h2 className="heading-xl">Common questions</h2>
        </motion.div>

        {/* Accordion container — glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.015)",
            border: "1px solid rgba(255,255,255,0.07)",
          } as React.CSSProperties}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={i > 0 ? "border-t border-white/[0.06]" : ""}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between px-7 py-6 text-left group"
              >
                <span
                  className={`text-[14px] leading-snug pr-8 transition-colors duration-150 ${
                    open === i
                      ? "text-white font-medium"
                      : "text-[#9AAABB] font-normal group-hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-body)" } as React.CSSProperties}
                >
                  {faq.q}
                </span>

                {/* Plus/minus button */}
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 transition-all duration-200 ${
                    open === i
                      ? "border-[#34D399]/40 bg-[#34D399]/10 rotate-45"
                      : "border-white/10 group-hover:border-white/20 rotate-0"
                  }`}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={open === i ? "text-[#34D399]" : "text-[#6B7A8D]"}
                  >
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-6">
                      <p className="text-[13px] text-[#6B7A8D] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
