import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Baby, Stethoscope, Syringe, Activity, Smile, Brain, HeartPulse, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Butterfly, Flower } from "@/components/JungleDecor";
import lion from "@/assets/lion.png";
import giraffe from "@/assets/giraffe.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Butterfly Children's Clinic" },
      { name: "description", content: "From newborn check-ups to adolescent wellness, vaccinations to allergy care — full-spectrum pediatric services in one warm place." },
      { property: "og:title", content: "Pediatric Services" },
      { property: "og:description", content: "Newborn care, vaccinations, allergy, developmental and adolescent specialists." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Baby, title: "Newborn Care", desc: "Gentle first check-ups, feeding support and 24/7 phone advice for new parents.", color: "bg-[oklch(0.94_0.06_300)]" },
  { icon: Syringe, title: "Vaccinations", desc: "Full immunisation schedule with a brave-kid sticker and a jungle story.", color: "bg-[oklch(0.94_0.07_165)]" },
  { icon: Stethoscope, title: "Sick Visits", desc: "Same-day appointments for fevers, infections, and unhappy tummies.", color: "bg-[oklch(0.94_0.07_40)]" },
  { icon: Activity, title: "Allergy & Asthma", desc: "Testing, action plans and inhaler coaching for confident breathing.", color: "bg-[oklch(0.94_0.08_95)]" },
  { icon: Brain, title: "Developmental Care", desc: "Milestone tracking, speech and learning support from age zero up.", color: "bg-[oklch(0.94_0.05_240)]" },
  { icon: Smile, title: "Adolescent Wellness", desc: "Private, judgement-free care for tweens and teens, body and mind.", color: "bg-[oklch(0.94_0.06_330)]" },
  { icon: HeartPulse, title: "Emergency Care", desc: "On-site pediatric ER, open every hour of every night, all year.", color: "bg-[oklch(0.93_0.09_25)]" },
  { icon: Sun, title: "Wellness Check-ups", desc: "Annual visits with growth charts, vision, hearing and nutrition advice.", color: "bg-[oklch(0.95_0.07_55)]" },
];

function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[oklch(0.98_0.02_200)]">
      {/* ── Decorations ──────────────────────────────────────── */}
      <Butterfly size={50} color="oklch(0.72 0.20 300)" className="absolute top-40 left-[10%] animate-float-slow opacity-30" />
      <Flower size={40} color="oklch(0.88 0.18 30)" className="absolute top-60 right-[5%] animate-float-fast opacity-30" />
      <img src={lion} alt="" className="absolute top-10 right-10 w-32 md:w-48 animate-float-slow opacity-60" />
      <img src={giraffe} alt="" className="absolute bottom-20 left-5 w-40 md:w-64 animate-float-slow opacity-60" />

      <PageHeader
        eyebrow="What we do"
        title="Care for every little stage."
        subtitle="One warm clinic, a whole team of specialists, and a thoughtful approach for every age and adventure."
      />
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${s.color} rounded-[2.5rem] p-10 shadow-card hover:-translate-y-2 hover:shadow-glow transition-all duration-500 group border-4 border-white`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform mb-6">
                <s.icon size={24} className="text-[oklch(0.45_0.18_300)]" />
              </div>
              <h3 className="font-display text-2xl font-black text-[var(--deep)] mb-4">{s.title}</h3>
              <p className="text-[var(--deep)]/75 leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}