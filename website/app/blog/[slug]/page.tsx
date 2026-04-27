import { notFound } from "next/navigation";
import Link from "next/link";
import { POSTS, getPost, type Section } from "@/lib/blog";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    article: {
      publishedTime: post.datePublished,
      section: post.category,
    },
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          datePublished: post.datePublished,
        })}
      />

      <article className="relative overflow-hidden pt-12 pb-20">
        <div className="bg-grid" />
        <div className="container-rail relative z-10 max-w-3xl">
          <div className="mb-10">
            <Breadcrumb
              items={[
                { name: "Blog", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow"><span>{post.category}</span></span>
            <span className="label-mono">{post.readTime}</span>
          </div>

          <h1 className="text-display mb-8">{post.title}</h1>

          <div className="flex items-center gap-4 pb-8 border-b border-white/5 mb-10">
            <div className="label-mono">
              {new Date(post.datePublished).toLocaleDateString("fr-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="h-1 w-1 rounded-full bg-bone-muted" />
            <div className="label-mono">Par Marc-Alexandre Duval</div>
          </div>

          <div className="prose-custom">
            {post.content.map((s, i) => (
              <SectionRenderer key={i} section={s} />
            ))}
          </div>

          {/* Related links */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <div className="label-mono mb-5">Continue d&apos;explorer</div>
            <div className="flex flex-wrap gap-3">
              {post.related.map((r) => (
                <Link
                  key={r}
                  href={r}
                  className="glass-flat px-5 py-3 text-sm hover:border-emerald transition-colors"
                >
                  {r.replace("/services/", "").replace("/", "").replace("-", " ")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Other posts */}
      <SectionWrapper>
        <div className="label-mono mb-6">Autres articles</div>
        <div className="grid md:grid-cols-3 gap-5">
          {POSTS.filter((p) => p.slug !== post.slug)
            .slice(0, 3)
            .map((p) => (
              <GlassCard key={p.slug} href={`/blog/${p.slug}`}>
                <div className="label-mono text-emerald mb-3">{p.category}</div>
                <h3 className="text-display text-xl mb-3 leading-tight">{p.title}</h3>
                <p className="text-sm text-muted">{p.excerpt}</p>
              </GlassCard>
            ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="On applique tout ça chaque jour."
        text="Tu veux qu'on l'applique chez toi ? Une conversation de 20 minutes, et on te dit par où commencer."
      />

      <style>{`
        .prose-custom h2 {
          font-family: var(--font-display), serif;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 500;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }
        .prose-custom h3 {
          font-family: var(--font-display), serif;
          font-size: 1.4rem;
          font-weight: 500;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
          color: var(--bone);
        }
        .prose-custom p {
          color: var(--bone-muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }
        .prose-custom p.lead {
          color: var(--bone);
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }
        .prose-custom ul, .prose-custom ol {
          margin-bottom: 2rem;
          padding-left: 0;
        }
        .prose-custom ul li, .prose-custom ol li {
          color: var(--bone-muted);
          line-height: 1.8;
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
        }
        .prose-custom ul li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--emerald);
        }
        .prose-custom ol li strong {
          color: var(--bone);
          display: block;
          margin-bottom: 0.25rem;
        }
      `}</style>
    </>
  );
}

// Parse markdown-style links [text](url) inside text → array of JSX elements
function parseInlineLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    if (href.startsWith("/") || href.startsWith("#")) {
      parts.push(
        <Link key={key++} href={href} className="text-emerald hover:underline">
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noreferrer" className="text-emerald hover:underline">
          {label}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}

function SectionRenderer({ section }: { section: Section }) {
  switch (section.kind) {
    case "h2":
      return <h2>{section.text}</h2>;
    case "h3":
      return <h3>{section.text}</h3>;
    case "p":
      return <p className={section.bold ? "lead" : ""}>{parseInlineLinks(section.text)}</p>;
    case "ul":
      return (
        <ul>
          {section.items.map((it, i) => (
            <li key={i}>{parseInlineLinks(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-none">
          {section.items.map((it, i) => (
            <li key={i}>
              <strong>
                {String(i + 1).padStart(2, "0")} — {it.t}
              </strong>
              {parseInlineLinks(it.d)}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="glass-flat p-6 my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="label-mono text-[0.65rem] border-b border-white/10">
                {section.headers.map((h, i) => (
                  <th key={i} className="text-left p-2 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-muted">
              {section.rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  {row.map((c, j) => (
                    <td key={j} className="p-2">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="glass-flat p-6 my-8 border-l-2 border-emerald">
          <p className="text-bone italic font-medium m-0 text-lg">{parseInlineLinks(section.text)}</p>
        </div>
      );
    case "stats":
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {section.items.map((stat, i) => (
            <div key={i} className="glass-flat p-5 text-center">
              <div className="text-display text-3xl md:text-4xl text-emerald mb-2 leading-none">
                {stat.value}
              </div>
              <div className="label-mono text-[0.62rem] leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      );
    case "compare":
      return (
        <div className="grid md:grid-cols-2 gap-5 my-10">
          <div className="glass-flat p-6">
            <div className="label-mono text-emerald mb-4">{section.left.title}</div>
            <ul className="m-0 p-0 list-none">
              {section.left.items.map((it, i) => (
                <li key={i} className="text-sm text-muted py-1.5 pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-emerald">
                  {parseInlineLinks(it)}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-flat p-6">
            <div className="label-mono text-emerald mb-4">{section.right.title}</div>
            <ul className="m-0 p-0 list-none">
              {section.right.items.map((it, i) => (
                <li key={i} className="text-sm text-muted py-1.5 pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-emerald">
                  {parseInlineLinks(it)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "quote":
      return (
        <blockquote className="my-10 pl-6 border-l-4 border-emerald">
          <p className="text-display text-xl md:text-2xl italic text-bone m-0 leading-relaxed">
            « {section.text} »
          </p>
          {section.author && (
            <div className="label-mono mt-4 text-[0.65rem]">— {section.author}</div>
          )}
        </blockquote>
      );
    case "cta":
      return (
        <div className="glass-flat p-8 my-10 text-center border border-emerald/30">
          <h3 className="text-display text-2xl mb-3 m-0">{section.title}</h3>
          <p className="text-muted mb-6 m-0">{parseInlineLinks(section.text)}</p>
          <Link href={section.cta_href} className="btn btn-primary inline-flex">
            {section.cta_label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.5 8H12.5M12.5 8L8 3.5M12.5 8L8 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      );
  }
}
