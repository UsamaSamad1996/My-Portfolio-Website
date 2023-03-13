/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libra: ["Proza Libre", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('./Images/usama4.jpg')",
      },
      colors: {
        aqua: "#05FDD8",
        grey: "#262626",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
