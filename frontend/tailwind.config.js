/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF",
          primary: "#7C3AED",
          secondary: "#F3F4F6",
          bordercolor: "#E5E7EB"
        },
        dark: {
          backgroundone: "#09090B",
          backgroundtwo: "#030712",
          primary: "#6D28D9",
          secondary: "#1F2937",
          bordercolor: "#1F2937"
        }
      }
    },
  },
  plugins: [],
}

