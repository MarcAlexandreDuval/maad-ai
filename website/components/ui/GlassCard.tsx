import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  as?: "div" | "article" | "section";
};

export function GlassCard({ children, href, className = "", as = "div" }: Props) {
  const cls = `glass p-7 md:p-8 block ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  const Tag = as;
  return <Tag className={cls}>{children}</Tag>;
}
