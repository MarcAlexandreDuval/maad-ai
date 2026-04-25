import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

// Font perf: reduced from 6-8 woff2 files to 3.
// Keeps brand identity (Fraunces variable) but drops unused weights.
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"], // dropped "SOFT" — not used in design tokens
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600"], // dropped 300 + 500 — close to 400/600, barely visible diff
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"], // dropped 500 — label-mono uses normal
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Agence IA, SEO, AEO & GEO au Québec`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.name,
  openGraph: {
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    title: `${SITE.name} — Agence IA, SEO, AEO & GEO au Québec`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Agence IA, SEO, AEO & GEO au Québec`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Agence IA, SEO, AEO & GEO au Québec`,
    description: SITE.description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.language} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-tech min-h-screen flex flex-col">
        <JsonLd data={[orgSchema, websiteSchema]} />
        <Nav />
        <main className="flex-1 pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
