import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  astro: true,
  markdown: {
    overrides: {
      'no-debugger': 'off',
    },
  },
})
