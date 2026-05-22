/* ── app.jsx — Feed + Steps sections ─────────────────────── */
const { useState } = React;

/* ── Data ──────────────────────────────────────────────────── */
const VIBES = ["All", "Techno", "House", "Jazz", "Indie", "Hip-Hop", "Rooftop", "Open Mic", "Queer", "Live Band"];

const EVENTS = [
  {
    id: 1,
    name: "Warehouse Frequency",
    venue: "The Foundry, East Side",
    time: "10pm – 5am",
    price: "$18",
    crowd: 240,
    vibes: ["Techno", "House"],
    color: "#C9BFEB",
    going: 14,
    desc: "Dark room, loud system, no phones on the floor."
  },
  {
    id: 2,
    name: "Late Night Vinyl",
    venue: "Blue Room Lounge",
    time: "9pm – 2am",
    price: "$12",
    crowd: 80,
    vibes: ["Jazz", "Live Band"],
    color: "#BCDBE6",
    going: 6,
    desc: "Rotating vinyl sets, candlelit, no cover before 10."
  },
  {
    id: 3,
    name: "Sundowner Rooftop",
    venue: "Alto Terrace, 14th Floor",
    time: "7pm – 1am",
    price: "Free",
    crowd: 150,
    vibes: ["Rooftop", "House"],
    color: "#FBD45A",
    going: 22,
    desc: "Panoramic views, cocktails, laid-back DJ set."
  },
  {
    id: 4,
    name: "Open Mic Thursdays",
    venue: "The Parlour",
    time: "8pm – 12am",
    price: "Free",
    crowd: 60,
    vibes: ["Open Mic", "Indie"],
    color: "#B7E1C5",
    going: 9,
    desc: "15-min slots, any genre, sign up on the door."
  },
  {
    id: 5,
    name: "BIPOC Block Party",
    venue: "Community Lot, Northside",
    time: "6pm – 11pm",
    price: "$5 suggested",
    crowd: 400,
    vibes: ["Hip-Hop", "Live Band"],
    color: "#F2A773",
    going: 38,
    desc: "Local artists, food vendors, bring a blanket."
  },
  {
    id: 6,
    name: "Bodies in Motion",
    venue: "Studio 11, Warehouse District",
    time: "11pm – 6am",
    price: "$22",
    crowd: 300,
    vibes: ["Techno", "Queer"],
    color: "#E78A8A",
    going: 17,
    desc: "Members-first hour. Strict door, inclusive space."
  },
];

