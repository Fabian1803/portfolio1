/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "var(--dark-green)",
        grey: "var(--grey)",
        "light-green": "var(--light-green)",
        yellow: "var(--yellow)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },  
      boxShadow: {
        'glow': 'var(--luz)', 
      },
      fontFamily: {
        animeAce: ["AnimeAce", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
