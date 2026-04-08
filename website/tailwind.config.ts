import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050508",
          50: "#0a0a10",
          100: "#0f0f18",
          200: "#141420",
          300: "#1a1a28",
          400: "#222232",
          500: "#2a2a3c",
        },
        emerald: {
          DEFAULT: "#00c896",
          soft: "#1ad29c",
          deep: "#00a078",
          glow: "rgba(0, 200, 150, 0.35)",
        },
        bone: {
          DEFAULT: "#f4f2ec",
          muted: "#bdbbb2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(0,200,150,0.08), transparent 60%)",
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "pulse-glow": "pulseGlow 3.2s ease-in-out infinite",
        "drift": "drift 18s linear infinite",
        "scan": "scan 6s ease-in-out infinite",
        "type-caret": "caret 1s steps(1) infinite",
        "orbit": "orbit 14s linear infinite",
        "wave": "wave 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(0, 200, 150, 0.35)",
            opacity: "0.7",
          },
          "50%": {
            boxShadow: "0 0 40px 4px rgba(0, 200, 150, 0.1)",
            opacity: "1",
          },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-64px,-64px)" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(-120%)" },
          "50%": { transform: "translateY(220%)" },
        },
        caret: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(40px) rotate(-360deg)",
          },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
