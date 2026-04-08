import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { POSTS } from "@/lib/blog";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Blog — IA, AEO, GEO & visibilité pour PME Québec",
  description:
    "Articles sur l'intelligence artificielle, l'AEO, le GEO et la visibilité web pour PME québécoises. Guides pratiques et analyses.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
        title={
          <>
            Des réponses.{" "}
            <span className="text-italic-serif text-emerald">Pas du bruit</span>.
          </>
        }
        lede={
          <>
            On écrit sur l&apos;IA, l&apos;AEO, le GEO et tout ce qui change en visibilité
            web pour les PME du Québec. Articles longs, actionnables, sans fluff.
          </>
        }
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-6">
          {POSTS.map((p, i) => (
            <GlassCard key={p.slug} href={`/blog/${p.slug}`}>
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-emerald">{p.category}</span>
                  <span className="label-mono text-[0.62rem]">{p.readTime}</span>
                </div>
                <h2 className="text-display text-2xl md:text-3xl leading-[1.05]">
                  {p.title}
                </h2>
                <p className="text-muted text-sm">{p.excerpt}</p>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                  <span className="label-mono text-[0.62rem]">
                    {new Date(p.datePublished).toLocaleDateString("fr-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="label-mono text-emerald">Lire →</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Besoin d'un guide sur ton cas spécifique ?"
        text="Écris-nous. Si c'est un sujet intéressant, on écrit l'article — et on te tague."
      />
    </>
  );
}
