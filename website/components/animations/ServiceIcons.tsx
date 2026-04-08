// All icons are pure SVG + CSS animations, no runtime deps.
// Each icon renders inside a 120x120 box, responsive via parent.

const stroke = "rgba(244,242,236,0.65)";
const accent = "#00c896";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full aspect-square max-w-[140px] rounded-2xl glass-flat overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,150,0.12),transparent_60%)]" />
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </div>
  );
}

// ========== AGENTS IA — nodes network pulsing ==========
export function IconAgents() {
  return (
    <Frame>
      <defs>
        <radialGradient id="agentGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.8" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* connecting lines */}
      <g stroke={stroke} strokeWidth="0.6">
        <line x1="60" y1="60" x2="25" y2="30">
          <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="60" y1="60" x2="95" y2="30">
          <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </line>
        <line x1="60" y1="60" x2="25" y2="95">
          <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
        </line>
        <line x1="60" y1="60" x2="95" y2="95">
          <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </line>
        <line x1="25" y1="30" x2="95" y2="30" strokeOpacity="0.25" />
        <line x1="25" y1="95" x2="95" y2="95" strokeOpacity="0.25" />
      </g>
      {/* center node */}
      <circle cx="60" cy="60" r="18" fill="url(#agentGlow)">
        <animate attributeName="r" values="16;20;16" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="60" r="6" fill={accent} />
      {/* outer nodes */}
      {[[25, 30], [95, 30], [25, 95], [95, 95]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill={accent} opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </Frame>
  );
}

// ========== AUTOMATISATION — workflow blocks flowing ==========
export function IconAutomation() {
  return (
    <Frame>
      <g stroke={stroke} strokeWidth="0.8" fill="none">
        {/* Blocks */}
        <rect x="12" y="40" width="26" height="18" rx="3" />
        <rect x="82" y="40" width="26" height="18" rx="3" />
        <rect x="47" y="70" width="26" height="18" rx="3" />
        {/* Connectors */}
        <path d="M38 49 L47 49 L47 79 L47 79" />
        <path d="M82 49 L73 49 L73 79" />
      </g>
      {/* Flowing particle */}
      <circle r="2.5" fill={accent}>
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M25,49 L47,49 L47,79 L73,79 L73,49 L95,49"
        />
        <animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite" />
      </circle>
      {/* Gear */}
      <g transform="translate(60 24)">
        <g className="origin-center" style={{ transformOrigin: "center" }}>
          <circle r="8" fill="none" stroke={accent} strokeWidth="1" />
          <circle r="3" fill={accent} />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <rect
              key={a}
              x="-1"
              y="-11"
              width="2"
              height="4"
              fill={accent}
              transform={`rotate(${a})`}
            />
          ))}
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0"
            to="360"
            dur="8s"
            repeatCount="indefinite"
          />
        </g>
      </g>
    </Frame>
  );
}

