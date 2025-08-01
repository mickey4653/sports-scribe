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
      colors: {
        'font-black': '#333333',
        'font-blue': '#2563EB',
        'bottom-corner-orange': '#F59E0B',
        'bottom-corner-green': '#10B981',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
