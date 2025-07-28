const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'sport-blue': '#2563EB',
        'sport-dark': '#333333',
        'sport-orange': '#F97316',
        'sport-green': '#10B981',
        'sport-yellow': '#F59E0B',
        'sport-brown': '#62420E',
        'sport-purple': '#B70BF5',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
