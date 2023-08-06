/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat, Inter var, sans-serif"],
      primary: ["Montserrat, Inter var, sans-serif"],
    },
    fontSize: {
      xxl: "70px",
      xl: "35px",
      lg: "25px",
      md: "20px",
    },
    extend: {
      colors: {
        black: "#0D0D0D",
        grey: "#D9D9D9",
        navy: "#0a192f",
        dark_blue: "#2F4673",
        grey_blue: "#728EA6",
        blue_v2: "#364C59",
        light_blue: "#BACDD9",
        green: "#98BF5E",
        red: "#F25757",
        yellow: "#F2BB16",
      },
      scale: {
        120: "1.2",
      },
      height: {
        90: "90px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
