/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      padding: {
        paddingHero: "179px 1022px 367px 140px ",
      },
    },
  },
  plugins: [],
};
