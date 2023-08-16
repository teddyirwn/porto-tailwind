/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/**/*.{html,js}",
  ],

  theme: {
    animation: {
      'animationText': 'animationText 1s ease-in-out infinite'
    },
    container: {
      center: true,
      padding: '3rem'
    },
    extend: {
      screens: {
        "2xl": "1320px",
      }
    },

  },
  plugins: [],
}

