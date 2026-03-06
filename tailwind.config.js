/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080A0C",
        surface: "#0D1117",
        "surface-2": "#0F131A",
        muted: "#6B7A8D",
        soft: "#9AAABB",
        emerald: {
          DEFAULT: "#34D399",
          light: "#6EE7B7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        "glow-sm":   "0 0 20px rgba(52,211,153,0.08)",
        "glow":      "0 0 30px rgba(52,211,153,0.12)",
        "glow-md":   "0 0 50px rgba(52,211,153,0.15)",
        "glow-lg":   "0 0 80px rgba(52,211,153,0.18)",
        "btn":       "0 8px 30px rgba(52,211,153,0.38), 0 0 0 1px rgba(52,211,153,0.2)",
        "card":      "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        "hero-card": "0 0 60px rgba(52,211,153,0.1), 0 24px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 0%" },
          "50%":       { "background-position": "0% 100%" },
        },
      },
      animation: {
        float:            "float 6s ease-in-out infinite",
        shimmer:          "shimmer 3s infinite",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
        "pulse-slow":     "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
