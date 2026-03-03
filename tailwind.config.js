/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
