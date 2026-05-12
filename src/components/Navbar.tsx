import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, NAV_CTA } from "@/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-1.5" : "py-3"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5">
        <div
          className={`rounded-full px-6 py-1.5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20"
              : "bg-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-white/50"
          }`}
        >
          {/* ── Logo ─────────────────────────────────────────── */}
          <Logo />

          {/* ── Desktop nav links ────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative text-sm font-bold text-[var(--deep)]/80 hover:text-[oklch(0.55_0.22_300)] transition-colors"
                  activeProps={{
                    className: "text-[oklch(0.55_0.22_300)] font-black",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                  {/* Small dot under active link (handled via CSS or just keeping it simple) */}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA button ───────────────────────────── */}
          <div className="hidden lg:block">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full font-bold px-6 py-2.5 text-white shadow-[0_4px_14px_rgba(160,60,220,0.4)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(160,60,220,0.5)] transition-all duration-200 text-sm"
              style={{ background: "linear-gradient(135deg, oklch(0.58 0.22 300), oklch(0.55 0.20 240))" }}
            >
              {NAV_CTA}
            </Link>
          </div>

          {/* ── Mobile menu toggle ───────────────────────────── */}
          <button
            className="lg:hidden p-2 rounded-full bg-[var(--deep)]/5 hover:bg-[var(--deep)]/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} className="text-[var(--deep)]" /> : <Menu size={22} className="text-[var(--deep)]" />}
          </button>
        </div>

        {/* ── Mobile dropdown menu ─────────────────────────── */}
        {open && (
          <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-white/50 animate-fade-in">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 px-4 rounded-xl font-bold text-[var(--deep)] hover:bg-[oklch(0.95_0.06_300)]/50 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 mt-2 border-t border-[oklch(0.9_0.06_300)]/50">
                <Link
                  to="/appointment"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full font-bold px-5 py-3 mt-2 text-white shadow-md"
                  style={{ background: "linear-gradient(135deg, oklch(0.58 0.22 300), oklch(0.55 0.20 240))" }}
                >
                  {NAV_CTA}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}