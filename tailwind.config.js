/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Azure: "#0A090C",
        Ash: "#F0EDEE",
        Jet: "#2E2F2F",
        "black-blue-dark": "rgb(21, 23, 25)",
        honeydew: "#DFF3E3",
        GhostWhite: "#F2F5FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Lora: ["Lora", "serif"],
      Bebas: ["Bebas Neue", "sans-serif"],
      Playfair: ["Playfair Display", "serif"],
      Philosopher: ["Philosopher", "sans-serif"],
    },
  },
  plugins: [],
};
