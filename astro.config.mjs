// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site tinh TMK Tech Group, chi tieng Anh (anh 2026-11-24: "viet bang tieng anh la duoc").
export default defineConfig({
  site: 'https://tmktechgroup.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
