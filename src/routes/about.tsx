import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Doctor } from "@/components/sections/Doctor";
import { Stats } from "@/components/sections/Stats";
import { Heart, Sparkles, Shield } from "lucide-react";
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

const VALUE_ICONS = [Heart, Shield, Sparkles];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={ABOUT_PAGE.eyebrow}
        title={ABOUT_PAGE.title}
        subtitle={ABOUT_PAGE.subtitle}
      />
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {ABOUT_PAGE.values.map((v, i) => {
          const Icon = VALUE_ICONS[i];
          return (
            <div
              key={v.title}
              className="bg-white rounded-3xl p-8 shadow-card hover:-translate-y-2 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center text-white shadow-soft">
                <Icon size={22} />
              </div>
              {/* Value title */}
              <h3 className="font-display text-xl font-bold text-[var(--deep)] mt-5">{v.title}</h3>
              {/* Value description */}
              <p className="text-muted-foreground mt-2 leading-relaxed">{v.body}</p>
            </div>
          );
        })}
      </section>
      <Stats />
      <Doctor />
    </>
  );
}