// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Cambia esto por el dominio final para que las URLs canónicas y Open Graph sean correctas.
  site: 'https://portafolio-pau.vercel.app',
  build: {
    // Todo el CSS va en línea: cero peticiones que bloqueen el render.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