// ========== CHATBOT — bubbles typing ==========
export function IconChatbot() {
  return (
    <Frame>
      <g>
        <rect x="15" y="25" width="55" height="18" rx="9" fill="none" stroke={stroke} strokeWidth="0.8">
          <animate attributeName="opacity" values="0;1;1;1" dur="4s" repeatCount="indefinite" />
        </rect>
        {/* bot bubble with dots */}
        <rect x="50" y="55" width="55" height="18" rx="9" fill="none" stroke={accent} strokeWidth="1">
          <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite" />
        </rect>
        {[62, 72, 82].map((x, i) => (
          <circle key={x} cx={x} cy="64" r="2" fill={accent}>
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
        <rect x="15" y="85" width="45" height="18" rx="9" fill="none" stroke={stroke} strokeWidth="0.8">
          <animate attributeName="opacity" values="0;0;0;1" dur="4s" repeatCount="indefinite" />
        </rect>
      </g>
    </Frame>
  );
}

// ========== SEO — bar chart climbing ==========
export function IconSeo() {
  return (
    <Frame>
      <g stroke={stroke} strokeWidth="0.6">
        <line x1="15" y1="100" x2="105" y2="100" />
      </g>
      {/* bars */}
      {[
        { x: 20, h: 25, d: 0 },
        { x: 38, h: 40, d: 0.2 },
        { x: 56, h: 55, d: 0.4 },
        { x: 74, h: 70, d: 0.6 },
        { x: 92, h: 85, d: 0.8 },
      ].map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={100 - b.h}
          width="10"
          height={b.h}
          rx="1.5"
          fill={i === 4 ? accent : stroke}
          opacity={i === 4 ? 1 : 0.5}
        >
          <animate
            attributeName="height"
            values={`0;${b.h}`}
            dur="1.2s"
            begin={`${b.d}s`}
            fill="freeze"
          />
          <animate
            attributeName="y"
            values={`100;${100 - b.h}`}
            dur="1.2s"
            begin={`${b.d}s`}
            fill="freeze"
          />
        </rect>
      ))}
      {/* arrow line */}
      <path
        d="M20 85 L38 70 L56 55 L74 40 L92 25"
        stroke={accent}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      >
        <animate attributeName="stroke-dasharray" values="0 200;200 0" dur="2s" fill="freeze" />
      </path>
    </Frame>
  );
}

// ========== SEO LOCAL — pin pulsing with radius ==========
export function IconSeoLocal() {
  return (
    <Frame>
      <circle cx="60" cy="65" r="30" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.3">
        <animate attributeName="r" values="10;40;10" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="65" r="20" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.5">
        <animate attributeName="r" values="5;30;5" dur="3s" begin="0.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      {/* Pin */}
      <path
        d="M60 35 C70 35 77 42 77 52 C77 65 60 80 60 80 C60 80 43 65 43 52 C43 42 50 35 60 35 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      />
      <circle cx="60" cy="52" r="5" fill={accent} />
    </Frame>
  );
}

// ========== AEO — snippet card + position zero ==========
export function IconAeo() {
  return (
    <Frame>
      <rect x="15" y="22" width="90" height="28" rx="4" fill="none" stroke={accent} strokeWidth="1" />
      <text x="22" y="35" fontSize="6" fill={accent} fontFamily="monospace">
        POSITION 0
      </text>
      <line x1="22" y1="41" x2="95" y2="41" stroke={stroke} strokeWidth="0.4" />
      <line x1="22" y1="45" x2="80" y2="45" stroke={stroke} strokeWidth="0.4" />
      {/* Regular listings */}
      <rect x="15" y="58" width="90" height="10" rx="2" fill="none" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
      <rect x="15" y="72" width="90" height="10" rx="2" fill="none" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
      <rect x="15" y="86" width="90" height="10" rx="2" fill="none" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
      {/* Spotlight */}
      <rect x="15" y="22" width="90" height="28" rx="4" fill={accent} fillOpacity="0.08">
        <animate attributeName="fill-opacity" values="0.04;0.2;0.04" dur="2.5s" repeatCount="indefinite" />
      </rect>
    </Frame>
  );
}

// ========== GEO — citation from LLM ==========
export function IconGeo() {
  return (
    <Frame>
      {/* Three "LLM" nodes at top */}
      {[
        { x: 25, l: "GPT" },
        { x: 60, l: "PPL" },
        { x: 95, l: "CLD" },
      ].map((n, i) => (
        <g key={n.l}>
          <circle cx={n.x} cy="28" r="9" fill="none" stroke={stroke} strokeWidth="0.8" />
          <text x={n.x} y="31" fontSize="5" fill={stroke} textAnchor="middle" fontFamily="monospace">
            {n.l}
          </text>
          <line x1={n.x} y1="37" x2="60" y2="68" stroke={accent} strokeWidth="0.5" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </line>
        </g>
      ))}
      {/* citation box */}
      <rect x="20" y="70" width="80" height="28" rx="4" fill={accent} fillOpacity="0.1" stroke={accent} strokeWidth="1" />
      <text x="60" y="83" fontSize="5" fill={accent} textAnchor="middle" fontFamily="monospace">
        CITÉ PAR
      </text>
      <text x="60" y="92" fontSize="6" fill="#f4f2ec" textAnchor="middle" fontFamily="monospace">
        MAAD-AI
      </text>
    </Frame>
  );
}

// ========== CONCEPTION WEB — phone screen scrolling ==========
export function IconWeb() {
  return (
    <Frame>
      <rect x="42" y="18" width="36" height="84" rx="5" fill="none" stroke={stroke} strokeWidth="1" />
      <rect x="46" y="24" width="28" height="68" rx="1" fill="none" stroke={stroke} strokeWidth="0.4" />
      {/* Scrolling content */}
      <g clipPath="inset(26px 44px 28px 46px)">
        <g>
          <rect x="48" y="26" width="24" height="10" rx="1" fill={accent} fillOpacity="0.3" />
          <rect x="48" y="40" width="18" height="3" rx="1" fill={stroke} />
          <rect x="48" y="46" width="22" height="3" rx="1" fill={stroke} />
          <rect x="48" y="54" width="24" height="10" rx="1" fill="none" stroke={stroke} strokeWidth="0.4" />
          <rect x="48" y="68" width="20" height="3" rx="1" fill={stroke} />
          <rect x="48" y="74" width="24" height="3" rx="1" fill={stroke} />
          <rect x="48" y="82" width="24" height="10" rx="1" fill={accent} fillOpacity="0.3" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -30; 0 0"
            dur="5s"
            repeatCount="indefinite"
          />
        </g>
      </g>
      <circle cx="60" cy="97" r="1.5" fill={stroke} />
    </Frame>
  );
}
