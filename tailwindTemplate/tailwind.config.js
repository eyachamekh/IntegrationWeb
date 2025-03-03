/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Bleu personnalisé
        secondary: "#FACC15", // Jaune personnalisé
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        xxs: "0.65rem",
        xxl: "1.75rem",
      },
    },
  },
  plugins: [],
};
