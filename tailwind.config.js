/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Force dark mode via class="dark"
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
