/** @type {import('tailwindcss').config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "{js,cjs,mjs,ts,cts,mts}",
  ],
  theme: {
    extend: {},
    fontSize: {
      logo: "52px",
    },
  },
  plugins: [],
};
