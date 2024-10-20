/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px", // Updated
      },
    },
    screens: {
      sm: "648px",
      md: "768px",
      lg: "968px",
      xl: "1280px",
    },
    fontFamily: {
      primary: ["DM Serif Display", "serif"], // Added fallback
      secondary: ["Jost", "sans-serif"], // Added fallback and capitalization
    },
    backgroundImage: {
      hero: "url(../assets/hero/bg.jpg)",
      grid: "url(../assets/grid.png)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
}
