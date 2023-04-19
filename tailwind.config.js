const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontSize:{
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      aa:'1168px',
      ab: '668px',
      bb: '632px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/image/2.png')",
        ...defaultTheme.backgroundImage,
      },
      margin:{
        15:'3.7rem',
        17:'4.25rem',
        ...defaultTheme.margin,
      }
    },
  },
  plugins: [],
}