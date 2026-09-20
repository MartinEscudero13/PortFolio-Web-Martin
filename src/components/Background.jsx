import { memo, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* En móvil se renderizan menos partículas (12 vs 26): misma densidad
   visual en pantalla chica, menos de la mitad de capas con glow animado. */
function useParticleCount(desktop = 26, mobile = 8) {
  const [count, setCount] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
      ? mobile
      : desktop
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e) => setCount(e.matches ? mobile : desktop);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [desktop, mobile]);
  return count;
}

/* Partículas luminosas con deriva lenta (sin canvas para máximo rendimiento).
   Capa externa: deriva por transform (GPU). Capa interna: pulso. */
function Particles({ count = 26 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37.7 + 11) % 100,
        top: (i * 53.3 + 7) % 100,
        size: 1.5 + ((i * 7) % 3),
        delay: (i % 9) * 0.7,
        dur: 4 + ((i * 13) % 5),
        driftDur: 10 + ((i * 7) % 7),
        driftDelay: -((i * 3.1) % 10),
        dx: ((i * 29) % 80) - 40,
        dy: ((i * 41) % 84) - 46,
        cyan: i % 3 === 0,
      })),
    [count]
  );
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            ["--dx"]: `${d.dx}px`,
            ["--dy"]: `${d.dy}px`,
            animation: `drift ${d.driftDur}s ease-in-out ${d.driftDelay}s infinite alternate`,
          }}
        >
          <span
            className={`block rounded-full animate-pulse-glow ${
              d.cyan ? "bg-sky-300" : "bg-violet-300"
            }`}
            style={{
              width: d.size,
              height: d.size,
              boxShadow: d.cyan
                ? "0 0 12px 2px rgba(56,189,248,.8)"
                : "0 0 12px 2px rgba(139,92,246,.7)",
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.dur}s`,
            }}
          />
        </span>
      ))}
    </div>
  );
}

const MemoParticles = memo(Particles);

export default function Background() {
  const reduce = useReducedMotion();
  const count = useParticleCount();
  return (
    <div aria-hidden="true" className="pointer-events-none fixed top-0 left-0 right-0 z-0 h-lvh transform-gpu contain-strict overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#030712]" />
      {/* Grid tecnológico sutil */}
      <div className="absolute inset-0 bg-tech-grid" />
      {/* Gradientes radiales */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.22),transparent)] blur-xl sm:blur-3xl" />
      <div className="absolute top-[30%] -left-40 w-[560px] h-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.18),transparent)] blur-xl sm:blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[640px] h-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-xl sm:blur-3xl" />
      {!reduce && <MemoParticles count={count} />}
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_40%,rgba(3,7,18,0.7)_100%)]" />
    </div>
  );
}

export function HeroOrbit() {
  return <MemoParticles count={14} />;
}
