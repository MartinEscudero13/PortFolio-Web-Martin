import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Download, MessageCircle, Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "./icons";

const PHRASES = [
  "Developer Full Stack",
  "Backend Developer",
  "Frontend Lover",
  "JavaScript Enthusiast",
];

/* Efecto typewriter sin dependencias externas */
function useTypewriter(phrases, { typeSpeed = 75, pause = 1500 } = {}) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(() => (reduce ? phrases[0] : ""));

  useEffect(() => {
    if (reduce) return;
    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = phrases[phrase];
      char += deleting ? -1 : 1;
      setText(current.slice(0, char));

      let delay = deleting ? 35 : typeSpeed;
      if (!deleting && char === current.length) {
        delay = pause;
        deleting = true;
      } else if (deleting && char === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [reduce, phrases, typeSpeed, pause]);

  return text;
}

const SOCIALS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5492613907099",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-escudero-466586303",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:MartinDeveloperWeb@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24 scroll-mt-20">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Foto */}
        <m.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-first lg:order-last mx-auto"
        >
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            <div aria-hidden="true" className="absolute -inset-4 rounded-full bg-[conic-gradient(from_120deg,#38bdf8,#8b5cf6,#38bdf8)] opacity-40 blur-lg sm:blur-2xl animate-pulse-glow" />
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-sky-400 via-blue-600 to-violet-600" aria-hidden="true" />
            <img
              src={`${import.meta.env.BASE_URL}foto-perfil.jpg`}
              alt="Foto de Martín Escudero"
              className="relative w-full h-full object-cover object-[50%_12%] rounded-full border-4 border-[#030712]"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-[#030712]/90 backdrop-blur px-3 py-1.5 text-xs font-medium text-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible
            </span>
          </div>
        </m.div>

        {/* Presentación */}
        <div className="text-center lg:text-left">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-[13px] font-medium text-sky-200"
          >
            <MapPin className="w-3.5 h-3.5" />
            Mendoza, Argentina — trabajo remoto
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-bold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.06]"
          >
            Hola, soy
            <br />
            <span className="text-gradient">Martín Escudero</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 text-lg sm:text-xl font-medium text-sky-300 min-h-[2rem]"
            aria-hidden="true"
          >
            {typed}
            <span className="inline-block w-[2px] h-[1.1em] ml-1 -mb-[3px] bg-sky-300 animate-pulse" />
          </m.p>
          <span className="sr-only">Developer Full Stack</span>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mx-auto lg:mx-0 mt-3 max-w-xl text-slate-400 leading-relaxed"
          >
            Desarrollador Full Stack apasionado por construir soluciones digitales
            modernas, escalables y centradas en el usuario.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
          >
            <a
              href={`${import.meta.env.BASE_URL}cv-escudero.pdf`}
              download="CV-Martin-Escudero.pdf"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-[length:180%_180%] animate-gradient px-7 py-3.5 text-[15px] font-semibold text-white btn-glow transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
            >
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Descargar CV
            </a>
            <a
              href="#contacto"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] backdrop-blur px-7 py-3.5 text-[15px] font-semibold text-slate-100 transition-all duration-300 hover:bg-white/[0.09] hover:border-white/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contactarme
            </a>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-8 flex items-center justify-center lg:justify-start gap-3"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid place-items-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:text-white hover:border-sky-400/50 hover:shadow-[0_0_20px_-4px_rgba(56,189,248,0.7)] hover:-translate-y-1"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
