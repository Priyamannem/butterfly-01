import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-hospital.jpg";
import monkey from "@/assets/monkey.png";
import giraffe from "@/assets/giraffe.png";
import { FloatingClouds, Balloon, Butterfly, Flower } from "@/components/JungleDecor";
import { HERO } from "@/content";

// ── NAVBAR HEIGHT OFFSET ─────────────────────────────────────
// The navbar is floating at the top. This value keeps the hero content
// from being hidden underneath it.
const NAVBAR_HEIGHT = "96px";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* ── Full-screen background image ─────────────────────── */}
      <img
        src={heroImg}
        alt="Butterfly Children's Clinic — colorful, welcoming pediatric hospital entrance"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Strong dark overlay so text is always readable ──── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.06_260)]/80 via-[oklch(0.2_0.06_260)]/50 to-[oklch(0.18_0.06_260)]/20" />
      {/* Extra bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_260)]/60 via-transparent to-transparent" />

      {/* ── Floating clouds ──────────────────────────────────── */}
      <FloatingClouds />

      {/* ── Monkey hanging from top-left ─────────────────────── */}
      <motion.img
        src={monkey}
        alt=""
        className="absolute top-0 left-4 w-28 md:w-44 z-10 drop-shadow-2xl animate-sway origin-top"
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.4 }}
      />

      {/* ── Giraffe peeking from bottom-left ─────────────────── */}
      <motion.img
        src={giraffe}
        alt=""
        className="absolute bottom-6 left-6 w-24 md:w-36 z-10 drop-shadow-2xl animate-float-slow hidden md:block"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      />

      {/* ── Balloons ─────────────────────────────────────────── */}
      <div className="absolute top-24 right-8 animate-float-fast z-10 drop-shadow-lg">
        <Balloon color="oklch(0.85 0.18 30)" />
      </div>
      <div className="absolute top-44 right-32 animate-float-slow hidden md:block z-10 drop-shadow-lg">
        <Balloon color="oklch(0.80 0.18 300)" />
      </div>
      <div className="absolute top-36 right-20 animate-float-fast hidden lg:block z-10 drop-shadow-lg">
        <Balloon color="oklch(0.85 0.16 165)" />
      </div>

      {/* ── Butterfly decorations ────────────────────────────── */}
      <Butterfly
        size={60}
        color="oklch(0.80 0.20 300)"
        className="absolute top-1/3 left-[10%] animate-float-slow z-10 opacity-90 hidden md:block drop-shadow-lg"
      />
      <Butterfly
        size={40}
        color="oklch(0.85 0.18 165)"
        className="absolute bottom-1/4 right-[22%] animate-float-fast z-10 opacity-80 drop-shadow-lg"
      />
      <Butterfly
        size={48}
        color="oklch(0.88 0.20 60)"
        className="absolute top-[22%] left-[38%] animate-float-slow z-10 opacity-75 hidden lg:block drop-shadow-lg"
      />

      {/* ── Flowers ──────────────────────────────────────────── */}
      <Flower
        size={50}
        color="oklch(0.88 0.18 30)"
        className="absolute bottom-20 right-14 animate-float-fast z-10 opacity-85 hidden md:block"
      />
      <Flower
        size={36}
        color="oklch(0.9 0.15 165)"
        className="absolute top-32 left-[52%] animate-float-slow z-10 opacity-70 hidden lg:block"
      />

      {/* ── Hero text content ─────────────────────────────────── */}
      <div
        className="relative z-20 w-full h-full flex items-center justify-end"
        style={{ paddingTop: NAVBAR_HEIGHT }}
      >
        <div className="max-w-7xl w-full mx-auto px-6 flex justify-end">
          <motion.div
            className="max-w-lg text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* ── "Welcoming new little parents" badge ─────────── */}
            <motion.span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-6 shadow-lg"
              style={{
                background: "linear-gradient(135deg, oklch(0.78 0.18 300), oklch(0.78 0.18 165))",
                color: "white",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              {HERO.badge}
            </motion.span>

            {/* ── Clinic name — extra bold, bright, child-friendly ─ */}
            <h1
              className="font-display font-black leading-[1.0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              {/* "Butterfly" in bright sunny yellow */}
              <span className="text-[oklch(0.95_0.18_90)] [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
                {HERO.heading1}
              </span>{" "}
              {/* "Children's Clinic" in white */}
              <span
                className="block text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] mt-1"
              >
                {HERO.heading2}
              </span>
            </h1>

            {/* ── Italic tagline in bright pink/peach ──────────── */}
            <p
              className="font-display italic text-lg md:text-2xl mt-4 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              style={{ color: "oklch(0.92 0.15 30)" }}
            >
              {HERO.italic}
            </p>

            {/* ── Body text — bright white, strong shadow ──────── */}
            <p className="text-white mt-5 leading-relaxed text-base font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {HERO.body}
            </p>

            {/* ── CTA buttons — colorful & bold ────────────────── */}
            <div className="mt-8 flex flex-wrap gap-3 justify-end">
              {/* Primary: bright yellow-orange */}
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full font-black text-[oklch(0.2_0.05_240)] px-7 py-4 shadow-[0_6px_24px_rgba(255,180,0,0.5)] hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,180,0,0.65)] transition-all duration-200 text-sm"
                style={{ background: "linear-gradient(135deg, oklch(0.93 0.18 90), oklch(0.88 0.16 55))" }}
              >
                {HERO.cta1} <ArrowRight size={18} />
              </Link>

              {/* Secondary: bright purple-pink */}
              <Link
                to="/appointment"
                hash="enquiry"
                className="inline-flex items-center gap-2 rounded-full font-bold px-7 py-4 text-white shadow-[0_6px_24px_rgba(160,60,220,0.45)] hover:scale-105 hover:shadow-[0_8px_30px_rgba(160,60,220,0.6)] transition-all duration-200 text-sm"
                style={{ background: "linear-gradient(135deg, oklch(0.58 0.22 300), oklch(0.55 0.20 240))" }}
              >
                <MessageCircle size={18} /> {HERO.cta2}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}