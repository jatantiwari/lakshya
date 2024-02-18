/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/components/*.{html,js}"],
  theme: {
    screens: {
      'xs': '200px',
      'xm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

