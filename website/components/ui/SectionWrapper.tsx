import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  tight?: boolean;
};

export function SectionWrapper({ children, className = "", id, tight }: Props) {
  return (
    <section id={id} className={`${tight ? "section-tight" : "section"} ${className}`}>
      <div className="container-rail relative z-10">{children}</div>
    </section>
  );
}
