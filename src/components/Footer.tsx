import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Butterfly, Flower } from "./JungleDecor";
import { SITE, FOOTER } from "@/content";
import butterflyLogo from "@/assets/butterfly-logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[var(--deep)] text-white overflow-hidden">
      {/* ── Background gradient ──────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.32_0.06_240)] to-[oklch(0.28_0.06_260)]" />

      {/* ── Butterfly & flower decorations ──────────────────── */}
      <Butterfly
        size={36}
        color="oklch(0.85 0.12 95)"
        className="absolute top-10 left-[10%] opacity-30 animate-float-slow"
      />
      <Butterfly
        size={24}
        color="oklch(0.85 0.12 30)"
        className="absolute top-20 right-[15%] opacity-25 animate-float-fast"
      />
      <Flower
        size={30}
        color="oklch(0.85 0.08 165)"
        className="absolute bottom-20 left-[40%] opacity-25 animate-float-slow"
      />
      <Butterfly
        size={20}
        color="oklch(0.82 0.14 300)"
        className="absolute bottom-16 right-[8%] opacity-20 animate-float-fast"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Brand column ─────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white/20 shadow-lg">
                <img src={butterflyLogo} alt="" className="w-full h-full object-contain scale-[2.2] -translate-y-[1px]" />
              </div>
              <div>
                {/* Clinic name */}
                <div className="font-display text-lg font-bold">{SITE.name}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">
                  {SITE.tagline}
                </div>
              </div>
            </div>
            {/* Footer tagline */}
            <p className="text-sm opacity-75 leading-relaxed">{FOOTER.tagline}</p>
          </div>

          {/* ── Quick links ───────────────────────────────────── */}
          <div>
            <h4 className="font-semibold mb-4 text-[oklch(0.93_0.09_95)]">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {FOOTER.quickLinks.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[oklch(0.93_0.09_95)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact info ──────────────────────────────────── */}
          <div>
            <h4 className="font-semibold mb-4 text-[oklch(0.93_0.09_95)]">Get in Touch</h4>
            <ul className="space-y-3 text-sm opacity-85">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5" /> {FOOTER.phone}
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5" /> {FOOTER.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" /> {FOOTER.address}
              </li>
            </ul>
          </div>

          {/* ── Social links ─────────────────────────────────── */}
          <div>
            <h4 className="font-semibold mb-4 text-[oklch(0.93_0.09_95)]">Follow the Fun</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social media"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* Hours */}
            <p className="text-xs opacity-60 mt-6 whitespace-pre-line">{FOOTER.hours}</p>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-60">
          <p>{SITE.copyright}</p>
          <p>{FOOTER.privacy}</p>
        </div>
      </div>
    </footer>
  );
}