import { motion } from "framer-motion";
import { CalendarHeart, Users, Stethoscope } from "lucide-react";
import { SectionDivider, Butterfly, Flower } from "@/components/JungleDecor";
import monkey from "@/assets/monkey.png";
import giraffe from "@/assets/giraffe.png";
import elephant from "@/assets/elephant.png";
import lion from "@/assets/lion.png";
import { STATS_SECTION, STATS } from "@/content";

// ── Per-card config ───────────────────────────────────────────
const CARDS = [
  {
    icon: CalendarHeart,
    gradient: "from-[oklch(0.88_0.14_165)] to-[oklch(0.82_0.12_200)]",
    iconBg: "bg-[oklch(0.97_0.06_165)]",
    shadow: "shadow-[0_8px_30px_oklch(0.7_0.14_165/0.4)]",
    animal: monkey,
    animalClass: "w-16 h-16",
  },
  {
    icon: Users,
    gradient: "from-[oklch(0.88_0.14_30)] to-[oklch(0.85_0.16_55)]",
    iconBg: "bg-[oklch(0.97_0.06_40)]",
    shadow: "shadow-[0_8px_30px_oklch(0.7_0.14_40/0.4)]",
    animal: giraffe,
    animalClass: "w-12 h-20",
  },
  {
    icon: Stethoscope,
    gradient: "from-[oklch(0.85_0.14_300)] to-[oklch(0.80_0.16_270)]",
    iconBg: "bg-[oklch(0.97_0.06_300)]",
    shadow: "shadow-[0_8px_30px_oklch(0.65_0.14_300/0.4)]",
    animal: elephant,
    animalClass: "w-16 h-14",
  },
];

export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* ── Colorful wavy gradient background ────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.96_0.05_95)] via-[oklch(0.97_0.04_165)] to-[oklch(0.96_0.05_300)]" />

      {/* ── Decorative butterflies & flowers ─────────────────── */}
      <Butterfly
        size={56}
        color="oklch(0.72 0.20 300)"
        className="absolute top-8 left-8 animate-float-slow opacity-60 z-0"
      />
      <Butterfly
        size={40}
        color="oklch(0.78 0.18 165)"
        className="absolute bottom-10 right-10 animate-float-fast opacity-55 z-0"
      />
      <Flower
        size={50}
        color="oklch(0.88 0.18 30)"
        className="absolute top-12 right-[18%] animate-float-slow opacity-55 z-0"
      />
      <Flower
        size={36}
        color="oklch(0.85 0.16 95)"
        className="absolute bottom-14 left-[25%] animate-float-fast opacity-50 z-0"
      />
      <Butterfly
        size={30}
        color="oklch(0.85 0.16 55)"
        className="absolute top-1/2 left-[45%] animate-float-slow opacity-40 z-0 hidden lg:block"
      />

      {/* ── Lion peeking from bottom-right corner ────────────── */}
      <img
        src={lion}
        alt=""
        className="absolute bottom-0 right-0 w-28 md:w-36 opacity-80 z-0 drop-shadow-xl animate-float-slow"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Section heading ──────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Eyebrow */}
          <span className="inline-block text-xs uppercase tracking-[0.3em] font-bold px-5 py-1.5 rounded-full bg-white/70 text-[oklch(0.5_0.18_300)] shadow-sm">
            {STATS_SECTION.eyebrow}
          </span>

          {/* Main heading */}
          <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--deep)] mt-4 leading-tight">
            {STATS_SECTION.heading}{" "}
            <span className="text-[oklch(0.52_0.18_300)]">{STATS_SECTION.headingLine2}</span>
          </h2>

          <SectionDivider />
        </div>

        {/* ── Stat cards with animals ──────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {STATS.map((s, i) => {
            const Icon = CARDS[i].icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.55, type: "spring" }}
                className={`bg-gradient-to-br ${CARDS[i].gradient} rounded-[2rem] p-8 ${CARDS[i].shadow} hover:-translate-y-3 transition-all duration-300 text-center relative overflow-hidden group`}
              >
                {/* ── Shiny circle decoration ─────────────────── */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/25 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/15 group-hover:scale-125 transition-transform duration-500" />

                {/* ── Animal image inside card ─────────────────── */}
                <div className="flex justify-center mb-3 relative z-10">
                  <img
                    src={CARDS[i].animal}
                    alt=""
                    className={`${CARDS[i].animalClass} object-contain drop-shadow-lg animate-float-slow`}
                  />
                </div>

                <div className="relative z-10">
                  {/* Icon inside rounded box */}
                  <div className={`w-12 h-12 rounded-2xl ${CARDS[i].iconBg} mx-auto flex items-center justify-center shadow-soft`}>
                    <Icon className="w-6 h-6 text-[var(--deep)]" />
                  </div>

                  {/* Stat value */}
                  <div className="font-display text-5xl font-black text-white mt-4 drop-shadow-md">
                    {s.value}
                  </div>

                  {/* Stat label */}
                  <div className="text-sm uppercase tracking-widest mt-2 text-white/90 font-bold">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}