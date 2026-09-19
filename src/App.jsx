import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechSection from "./components/TechSection";
import Certification from "./components/Certification";
// TODO: para activar la sección Proyectos, descomenta la siguiente línea
// (y el link "Proyectos" en Navbar.jsx + Footer.jsx)
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Preloader from "./components/Preloader";

const MIN_DISPLAY = 1600;
const MAX_WAIT = 3200;

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
    <div className="relative min-h-screen bg-[#030712] text-slate-100 antialiased">
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
        <About />
        <TechSection />
        <Certification />
        {/* TODO: descomenta para publicar tus proyectos
        <Projects />
        */}
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
