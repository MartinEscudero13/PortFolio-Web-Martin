import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: compatible con GitHub Pages (usuario o proyecto),
  // dominio propio y preview local sin cambios.
  base: "./",
  plugins: [react(), tailwindcss()],
})
