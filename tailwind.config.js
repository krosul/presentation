/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blackPrimary: "#042a54",
        whitePrimary: "#def4ef",
        bluePrimary: "#006a99",
        blueSecondary: "#006a99"
      },
      keyframes: {
        "show": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "show": "show 1s ease-in-out"
      },
    },
  },
  plugins: [],
}