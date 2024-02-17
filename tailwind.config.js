/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          lighter:'#FF6363',
      },
        secondary : {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}

