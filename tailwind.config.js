/** @type {import('tailwindcss').Config} */
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
        'one': "url(./assets/bg.jpg)",
        'two': "url(./assets/sakib.jpg)",
        'three': "url(./assets/mosfiqur.jpg)",
        'four': "url(./assets/flashDescount.jpg)",
        'five': "url(./assets/brand.jpg)",
        'six': "url(./assets/router.jpg)"
      
    
      },
    },
  },
  plugins: [],
}

