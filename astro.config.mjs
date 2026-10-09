import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// غيّر هذا الرابط إلى رابط موقعك النهائي (مهم للـ SEO و sitemap)
export default defineConfig({
  site: 'https://your-username.github.io',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
