/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        50: '0 0 50rem rgba(0,0,0,.18)',
        light: '0 0 .2rem rgba(0,0,0,.18)'
      },
      colors: {
        'primary-light': '#eff6ff',
        'primary-light-2': '#dbeafe',
        'primary': '#0284c7',
        'gray-dark': '#555',
        'gray-light': '#888'
      },
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif, Arial, sans-serif",
      }
    },
  },
  plugins: [],
}