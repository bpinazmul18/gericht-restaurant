/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: '#040404',
      secondary: '#DCCA87',
      white: '#fff',
      ...colors
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1920px'
      }
    },
    extend: {
      spacing: {
        30: '30px'
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(50% 50% at 50% 50%, #FFFFFF 58.85%, rgba(255, 255, 255, 0) 100%)'
      }
    }
  },
  plugins: []
};
