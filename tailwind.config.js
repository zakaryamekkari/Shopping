/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primry: "#f48c06",
        scandry: "#f48c06",
      },
      container: {
        center: "true",
        with: "1100px",
        padding: {
          default: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "7rem",
        },
      },
    },
  },
  plugins: [],
};
