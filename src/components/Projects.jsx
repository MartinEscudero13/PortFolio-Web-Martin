import { ExternalLink, ShoppingCart, Building2 } from "lucide-react";
import Reveal from "./Reveal";

/*
 * ─────────────────────────────────────────────────────────────
 * SECCIÓN PROYECTOS — actualmente DESACTIVADA
 * Para activarla:
 *   1. Descomenta <Projects /> en src/App.jsx
 *   2. Descomenta el link "Proyectos" en src/components/Navbar.jsx
 *   3. Reemplaza cada href "#" con la URL real de tu repositorio
 * ─────────────────────────────────────────────────────────────
 */
const PROJECTS = [
  {
    icon: ShoppingCart,
    img: `${import.meta.env.BASE_URL}proyecto-instrumentos.png`,
    alt: "Captura del Ecommerce de Instrumentos",
    title: "Ecommerce de Instrumentos",
    desc: "Sitio web de ventas desarrollado con JavaScript, PHP y MySQL. Permite agregar productos al carrito, realizar compras y gestionar usuarios.",
    tags: ["JavaScript", "PHP", "MySQL"],
    // TODO: pega aquí la URL real de tu repositorio, ej: https://github.com/mart escudero/ecommerce-instrumentos
    href: "#",
  },
  {
    icon: Building2,
    img: `${import.meta.env.BASE_URL}proyecto-geriatrico.png`,
    alt: "Captura de la página web del Geriátrico",
    title: "Página Web Geriátrico",
    desc: "Sitio institucional para una residencia de adultos mayores. Incluye diseño responsive, efectos con JavaScript y formularios de contacto funcionales.",
    tags: ["HTML", "CSS", "JavaScript"],
    // TODO: pega aquí la URL real de tu repositorio, ej: https://github.com/mart escudero/geriatrico
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-sky-300/90">
            Proyectos
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight">
            Trabajo <span className="text-gradient">seleccionado</span>
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Una muestra de lo que construyo: aplicaciones completas, del frontend a la base de datos.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group h-full rounded-3xl glass card-glow overflow-hidden flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-56 sm:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-grid place-items-center w-10 h-10 rounded-xl border border-sky-300/20 bg-sky-400/10 text-sky-300">
                      <p.icon className="w-5 h-5" strokeWidth={1.9} />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400 flex-1">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologías de ${p.title}`}>
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.href}
                    target={p.href === "#" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-200 transition-all duration-300 hover:bg-sky-400/20 hover:border-sky-400/60 hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.7)]"
                  >
                    Ver proyecto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
