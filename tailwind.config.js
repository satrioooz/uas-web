/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        type: "type 2.9s ease-out .9s infinite alternate both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "2ch" },
          "15%, 20%": { width: "4ch" },
          "25%, 30%": { width: "6ch" },
          "35%, 40%": { width: "8ch" },
          "45%, 50%": { width: "10ch" },
          "55%, 60%": { width: "12ch" },
          "65%, 70%": { width: "14ch" },
          "75%, 80%": { width: "16ch" },
          "85%, 90%": { width: "18ch" },
          "95%, 100%": { width: "20ch" },
        },
      },
      backgroundColor: {
        // light
        yellowLight: "#F7F8FE",
        yellowNav: "#FEFEFF",
        // dark
        bgDark: "#151D2F",
        blackLight: "#303135",
        // card black
        blackCard: "#1E2A47",
      },
    },
  },
  plugins: [],
};
