/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        orangeBg: '#f8e0d6'
      },
      height: {
        height: '4px'
      }, 
      colors: {
        logo: '#d5633c'
      },
      gap: {
        gapLogo: '3px'
      }
    },
  },
  plugins: [],
}