// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { site } from './src/site.config.ts';

// https://astro.build/config
export default defineConfig({
  // Used to create absolute sitemap, RSS, and canonical URLs. Change it in site.config.ts.
  site: site.url,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
