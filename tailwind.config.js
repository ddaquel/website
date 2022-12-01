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
      colors: {
        black: "#000000",
        "primary-blue": "#41B6E6",
        "primary-pink": "F884D9",
        grey: "grey",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #41b6e6, #f884d9)",
      },
    },
  },
  plugins: [],
};
