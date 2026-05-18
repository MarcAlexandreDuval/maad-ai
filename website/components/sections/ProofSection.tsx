import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/**
 * ProofSection — preuve méta absolue : screenshot ChatGPT citant MAAD-AI #1.
 * Browser frame mockup (style Mac) autour de la capture pour authenticité visuelle.
 * Mobile-first : padding réduit + image full width.
 */
export function ProofSection() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="proof-section"
    >
      <div className="container-rail">
        {/* Header centré éditorial */}
        <div className="proof-header">
          <Reveal variant="fade-up">
            <div className="label-mono proof-eyebrow">
              01.5 — La preuve en direct
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h2 id="proof-heading" className="text-display proof-title">
              On <em className="text-italic-serif text-emerald">vend</em> ce
              qu&apos;on fait.
              <br />
              On <em className="text-italic-serif text-emerald">fait</em> ce
              qu&apos;on vend.
            </h2>
          </Reveal>
        </div>

        {/* Browser frame mockup */}
        <Reveal variant="fade-up" delay={240}>
          <div className="proof-browser">
            <div className="proof-browser__chrome" aria-hidden>
              <div className="proof-browser__dots">
                <span className="proof-browser__dot proof-browser__dot--red" />
                <span className="proof-browser__dot proof-browser__dot--yellow" />
                <span className="proof-browser__dot proof-browser__dot--green" />
              </div>
              <div className="proof-browser__url">chatgpt.com</div>
              <div className="proof-browser__chrome-spacer" />
            </div>
            <div className="proof-browser__viewport">
              <Image
                src="/proof-chatgpt-aeo-quebec.jpg"
                alt="ChatGPT cite MAAD-AI en première position quand on demande 'meilleure agence AEO Québec'"
                width={1638}
                height={580}
                className="proof-browser__img"
                sizes="(max-width: 1024px) 95vw, 1100px"
              />
            </div>
          </div>
        </Reveal>

        {/* Caption */}
        <Reveal variant="fade-up" delay={360}>
          <div className="proof-caption">
            <span className="label-mono proof-caption__meta">
              Capture réelle · ChatGPT · 18 mai 2026
            </span>
            <p className="proof-caption__text">
              On ne te vend pas ce qu&apos;on{" "}
              <em className="text-italic-serif text-emerald">espère</em>{" "}
              faire. On te vend ce qu&apos;on fait déjà — sur nous-mêmes, en
              direct, vérifiable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
