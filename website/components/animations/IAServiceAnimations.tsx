/**
 * Concrete, instantly-readable looping animations for the IA service cards.
 * 100 % SVG + CSS — no JS animation libs.
 * Animations loop forever and respect prefers-reduced-motion via globals.css
 * (which forces opacity 1 + no transform for the final-frame fallback).
 */

/* ============================================================
 *  CARD 1 — AGENTS IA
 *  A todo list that completes itself.
 * ============================================================ */
export function AgentsTodoAnim() {
  // 4 simulated tasks. y = vertical center of the row.
  const rows = [
    { y: 38, w: 118, key: "1" },
    { y: 60, w: 138, key: "2" },
    { y: 82, w: 96, key: "3" },
    { y: 104, w: 124, key: "4" },
  ];

  return (
    <div className="ia-anim ia-anim--agents" aria-hidden>
      <svg viewBox="0 0 200 140" width="100%" height="100%">
        {/* header — single line, no overlap */}
        <g>
          <circle
            cx="12"
            cy="14"
            r="2.6"
            fill="#1ad29c"
            className="ia-pulse-dot"
          />
          <text
            x="19"
            y="17"
            className="ia-mono"
            fill="rgba(255,255,255,0.65)"
            fontSize="8"
            letterSpacing="1.4"
          >
            AGENT IA — ACTIF
          </text>
        </g>

        {/* 4 todo rows */}
        {rows.map((r, i) => {
          const idx = i + 1;
          return (
            <g key={r.key}>
              {/* row highlight when completed */}
              <rect
                x="6"
                y={r.y - 10}
                width="188"
                height="18"
                rx="4"
                className={`todo-row todo-row--${idx}`}
                fill="rgba(0,200,150,0.06)"
              />
              {/* checkbox */}
              <rect
                x="10"
                y={r.y - 7}
                width="13"
                height="13"
                rx="3"
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.1"
              />
              {/* checkmark */}
              <path
                d={`M${12.5} ${r.y} L${15.5} ${r.y + 2.6} L${20.5} ${r.y - 2.8}`}
                fill="none"
                stroke="#1ad29c"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`todo-check todo-check--${idx}`}
                style={{ transformOrigin: `16px ${r.y}px` }}
              />
              {/* text line (simulated text) */}
              <rect
                x="32"
                y={r.y - 3}
                width={r.w}
                height="6"
                rx="3"
                className={`todo-line todo-line--${idx}`}
              />
            </g>
          );
        })}

        {/* "4/4 complétées" badge */}
        <g className="todo-badge">
          <rect
            x="50"
            y="125"
            width="100"
            height="13"
            rx="6.5"
            fill="rgba(0,200,150,0.18)"
            stroke="rgba(0,200,150,0.65)"
            strokeWidth="1"
          />
          <text
            x="100"
            y="134"
            textAnchor="middle"
            className="ia-mono"
            fill="#1ad29c"
            fontSize="8"
            letterSpacing="0.8"
          >
            4 / 4 COMPLÉTÉES
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
 *  CARD 2 — AUTOMATISATION
 *  Email → CRM → Notification, drawing arrows between.
 * ============================================================ */
export function AutomationFlowAnim() {
  return (
    <div className="ia-anim ia-anim--flow" aria-hidden>
      <svg viewBox="0 0 200 140" width="100%" height="100%">
        {/* ---- icon 1: incoming email (left) ---- */}
        <g className="auto-email">
          <circle
            cx="32"
            cy="60"
            r="22"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
          />
          {/* envelope */}
          <rect
            x="20"
            y="51"
            width="24"
            height="18"
            rx="2"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.4"
          />
          <path
            d="M20 53 L32 63 L44 53"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* arrow 1 (drawn) */}
        <g className="auto-arrow auto-arrow--1">
          <line
            x1="58"
            y1="60"
            x2="78"
            y2="60"
            stroke="#1ad29c"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="22"
            strokeDashoffset="22"
            className="auto-arrow-line"
          />
          <polyline
            points="74,56 78,60 74,64"
            fill="none"
            stroke="#1ad29c"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ---- icon 2: CRM file (center) ---- */}
        <g className="auto-crm">
          <circle
            cx="100"
            cy="60"
            r="22"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(0,200,150,0.4)"
            strokeWidth="1"
          />
          {/* file/card */}
          <rect
            x="89"
            y="48"
            width="22"
            height="26"
            rx="2"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.4"
          />
          <line
            x1="92"
            y1="55"
            x2="105"
            y2="55"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="92"
            y1="60"
            x2="108"
            y2="60"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="92"
            y1="65"
            x2="102"
            y2="65"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* small check badge */}
          <circle
            cx="111"
            cy="49"
            r="5"
            fill="#1ad29c"
            className="auto-crm-check"
          />
          <path
            d="M108.5 49 L110.5 51 L113.5 47.5"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="auto-crm-check"
          />
        </g>

        {/* arrow 2 */}
        <g className="auto-arrow auto-arrow--2">
          <line
            x1="126"
            y1="60"
            x2="146"
            y2="60"
            stroke="#1ad29c"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="22"
            strokeDashoffset="22"
            className="auto-arrow-line"
          />
          <polyline
            points="142,56 146,60 142,64"
            fill="none"
            stroke="#1ad29c"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ---- icon 3: notification bubble (right) ---- */}
        <g className="auto-msg">
          <circle
            cx="168"
            cy="60"
            r="22"
            fill="rgba(0,200,150,0.06)"
            stroke="rgba(0,200,150,0.5)"
            strokeWidth="1"
          />
          {/* speech bubble */}
          <path
            d="M156 52 h24 a3 3 0 0 1 3 3 v10 a3 3 0 0 1 -3 3 h-14 l-5 5 v-5 h-5 a3 3 0 0 1 -3 -3 v-10 a3 3 0 0 1 3 -3 z"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <line
            x1="160"
            y1="59"
            x2="172"
            y2="59"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="160"
            y1="63"
            x2="168"
            y2="63"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>

        {/* "Envoyé ✓" label */}
        <g className="auto-sent">
          <text
            x="100"
            y="118"
            textAnchor="middle"
            className="ia-mono"
            fill="#1ad29c"
            fontSize="9"
            letterSpacing="0.8"
          >
            ENVOYÉ ✓
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ============================================================
 *  CARD 3 — CHATBOT IA
 *  A real chat conversation that books a meeting.
 * ============================================================ */
