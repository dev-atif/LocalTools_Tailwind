
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"
    ,"./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Robot: ['Roboto', 'sans-serif'],
      Mont: ['Montserrat', 'sans-serif'],
      Cairo:['Cairo', 'sans-serif']

    },
    extend: {
      colors:{
        "color-primary-yel":'#FFC10E',
        "color-primary-gr":'#92929D',
        "color-primary-light":'#F6F7FB',
        "color-border":'#E1E1E1',
      }
    },
  },
  plugins: [],
}