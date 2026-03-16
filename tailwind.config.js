/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        burnt: {
          light: "#A7541D",
          main: "#8A3E16",
          dark: "#3A1608",
        },
        surface: {
          dark: "#1E1E1E",
          card: "#2A2A2A",
          light: "#F4F1EC",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#CFCFCF",
          muted: "#8E8E8E",
        },
        accent: "#00E5FF",
      },
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
