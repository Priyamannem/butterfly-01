import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import lion from "@/assets/lion.png";
import { Butterfly, Flower, Leaf } from "@/components/JungleDecor";
import { CONTACT_SECTION } from "@/content";

const CONTACT_ICONS = [Phone, Mail, MapPin];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="appointment"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[oklch(0.95_0.04_165)] via-[oklch(0.96_0.03_200)] to-[oklch(0.95_0.04_300)]"
    >
      {/* ── Decorations ──────────────────────────────────────── */}
      <Leaf className="absolute top-12 left-0 -rotate-12 animate-sway" size={140} />
      <Leaf className="absolute bottom-0 right-0 rotate-180 animate-sway" size={110} />
      <Butterfly
        size={52}
        color="oklch(0.78 0.18 300)"
        className="absolute top-1/4 left-[15%] animate-float-slow opacity-50 hidden md:block"
      />
      <Flower
        size={44}
        color="oklch(0.88 0.15 30)"
        className="absolute top-1/3 right-[8%] animate-float-fast opacity-40 hidden md:block"
      />
      <Butterfly
        size={36}
        color="oklch(0.82 0.14 165)"
        className="absolute bottom-1/4 left-[40%] animate-float-slow opacity-40 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* ── Left: contact info ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[oklch(0.6_0.12_165)] font-semibold">
            {CONTACT_SECTION.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--deep)] mt-3 leading-tight">
            {CONTACT_SECTION.heading} <br /> {CONTACT_SECTION.headingLine2}
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed max-w-md">
            {CONTACT_SECTION.body}
          </p>

          {/* ── Contact details ─────────────────────────────── */}
          <ul className="mt-8 space-y-4">
            {[
              { icon: CONTACT_ICONS[0], label: "Call us", val: CONTACT_SECTION.phone },
              { icon: CONTACT_ICONS[1], label: "Write to us", val: CONTACT_SECTION.email },
              { icon: CONTACT_ICONS[2], label: "Visit", val: CONTACT_SECTION.address },
            ].map((c) => (
              <li key={c.label} className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                  <c.icon size={18} className="text-[var(--deep)]" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="font-semibold text-[var(--deep)]">{c.val}</div>
                </div>
              </li>
            ))}
          </ul>

          {/* ── Lion mascot ────────────────────────────────── */}
          <img
            src={lion}
            alt=""
            className="absolute -bottom-10 right-0 w-28 animate-float-slow opacity-90 hidden md:block"
          />
        </motion.div>

        {/* ── Right: contact form ───────────────────────────── */}
        <motion.form
          id="enquiry"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass rounded-[2.5rem] p-8 md:p-10 shadow-glow"
        >
          <div className="grid gap-4">
            {/* ── Text / tel / email inputs ─────────────────── */}
            {CONTACT_SECTION.formFields.map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="text-xs font-semibold uppercase tracking-widest text-[var(--deep)]/70"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  className="mt-1.5 w-full rounded-2xl bg-white/80 border border-white px-5 py-3.5 text-[var(--deep)] placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-[oklch(0.85_0.08_165)]/40 transition"
                />
              </div>
            ))}

            {/* ── Message textarea ──────────────────────────── */}
            <div>
              <label
                htmlFor="msg"
                className="text-xs font-semibold uppercase tracking-widest text-[var(--deep)]/70"
              >
                Message
              </label>
              <textarea
                id="msg"
                rows={4}
                placeholder={CONTACT_SECTION.messagePlaceholder}
                className="mt-1.5 w-full rounded-2xl bg-white/80 border border-white px-5 py-3.5 text-[var(--deep)] placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-[oklch(0.85_0.08_165)]/40 resize-none"
              />
            </div>

            {/* ── Submit button ─────────────────────────────── */}
            <button
              type="submit"
              disabled={sent}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--deep)] text-white px-6 py-4 font-semibold hover:scale-[1.02] transition-transform shadow-soft disabled:opacity-70"
            >
              {sent ? (
                CONTACT_SECTION.sentMsg
              ) : (
                <>
                  {CONTACT_SECTION.sendBtn} <Send size={16} />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}