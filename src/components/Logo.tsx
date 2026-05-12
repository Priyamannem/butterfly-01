import { Link } from "@tanstack/react-router";
import { Butterfly } from "./JungleDecor";
import { SITE } from "@/content";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* ── Butterfly icon badge ─────────────────────────────── */}
      <div className="relative">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-[0_4px_14px_rgba(120,50,200,0.35)] group-hover:scale-105 transition-transform"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.20 300), oklch(0.72 0.18 165))" }}
        >
          <Butterfly size={32} color="white" />
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