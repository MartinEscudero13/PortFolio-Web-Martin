import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, Bug, FileWarning, RefreshCw, BadgeCheck, ExternalLink, Award } from "lucide-react";
import Reveal from "./Reveal";

const QA_TOPICS = [
  {
    icon: ClipboardCheck,
    title: "Casos de prueba",
    desc: "Diseño y ejecución de casos de prueba funcionales, matrices y cobertura por escenarios.",
  },
  {
    icon: Bug,
    title: "Testing funcional y regresión",
    desc: "Pruebas de humo, funcionales y de regresión para detectar fallos antes de producción.",
  },
  {
    icon: FileWarning,
    title: "Reporte de defectos",
    desc: "Documentación clara de bugs con severidad, prioridad, pasos y evidencia para su seguimiento.",
  },
  {
    icon: RefreshCw,
    title: "QA en equipos ágiles",
    desc: "Calidad integrada al ciclo de desarrollo, colaborando codo a codo con desarrolladores.",
  },
];

export default function Certification() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yFloat = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 36, reduce ? 0 : -36]);

  return (
    <section id="certificacion" ref={ref} className="relative py-20 md:py-28 scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,90%)] h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-violet-300/90">
            Formación complementaria
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight">
            Testing de Software <span className="text-gradient">y QA</span>
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Certificación de 60 horas que complementa mi perfil Full Stack con una mirada de calidad
            en todo el ciclo de desarrollo.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Certificado */}
          <motion.div style={{ y: yFloat }} className="relative">
            <Reveal>
              <figure className="group relative rounded-3xl glass overflow-hidden card-glow">
                <img
                  src={`${import.meta.env.BASE_URL}certificado-qa.jpg`}
                  alt="Certificado del curso Testing de Software y QA de QARMY a nombre de Martín Escudero"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </figure>
            </Reveal>
            <motion.div
              aria-hidden="true"
              className="absolute -top-5 -right-3 sm:-right-5 glass rounded-2xl px-4 py-3 text-sm animate-float hidden sm:flex items-center gap-2.5"
            >
              <Award className="w-5 h-5 text-amber-300" />
              <div>
                <p className="font-display font-bold text-white">60 hs · Online</p>
                <p className="text-xs text-slate-400">Septiembre 2026</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Detalle */}
          <div>
            <Reveal>
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8">
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3.5 py-1.5 text-[13px] font-medium text-emerald-200">
                  <BadgeCheck className="w-4 h-4" />
                  Certificado Nº CER-QB7-0178
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  Testing de Software y QA — QARMY
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed text-[15px]">
                  Formación intensiva en aseguramiento de calidad: del diseño de casos de prueba
                  al reporte profesional de defectos, con práctica en flujos reales de trabajo.
                  Instructor: Danilo Vezzoni.
                </p>
                <a
                  href="https://certificados.qarmy.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm font-semibold text-sky-200 transition-all duration-300 hover:bg-sky-400/20 hover:border-sky-400/60 hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.7)]"
                >
                  Validar certificado
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {QA_TOPICS.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.07}>
                  <li className="group h-full rounded-2xl glass card-glow p-5">
                    <span className="inline-grid place-items-center w-10 h-10 rounded-xl border border-violet-300/20 bg-violet-400/10 text-violet-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <t.icon className="w-5 h-5" strokeWidth={1.9} />
                    </span>
                    <h4 className="mt-3 font-display text-[15.5px] font-semibold text-white">{t.title}</h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-400">{t.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
