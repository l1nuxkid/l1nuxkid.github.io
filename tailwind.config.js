/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DEDBC8",
      },
      fontFamily: {
        sans: ['"Almarai"', "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
      },
    },
  },
  plugins: [],
};