const STEPS = [
  {
    num: "01",
    title: "Set your vibe",
    body: "Sweaty + queer + walkable. Acoustic + introvert-friendly. Rooftop + gin cocktails. Pick the mood, we find the room.",
    color: "#BCDBE6",
    svg: (
      <svg viewBox="0 0 180 120" fill="none" style={{width:"100%",height:"100%"}}>
        <g fontFamily="JetBrains Mono" fontSize="10" fill="#133B3C">
          <text x="8" y="24">sweaty</text>
          <text x="8" y="52">techno</text>
          <text x="8" y="80">queer</text>
          <text x="8" y="108">walkable</text>
        </g>
        <rect x="72" y="16" width="100" height="5" rx="2.5" fill="rgba(19,59,60,0.12)"/>
        <rect x="72" y="16" width="88" height="5" rx="2.5" fill="#133B3C"/>
        <rect x="72" y="44" width="100" height="5" rx="2.5" fill="rgba(19,59,60,0.12)"/>
        <rect x="72" y="44" width="95" height="5" rx="2.5" fill="#133B3C"/>
        <rect x="72" y="72" width="100" height="5" rx="2.5" fill="rgba(19,59,60,0.12)"/>
        <rect x="72" y="72" width="70" height="5" rx="2.5" fill="#2A8788"/>
        <rect x="72" y="100" width="100" height="5" rx="2.5" fill="rgba(19,59,60,0.12)"/>
        <rect x="72" y="100" width="60" height="5" rx="2.5" fill="#E7B72A"/>
      </svg>
    )
  },
  {
    num: "02",
    title: "Browse tonight's feed",
    body: "Every party in your city, filtered in real time. Crowd data, dress code, last call, who else is going — all there before you commit.",
    color: "#FBD45A",
    svg: (
      <svg viewBox="0 0 180 120" fill="none" style={{width:"100%",height:"100%"}}>
        <rect x="20" y="10" width="140" height="100" rx="10" fill="#FBF7EE" stroke="#133B3C" strokeWidth="1.4"/>
        <rect x="34" y="24" width="80" height="7" rx="3.5" fill="#133B3C"/>
        <rect x="34" y="38" width="60" height="5" rx="2.5" fill="rgba(19,59,60,0.25)"/>
        <rect x="34" y="54" width="110" height="1" stroke="#133B3C" strokeWidth="0.6"/>
        <g fontFamily="JetBrains Mono" fontSize="8" fill="rgba(19,59,60,0.6)">
          <text x="34" y="70">crowd — 240 · $18 · 10pm</text>
          <text x="34" y="85" fill="#2A8788">12 friends going →</text>
        </g>
        <rect x="130" y="20" width="20" height="20" rx="5" fill="#FBD45A"/>
      </svg>
    )
  },
  {
    num: "03",
    title: "Show up, find your people",
    body: "You're at an event with people who share your taste. You've got real information. The rest is up to you.",
    color: "#C9BFEB",
    svg: (
      <svg viewBox="0 0 180 120" fill="none" style={{width:"100%",height:"100%"}}>
        <circle cx="90" cy="55" r="30" fill="#9A87D2" opacity="0.25"/>
        <circle cx="90" cy="55" r="18" fill="#9A87D2" opacity="0.4"/>
        <circle cx="90" cy="55" r="8" fill="#9A87D2"/>
        <g fill="#FBD45A" stroke="#133B3C" strokeWidth="1.2">
          <circle cx="46" cy="36" r="6"/>
          <circle cx="134" cy="44" r="6"/>
          <circle cx="128" cy="84" r="6"/>
          <circle cx="52" cy="80" r="6"/>
          <circle cx="90" cy="20" r="5"/>
        </g>
        <line x1="52" y1="36" x2="82" y2="52" stroke="#133B3C" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4"/>
        <line x1="128" y1="50" x2="100" y2="52" stroke="#133B3C" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4"/>
      </svg>
    )
  },
];

