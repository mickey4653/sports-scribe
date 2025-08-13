const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx,mdx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'footer-bg': '#333333',
        'sport-blue': '#2563EB',
        'sport-dark': '#333333',
        'sport-orange': '#F97316',
        'sport-green': '#10B981',
        'sport-yellow': '#F59E0B',
        'sport-brown': '#62420E',
        'sport-purple': '#B70BF5',
        'font-black': '#333333',
        'font-blue': '#2563EB',
        'bottom-corner-orange': '#F59E0B',
        'bottom-corner-green': '#10B981',
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
