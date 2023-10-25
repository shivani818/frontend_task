/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ['Playfair Display', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat'],
       },
       display: ["group-hover"],
       backgroundImage: () => ({
        'image1': "url('../src/assets/images/rectangle_18.png')",
        'image2': "url('../src/assets/images/rectangle_19.png')",
        'image3': "url('../src/assets/images/rectangle_20.png')",
        'image4': "url('../src/assets/images/rectangle_21.png')",
        'image5': "url('../src/assets/images/rectangle_22.png')",
        'image6': "url('../src/assets/images/rectangle_23.png')",
        

       })
    },
  },
  plugins: [],
}

