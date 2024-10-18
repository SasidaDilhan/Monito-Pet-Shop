const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(pagination|select|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js"
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#003459",
        "custom-light-blue": "#00A7E7",
        "custom-gift": "#FCEED5",
      },
      fontSize: {
        'custom-52': '52px',
      },
    },
  },
  plugins: [nextui()],
};
