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
        blackPrimary: "#404343",
        whitePrimary: "#ede8e5",
        yellowPrimary: "#124755",
        redSoft: "#e36a61",

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
