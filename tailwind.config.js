/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "700px", // => @media (min-width: 700px) { ... }
        laptop: "1080px", // => @media (min-width: 1080px) { ... }
        desktop: "1280px", // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
