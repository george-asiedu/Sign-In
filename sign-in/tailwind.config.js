/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        orangeBg: '#f8e0d6',
        buttonBg: '#eb9c7d'
      },
      height: {
        height: '4px'
      }, 
      colors: {
        logo: '#d5633c',
        hoverColor: '#eb9c7d'
      },
      gap: {
        gapLogo: '3px'
      },
      letterSpacing: {
        tight: '5px'
      },
      width: {
        width: '380px'
      }
    },
  },
  plugins: [],
}