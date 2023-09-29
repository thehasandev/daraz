/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
  
  })
})


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      colors: {
        'primary' : "#F85606",
        'secondary' : "#141414",
        'gray' : "#9E9E9E",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif' ],
      },
      backgroundImage: {
        'one': "url(./assets/bannerMahejabin.jpg)",
        'two': "url(./assets/bannerMisho.jpg)",
        'three': "url(./assets/mosfiqur.jpg)",
        'four': "url(./assets/ba.jpg)",
        'five': "url(./assets/brand.jpg)",
        'six': "url(./assets/router.jpg)",
        'seven': "url(./assets/bg.jpg)",
        'eight': "url(./assets/sakib.jpg)",
        
    
      },
    },
  },
  plugins: [rotateX],
}

