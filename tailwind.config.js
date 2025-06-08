/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A4D8C',      // Dark Blue (Granat)
        neutraldark: '#3C3C3C',   // New Dark Gray for accents/buttons
        lightbg: '#F8F9FA',     // Very Light Gray
        darktext: '#343A40',     // Dark Gray Text
        mediumtext: '#5A6268',   // Medium Gray for less prominent text
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Default font set to Roboto
      },
    },
  },
  plugins: [],
};