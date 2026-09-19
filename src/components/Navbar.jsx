import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobremi" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Certificación", href: "#certificacion" },
  // TODO: reactiva esta línea cuando publiques tus proyectos (y descomenta <Projects /> en App.jsx)
  // { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Línea fluida del tema en el borde inferior */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-[length:200%_100%] animate-gradient shadow-[0_0_12px_rgba(56,189,248,0.55)]"
      />
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 md:h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#inicio" className="group leading-none" aria-label="Martín Escudero, inicio">
          <span className="tracking-tight text-[17px] text-white font-bold font-display transition-colors duration-200 group-hover:text-sky-200">
            Martín Escudero
          </span>
          <span className="block font-sans font-medium text-sky-300/80 tracking-[0.18em] uppercase text-[11px] mt-1">
            Full Stack Dev
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-300">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white btn-glow transition-all duration-300 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
          >
            Contactar
            <Mail className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transform-gpu bg-[#0b1226]/60 backdrop-blur-2xl shadow-[0_24px_48px_-16px_rgba(0,0,0,0.7)] transition-[max-height,opacity] duration-300 ${
          open
            ? "max-h-[540px] opacity-100 border-b border-white/10"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-5 pb-5 pt-1 space-y-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Contactar <Mail className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
