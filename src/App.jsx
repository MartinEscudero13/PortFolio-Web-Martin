import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Preloader from "./components/Preloader";

/* Code-splitting: las secciones bajo el fold viajan en chunks separados
   y no bloquean la primera pintura (Hero). */
const About = lazy(() => import("./components/About"));
const TechSection = lazy(() => import("./components/TechSection"));
const Certification = lazy(() => import("./components/Certification"));
// TODO: para activar la sección Proyectos, descomenta la siguiente línea
// (y el link "Proyectos" en Navbar.jsx + Footer.jsx)
// import Projects from "./components/Projects";
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const MIN_DISPLAY = 1600;
const MAX_WAIT = 3200;

/* Reserva de altura mientras carga el chunk: evita saltos de layout (CLS) */
function SectionFallback() {
  return <div aria-hidden="true" className="min-h-[50vh]" />;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY - elapsed);
      setTimeout(() => setLoading(false), remaining);
    };
    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }
    const safety = setTimeout(finish, MAX_WAIT);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(safety);
    };
  }, []);

  return (
    <div className="relative min-h-dvh bg-[#030712] text-slate-100 antialiased">
      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-sky-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Saltar al contenido
      </a>
      <Background />
      <Navbar />
      <main id="contenido" className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <TechSection />
          <Certification />
          {/* TODO: descomenta para publicar tus proyectos
          <Projects />
          */}
          <Contact />
        </Suspense>
      </main>
      <div className="relative z-10">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
