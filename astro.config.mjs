import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({

  site: 'https://venomviper2.github.io',
  base: '/tpptaylor-web',
  output: 'static',
  build: {
    assets: 'astro'
  }
});
