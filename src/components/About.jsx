import { MessagesSquare, Code2, ShieldCheck, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: MessagesSquare,
    num: "01",
    title: "Escucho tu idea",
    desc: "Relevamos juntos objetivo, alcance y prioridades antes de escribir código.",
  },
  {
    icon: Code2,
    num: "02",
    title: "Diseño y desarrollo",
    desc: "Interfaces modernas y backend sólido, con avances visibles en cada etapa.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Testing y calidad",
    desc: "Pruebo cada entrega como QA: casos, regresión y detalle antes de entregar.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Deploy y acompañamiento",
    desc: "Publicación, revisión final y soporte post-entrega para que todo siga andando.",
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
            <div aria-hidden="true" className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-sky-400/15 to-violet-500/15 blur-2xl sm:blur-3xl" />
            <div className="relative space-y-4 text-[15.5px] leading-relaxed text-slate-300">
              <p>
                Soy <strong className="text-white font-semibold">Desarrollador Full Stack</strong> apasionado por
                construir soluciones digitales <strong className="text-sky-300 font-semibold">modernas</strong>,{" "}
                <strong className="text-sky-300 font-semibold">escalables</strong> y centradas en el{" "}
                <strong className="text-sky-300 font-semibold">usuario</strong>.
              </p>
              <p>
                Trabajo con un <strong className="text-white font-semibold">stack moderno</strong> que
                cubre el ciclo completo: <strong className="text-white font-semibold">interfaces dinámicas</strong>,{" "}
                <strong className="text-white font-semibold">lógica de negocio sólida</strong> y{" "}
                <strong className="text-sky-300 font-semibold">bases de datos relacionales</strong> bien
                modeladas, lo que me permite desarrollar tanto el{" "}
                <strong className="text-white font-semibold">frontend</strong> como el{" "}
                <strong className="text-white font-semibold">backend</strong> — cuidando la{" "}
                <strong className="text-sky-300 font-semibold">calidad del software</strong> y aprovechando
                la <strong className="text-sky-300 font-semibold">IA</strong> para desarrollar más rápido y mejor.
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

        <Reveal className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Cómo <span className="text-gradient">trabajo</span>
          </h3>
          <p className="mt-3 text-slate-400 leading-relaxed text-[15px]">
            Un proceso claro de principio a fin, para que siempre sepas en qué punto está tu proyecto.
          </p>
        </Reveal>

        <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <li className="group relative h-full rounded-2xl glass card-glow p-6 overflow-hidden">
                <span aria-hidden="true" className="absolute -top-3 right-3 font-display text-6xl font-bold text-white/[0.06] select-none transition-colors duration-300 group-hover:text-sky-400/10">
                  {s.num}
                </span>
                <span className="inline-grid place-items-center w-11 h-11 rounded-xl border border-sky-300/20 bg-sky-400/10 text-sky-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <s.icon className="w-5 h-5" strokeWidth={1.9} />
                </span>
                <h4 className="mt-4 font-display text-[17px] font-semibold text-white">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
