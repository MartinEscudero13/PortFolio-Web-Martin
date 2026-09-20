# Martín Escudero — Portfolio Full Stack

Portfolio personal de **Martín Escudero**, Desarrollador Full Stack. Diseño oscuro premium,
minimalista y tecnológico, optimizado para rendimiento en móvil y desktop.

## Stack

- **React 19 + Vite 8** — UI y build (animaciones vía `LazyMotion` + `domAnimation`)
- **Tailwind CSS v4** — estilos
- **Framer Motion** — animaciones (scroll-reveal, parallax solo desktop, modal, preloader)
- **Lucide** — iconos (+ 1 icono de marca propio en `src/components/icons.jsx`)
- **EmailJS** — formulario de contacto con honeypot anti-spam (sin backend)

## Secciones

Preloader boot · Inicio (foto + typewriter + redes + CV) · Sobre mí + Cómo trabajo ·
Tecnologías (9 skills con niveles, barras `scaleX` solo-GPU) · Certificación QA ·
Contacto (EmailJS + modal) — y `Projects.jsx` lista pero **comentada** hasta publicar
los repositorios.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint     # oxlint
npm run build    # salida en dist/
npm run preview  # previsualizar el build
```

## Variables de entorno

Copiá `.env.example` a `.env` y completá tus claves de
[EmailJS](https://dashboard.emailjs.com):

```bash
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

> El `.env` está en `.gitignore` y **no se sube a GitHub**. En el deploy,
> cargá las mismas variables como *secrets* del repositorio. Si faltan,
> el formulario muestra un aviso con medios alternativos en vez de fallar.

## Deploy en GitHub Pages

1. Subí el repo a GitHub y agregá los secrets `VITE_EMAILJS_SERVICE_ID`,
   `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY`
   (*Settings → Secrets and variables → Actions*).
2. Activá Pages: *Settings → Pages → Source: GitHub Actions*.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml` (instala, buildea
   con los secrets y publica `dist/`). El `base: "./"` de `vite.config.js`
   hace que funcione tanto en `usuario.github.io/repo/` como en dominio propio.

## Activar la sección Proyectos

1. En `src/components/Projects.jsx` reemplazá cada `href: "#"` (marcados con `TODO`)
   por la URL real del repositorio.
2. Descomentá `<Projects />` en `src/App.jsx` y el link en
   `src/components/Navbar.jsx` (+ `Footer.jsx`).

## Notas de rendimiento

- Imágenes en WebP con fallback JPEG/PNG (`sharp`, scripts ad-hoc, no dependencia).
- Partículas y parallax adaptados a móvil (`src/hooks/useMedia.js`).
- Rollback de seguridad: tag `pre-perf` / rama `backup/pre-perf`.
