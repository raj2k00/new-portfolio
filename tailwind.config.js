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
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
    },
    extend: {
      animation: {
        slideSize: "slideSize 15s ease-in infinite alternate ",
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
