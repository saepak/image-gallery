
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textShadow: {
      'md': '1px 1px 2px rgba(0,0,0,.1)',
   },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      'sans': ['Montserrat']
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://source.unsplash.com/random')"
       })
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain'
    }
  },
  variants: {
    extend: {
      backgroundClip: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}