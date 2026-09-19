import { MessageCircle, Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";

const SOCIALS = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5492613907099" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/martin-escudero-466586303" },
  { icon: Mail, label: "Email", href: "mailto:MartinDeveloperWeb@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#020610]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-[1.2fr_2fr]">
        <div>
          <a href="#inicio" className="group inline-block leading-none" aria-label="Martín Escudero, inicio">
            <span className="font-display font-bold text-lg text-white transition-colors duration-200 group-hover:text-sky-200">
              Martín Escudero
            </span>
            <span className="block text-[10px] font-sans font-medium text-sky-300/70 tracking-[0.2em] uppercase mt-1">
              Full Stack Dev
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            Desarrollador Full Stack. Sitio desarrollado con dedicación y pasión por el desarrollo web.
          </p>
          <div className="mt-5 flex gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid place-items-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:text-white hover:border-sky-400/40 hover:shadow-[0_0_18px_-4px_rgba(56,189,248,0.6)] hover:-translate-y-0.5"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm" aria-label="Enlaces de pie de página">
          <div>
            <h3 className="font-semibold text-white text-[13px] uppercase tracking-widest">Navegación</h3>
            <ul className="mt-4 space-y-2.5 text-slate-400">
              <li><a className="hover:text-white transition-colors" href="#inicio">Inicio</a></li>
              <li><a className="hover:text-white transition-colors" href="#sobremi">Sobre mí</a></li>
              <li><a className="hover:text-white transition-colors" href="#tecnologias">Tecnologías</a></li>
              <li><a className="hover:text-white transition-colors" href="#certificacion">Certificación</a></li>
              {/* TODO: reactiva cuando publiques tus proyectos <li><a href="#proyectos">Proyectos</a></li> */}
              <li><a className="hover:text-white transition-colors" href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white text-[13px] uppercase tracking-widest">Contacto</h3>
            <ul className="mt-4 space-y-2.5 text-slate-400">
              <li><a className="hover:text-white transition-colors" href="https://wa.me/5492613907099" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/martin-escudero-466586303" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="hover:text-white transition-colors" href="mailto:MartinDeveloperWeb@gmail.com">Email</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white text-[13px] uppercase tracking-widest">Recursos</h3>
            <ul className="mt-4 space-y-2.5 text-slate-400">
              <li><a className="hover:text-white transition-colors" href={`${import.meta.env.BASE_URL}cv-escudero.pdf`} download="CV-Martin-Escudero.pdf">Descargar CV</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-slate-600">
          <p>© {new Date().getFullYear()} — <span className="text-sky-300/90">Martín Escudero.</span> Todos los derechos reservados.</p>
          <p className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para nuevos proyectos
          </p>
        </div>
      </div>
    </footer>
  );
}
