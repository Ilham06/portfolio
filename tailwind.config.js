/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'black-primary': '#373737',
        'black-main' : '#404040',
        'grey-primary' : '#666666',
        'black-primary-bg' : '#141414',
        'grey-primary-bg' : '#F7F9FB',
        'blue-primary' : "#1E84EC"
      },
      boxShadow: {
        "custom-shadow": '0 20px 60px 0px rgb(0 0 0 / 0.1)',
        "custom-shadow2": '0 10px 60px 0px rgb(0 0 0 / 0.05)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
