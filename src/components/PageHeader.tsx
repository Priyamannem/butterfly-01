import { motion } from "framer-motion";
import { Butterfly, Flower } from "./JungleDecor";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden bg-gradient-to-b from-[oklch(0.96_0.04_165)] to-[oklch(0.98_0.02_95)] rounded-b-[3rem]">
      {/* ── Butterfly & flower decorations ──────────────────── */}
      <Butterfly
        size={70}
        color="oklch(0.78 0.18 300)"
        className="absolute top-24 left-6 animate-sway opacity-60"
      />
      <Butterfly
        size={50}
        color="oklch(0.82 0.15 165)"
        className="absolute top-32 right-8 rotate-180 animate-float-slow opacity-50"
      />
      <Flower
        size={40}
        color="oklch(0.88 0.15 30)"
        className="absolute top-32 left-1/3 animate-float-slow opacity-50"
      />
      <Flower
        size={32}
        color="oklch(0.9 0.12 95)"
        className="absolute top-44 right-1/4 animate-float-fast opacity-50"
      />

      {/* ── Page heading ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-[oklch(0.6_0.12_165)] font-semibold">
          {eyebrow}
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-[var(--deep)] mt-3 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground mt-5 leading-relaxed">{subtitle}</p>
        )}
      </motion.div>
    </section>
  );
}