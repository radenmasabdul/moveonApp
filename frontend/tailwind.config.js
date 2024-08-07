/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JakartaSans: ["'Plus Jakarta Sans', sans-serif;"],
        DancingSans: ["'Dancing Script', cursive;"]
      },
    },
  },
  plugins: [require('daisyui'), ('tailwindcss-primeui')],
}

