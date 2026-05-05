/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Redirects 301 from old Framer URLs (Search Console reported 25 404s)
  // Preserves link equity by mapping legacy paths to current Next.js routes.
  async redirects() {
    return [
      // --- Service pages (old Framer slugs → new /services/* routes) ---
      { source: "/aeo", destination: "/services/aeo", permanent: true },
      { source: "/local-seo", destination: "/services/seo-local", permanent: true },
      { source: "/local-seo-quebec", destination: "/services/seo-local", permanent: true },
      { source: "/local-seo-aeo-montreal", destination: "/services/seo-local", permanent: true },
      { source: "/generative-engine-optimization-services-quebec", destination: "/services/geo", permanent: true },
      { source: "/ai-automation", destination: "/services/automatisation", permanent: true },
      { source: "/funnel-creation", destination: "/services/conception-web", permanent: true },

      // --- "local-seo-for-XYZ" pages (English niche pages) → general SEO local ---
      { source: "/local-seo-for-roofing-contractors", destination: "/services/seo-local", permanent: true },
      { source: "/local-seo-for-audiologists", destination: "/services/seo-local", permanent: true },
      { source: "/local-seo-for-drywall-installers", destination: "/services/seo-local", permanent: true },
      { source: "/local-seo-for-flooring-installers", destination: "/services/seo-local", permanent: true },
      { source: "/local-seo-for-insurance-agents", destination: "/services/seo-local", permanent: true },

      // --- Out-of-province cities (kill the wrong targeting → home) ---
      { source: "/local-seo-vancouver", destination: "/", permanent: true },
      { source: "/local-seo-aeo-toronto", destination: "/", permanent: true },

      // --- Utility pages (old slugs → new) ---
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/politique-de-confidentialite", destination: "/privacy", permanent: true },
      { source: "/terms-conditions", destination: "/terms", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },

      // --- Booking + bio pages (old Framer-only routes) ---
      { source: "/booking-page", destination: "/contact", permanent: true },
      { source: "/link-in-bio", destination: "/", permanent: true },

      // --- Old blog/post paths (catch-all → blog index) ---
      { source: "/post/:slug*", destination: "/blog", permanent: true },
      { source: "/5-best-aeo-agencies-in-quebec/:slug*", destination: "/blog", permanent: true },
      { source: "/blog/tag/:slug*", destination: "/blog", permanent: true },
    ];
  },

  // Image optimization — modern formats + larger cache TTL
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Production source maps off → smaller JS bundles, faster TTFB on edge
  productionBrowserSourceMaps: false,

  // Long-term caching for static assets (1 year, immutable)
  // and aggressive cache for the optimized image pipeline
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/logo.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/og-image.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; " +
              "style-src 'self' 'unsafe-inline' https:; " +
              "img-src 'self' data: blob: https:; " +
              "font-src 'self' data: https:; " +
              "connect-src 'self' https: wss:; " +
              "media-src 'self' blob: https:; " +
              "object-src 'none'; " +
              "frame-ancestors 'self'; " +
              "base-uri 'self'; " +
              "form-action 'self'; " +
              "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