export function ChatbotConversationAnim() {
  return (
    <div className="ia-anim ia-anim--chat" aria-hidden>
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
          strokeWidth="1"
        />
        {/* header */}
        <line
          x1="6"
          y1="22"
          x2="194"
          y2="22"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <circle cx="14" cy="14" r="2.2" fill="#1ad29c" className="ia-pulse-dot" />
        <text
          x="20"
          y="17"
          className="ia-mono"
          fill="rgba(255,255,255,0.55)"
          fontSize="7.5"
          letterSpacing="0.8"
        >
          EN LIGNE
        </text>

        {/* ---- bubble 1 (client / left) ---- */}
        <g className="chat-bubble chat-bubble--c1">
          <rect
            x="14"
            y="30"
            width="92"
            height="18"
            rx="9"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.18)"
          />
          <rect x="22" y="37" width="26" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="51" y="37" width="18" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="72" y="37" width="28" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
        </g>

        {/* ---- typing 1 (right) ---- */}
        <g className="chat-typing chat-typing--1">
          <rect
            x="142"
            y="52"
            width="46"
            height="16"
            rx="8"
            fill="rgba(0,200,150,0.10)"
            stroke="rgba(0,200,150,0.45)"
          />
          <circle cx="153" cy="60" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--1" />
          <circle cx="161" cy="60" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--2" />
          <circle cx="169" cy="60" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--3" />
        </g>

        {/* ---- bubble 2 (bot / right) ---- */}
        <g className="chat-bubble chat-bubble--b1">
          <rect
            x="86"
            y="52"
            width="102"
            height="18"
            rx="9"
            fill="rgba(0,200,150,0.14)"
            stroke="rgba(0,200,150,0.5)"
          />
          <rect x="94" y="59" width="22" height="4" rx="2" fill="rgba(26,210,156,0.95)" />
          <rect x="119" y="59" width="34" height="4" rx="2" fill="rgba(26,210,156,0.95)" />
          <rect x="156" y="59" width="24" height="4" rx="2" fill="rgba(26,210,156,0.95)" />
        </g>

        {/* ---- bubble 3 (client / left) ---- */}
        <g className="chat-bubble chat-bubble--c2">
          <rect
            x="14"
            y="74"
            width="74"
            height="18"
            rx="9"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.18)"
          />
          <rect x="22" y="81" width="30" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="55" y="81" width="26" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
        </g>

        {/* ---- typing 2 (right) ---- */}
        <g className="chat-typing chat-typing--2">
          <rect
            x="142"
            y="96"
            width="46"
            height="16"
            rx="8"
            fill="rgba(0,200,150,0.10)"
            stroke="rgba(0,200,150,0.45)"
          />
          <circle cx="153" cy="104" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--1" />
          <circle cx="161" cy="104" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--2" />
          <circle cx="169" cy="104" r="1.7" fill="#1ad29c" className="chat-dot chat-dot--3" />
        </g>

        {/* ---- bubble 4 (bot / right) — confirmé ✓ ---- */}
        <g className="chat-bubble chat-bubble--b2">
          <rect
            x="74"
            y="96"
            width="114"
            height="20"
            rx="10"
            fill="rgba(0,200,150,0.18)"
            stroke="rgba(0,200,150,0.65)"
          />
          <text
            x="131"
            y="109"
            textAnchor="middle"
            className="ia-mono"
            fill="#1ad29c"
            fontSize="8.5"
            letterSpacing="0.6"
          >
            RDV CONFIRMÉ ✓
          </text>
        </g>
      </svg>
    </div>
  );
}
