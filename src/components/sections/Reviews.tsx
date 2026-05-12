import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star as StarIcon } from "lucide-react";
import { SectionDivider, Butterfly, Flower } from "@/components/JungleDecor";
import monkey from "@/assets/monkey.png";
import elephant from "@/assets/elephant.png";
import { REVIEWS_SECTION, REVIEWS } from "@/content";

export function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((x) => (x + 1) % REVIEWS.length);
  const prev = () => setI((x) => (x - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden rounded-[3rem] my-10 bg-gradient-to-br from-[oklch(0.95_0.08_95)] via-[oklch(0.97_0.04_165)] to-[oklch(0.94_0.06_300)]">
      {/* ── Decorations & Animals ────────────────────────────── */}
      <Butterfly
        size={50}
        color="oklch(0.78 0.18 300)"
        className="absolute top-10 left-10 animate-float-fast opacity-60"
      />
      <Flower
        size={40}
        color="oklch(0.9 0.13 95)"
        className="absolute bottom-16 left-[15%] animate-float-slow opacity-50 hidden md:block"
      />
      <Butterfly
        size={44}
        color="oklch(0.82 0.15 165)"
        className="absolute top-1/4 right-[8%] animate-float-slow opacity-60 hidden lg:block"
      />
      <img
        src={monkey}
        alt=""
        className="absolute top-4 right-12 w-28 md:w-36 animate-sway origin-top drop-shadow-xl z-0"
      />
      <img
        src={elephant}
        alt=""
        className="absolute bottom-0 left-4 w-32 md:w-44 animate-float-slow drop-shadow-xl z-0"
      />

      {/* ── Section heading ───────────────────────────────────── */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <span className="inline-block text-xs uppercase tracking-[0.3em] font-bold px-5 py-1.5 rounded-full bg-white/70 text-[oklch(0.5_0.18_300)] shadow-sm">
          {REVIEWS_SECTION.eyebrow}
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--deep)] mt-4 leading-tight">
          {REVIEWS_SECTION.heading}
        </h2>
        <SectionDivider />
      </div>

      {/* ── Review carousel ───────────────────────────────────── */}
      <div className="relative z-10 mt-8">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring" }}
              className={`${REVIEWS[i].color} rounded-[3rem] p-10 md:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.08)] max-w-3xl mx-auto text-center relative overflow-hidden`}
            >
              {/* Star rating */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: REVIEWS[i].rating }).map((_, k) => (
                  <StarIcon key={k} size={24} className="text-[oklch(0.7_0.18_70)]" fill="currentColor" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-display text-2xl md:text-3xl text-[var(--deep)] leading-relaxed font-semibold">
                "{REVIEWS[i].text}"
              </p>

              {/* Reviewer avatar + name */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/80 shadow-sm flex items-center justify-center font-display font-black text-[var(--deep)] text-2xl">
                  {REVIEWS[i].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-[var(--deep)]">{REVIEWS[i].name}</div>
                  <div className="text-sm font-semibold text-[oklch(0.55_0.22_300)]">Verified Parent</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation controls ─────────────────────────────── */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-14 h-14 rounded-full bg-white text-[var(--deep)] shadow-lg hover:scale-110 hover:shadow-xl transition-all flex items-center justify-center border-2 border-transparent hover:border-[oklch(0.55_0.22_300)]"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2.5">
            {REVIEWS.map((_, k) => (
              <button
                key={k}
                aria-label={`Go to review ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-2.5 rounded-full transition-all duration-300 ${k === i ? "w-10 bg-[oklch(0.55_0.22_300)]" : "w-2.5 bg-[var(--deep)]/20 hover:bg-[var(--deep)]/40"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next review"
            className="w-14 h-14 rounded-full bg-white text-[var(--deep)] shadow-lg hover:scale-110 hover:shadow-xl transition-all flex items-center justify-center border-2 border-transparent hover:border-[oklch(0.55_0.22_300)]"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}