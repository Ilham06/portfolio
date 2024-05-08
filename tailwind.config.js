/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'black-primary': '#373737',
        'black-main' : '#404040',
        'grey-primary' : '#666666',
        'black-primary-bg' : '#141414',
        'grey-primary-bg' : '#F7F9FB',
        'blue-primary' : "#1E84EC"
      },
      boxShadow: {
        "custom-shadow": '0 20px 60px 0px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [require("daisyui")],
};
