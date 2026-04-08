import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
};

export function CTAButton({
  href = "/contact",
  variant = "primary",
  children,
  className = "",
}: Props) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  return (
    <Link href={href} className={cls}>
      <span>{children}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M3.5 8H12.5M12.5 8L8 3.5M12.5 8L8 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
