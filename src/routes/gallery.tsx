import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Butterfly, Flower } from "@/components/JungleDecor";
import monkey from "@/assets/monkey.png";
import elephant from "@/assets/elephant.png";

// Import all gallery images
import g1 from "@/assets/g-1.jpeg";
import g2 from "@/assets/g-2.jpeg";
import g3 from "@/assets/g-3.jpeg";
import g4 from "@/assets/g-4.jpeg";
import g5 from "@/assets/g-5.jpeg";
import g6 from "@/assets/g-6.jpeg";
import g7 from "@/assets/g-7.jpeg";
import g8 from "@/assets/g-8.jpeg";
import int1 from "@/assets/int-1.jpeg";
import int2 from "@/assets/int-2.jpeg";
import reel from "@/assets/reel.mp4";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Butterfly Children's Clinic" },
      { name: "description", content: "Step inside our colorful clinic — playrooms, exam suites, and a joyful environment." },
      { property: "og:title", content: "Inside Butterfly Children's Clinic" },
      { property: "og:description", content: "A little tour of our pediatric hospital, designed for big imaginations." },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { type: "video", src: reel, alt: "Clinic Reel" },
  { type: "image", src: int1, alt: "Clinic Interior 1" },
  { type: "image", src: int2, alt: "Clinic Interior 2" },
  { type: "image", src: g1, alt: "Clinic area 1" },
  { type: "image", src: g2, alt: "Clinic area 2" },
  { type: "image", src: g3, alt: "Clinic area 3" },
  { type: "image", src: g4, alt: "Clinic area 4" },
  { type: "image", src: g5, alt: "Clinic area 5" },
  { type: "image", src: g6, alt: "Clinic area 6" },
  { type: "image", src: g7, alt: "Clinic area 7" },
  { type: "image", src: g8, alt: "Clinic area 8" },
];

function GalleryPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[oklch(0.98_0.02_200)]">
      {/* ── Decorations ──────────────────────────────────────── */}
      <Butterfly size={60} color="oklch(0.72 0.20 300)" className="absolute top-40 left-[10%] animate-float-slow opacity-40" />
      <Flower size={45} color="oklch(0.88 0.18 30)" className="absolute top-60 right-[5%] animate-float-fast opacity-40" />
      <img src={monkey} alt="" className="absolute top-10 right-10 w-32 md:w-48 animate-sway origin-top opacity-80" />
      <img src={elephant} alt="" className="absolute bottom-20 left-0 w-40 md:w-64 animate-float-slow opacity-80" />

      <PageHeader
        eyebrow="Gallery"
        title="A little tour, big imagination."
        subtitle="Wander through our spaces — every corner is designed to make children feel brave, curious and very much at home."
      />
      
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`rounded-[2.5rem] overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 group border-4 border-white ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover min-h-[300px] max-h-[450px] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}