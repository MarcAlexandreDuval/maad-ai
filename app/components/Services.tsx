"use client";
import { motion } from "framer-motion";

/* ─── SVG icons ────────────────────────────────────────── */
const IconAEO = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="2.5" stroke="#34D399" strokeWidth="1.4"/>
    <circle cx="9" cy="9" r="6.5" stroke="#34D399" strokeWidth="1" strokeDasharray="2 2.2"/>
    <circle cx="9" cy="1.5" r="1.1" fill="#34D399"/>
    <circle cx="9" cy="16.5" r="1.1" fill="#34D399"/>
    <circle cx="1.5" cy="9" r="1.1" fill="#34D399"/>
    <circle cx="16.5" cy="9" r="1.1" fill="#34D399"/>
  </svg>
);
const IconGEO = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1.5" y="1.5" width="15" height="15" rx="2.5" stroke="#34D399" strokeWidth="1.4"/>
    <path d="M1.5 7h15M7 1.5v15" stroke="#34D399" strokeWidth="1" strokeDasharray="1.4 2"/>
    <circle cx="9" cy="9" r="1.8" fill="#34D399" opacity="0.55"/>
  </svg>
);
const IconLocal = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2C6.5 2 4.5 4 4.5 6.5c0 3.5 4.5 9.5 4.5 9.5s4.5-6 4.5-9.5C13.5 4 11.5 2 9 2z" stroke="#34D399" strokeWidth="1.4" strokeLinejoin="round"/>
    <circle cx="9" cy="6.5" r="1.8" stroke="#34D399" strokeWidth="1.2"/>
  </svg>
);
const IconWeb = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1.5" y="3" width="15" height="12" rx="2" stroke="#34D399" strokeWidth="1.4"/>
    <path d="M1.5 7h15" stroke="#34D399" strokeWidth="1"/>
    <circle cx="4.5" cy="5" r="0.75" fill="#34D399"/>
    <circle cx="6.5" cy="5" r="0.75" fill="#34D399"/>
    <path d="M5.5 10.5l2.5 2-2.5 2" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 13h3.5" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconAuto = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1.5v3.5M9 13v3.5M1.5 9H5M13 9h3.5" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="9" cy="9" r="3" stroke="#34D399" strokeWidth="1.4"/>
    <path d="M3.7 3.7l2.4 2.4M11.9 11.9l2.4 2.4M3.7 14.3l2.4-2.4M11.9 6.1l2.4-2.4" stroke="#34D399" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);
const IconFunnel = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 3.5h14L11 10v4.5l-4-2V10L2 3.5z" stroke="#34D399" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);

const services = [
  {
    tag: "AEO",
    title: "Answer Engine Optimization",
    desc: "Get cited in AI-generated answers on ChatGPT, Gemini, and Perplexity. We optimize your content to be the source AI trusts.",
    Icon: IconAEO,
  },
  {
    tag: "GEO",
    title: "Generative Engine Optimization",
    desc: "Build domain authority that generative AI recognizes. When AI synthesizes answers, your brand becomes the recommended solution.",
    Icon: IconGEO,
  },
  {
    tag: "Local SEO",
    title: "Local SEO",
    desc: "Own local AI search. When someone asks 'best [service] near me', AI answers with your name — not your competitor's.",
    Icon: IconLocal,
  },
  {
    tag: "Web",
    title: "AI Websites",
    desc: "Conversion-focused sites built for AI-first indexing. Structured so both humans and AI understand your value instantly.",
    Icon: IconWeb,
  },
  {
    tag: "Automation",
    title: "AI Automation",
    desc: "Automate lead nurturing, follow-ups, and content pipelines with AI workflows that run 24/7 without you.",
    Icon: IconAuto,
  },
  {
    tag: "Funnels",
    title: "Funnel Creation",
    desc: "End-to-end funnels from AI-search discovery to booked call. We map the journey and build every step.",
    Icon: IconFunnel,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 inline-flex">What we do</span>
          <h2 className="heading-xl mb-5">
            Everything you need
            <br />
            <span className="text-[#34D399]">to win in AI search</span>
          </h2>
          <p className="text-[#6B7A8D] text-[15px] max-w-md leading-relaxed">
            Six integrated services that work together to make your brand the
            answer AI recommends.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
            >
              {/* CSS-only hover card */}
              <div className="group h-full relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-300 hover:border-[#34D399]/25 hover:shadow-glow cursor-default">

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#34D399]/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top-edge accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#34D399]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div
                  className="relative p-7 flex flex-col h-full"
                  style={{ background: "#0D1117" }}
                >
                  {/* Icon container */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <svc.Icon />
                  </div>

                  {/* Tag */}
                  <div
                    className="inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-[#34D399] bg-[#34D399]/[0.08] border border-[#34D399]/[0.15] px-2.5 py-1 rounded-md mb-4 self-start"
                  >
                    {svc.tag}
                  </div>

                  {/* Title */}
                  <h3 className="heading-sm mb-3">{svc.title}</h3>

                  {/* Desc */}
                  <p className="text-[13px] text-[#6B7A8D] leading-relaxed flex-1">
                    {svc.desc}
                  </p>

                  {/* Bottom arrow on hover */}
                  <div className="mt-5 flex items-center gap-1.5 text-[12px] text-[#34D399]/0 group-hover:text-[#34D399]/70 transition-colors duration-300">
                    <span>Learn more</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
