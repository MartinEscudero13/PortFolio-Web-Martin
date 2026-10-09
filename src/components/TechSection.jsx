import { useRef } from "react";
import { useCanParallax } from "../hooks/useMedia";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FileCode2, Palette, Braces, FileTerminal, Database, Server, Atom, Coffee, Table2, Wind } from "lucide-react";
import Reveal from "./Reveal";

const SKILLS = [
  { icon: FileCode2, label: "HTML5", level: "Avanzado", dots: 5, color: "#e44d26" },
  { icon: Palette, label: "CSS3", level: "Avanzado", dots: 5, color: "#4d7cff" },
  { icon: Wind, label: "Tailwind CSS", level: "Intermedio", dots: 3, color: "#38bdf8" },
  { icon: Braces, label: "JavaScript", level: "Avanzado", dots: 5, color: "#f0db4f" },
  { icon: FileTerminal, label: "Python", level: "Sólido", dots: 4, color: "#a678ff" },
  { icon: Server, label: "PHP", level: "Sólido", dots: 4, color: "#8892be" },
  { icon: Database, label: "MySQL", level: "Sólido", dots: 4, color: "#ffa600" },
  { icon: Atom, label: "React", level: "Intermedio", dots: 3, color: "#61dafb" },
  { icon: Coffee, label: "Java", level: "Sólido", dots: 4, color: "#f89820" },
  { icon: Table2, label: "PostgreSQL", level: "Intermedio", dots: 3, color: "#58a6d6" },
];

export default function TechSection() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  /* Parallax solo en desktop con hover: en táctil/móvil queda estático
     (mismo diseño, sin costo de scroll-linked JS) */
  const canParallax = useCanParallax();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yFloat = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, reduce ? 0 : -40]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -30, reduce ? 0 : 30]);

  return (
    <section id="tecnologias" ref={ref} className="relative py-20 md:py-28 scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,90%)] h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Panel de skills */}
        <div className="relative order-2 lg:order-1">
          <m.div style={{ y: canParallax ? yFloat : 0 }} className="relative rounded-3xl glass p-6 sm:p-8 overflow-hidden will-change-auto sm:will-change-transform">
            <div className="absolute inset-0 bg-tech-grid opacity-60" aria-hidden="true" />
            <div className="absolute -top-24 left-1/3 w-72 h-72 rounded-full bg-sky-500/15 blur-2xl sm:blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono tracking-wide">martin — stack</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-sky-300/25 bg-sky-400/10 px-2.5 py-1 text-sky-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" /> full stack
                </span>
              </div>
              <ul className="mt-6 space-y-5 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-5">
                {SKILLS.map((s) => (
                  <li key={s.label} aria-label={`Nivel de ${s.label}: ${s.level}`}>
                    <div className="flex items-center gap-3 text-sm">
                      <s.icon className="w-4 h-4 shrink-0" style={{ color: s.color }} aria-hidden="true" />
                      <span className="text-slate-200 font-medium">{s.label}</span>
                      <span
                        className="ml-auto rounded-full border px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap"
                        style={{ color: s.color, borderColor: `${s.color}55`, backgroundColor: `${s.color}14` }}
                      >
                        {s.level}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5" aria-hidden="true">
                      {Array.from({ length: 5 }, (_, i) => (
                        <m.span
                          key={i}
                          initial={reduce ? false : { opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.08 }}
                          className={`w-1.5 h-1.5 rounded-full${i < s.dots ? "" : " bg-white/10"}`}
                          style={i < s.dots ? { backgroundColor: s.color } : undefined}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>

          <m.div style={{ y: canParallax ? yFloat2 : 0 }} aria-hidden="true" className="absolute -top-6 -right-4 sm:-right-6 glass rounded-2xl px-4 py-3 text-sm animate-float hidden sm:block">
            <p className="font-display font-bold text-white">Frontend + Backend</p>
            <p className="text-xs text-slate-400">cobertura completa</p>
          </m.div>
          <m.div style={{ y: canParallax ? yFloat : 0 }} aria-hidden="true" className="absolute -bottom-8 xl:-left-8 glass rounded-2xl px-4 py-3 text-sm animate-float-slow hidden xl:block pointer-events-none">
            <p className="font-display font-bold text-white">Siempre aprendiendo</p>
            <p className="text-xs text-slate-400">nuevos desafíos</p>
          </m.div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-violet-300/90">Tecnologías</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-[1.1]">
              Mi stack <span className="text-gradient">tecnológico</span>
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-lg">
              Del maquetado semántico al modelo de datos: domino todo el ciclo de
              una aplicación web moderna, con foco en código limpio y buenas prácticas.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {[
              ["Frontend", "HTML5, CSS3, Tailwind CSS, JavaScript y React: interfaces limpias, rápidas, accesibles y responsivas."],
              ["Backend", "Python, PHP y Java con MySQL y PostgreSQL: lógica de negocio, APIs y persistencia sólida."],
              ["Flujo completo", "Diseño, desarrollo, despliegue y contacto directo durante todo el proyecto."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <li className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 hover:border-sky-400/30 hover:bg-white/[0.04] transition-colors duration-300">
                  <span className="mt-0.5 grid place-items-center shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400/20 to-violet-500/20 border border-white/10 text-sky-200 font-display font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{t}</h3>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
