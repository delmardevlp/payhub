/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
};
