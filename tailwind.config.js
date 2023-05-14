/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "rgb(var(--color-primary))",
      secondary: "rgb(var(--color-secondary))",
    },
    extend: {
      animation: {
        slideSize: "slideSize 15s ease-in infinite alternate ",
        "spin-slow": "spin 1.5s linear infinite",
      },
      keyframes: {
        slideSize: {
          "0%": { width: "60%" },
          "100%": { width: "50%" },
        },
      },
    },
  },
  plugins: [],
};
