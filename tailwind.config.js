/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPurple: {
          DEFAULT: '#B8BBFC'
        }
      }
    },
    container: {
      center: true
    },
  },
  plugins: [],
}
