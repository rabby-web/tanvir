/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-01": "#1E293B",
        "dark-02": "#505056",
        "dark-03": "#A541CA",
        "tc-1": "#01B7E9",
        "tc-2": "#007EC3",
        "tc-1": "#17FFFB",
      },
      fontFamily: {
        inter: ["Inter", "sans"], // 'inter' is a custom name for the Inter font
      },
    },
  },
  plugins: [require("daisyui")],
};
