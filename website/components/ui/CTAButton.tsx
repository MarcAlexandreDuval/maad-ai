import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  variant?: "primary" | "ghost" | "glass";
  children: ReactNode;
  className?: string;
};

export function CTAButton({
  href = "/contact",
  variant = "primary",
  children,
  className = "",
}: Props) {
  const base =
    variant === "glass"
      ? "btn btn-glass"
      : variant === "ghost"
        ? "btn btn-ghost"
        : "btn btn-primary";
  return (
    <Link href={href} className={`${base} group ${className}`}>
      <span>{children}</span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      >
        <path
          d="M4 10 L10 4 M10 4 H5 M10 4 V9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
