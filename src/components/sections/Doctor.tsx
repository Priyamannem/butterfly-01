import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import doctorImg from "@/assets/doctor.jpeg";
import elephant from "@/assets/elephant.png";
import { Butterfly, Flower, Star } from "@/components/JungleDecor";
import { DOCTOR_SECTION } from "@/content";

export function Doctor() {
  return (
    <section className="relative bg-[oklch(0.97_0.025_165)] py-24 overflow-hidden">
      {/* ── Background butterfly & flower decorations ─────────── */}
      <Butterfly
        size={90}
        color="oklch(0.85 0.15 300)"
        className="absolute -top-4 left-6 animate-float-slow opacity-40"
      />
      <Butterfly
        size={64}
        color="oklch(0.82 0.14 165)"
        className="absolute bottom-10 right-4 rotate-180 animate-float-fast opacity-40"
      />
      <Flower
        size={56}
        color="oklch(0.88 0.16 30)"
        className="absolute top-16 right-16 animate-float-slow opacity-35"
      />
      <Star
        className="absolute top-20 right-24 text-[oklch(0.85_0.12_95)] animate-float-slow opacity-50"
        size={22}
      />
      <Flower
        size={40}
        color="oklch(0.85 0.14 165)"
        className="absolute bottom-24 left-[42%] animate-float-fast opacity-30 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        {/* ── Doctor image ────────────────────────────────────── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glowing background halo */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[oklch(0.88_0.12_300)] via-[oklch(0.90_0.10_165)] to-[oklch(0.93_0.09_95)] rounded-[2.5rem] blur-2xl opacity-50" />

          {/* Image card */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_oklch(0.6_0.12_300/0.35)] ring-8 ring-white bg-[oklch(0.96_0.03_165)]">
            <img
              src={doctorImg}
              alt="Dr. Gayatri Reddy — Butterfly Children's Clinic"
              className="w-full object-contain object-bottom"
              style={{ maxHeight: "600px", minHeight: "420px" }}
              loading="lazy"
            />

            {/* Colorful gradient strip at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[oklch(0.72_0.18_300)] via-[oklch(0.78_0.18_165)] to-[oklch(0.85_0.16_95)]" />
          </div>

          {/* ── Elephant mascot ──────────────────────────────── */}
          <img
            src={elephant}
            alt=""
            className="absolute -bottom-6 -right-4 w-28 animate-float-slow drop-shadow-xl z-10"
          />

          {/* ── Floating "patients seen" badge ───────────────── */}
          <motion.div
            className="absolute -top-5 -left-5 z-10 rounded-2xl px-5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] animate-float-fast"
            style={{
              background: "linear-gradient(135deg, white 80%, oklch(0.94 0.06 300))",
              border: "2px solid oklch(0.88 0.1 300)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <div className="text-[10px] uppercase tracking-widest text-[oklch(0.6_0.12_300)] font-semibold">
              {DOCTOR_SECTION.badgeLabel}
            </div>
            <div className="font-display text-2xl font-black text-[var(--deep)]">
              {DOCTOR_SECTION.badgeValue}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Doctor details ──────────────────────────────────── */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* ── "Meet our Doctor" eyebrow ────────────────────── */}
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold px-4 py-1.5 rounded-full bg-[oklch(0.92_0.1_300)] text-[oklch(0.45_0.18_300)]">
            <Butterfly size={18} color="oklch(0.55 0.22 300)" className="inline-block" />
            {DOCTOR_SECTION.eyebrow}
          </span>

          {/* ── Doctor name ──────────────────────────────────── */}
          <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--deep)] mt-4 leading-tight">
            {DOCTOR_SECTION.name}
          </h2>

          {/* ── Credentials ──────────────────────────────────── */}
          <p className="text-[oklch(0.5_0.12_300)] mt-2 font-semibold text-sm">
            {DOCTOR_SECTION.credentials}
          </p>

          {/* ── Colored divider line ─────────────────────────── */}
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[oklch(0.72_0.18_300)] to-[oklch(0.78_0.18_165)] mt-5 mb-5" />

          {/* ── Bio ──────────────────────────────────────────── */}
          <p className="text-muted-foreground leading-relaxed">{DOCTOR_SECTION.bio}</p>

          {/* ── Specialties list ─────────────────────────────── */}
          <ul className="grid sm:grid-cols-2 gap-3 mt-7">
            {DOCTOR_SECTION.specialties.map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-sm text-[var(--deep)] font-medium">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[oklch(0.88_0.12_300)] to-[oklch(0.88_0.12_165)] flex items-center justify-center shrink-0 shadow-sm">
                  <Check size={13} className="text-white" />
                </span>
                {s}
              </li>
            ))}
          </ul>

          {/* ── CTA button ───────────────────────────────────── */}
          <button
            className="mt-8 inline-flex items-center gap-2 rounded-full font-bold px-7 py-4 text-white shadow-[0_6px_20px_oklch(0.55_0.20_300/0.45)] hover:scale-105 hover:shadow-[0_8px_28px_oklch(0.55_0.20_300/0.6)] transition-all duration-200"
            style={{ background: "linear-gradient(135deg, oklch(0.58 0.22 300), oklch(0.55 0.20 165))" }}
          >
            {DOCTOR_SECTION.cta} <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}