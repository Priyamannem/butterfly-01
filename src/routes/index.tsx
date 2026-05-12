import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Doctor } from "@/components/sections/Doctor";
import { Reviews } from "@/components/sections/Reviews";
import { Blogs } from "@/components/sections/Blogs";
import { Contact } from "@/components/sections/Contact";
import { ReachUs } from "@/components/sections/ReachUs";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import reel from "@/assets/reel.mp4";
import { SectionDivider, Butterfly, Flower } from "@/components/JungleDecor";
import lion from "@/assets/lion.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      
      {/* ── Highlighted Reel Section ─────────────────────────── */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 my-10 overflow-hidden bg-gradient-to-br from-[oklch(0.95_0.08_95)] to-[oklch(0.97_0.04_165)] rounded-[3rem]">
        <Butterfly size={50} color="oklch(0.72 0.20 300)" className="absolute top-10 left-[10%] animate-float-slow opacity-60" />
        <Flower size={40} color="oklch(0.88 0.18 30)" className="absolute bottom-16 right-[5%] animate-float-fast opacity-60" />
        <img src={lion} alt="" className="absolute bottom-0 right-10 w-32 md:w-48 animate-float-slow opacity-80" />

        <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.3em] font-bold px-5 py-1.5 rounded-full bg-white/80 text-[oklch(0.5_0.18_300)] shadow-sm">
            Experience the Joy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--deep)] mt-4 leading-tight">
            See How We Care
          </h2>
          <SectionDivider />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden shadow-glow border-8 border-white ring-1 ring-black/5">
          <video
            src={reel}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>
      </section>

      <Doctor />
      <Reviews />
      <InstagramFeed />
      <Blogs />
      <Contact />
      <ReachUs />
    </>
  );
}
