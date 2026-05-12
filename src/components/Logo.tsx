import { Link } from "@tanstack/react-router";
import { SITE } from "@/content";
import butterflyLogo from "@/assets/butterfly-logo.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* ── Butterfly icon badge ─────────────────────────────── */}
      <div className="relative">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(120,50,200,0.2)] group-hover:scale-105 transition-all duration-500 overflow-hidden bg-white border border-[oklch(0.9_0.05_300)]"
        >
          <img 
            src={butterflyLogo} 
            alt={SITE.name} 
            className="w-full h-full object-contain scale-[2.8] translate-y-[16px]"
          />
        </div>
        {/* Pulsing dot */}
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[oklch(0.85_0.18_55)] animate-pulse shadow-sm border-2 border-white" />
      </div>

      {/* ── Clinic name text ─────────────────────────────────── */}
      <div className="leading-tight">
        {/* Primary name — Quicksand (child-friendly) */}
        <div
          className="font-display text-lg font-black text-[var(--deep)] group-hover:text-[oklch(0.45_0.18_300)] transition-colors"
          style={{ fontFamily: "'Quicksand', ui-sans-serif, system-ui" }}
        >
          {SITE.name}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-[oklch(0.6_0.14_300)] font-bold">
          {SITE.tagline}
        </div>
      </div>
    </Link>
  );
}