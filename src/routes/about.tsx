import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Doctor } from "@/components/sections/Doctor";
import { Stats } from "@/components/sections/Stats";
import { Butterfly, Flower, SectionDivider } from "@/components/JungleDecor";
import monkey from "@/assets/monkey.png";
import elephant from "@/assets/elephant.png";
import { ABOUT_PAGE } from "@/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Butterfly Children's Clinic" },
      {
        name: "description",
        content:
          "A small team of pediatricians on a big mission: to make childhood healthcare warm, modern and unforgettable.",
      },
      { property: "og:title", content: "About Butterfly Children's Clinic" },
      {
        property: "og:description",
        content: "Compassionate pediatric care wrapped in a joyful, butterfly-inspired space.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[oklch(0.98_0.02_200)]">
      {/* ── Decorations ──────────────────────────────────────── */}
      <Butterfly size={50} color="oklch(0.72 0.20 300)" className="absolute top-40 right-[10%] animate-float-slow opacity-30" />
      <Flower size={40} color="oklch(0.88 0.18 30)" className="absolute top-80 left-[5%] animate-float-fast opacity-30" />
      <img src={monkey} alt="" className="absolute top-20 right-5 w-32 md:w-48 animate-sway origin-top opacity-60" />
      <img src={elephant} alt="" className="absolute bottom-40 left-0 w-40 md:w-64 animate-float-slow opacity-60" />

      <PageHeader
        eyebrow={ABOUT_PAGE.eyebrow}
        title={ABOUT_PAGE.title}
        subtitle={ABOUT_PAGE.subtitle}
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {ABOUT_PAGE.values.map((v, i) => (
            <div
              key={v.title}
              className="bg-white rounded-[2.5rem] p-10 shadow-card hover:shadow-glow hover:-translate-y-2 transition-all duration-500 border-4 border-white relative overflow-hidden group"
            >
              <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Butterfly size={100} color="oklch(0.72 0.20 300)" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-warm flex items-center justify-center text-white shadow-soft mb-6">
                <span className="text-2xl">0{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl font-black text-[var(--deep)] mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Stats />
      <Doctor />
    </div>
  );
}