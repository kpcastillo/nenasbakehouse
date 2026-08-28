// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The production domain. Netlify serves the built `dist/` folder as static files.
export default defineConfig({
  site: 'https://nenasbakehouse.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Emit `/thank-you/index.html` so the Netlify Forms redirect resolves cleanly.
    format: 'directory',
  },
});
