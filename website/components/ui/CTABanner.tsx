import { CTAButton } from "./CTAButton";

export function CTABanner({
  title,
  text,
  ctaLabel = "Parle-nous de ton projet",
}: {
  title: string;
  text: string;
  ctaLabel?: string;
}) {
  return (
    <section className="container-rail py-20">
      <div className="glass p-10 md:p-14 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald/15 blur-[100px] rounded-full" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-display mb-4">{title}</h2>
            <p className="text-muted">{text}</p>
          </div>
          <CTAButton>{ctaLabel}</CTAButton>
        </div>
      </div>
    </section>
  );
}
