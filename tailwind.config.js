/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "580px",
        sm: "768px",
        md: "1060px",
        lg: "1440px",
        xl: "1600px",
      },
      colors: {
        "gray-20": "#f5f5f5",
        "gray-100": "#D3D6DB",
        "gray-200": "#3A4750",
        "gray-300": "#303841",
        "primary-100": "#BE3144",
      },
      content: {
        bang: "url('./assets/bang.png')",
      },
    },
  },
  plugins: [],
};
