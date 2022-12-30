/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xss: "320px",
      // => @media (min-width: 375px) { Mobile }

      xs: "375px",
      // => @media (min-width: 375px) { Mobile }

      sm: "425px",
      // => @media (min-width: 425px) { Mobile }

      md: "640px",
      // => @media (min-width: 640px) { Tablet }

      lg: "1024px",
      // => @media (min-width: 1024px) { Laptop }

      xl: "1280px",
      // => @media (min-width: 1280px) { Desktop }
    },
    extend: {},
  },
  plugins: [],
};
