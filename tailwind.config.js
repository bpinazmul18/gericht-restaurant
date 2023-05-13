/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.04em',
      widest: '.1em',
      widest: '.25em'
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.6rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      fs23: '2.3rem',
      fs90: '9rem'
    },
    colors: {
      primary: '#040404',
      secondary: '#DCCA87',
      white: '#fff',
      smokyBlack: '#0C0B08',
      silverChalice: '#AAAAAA',
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
        '2xl': '1820px'
      }
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        lh28: '2.8rem',
        12: '3rem',
        lh30: '3rem',
        lh117: '11.7rem'
      },
      spacing: {
        0.8: '0.8rem', 
        30: '3rem',
        3.2: '3.2rem'
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
