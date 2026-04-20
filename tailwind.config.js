/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#A29791",
        light: {
          100: "#8AFF90",
          200: "#5CFF64",
          300: "#2EFF38",
        },
        dark: {
          100: "#004704",
          200: "#001A01",
        },
        accent: "#00D10A",
      },
    },
  },
  plugins: [],
};
