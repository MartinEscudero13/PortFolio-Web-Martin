import { Code2, Gauge, Users, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Full Stack real",
    desc: "JavaScript, Python, PHP y MySQL: del frontend al backend sin fricción.",
  },
  {
    icon: Gauge,
    title: "Rendimiento primero",
    desc: "Experiencias rápidas y optimizadas, cuidando cada milisegundo.",
  },
  {
    icon: Users,
    title: "Centrado en el usuario",
    desc: "Diseño accesible y responsivo, pensado para personas reales.",
  },
  {
    icon: Sparkles,
    title: "Calidad y detalle",
    desc: "Lógica, creatividad y buenas prácticas en cada entrega.",
  },
];

export default function About() {
  return (
    <section id="sobremi" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-sky-300/90">
            Sobre mí
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight">
            Construyo soluciones <span className="text-gradient">modernas y escalables</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <div className="relative rounded-3xl glass p-7 sm:p-10 overflow-hidden">
            <div aria-hidden="true" className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-sky-400/15 to-violet-500/15 blur-3xl" />
            <div className="relative space-y-4 text-[15.5px] leading-relaxed text-slate-300">
              <p>
                Soy <strong className="text-white font-semibold">Desarrollador Full Stack</strong> apasionado por
                construir soluciones digitales <strong className="text-sky-300 font-semibold">modernas</strong>,{" "}
                <strong className="text-sky-300 font-semibold">escalables</strong> y centradas en el{" "}
                <strong className="text-sky-300 font-semibold">usuario</strong>.
              </p>
              <p>
                Trabajo con tecnologías como <strong className="text-sky-300 font-semibold">JavaScript</strong>,{" "}
                <strong className="text-sky-300 font-semibold">Python</strong>,{" "}
                <strong className="text-sky-300 font-semibold">PHP</strong> y{" "}
                <strong className="text-sky-300 font-semibold">MySQL</strong>, lo que me permite desarrollar
                tanto el <strong className="text-white font-semibold">frontend</strong> como el{" "}
                <strong className="text-white font-semibold">backend</strong>.
              </p>
              <p>
                Me enfoco en crear experiencias <strong className="text-white font-semibold">limpias</strong>,{" "}
                <strong className="text-white font-semibold">rápidas</strong>,{" "}
                <strong className="text-white font-semibold">accesibles</strong> y{" "}
                <strong className="text-white font-semibold">responsivas</strong>, cuidando cada detalle en
                términos de rendimiento, usabilidad y diseño visual.
              </p>
              <p>
                Mi enfoque combina <strong className="text-white font-semibold">lógica</strong>,{" "}
                <strong className="text-white font-semibold">creatividad</strong> y{" "}
                <strong className="text-white font-semibold">buenas prácticas</strong> para entregar productos
                de alta calidad. Siempre estoy en busca de nuevos desafíos que me permitan seguir creciendo
                profesionalmente.
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <li className="group h-full rounded-2xl glass card-glow p-6">
                <span className="inline-grid place-items-center w-11 h-11 rounded-xl border border-sky-300/20 bg-sky-400/10 text-sky-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <h.icon className="w-5 h-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 font-display text-[17px] font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.desc}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
