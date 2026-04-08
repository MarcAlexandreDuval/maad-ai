/**
 * Concrete looping SVG+CSS animations for the 5 Visibilité Web cards.
 * Same conventions as IAServiceAnimations: 200×140 viewBox, infinite loop with
 * pause, prefers-reduced-motion handled via globals.css.
 */

/* ============================================================
 *  CARD 1 — SEO
 *  Your result climbs from #5 to #1 in Google.
 * ============================================================ */
export function SeoRankClimbAnim() {
  const rows = [
    { y: 36, w: 130 },
    { y: 56, w: 110 },
    { y: 76, w: 138 },
    { y: 96, w: 102 },
    { y: 116, w: 124 },
  ];
  return (
    <div className="ia-anim viz-anim" aria-hidden>
      <svg viewBox="0 0 200 140" width="100%" height="100%">
        {/* mini browser frame */}
        <rect
          x="6"
          y="6"
          width="188"
          height="128"
          rx="6"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
        />
        <line x1="6" y1="22" x2="194" y2="22" stroke="rgba(255,255,255,0.12)" />
        <circle cx="13" cy="14" r="1.6" fill="rgba(255,255,255,0.25)" />
        <circle cx="19" cy="14" r="1.6" fill="rgba(255,255,255,0.25)" />
        <circle cx="25" cy="14" r="1.6" fill="rgba(255,255,255,0.25)" />
        <rect
          x="34"
          y="10"
          width="150"
          height="9"
          rx="4.5"
          fill="rgba(255,255,255,0.06)"
        />

        {/* gray results */}
        {rows.map((r, i) => (
          <g key={i}>
            <rect
              x="14"
              y={r.y - 5}
              width={r.w}
              height="3"
              rx="1.5"
              fill="rgba(255,255,255,0.42)"
            />
            <rect
              x="14"
              y={r.y}
              width={r.w - 30}
              height="2.5"
              rx="1.25"
              fill="rgba(255,255,255,0.18)"
            />
          </g>
        ))}

        {/* emerald climbing result */}
        <g className="seo-rank">
          <rect
            x="10"
            y="111"
            width="180"
            height="14"
            rx="3"
            fill="rgba(0,200,150,0.12)"
            stroke="rgba(0,200,150,0.7)"
            strokeWidth="1"
          />
          <rect
            x="14"
            y="115"
            width="120"
            height="3"
            rx="1.5"
            fill="#1ad29c"
          />
          <rect
            x="14"
            y="120"
            width="86"
            height="2.5"
            rx="1.25"
            fill="rgba(26,210,156,0.6)"
          />
        </g>

        {/* #1 badge */}
        <g className="seo-badge">
          <rect
            x="148"
            y="29"
            width="40"
            height="13"
            rx="6.5"
            fill="rgba(0,200,150,0.2)"
            stroke="rgba(0,200,150,0.7)"
          />
          <text
            x="168"
            y="38.5"
            textAnchor="middle"
            className="ia-mono"
            fill="#1ad29c"
            fontSize="8"
            letterSpacing="0.6"
          >
            ↑ #1
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
 *  CARD 2 — SEO LOCAL
 *  Your pin dominates Google Maps.
 * ============================================================ */
export function SeoLocalMapAnim() {
  return (
    <div className="ia-anim viz-anim" aria-hidden>
      <svg viewBox="0 0 200 140" width="100%" height="100%">
        {/* map frame */}
        <rect
          x="6"
          y="6"
          width="188"
          height="128"
          rx="8"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.1)"
        />
        {/* simplified streets */}
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          <line x1="6" y1="40" x2="194" y2="40" />
          <line x1="6" y1="80" x2="194" y2="80" />
          <line x1="6" y1="110" x2="194" y2="110" />
          <line x1="50" y1="6" x2="50" y2="134" />
          <line x1="100" y1="6" x2="100" y2="134" />
          <line x1="150" y1="6" x2="150" y2="134" />
        </g>
        <g stroke="rgba(0,200,150,0.18)" strokeWidth="1.4">
          <line x1="6" y1="80" x2="194" y2="80" />
          <line x1="100" y1="6" x2="100" y2="134" />
        </g>

        {/* radar pulse */}
        <circle
          cx="100"
          cy="78"
          r="6"
          fill="none"
          stroke="#1ad29c"
          strokeWidth="1.4"
          className="map-radar"
        />

        {/* competitor pins (small, gray) */}
        <g className="map-competitor map-competitor--1">
          <circle cx="48" cy="36" r="4" fill="rgba(255,255,255,0.4)" />
          <path
            d="M48 40 L46 44 L50 44 Z"
            fill="rgba(255,255,255,0.4)"
          />
        </g>
        <g className="map-competitor map-competitor--2">
          <circle cx="158" cy="44" r="4" fill="rgba(255,255,255,0.4)" />
          <path
            d="M158 48 L156 52 L160 52 Z"
            fill="rgba(255,255,255,0.4)"
          />
        </g>
        <g className="map-competitor map-competitor--3">
          <circle cx="56" cy="108" r="4" fill="rgba(255,255,255,0.4)" />
          <path
            d="M56 112 L54 116 L58 116 Z"
            fill="rgba(255,255,255,0.4)"
          />
        </g>

        {/* main emerald pin (drops in) */}
        <g className="map-pin">
          <circle
            cx="100"
            cy="74"
            r="9"
            fill="#1ad29c"
            filter="drop-shadow(0 0 6px rgba(0,200,150,0.7))"
          />
          <circle cx="100" cy="74" r="3.4" fill="#0a0a0a" />
          <path
            d="M100 83 L94 92 L106 92 Z"
            fill="#1ad29c"
          />
        </g>

        {/* label */}
        <g className="map-label">
          <rect
            x="76"
            y="100"
            width="48"
            height="13"
            rx="6.5"
            fill="rgba(0,0,0,0.6)"
            stroke="rgba(0,200,150,0.55)"
          />
          <text
            x="100"
            y="109"
            textAnchor="middle"
            className="ia-mono"
            fill="#1ad29c"
            fontSize="7.5"
            letterSpacing="0.8"
          >
            QUÉBEC
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
 *  CARD 3 — AEO
 *  Featured snippet drops in above the results.
 * ============================================================ */
export function AeoSnippetAnim() {
  return (
    <div className="ia-anim viz-anim" aria-hidden>
      <svg viewBox="0 0 200 140" width="100%" height="100%">
        {/* dimmed search results in the background */}
        <g className="aeo-results">
          {[78, 96, 114].map((y, i) => (
            <g key={i}>
              <rect
                x="14"
                y={y}
                width={[150, 130, 142][i]}
                height="3"
                rx="1.5"
                fill="rgba(255,255,255,0.35)"
              />
              <rect
                x="14"
                y={y + 5}
                width={[110, 90, 100][i]}
                height="2.5"
                rx="1.25"
                fill="rgba(255,255,255,0.15)"
              />
            </g>
          ))}
        </g>

        {/* featured snippet — drops in */}
        <g className="aeo-snippet">
          <rect
            x="10"
            y="14"
            width="180"
            height="52"
            rx="6"
            fill="rgba(0,200,150,0.08)"
            stroke="rgba(0,200,150,0.7)"
            strokeWidth="1.2"
          />
          {/* label */}
          <rect
            x="16"
            y="20"
            width="78"
            height="11"
            rx="5.5"
            fill="rgba(0,200,150,0.2)"
          />
          <text
            x="55"
            y="28"
            textAnchor="middle"
            className="ia-mono"
            fill="#1ad29c"
            fontSize="7"
            letterSpacing="0.7"
          >
            ✓ POSITION ZÉRO
          </text>
          {/* simulated answer text */}
          <rect x="16" y="38" width="160" height="3" rx="1.5" fill="rgba(255,255,255,0.7)" />
          <rect x="16" y="45" width="148" height="3" rx="1.5" fill="rgba(255,255,255,0.7)" />
          <rect x="16" y="52" width="128" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
          <rect x="16" y="59" width="92" height="3" rx="1.5" fill="rgba(255,255,255,0.45)" />
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
 *  CARD 4 — GEO
 *  ChatGPT cites your business in its answer.
 * ============================================================ */
export function GeoChatCitationAnim() {
  return (
    <div className="ia-anim viz-anim" aria-hidden>
      <svg viewBox="0 0 200 140" width="100%" height="100%">
        {/* chat window */}
        <rect
          x="6"
          y="6"
          width="188"
          height="128"
          rx="8"
          fill="rgba(255,255,255,0.025)"
          stroke="rgba(255,255,255,0.12)"
        />
        {/* header */}
        <line x1="6" y1="22" x2="194" y2="22" stroke="rgba(255,255,255,0.1)" />
        <rect
          x="10"
          y="10"
          width="10"
          height="10"
          rx="2"
          fill="rgba(0,200,150,0.18)"
          stroke="rgba(0,200,150,0.5)"
        />
        <text
          x="24"
          y="17"
          className="ia-mono"
          fill="rgba(255,255,255,0.55)"
          fontSize="7.5"
          letterSpacing="0.8"
        >
          CHAT IA
        </text>

        {/* user prompt (right) */}
        <g className="geo-user">
          <rect
            x="78"
            y="28"
            width="110"
            height="14"
            rx="7"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.18)"
          />
          <rect x="86" y="34" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.6)" />
          <rect x="140" y="34" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.6)" />
        </g>

        {/* typing dots */}
        <g className="geo-typing">
          <circle cx="20" cy="56" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--1" />
          <circle cx="28" cy="56" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--2" />
          <circle cx="36" cy="56" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--3" />
        </g>

        {/* bot response lines */}
        <g className="geo-response">
          <rect x="12" y="68" width="170" height="3" rx="1.5" fill="rgba(255,255,255,0.65)" />
          <rect x="12" y="76" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.65)" />
          {/* highlighted citation */}
          <rect
            x="66"
            y="74"
            width="56"
            height="7"
            rx="2"
            fill="rgba(0,200,150,0.25)"
            className="geo-cite"
          />
          <rect x="70" y="76" width="48" height="3" rx="1.5" fill="#1ad29c" />
          <rect x="126" y="76" width="56" height="3" rx="1.5" fill="rgba(255,255,255,0.65)" />
          <rect x="12" y="84" width="160" height="3" rx="1.5" fill="rgba(255,255,255,0.65)" />
          <rect x="12" y="92" width="118" height="3" rx="1.5" fill="rgba(255,255,255,0.65)" />
        </g>

        {/* citation badge */}
        <g className="geo-badge">
          <rect
            x="50"
            y="110"
            width="100"
            height="14"
            rx="7"
            fill="rgba(0,200,150,0.18)"
            stroke="rgba(0,200,150,0.65)"
          />
          <text
            x="100"
            y="119.5"
            textAnchor="middle"
            className="ia-mono"
            fill="#1ad29c"
            fontSize="7.5"
            letterSpacing="0.8"
          >
            ✓ CITÉ PAR L&apos;IA
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
 *  CARD 5 — CONCEPTION WEB
 *  A site that adapts: laptop → tablet → phone.
 * ============================================================ */
export function WebResponsiveAnim() {
  return (
    <div className="ia-anim viz-anim" aria-hidden>
      <svg viewBox="0 0 200 140" width="100%" height="100%">
        {/* LAPTOP */}
        <g className="web-frame web-frame--laptop">
          <rect
            x="20"
            y="22"
            width="160"
            height="86"
            rx="6"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.2"
          />
          {/* base */}
          <rect x="14" y="108" width="172" height="4" rx="2" fill="rgba(255,255,255,0.22)" />
          {/* content: header + 3-col blocks */}
          <rect x="28" y="30" width="100" height="5" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="28" y="40" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
          <rect x="28" y="52" width="40" height="32" rx="3" fill="rgba(0,200,150,0.18)" />
          <rect x="80" y="52" width="40" height="32" rx="3" fill="rgba(255,255,255,0.08)" />
          <rect x="132" y="52" width="40" height="32" rx="3" fill="rgba(255,255,255,0.08)" />
          <rect x="28" y="92" width="144" height="3" rx="1.5" fill="rgba(255,255,255,0.22)" />
        </g>

        {/* TABLET */}
        <g className="web-frame web-frame--tablet">
          <rect
            x="50"
            y="20"
            width="100"
            height="100"
            rx="6"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.2"
          />
          <rect x="58" y="28" width="64" height="5" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="58" y="38" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
          <rect x="58" y="50" width="38" height="28" rx="3" fill="rgba(0,200,150,0.18)" />
          <rect x="104" y="50" width="38" height="28" rx="3" fill="rgba(255,255,255,0.08)" />
          <rect x="58" y="86" width="84" height="3" rx="1.5" fill="rgba(255,255,255,0.22)" />
          <rect x="58" y="93" width="64" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
        </g>

        {/* PHONE */}
        <g className="web-frame web-frame--phone">
          <rect
            x="76"
            y="14"
            width="48"
            height="112"
            rx="6"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.2"
          />
          <rect x="92" y="18" width="16" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
          <rect x="82" y="26" width="36" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="82" y="34" width="22" height="2.5" rx="1.25" fill="rgba(255,255,255,0.3)" />
          <rect x="82" y="42" width="36" height="14" rx="2" fill="rgba(0,200,150,0.18)" />
          <rect x="82" y="60" width="36" height="14" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="82" y="78" width="36" height="14" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="82" y="96" width="36" height="3" rx="1.5" fill="rgba(255,255,255,0.22)" />
          <rect x="82" y="102" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
        </g>

        {/* "MOBILE-FIRST" badge */}
        <g className="web-badge">
          <rect
            x="60"
            y="124"
            width="80"
            height="13"
            rx="6.5"
            fill="rgba(0,200,150,0.18)"
            stroke="rgba(0,200,150,0.6)"
          />
          <text
            x="100"
            y="133"
            textAnchor="middle"
            className="ia-mono"
            fill="#1ad29c"
            fontSize="7.5"
            letterSpacing="0.8"
          >
            ✓ MOBILE-FIRST
          </text>
        </g>
      </svg>
    </div>
  );
}
