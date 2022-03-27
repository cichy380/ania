const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js,ts}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif'],
      heading: ['"Poppins"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.sky,
      },
      boxShadow: {
        light: '0 .5rem 1.5rem rgba(37, 39, 52, .05)',
      }
    },
  },
  plugins: [],
}
