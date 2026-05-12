import { motion } from "framer-motion";

// ── Cloud ────────────────────────────────────────────────────
export function Cloud({ className = "", scale = 1 }: { className?: string; scale?: number }) {
  return (
    <svg viewBox="0 0 120 60" className={className} style={{ width: 120 * scale }} aria-hidden>
      <path
        d="M30 45c-11 0-20-7-20-16s9-16 20-16c2 0 4 .3 6 1 4-8 13-14 23-14 13 0 24 9 26 21 8 1 14 7 14 15 0 9-8 16-19 16H30z"
        fill="white"
        opacity="0.92"
      />
    </svg>
  );
}

// ── Star ─────────────────────────────────────────────────────
export function Star({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden>
      <path
        d="M12 2l2.6 6.6L22 9.3l-5.5 4.7L18.2 22 12 18.3 5.8 22l1.7-8L2 9.3l7.4-.7L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

// ── Leaf ─────────────────────────────────────────────────────
export function Leaf({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden>
      <path
        d="M50 5C25 15 10 40 12 70c0 12 8 22 20 24 20 3 50-15 56-50 1-8-3-15-10-19-9-5-19-7-28-20z"
        fill="oklch(0.78 0.12 150)"
      />
      <path d="M30 70c8-15 22-30 40-40" stroke="oklch(0.6 0.12 150)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ── Balloon ──────────────────────────────────────────────────
export function Balloon({ color = "oklch(0.85 0.12 30)", className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 60 100" width={50} className={className} aria-hidden>
      <ellipse cx="30" cy="35" rx="22" ry="28" fill={color} />
      <path d="M30 63 L28 68 L32 68 Z" fill={color} />
      <path d="M30 68 Q35 80 28 95" stroke="oklch(0.5 0.04 240)" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

// ── Butterfly ────────────────────────────────────────────────
export function Butterfly({
  className = "",
  size = 48,
  color = "oklch(0.72 0.18 300)",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 80 60" width={size} height={size * 0.75} className={className} aria-hidden>
      {/* Left wings */}
      <ellipse cx="22" cy="20" rx="20" ry="14" fill={color} opacity="0.85" transform="rotate(-15 22 20)" />
      <ellipse cx="20" cy="40" rx="16" ry="10" fill={color} opacity="0.7" transform="rotate(10 20 40)" />
      {/* Right wings */}
      <ellipse cx="58" cy="20" rx="20" ry="14" fill={color} opacity="0.85" transform="rotate(15 58 20)" />
      <ellipse cx="60" cy="40" rx="16" ry="10" fill={color} opacity="0.7" transform="rotate(-10 60 40)" />
      {/* Wing details */}
      <ellipse cx="24" cy="21" rx="8" ry="5" fill="white" opacity="0.3" transform="rotate(-15 24 21)" />
      <ellipse cx="56" cy="21" rx="8" ry="5" fill="white" opacity="0.3" transform="rotate(15 56 21)" />
      {/* Body */}
      <ellipse cx="40" cy="28" rx="3.5" ry="16" fill="oklch(0.3 0.05 240)" />
      {/* Antennae */}
      <path d="M38 14 Q32 4 28 2" stroke="oklch(0.3 0.05 240)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="2" r="2.5" fill={color} />
      <path d="M42 14 Q48 4 52 2" stroke="oklch(0.3 0.05 240)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="52" cy="2" r="2.5" fill={color} />
    </svg>
  );
}

// ── Flower ───────────────────────────────────────────────────
export function Flower({
  className = "",
  size = 40,
  color = "oklch(0.88 0.15 30)",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} className={className} aria-hidden>
      {/* Petals */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="30"
          cy="14"
          rx="7"
          ry="12"
          fill={color}
          opacity="0.85"
          transform={`rotate(${deg} 30 30)`}
        />
      ))}
      {/* Centre */}
      <circle cx="30" cy="30" r="9" fill="oklch(0.93 0.12 90)" />
      <circle cx="30" cy="30" r="5" fill="oklch(0.82 0.1 60)" />
    </svg>
  );
}

// ── FloatingClouds ───────────────────────────────────────────
export function FloatingClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Cloud className="absolute top-10 left-[5%] animate-drift" scale={1.3} />
      <Cloud className="absolute top-32 right-[8%] animate-drift" scale={0.9} />
      <Cloud className="absolute top-[60%] left-[15%] animate-drift opacity-70" scale={1} />
    </div>
  );
}

// ── HangingAnimal ────────────────────────────────────────────
export function HangingAnimal({
  src,
  side = "left",
  top = "0px",
  width = 140,
}: {
  src: string;
  side?: "left" | "right";
  top?: string;
  width?: number;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute z-10"
      style={{ [side]: "1.5rem", top } as React.CSSProperties}
      initial={{ y: -200, rotate: -10 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.3 }}
    >
      <div className="animate-sway">
        <img src={src} alt="" style={{ width }} className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]" />
      </div>
    </motion.div>
  );
}

// ── SectionDivider ───────────────────────────────────────────
export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-8" aria-hidden>
      <Butterfly size={28} color="oklch(0.72 0.18 300)" className="animate-float-slow" />
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[oklch(0.85_0.08_165)]" />
      <Flower size={32} color="oklch(0.88 0.15 30)" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[oklch(0.85_0.08_165)]" />
      <Butterfly size={28} color="oklch(0.72 0.15 165)" className="animate-float-fast scale-x-[-1]" />
    </div>
  );
}