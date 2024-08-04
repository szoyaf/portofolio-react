/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        goldman: ['"Goldman"', "Goldman"],
      },
      dropShadow: {
        '2xl-blue': '0 0 25px rgba(0, 89, 113, 1)',
        '2xl-blue-lighter': '0 0 25px rgba(0, 71, 91, 1)',
      },
      boxShadow: {
        'inner-black': 'inset 0px -5px 10px 0px rgba(0, 89, 113, 1)',
        'outer-blue-lighter': '0 0 25px rgba(0, 71, 91, 1)',
      },
      colors: {
        'blue-main': '#00B2E3',
        'blue-light': '#D9F7FF',
      },
    },
  },
  plugins: [],
}

