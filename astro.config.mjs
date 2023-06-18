import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    assets: 'astro'
  },
  site: 'https://ttaylor.com',
  integrations: [sitemap()]
});
