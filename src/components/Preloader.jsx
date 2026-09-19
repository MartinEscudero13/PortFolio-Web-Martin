import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal } from "lucide-react";

const LINES = [
  { text: "inicializando núcleo…", ok: true },
  { text: "cargando módulos [portfolio · stack · contacto]…", ok: true },
  { text: "renderizando interfaz…", ok: true },
  { text: "ACCESO CONCEDIDO", ok: false, highlight: true },
];

/* Secuencia de arranque tipo terminal futurista */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(reduce ? LINES.length : 0);
  const progress = Math.round((visible / LINES.length) * 100);

  useEffect(() => {
    if (reduce) return;
    if (visible >= LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 250 : 380);
    return () => clearTimeout(t);
  }, [visible, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#030712] px-5"
      exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      role="status"
      aria-label="Cargando sitio"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-70" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),transparent)] blur-3xl" />

      <div className="relative w-full max-w-md rounded-2xl glass overflow-hidden">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-xs text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-sky-300" />
          <span className="font-mono tracking-wide">martin@portfolio:~</span>
          <span className="ml-auto flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </span>
        </div>

        <div className="px-5 py-5 font-mono text-[13.5px] leading-[2] min-h-[148px]" aria-hidden="true">
          {LINES.slice(0, visible).map((l) => (
            <p key={l.text} className={l.highlight ? "font-bold" : "text-slate-300"}>
              <span className="text-sky-400">❯ </span>
              {l.highlight ? (
                <span className="text-gradient">{l.text}</span>
              ) : (
                <>
                  {l.text} <span className="text-emerald-300 font-bold">OK</span>
                </>
              )}
            </p>
          ))}
          {visible < LINES.length && (
            <p className="text-slate-300">
              <span className="text-sky-400">❯ </span>
              <span className="inline-block w-[9px] h-[17px] -mb-[3px] bg-sky-300 animate-pulse" />
            </p>
          )}
        </div>

        <div className="px-5 pb-5">
          <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 mb-1.5">
            <span>cargando</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0_0_12px_rgba(56,189,248,0.8)] transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
