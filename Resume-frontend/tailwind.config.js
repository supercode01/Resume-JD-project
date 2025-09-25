/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#98FB98",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

