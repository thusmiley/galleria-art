/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "#7D7D7D",
        lightGrey: "#E5E5E5",
        lightestGrey: "#F3F3F3",
      },
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
