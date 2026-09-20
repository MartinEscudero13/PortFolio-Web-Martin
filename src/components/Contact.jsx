import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, m } from "framer-motion";
import { Send, Loader2, CheckCircle2, X, MessageCircle, Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";
import Reveal from "./Reveal";

const DIRECT = [
  { label: "WhatsApp", href: "https://wa.me/5492613907099", icon: MessageCircle },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/martin-escudero-466586303", icon: LinkedinIcon },
  { label: "MartinDeveloperWeb@gmail.com", href: "mailto:MartinDeveloperWeb@gmail.com", icon: Mail },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | config
  const [showModal, setShowModal] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    // Honeypot anti-spam: los bots completan este campo oculto
    const honeypot = formRef.current?.querySelector('[name="company"]')?.value;
    if (honeypot) return;
    // Sin credenciales (ej. deploy sin secrets): no intentar el envío
    if (!isConfigured) {
      setStatus("config");
      return;
    }
    setStatus("sending");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      formRef.current.reset();
      setStatus("success");
      setShowModal(true);
      setTimeout(() => setShowModal(false), 5000);
    } catch (err) {
      console.error("Error al enviar el mensaje:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-sky-300/90">
            Contacto
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight">
            ¿Construimos algo <span className="text-gradient">juntos?</span>
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Contame tu idea o proyecto y te respondo a la brevedad. También podés escribirme por estos medios:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl">
          <ul className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
            {DIRECT.map((d) => (
              <li key={d.label} className="flex-1">
                <a
                  href={d.href}
                  target={d.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-2xl glass px-5 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:text-white hover:border-sky-400/40 hover:shadow-[0_0_24px_-8px_rgba(56,189,248,0.7)] hover:-translate-y-0.5"
                >
                  <d.icon className="w-5 h-5 text-sky-300" />
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-3xl glass relative p-6 sm:p-9 space-y-4"
            aria-label="Formulario de contacto"
          >
            {/* Honeypot anti-spam: invisible para personas */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
              <label>
                Empresa
                <input name="company" type="text" autoComplete="off" tabIndex={-1} />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-sky-400/60 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-sky-400/60 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-slate-300">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                minLength={10}
                maxLength={2000}
                placeholder="Contame sobre tu proyecto… (mínimo 10 caracteres)"
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-sky-400/60 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)]"
              />
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                Hubo un error al enviar tu mensaje. Intentá nuevamente o escribime por WhatsApp.
              </p>
            )}

            {status === "config" && (
              <p role="alert" className="rounded-xl border border-amber-300/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                El formulario no está disponible en este momento. Escribime por{" "}
                <a href="https://wa.me/5492613907099" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                  WhatsApp
                </a>{" "}
                o por{" "}
                <a href="mailto:MartinDeveloperWeb@gmail.com" className="underline font-semibold">
                  email
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 px-8 py-3.5 text-[15px] font-semibold text-white btn-glow transition-all duration-300 hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>

      {/* Modal de éxito */}
      <AnimatePresence>
        {showModal && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/60 backdrop-blur-sm px-5"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Mensaje enviado"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm rounded-3xl glass p-8 text-center shadow-[0_0_60px_-12px_rgba(56,189,248,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                aria-label="Cerrar"
                className="absolute top-4 right-4 grid place-items-center w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="mx-auto grid place-items-center w-16 h-16 rounded-full border border-emerald-300/30 bg-emerald-400/10">
                <CheckCircle2 className="w-8 h-8 text-emerald-300" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                ¡Mensaje enviado con éxito!
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Gracias por contactarte. Me comunicaré a la brevedad.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Cerrar
              </button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
