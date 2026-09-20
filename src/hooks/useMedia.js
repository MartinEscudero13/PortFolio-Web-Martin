import { useEffect, useMemo, useState } from "react";

function useMatchMedia(query, fallback = false) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : fallback
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

/* true en pantallas chicas (para abaratar composición GPU en móvil) */
export function useIsMobile(breakpoint = 767) {
  return useMatchMedia(`(max-width: ${breakpoint}px)`);
}

/* Parallax solo en desktop con hover: en táctil/móvil queda estático */
export function useCanParallax() {
  return useMatchMedia("(hover: hover) and (min-width: 1024px)", false);
}

/* Cantidad de partículas según pantalla (misma densidad visual) */
export function useParticleCount(desktop = 26, mobile = 16) {
  const isMobile = useIsMobile();
  return useMemo(() => (isMobile ? mobile : desktop), [isMobile, mobile, desktop]);
}
