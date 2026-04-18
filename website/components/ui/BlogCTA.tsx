import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";
import { GlassCard } from "./GlassCard";

type Props = {
  topic?: string;
};

export function BlogCTA({ topic = "l'IA, le SEO et la visibilité web" }: Props) {
  return (
    <SectionWrapper>
      <GlassCard>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="label-mono mb-3">Pour aller plus loin</div>
            <h3 className="text-display text-2xl md:text-3xl mb-3">
              Envie d&apos;en{" "}
              <span className="text-italic-serif text-emerald">savoir plus</span> ?
            </h3>
            <p className="text-muted">
              On publie des guides et des analyses sur {topic} — pour aider les
              PME du Québec à prendre de l&apos;avance.
            </p>
          </div>
          <Link href="/blog" className="btn btn-ghost whitespace-nowrap">
            Lire le blog →
          </Link>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
