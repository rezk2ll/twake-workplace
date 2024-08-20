import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocessReact from "svelte-preprocess-react/preprocessReact";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), preprocessReact()],

	kit: {
    adapter: adapter(),
    csrf: {
      checkOrigin: false
    },
    alias: {
      $src: './src',
      $store: './src/store',
      $types: './src/types',
      $utils: './src/lib/utils',
      $services: './src/lib/services',
      $lib: './src/lib',
      $components: './src/lib/components'
    }
  }
};

export default config;
