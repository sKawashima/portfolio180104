import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://skawashima.com',
  base: '/',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
})
