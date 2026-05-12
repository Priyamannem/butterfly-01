import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { SectionDivider, Butterfly, Flower } from "@/components/JungleDecor";
import { BLOGS_SECTION, BLOGS } from "@/content";

export function Blogs() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[oklch(0.97_0.02_95)] py-24 overflow-hidden">
      {/* ── Decorations ──────────────────────────────────────── */}
      <Butterfly
        size={50}
        color="oklch(0.82 0.16 300)"
        className="absolute top-8 right-[5%] animate-float-slow opacity-40"
      />
      <Flower
        size={44}
        color="oklch(0.9 0.14 30)"
        className="absolute bottom-10 left-[8%] animate-float-fast opacity-40"
      />
      <Butterfly
        size={32}
        color="oklch(0.78 0.18 165)"
        className="absolute top-1/2 left-[3%] animate-float-slow opacity-30 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Section heading + scroll arrows ─────────────────── */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[oklch(0.6_0.12_165)] font-semibold">
              {BLOGS_SECTION.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--deep)] mt-3">
              {BLOGS_SECTION.heading} <br /> {BLOGS_SECTION.headingLine2}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full glass shadow-card hover:scale-110 transition-transform flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full glass shadow-card hover:scale-110 transition-transform flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <SectionDivider />

        {/* ── Horizontally scrollable blog cards ──────────────── */}
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6"
          style={{ scrollbarWidth: "none" }}
        >
          {BLOGS.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="snap-start shrink-0 w-[320px] md:w-[360px] bg-white rounded-3xl shadow-card overflow-hidden hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* ── Card illustration area ─────────────────────── */}
              <div className={`h-48 bg-gradient-to-br ${b.grad} relative overflow-hidden`}>
                {/* Large emoji */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                  {b.emoji}
                </div>
                {/* Floating butterfly on card */}
                <Butterfly
                  size={36}
                  color="oklch(0.72 0.18 300)"
                  className="absolute bottom-2 right-3 opacity-50 animate-float-fast"
                />
                {/* Tag badge */}
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold bg-white/80 text-[var(--deep)] rounded-full px-3 py-1">
                  {b.tag}
                </span>
              </div>

              {/* ── Card content ───────────────────────────────── */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock size={12} /> {b.read} read
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--deep)] mt-3 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
                <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--deep)] story-link">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}