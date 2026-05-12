import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Blogs } from "@/components/sections/Blogs";
import { Butterfly, Flower } from "@/components/JungleDecor";
import monkey from "@/assets/monkey.png";
import elephant from "@/assets/elephant.png";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Butterfly Children's Clinic" },
      { name: "description", content: "Health tips, parenting guides and gentle wisdom from our pediatric team — written for real, busy parents." },
      { property: "og:title", content: "Pediatric Tips & Parenting Guides" },
      { property: "og:description", content: "Practical, compassionate articles by our pediatric team." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[oklch(0.98_0.02_200)]">
      {/* ── Decorations ──────────────────────────────────────── */}
      <Butterfly size={50} color="oklch(0.72 0.20 300)" className="absolute top-40 right-[10%] animate-float-slow opacity-30" />
      <Flower size={40} color="oklch(0.88 0.18 30)" className="absolute top-80 left-[5%] animate-float-fast opacity-30" />
      <img src={monkey} alt="" className="absolute top-10 right-10 w-32 md:w-48 animate-sway origin-top opacity-60" />
      <img src={elephant} alt="" className="absolute bottom-20 left-0 w-40 md:w-64 animate-float-slow opacity-60" />

      <PageHeader 
        eyebrow="Journal" 
        title="Tips, tales and tiny wisdoms." 
        subtitle="Practical advice from our pediatric team — written the way we'd explain things over a cup of tea." 
      />
      
      <div className="relative z-10 pb-20">
        <Blogs />
      </div>
    </div>
  );
}