/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#377DFF",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
      },
    },
    plugins: [],
  },
};
