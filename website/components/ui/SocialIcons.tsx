import { SOCIALS } from "@/lib/site";

type IconName = (typeof SOCIALS)[number]["name"];

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "X":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
            fill="currentColor"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M19.5 8.4a6.9 6.9 0 0 1-4.05-1.3v7.18a5.6 5.6 0 1 1-4.82-5.55v2.85a2.78 2.78 0 1 0 1.97 2.66V2.5h2.88a4.03 4.03 0 0 0 4.02 3.9V8.4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="2.5"
            y="5.5"
            width="19"
            height="13"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10.5 9.25 15 12l-4.5 2.75v-5.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M13.5 21.5v-8h2.2l.35-2.8h-2.55V9.05c0-.8.22-1.35 1.37-1.35h1.47V5.2c-.25-.03-1.12-.1-2.12-.1-2.1 0-3.53 1.28-3.53 3.62v2h-2.36v2.8h2.36v8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M7.2 10v7M7.2 7.2v.01M11 17v-4.2a2.2 2.2 0 0 1 4.4 0V17M11 10v7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex items-center gap-2 ${className}`}
      aria-label="Réseaux sociaux MAAD-AI"
    >
      {SOCIALS.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            aria-label={s.label}
            className="social-icon group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="block w-[18px] h-[18px] text-bone-muted group-hover:text-emerald transition-colors duration-300">
              <Icon name={s.name} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
