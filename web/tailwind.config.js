const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer-bg': '#333333',
        'highlight-bg': '#333333',
        'orange': {
          500: '#f97316',
        },
        'teal': {
          500: '#14b8a6',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
