/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spring: {
          " 0%": { transform: " scale3d(0,0,0)" },
          " 10%": { transform: " scale3d(0.5,0.5,0.5)" },
          "20%": { transform: " scale3d(1.08,1.08,1.08)" },
          "40%": {
            transform: " scale3d(0.98,0.98,1)",
          },
          "60%": {
            transform: " scale3d(1.05,1.05,1)",
          },
          "80%": {
            transform: " scale3d(1.01,1.01,1)",
          },
          "100%": { transform: " scale3d(1,1,1)" },
        },
        unspring: {
          " 0%": { transform: " scale3d(0.8,0.8,0.8)" },
          "20%": { transform: " scale3d(0.7,0.7,0.7)", opacity: 0.7 },
          "40%": {
            transform: " scale3d(0.6,0.6,0.6)",
            opacity: 0.5,
          },
          "60%": {
            transform: " scale3d(0.4,0.4,0.4)",
            opacity: 0.3,
          },
          "80%": {
            transform: " scale3d(0.2,0.2,0.2)",
            opacity: 0.2,
          },
          "100%": { transform: " scale3d(0,0,0)" },
          opacity: 0,
        },
      },

      animation: {
        spring: "spring 900ms ease-in forwards",
        fade_out: "unspring 400ms ease-out forwards",
      },

      colors: {
        primary: "#00717D",
        baseText: "#ffffff",
        inputBg: "#F5F5F5",
        headerBg: "#EBEBEB",
        btnRed: "#E35E5E",
        lightGray: "rgba(255, 255, 255, 0.2)",
      },
      borderRadius: {
        bottonRadius: "0.3125rem",
        bigCard: "1.2875rem",
        smallCard: "0.804375rem",
        full: "100%",
        half: "50%",
        quater: "25%",
        textRounded: "0.237059375rem",
      },
      height: {
        inputHeight: "3.75rem",
      },
      width: {
        homeInput: "17.3125rem",
        homeLongInput: "36.5",
        contactInput: "33rem",
      },
    },
  },
  plugins: [],
};
