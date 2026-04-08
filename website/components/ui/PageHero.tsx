import { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  breadcrumbs: { name: string; path: string }[];
  meta?: ReactNode;
  visual?: ReactNode;
};

export function PageHero({ eyebrow, title, lede, breadcrumbs, meta, visual }: Props) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="bg-grid" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-emerald/10 blur-[120px] pointer-events-none" />
      <div className="container-rail relative z-10">
        <div className="mb-10">
          <Breadcrumb items={breadcrumbs} />
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">
              <span>{eyebrow}</span>
            </div>
            <h1 className="text-display mb-8">{title}</h1>
            <div className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              {lede}
            </div>
            {meta && <div className="mt-8">{meta}</div>}
          </div>
          {visual && <div className="hidden lg:block">{visual}</div>}
        </div>
      </div>
    </section>
  );
}
