/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#003459",
        "custom-light-blue": "#00A7E7",
        "custom-gift": "#FCEED5",
      },
    },
  },
  plugins: [],
};
