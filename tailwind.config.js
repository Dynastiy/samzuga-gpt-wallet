/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  prefix: 'tw-',
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
    colors: {
      primary: process.env.PRIMARY_COLOR,
      secondary: process.env.SECONDARY_COLOR,
      'icon-gray': '#828282',
      light: '#828282',
      gray1: '#333333',
      gray2: '#4F4F4F',
      gray4: '#BDBDBD',
      gray6:'#F2F2F2',
      gray7:'#F7F8F9',
      danger: '#B60808',
      ...colors,
    },
  },
  plugins: [],
}

