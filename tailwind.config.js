/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'myFont' : ['Rubik Iso'],
        'myFont2' : ['Anton']
      }
    },
  },
  plugins: [],
}