/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.6rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    },
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
          'radial-gradient(50% 50% at 50% 50%, #FFFFFF 58.85%, rgba(255, 255, 255, 0) 100%)',
        'linear-gradient':
          'linear-gradient(270deg, #DCCA87 -19.44%, #DCCA87 44.12%, rgba(220, 202, 135, 0.24) 117.57%)'
      }
    }
  },
  plugins: []
};
