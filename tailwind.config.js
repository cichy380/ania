const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
      }
    },
  },
  plugins: [],
}
