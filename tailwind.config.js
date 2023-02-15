/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#20c67b",

        color2: "#11ed8a",

        color3: "#77e1ab",

        color4: "#e1f5fa",

        color5: "#37d582",

        color6: "#6fa8dc",

        success: "#2acc7e",

        warning: "#ffe200",

        error: "#ff3636",
      },
      fontFamily: {
        numFont: ["Titillium Web"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
