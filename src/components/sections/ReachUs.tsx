import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, PhoneCall, Siren } from "lucide-react";
import { SectionDivider, Butterfly, Flower } from "@/components/JungleDecor";
import lion from "@/assets/lion.png";
import giraffe from "@/assets/giraffe.png";
import { REACH_US_SECTION } from "@/content";

const REACH_ICONS = [Navigation, MapPin, PhoneCall, Clock, Siren];

export function ReachUs() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 my-10 bg-gradient-to-br from-[oklch(0.97_0.03_165)] via-[oklch(0.96_0.04_95)] to-[oklch(0.97_0.04_200)] rounded-[3rem] overflow-hidden">
      {/* ── Decorations & Animals ────────────────────────────── */}
      <Butterfly
        size={50}
        color="oklch(0.72 0.20 300)"
        className="absolute top-12 right-[8%] animate-float-slow opacity-60 z-0"
      />
      <Flower
        size={40}
        color="oklch(0.88 0.18 30)"
        className="absolute bottom-16 left-[4%] animate-float-fast opacity-50 z-0 hidden md:block"
      />
      
      {/* Lion peeking from left */}
      <img
        src={lion}
        alt=""
        className="absolute bottom-0 left-8 w-32 md:w-40 animate-float-slow drop-shadow-xl z-0"
      />
      
      {/* Giraffe peeking from top right */}
      <img
        src={giraffe}
        alt=""
        className="absolute -top-6 right-16 w-24 md:w-32 animate-float-fast drop-shadow-xl z-0 hidden lg:block"
      />

      {/* ── Section heading ───────────────────────────────────── */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <span className="inline-block text-xs uppercase tracking-[0.3em] font-bold px-5 py-1.5 rounded-full bg-white/80 text-[oklch(0.5_0.18_300)] shadow-sm">
          {REACH_US_SECTION.eyebrow}
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--deep)] mt-4 leading-tight">
          {REACH_US_SECTION.heading}
        </h2>
        <SectionDivider />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-stretch mt-8">
        {/* ── Map embed ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="rounded-[2.5rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.1)] relative bg-white border-4 border-white h-full min-h-[420px]"
        >
          <iframe
            title="Map to Butterfly Children's Clinic"
            src={REACH_US_SECTION.mapSrc}
            className="absolute inset-0 w-full h-full"
            style={{ filter: "contrast(1.05) saturate(1.2)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-2.5 shadow-lg text-sm font-bold text-[var(--deep)] border border-white/50 flex items-center gap-2">
            📍 {REACH_US_SECTION.mapLabel}
          </div>
        </motion.div>

        {/* ── Info list ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.1 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[oklch(0.96_0.02_200)] flex flex-col justify-center"
        >
          <ul className="space-y-6">
            {REACH_US_SECTION.items.map((it, idx) => {
              const Icon = REACH_ICONS[idx];
              // Give emergency row a different vivid color
              const isEmergency = idx === REACH_US_SECTION.items.length - 1;
              
              return (
                <li
                  key={idx}
                  className="flex items-start gap-5 pb-5 border-b border-[oklch(0.94_0.02_200)] last:border-0 last:pb-0"
                >
                  <span
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                      isEmergency 
                        ? "bg-gradient-to-br from-[oklch(0.88_0.16_30)] to-[oklch(0.85_0.18_30)] text-white" 
                        : "bg-[oklch(0.95_0.05_165)] text-[oklch(0.55_0.22_300)]"
                    }`}
                  >
                    <Icon size={24} />
                  </span>
                  <div className="pt-1">
                    <div className="text-xs uppercase tracking-widest text-[var(--deep)]/60 font-bold mb-1">
                      {it.label}
                    </div>
                    <div className={`font-black text-lg ${isEmergency ? "text-[oklch(0.55_0.18_30)]" : "text-[var(--deep)]"}`}>
                      {it.val}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}