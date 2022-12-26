/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2a2c3c",
      },
    },
  },
  plugins: [],
};