/* ── Feed Section ───────────────────────────────────────────── */
function FeedSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? EVENTS
    : EVENTS.filter(e => e.vibes.includes(active));

  return (
    <div>
      {/* Vibe filter chips */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px"
      }}>
        {VIBES.map(v => (
          <button
            key={v}
            onClick={() => setActive(v)}
            style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              padding: "7px 14px",
              borderRadius: "999px",
              fontFamily: "JetBrains Mono, ui-monospace, monospace",
              fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase",
              border: "1.5px solid",
              cursor: "pointer",
              transition: "all 0.18s ease",
              background: active === v ? "var(--ink)" : "var(--paper)",
              borderColor: active === v ? "var(--ink)" : "var(--rule)",
              color: active === v ? "#FBF7EE" : "var(--ink-soft)",
              fontWeight: 500,
            }}
          >
            {v}
          </button>
        ))}
      </div>

      {/* Event cards grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "16px",
      }}>
        {filtered.map(ev => (
          <EventCard key={ev.id} ev={ev} />
        ))}
        {filtered.length === 0 && (
          <div style={{
            gridColumn: "1 / -1", textAlign: "center",
            padding: "60px 0",
            fontFamily: "var(--mono)", fontSize: "13px", color: "var(--ink-faint)",
            letterSpacing: "0.1em", textTransform: "uppercase"
          }}>
            Nothing tonight — check back closer to the weekend.
          </div>
        )}
      </div>
    </div>
  );
}

function EventCard({ ev }) {
  const [saved, setSaved] = useState(false);

  return (
    <div style={{
      background: "var(--paper)",
      border: "1.5px solid var(--rule)",
      borderRadius: "var(--radius-lg)",
      padding: "0",
      overflow: "hidden",
      transition: "transform 0.22s ease, border-color 0.22s ease",
      cursor: "pointer",
      position: "relative",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--rule-strong)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "var(--rule)"; }}
    >
      {/* Color bar */}
      <div style={{
        height: "80px",
        background: ev.color,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        {/* Vibe chips on bar */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", padding: "0 16px" }}>
          {ev.vibes.map(v => (
            <span key={v} style={{
              fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.08em",
              textTransform: "uppercase", fontWeight: 500,
              background: "rgba(251,247,238,0.82)", color: "var(--ink)",
              padding: "3px 9px", borderRadius: "999px",
              border: "1px solid rgba(19,59,60,0.15)",
            }}>{v}</span>
          ))}
        </div>
        {/* Save button */}
        <button
          onClick={e => { e.stopPropagation(); setSaved(s => !s); }}
          aria-label={saved ? "Unsave event" : "Save event"}
          style={{
            position: "absolute", top: "10px", right: "12px",
            width: "28px", height: "28px", borderRadius: "50%",
            background: "rgba(251,247,238,0.85)", border: "1px solid rgba(19,59,60,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "14px", cursor: "pointer", transition: "transform 0.15s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
          onMouseLeave={e => e.currentTarget.style.transform = ""}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 22px 22px" }}>
        <div style={{ marginBottom: "4px" }}>
          <span style={{
            fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--ink-faint)", fontWeight: 500,
          }}>{ev.time} · {ev.price}</span>
        </div>
        <h3 style={{
          fontFamily: "var(--serif)", fontWeight: 400, fontSize: "22px",
          letterSpacing: "-0.01em", lineHeight: 1.1,
          color: "var(--ink)", margin: "0 0 4px",
        }}>{ev.name}</h3>
        <p style={{
          fontFamily: "var(--sans)", fontSize: "13.5px", color: "var(--ink-dim)",
          margin: "0 0 12px", lineHeight: 1.4,
        }}>{ev.venue}</p>
        <p style={{
          fontFamily: "var(--sans)", fontSize: "13.5px", color: "var(--ink-soft)",
          margin: "0 0 16px", lineHeight: 1.5,
        }}>{ev.desc}</p>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "1px solid var(--rule)", paddingTop: "14px",
        }}>
          <span style={{
            fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.06em",
            color: "var(--teal)", textTransform: "uppercase", fontWeight: 500,
          }}>
            {ev.going} friends going
          </span>
          <span style={{
            fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.06em",
            color: "var(--ink-faint)", textTransform: "uppercase",
          }}>
            ~{ev.crowd} expected
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Steps Section ──────────────────────────────────────────── */
function StepsSection() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
    }}>
      {STEPS.map((step, i) => (
        <div key={step.num} style={{
          background: "var(--paper)",
          border: "1.5px solid var(--rule)",
          borderRadius: "var(--radius-lg)",
          padding: "30px",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.22s ease, border-color 0.22s ease",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--rule-strong)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "var(--rule)"; }}
        >
          <span style={{
            fontFamily: "var(--mono)", fontSize: "11px", color: "var(--ink-faint)",
            letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500,
          }}>{step.num}</span>

          {/* Illustration */}
          <div style={{
            height: "140px", margin: "16px 0 12px",
            borderRadius: "14px", overflow: "hidden",
            background: step.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
          }}>
            {step.svg}
          </div>

          <h3 style={{
            fontFamily: "var(--serif)", fontWeight: 400, fontSize: "28px",
            lineHeight: 1.05, letterSpacing: "-0.012em",
            margin: "0 0 10px", color: "var(--ink)",
          }}>{step.title}</h3>
          <p style={{
            fontFamily: "var(--sans)", color: "var(--ink-dim)",
            lineHeight: 1.55, fontSize: "15px", margin: 0,
          }}>{step.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Mount ──────────────────────────────────────────────────── */
const feedRoot = document.getElementById("feed-section");
if (feedRoot) {
  ReactDOM.createRoot(feedRoot).render(<FeedSection />);
}

const stepsRoot = document.getElementById("steps-section");
if (stepsRoot) {
  ReactDOM.createRoot(stepsRoot).render(<StepsSection />);
}
