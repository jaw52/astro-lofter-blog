import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
  ],
  theme: {
    colors: {
      'link': '#0099cc',
      'link-hover': '#d4dff0',
      'primary': '#4d7682',
    },
  },
})
