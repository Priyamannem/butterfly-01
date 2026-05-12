import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Baby, Stethoscope, Syringe, Activity, Smile, Brain, HeartPulse, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sunny Sprouts Pediatric" },
      { name: "description", content: "From newborn check-ups to adolescent wellness, vaccinations to allergy care — full-spectrum pediatric services in one warm place." },
      { property: "og:title", content: "Pediatric Services" },
      { property: "og:description", content: "Newborn care, vaccinations, allergy, developmental and adolescent specialists." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Baby, title: "Newborn Care", desc: "Gentle first check-ups, feeding support and 24/7 phone advice for new parents.", color: "bg-[oklch(0.93_0.06_300)]" },
  { icon: Syringe, title: "Vaccinations", desc: "Full immunisation schedule with a brave-kid sticker and a jungle story.", color: "bg-[oklch(0.93_0.07_165)]" },
  { icon: Stethoscope, title: "Sick Visits", desc: "Same-day appointments for fevers, infections, and unhappy tummies.", color: "bg-[oklch(0.93_0.07_40)]" },
  { icon: Activity, title: "Allergy & Asthma", desc: "Testing, action plans and inhaler coaching for confident breathing.", color: "bg-[oklch(0.93_0.08_95)]" },
  { icon: Brain, title: "Developmental Care", desc: "Milestone tracking, speech and learning support from age zero up.", color: "bg-[oklch(0.93_0.05_240)]" },
  { icon: Smile, title: "Adolescent Wellness", desc: "Private, judgement-free care for tweens and teens, body and mind.", color: "bg-[oklch(0.93_0.06_330)]" },
  { icon: HeartPulse, title: "Emergency Care", desc: "On-site pediatric ER, open every hour of every night, all year.", color: "bg-[oklch(0.92_0.09_25)]" },
  { icon: Sun, title: "Wellness Check-ups", desc: "Annual visits with growth charts, vision, hearing and nutrition advice.", color: "bg-[oklch(0.94_0.07_55)]" },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Care for every little stage."
        subtitle="One warm clinic, a whole team of specialists, and a thoughtful approach for every age and adventure."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${s.color} rounded-3xl p-7 shadow-card hover:-translate-y-2 hover:shadow-glow transition-all duration-300 group`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/70 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <s.icon size={20} className="text-[var(--deep)]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--deep)] mt-5">{s.title}</h3>
              <p className="text-sm text-[var(--deep)]/75 mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}