import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

// Import all gallery images
import g1 from "@/assets/g-1.jpeg";
import g2 from "@/assets/g-2.jpeg";
import g3 from "@/assets/g-3.jpeg";
import g4 from "@/assets/g-4.jpeg";
import g5 from "@/assets/g-5.jpeg";
import g6 from "@/assets/g-6.jpeg";
import g7 from "@/assets/g-7.jpeg";
import g8 from "@/assets/g-8.jpeg";

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

const IMAGES = [
  { src: g1, alt: "Clinic area 1" },
  { src: g2, alt: "Clinic area 2" },
  { src: g3, alt: "Clinic area 3" },
  { src: g4, alt: "Clinic area 4" },
  { src: g5, alt: "Clinic area 5" },
  { src: g6, alt: "Clinic area 6" },
  { src: g7, alt: "Clinic area 7" },
  { src: g8, alt: "Clinic area 8" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A little tour, big imagination."
        subtitle="Wander through our spaces — every corner is designed to make children feel brave, curious and very much at home."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group ${
                i === 0 || i === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[300px] max-h-[400px] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}