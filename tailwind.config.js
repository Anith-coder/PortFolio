/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderColor : {
        'primary' : 'rgb(1,223,194)',
        'secondary' : 'rgb(128,241,231)',
      }
    },
    fontFamily : {
      'hero-font' : 'Merriweather'
    }
  },
  plugins: [],
}

