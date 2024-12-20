import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: 'https://www.10xengineering.tech/',
  compressHTML: true,
  integrations: [sitemap()]
});