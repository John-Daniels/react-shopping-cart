/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#1E1516",
        darkGrey: "#AEB0B1",
        lightGrey1: "#DFDFE2",
        lightGrey2: "#D8D8DF",
        primaryColor: "#6E94EF",
        white: "#fff",
        customBg: "#EDF7FE",
        primaryBlue: "#0086C9",
        secondaryBlue: "#7CD4FD",
      },
    },
  },
  plugins: [],
};
