/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1a202c", // Dark background
          lighter: "#2d3748", // Slightly lighter dark shade
          lightest: "#4a5568", // Even lighter for contrast elements
        },
        primary: {
          DEFAULT: "#f56565", // Inspired by ClearIAS red theme
          hover: "#e53e3e", // Slightly darker shade for hover effects
        },
        secondary: "#4299e1", // Inspired by ClearIAS blue theme
        accent: "#ecc94b", // Gold accents
        textLight: "#f7fafc", // Light text for dark backgrounds
        textMuted: "#a0aec0", // Muted text for less emphasis
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
