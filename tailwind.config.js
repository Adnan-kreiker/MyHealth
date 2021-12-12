module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        card: 'repeat(auto,150px)',
      },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
}
