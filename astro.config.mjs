import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    mdx(),
    markdoc(),
    (process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
    react()
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server'
});