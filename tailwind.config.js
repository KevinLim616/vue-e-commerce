/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#607d8b",
      },
    },
  },
  plugins: [],
};
