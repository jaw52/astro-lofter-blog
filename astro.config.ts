import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { remarkReadingTime } from './plugins/remarkReadingTime'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [UnoCSS({ injectReset: true }), vue()],
  markdown: {
    remarkPlugins: [remarkReadingTime as any],
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
})
