import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, Play } from "lucide-react";
import { SectionDivider, Butterfly, Flower } from "@/components/JungleDecor";
import monkey from "@/assets/monkey.png";

// Using gallery images as placeholders for the Instagram feed mockup
import g1 from "@/assets/g-1.jpeg";
import g2 from "@/assets/g-2.jpeg";
import g3 from "@/assets/g-3.jpeg";
import g4 from "@/assets/g-4.jpeg";

const INSTAGRAM_LINK = "https://www.instagram.com/butterflychildrensclinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const MOCK_POSTS = [
  { id: 1, image: g1, type: "image", likes: "124", comments: "12" },
  { id: 2, image: g2, type: "video", likes: "342", comments: "45" },
  { id: 3, image: g3, type: "image", likes: "89", comments: "5" },
  { id: 4, image: g4, type: "video", likes: "215", comments: "28" },
];

export function InstagramFeed() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* ── Decorations ──────────────────────────────────────── */}
      <Butterfly
        size={46}
        color="oklch(0.72 0.20 300)"
        className="absolute top-10 left-[15%] animate-float-slow opacity-50 z-0"
      />
      <Flower
        size={38}
        color="oklch(0.88 0.18 30)"
        className="absolute bottom-16 right-[10%] animate-float-fast opacity-50 z-0"
      />
      
      {/* Monkey hanging from the top right */}
      <img
        src={monkey}
        alt=""
        className="absolute -top-10 right-4 w-28 md:w-36 animate-sway origin-top drop-shadow-xl z-0 hidden lg:block"
      />

      {/* ── Section heading ───────────────────────────────────── */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold px-5 py-1.5 rounded-full bg-[oklch(0.95_0.05_330)] text-[oklch(0.6_0.2_330)] shadow-sm">
          <Instagram size={14} /> Social Media
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--deep)] mt-4 leading-tight">
          Join Our Community
        </h2>
        <SectionDivider />
      </div>

      {/* ── Instagram Grid ────────────────────────────────────── */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {MOCK_POSTS.map((post, i) => (
          <motion.a
            key={post.id}
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
            className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 block bg-black"
          >
            {/* Post Image */}
            <img
              src={post.image}
              alt={`Instagram post ${post.id}`}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-60 transition-opacity duration-300 group-hover:scale-105"
            />

            {/* Video Icon if video */}
            {post.type === "video" && (
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                <Play size={14} fill="currentColor" className="ml-0.5" />
              </div>
            )}

            {/* Hover overlay with likes and comments */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-6 text-white font-bold text-lg">
                <span className="flex items-center gap-2 drop-shadow-md">
                  <Heart size={22} fill="currentColor" /> {post.likes}
                </span>
                <span className="flex items-center gap-2 drop-shadow-md">
                  <MessageCircle size={22} fill="currentColor" /> {post.comments}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ── CTA Button ────────────────────────────────────────── */}
      <div className="relative z-10 mt-12 flex justify-center">
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full font-black px-8 py-4 text-white shadow-[0_8px_24px_rgba(225,48,108,0.4)] hover:scale-105 hover:shadow-[0_12px_30px_rgba(225,48,108,0.5)] transition-all duration-200"
          style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
        >
          <Instagram size={20} />
          View our page
        </a>
      </div>
    </section>
  );
}
