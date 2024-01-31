/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-01": "#1E293B",
        "dark-02": "#505056",
        "dark-03": "#009DE4",
      },
      fontFamily: {
        inter: ["Inter", "sans"], // 'inter' is a custom name for the Inter font
      },
    },
  },
  plugins: [require("daisyui")],
};