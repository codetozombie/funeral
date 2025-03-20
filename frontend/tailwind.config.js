/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e', // Adjust to your preferred primary color
        secondary: '#475569',
      },
    },
  },
  plugins: [],
}