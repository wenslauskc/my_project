/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'syne': ['Syne', 'sans-serif'],
      },

        keyframes:{
          scale_up_tr: {
            '0%': {transform: 'scale(0.5)','transform-origin': '100% 0%'},
            '100%': {transform: 'scale(1)', 'transform-origin': '100% 0%'},
          } 
        },

        animation:{
          scale_up_tr:'scale_up_tr 0.50s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        },

    },

    colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'white': '#ffffff',
        'darkBlue': '#004270',
        'blue':'#0077cc',
        'lightBlue': '#71a8db',
        'yellow': '#fbb216',
        'lighterBlue':'#ebf3fa',
        'gray':'#8c8c8c',
        'black':'#00000',
    },

    screens:{
        'xlarge':{'raw': '(min-width: 1050px)'},
        'xxlarge':{'raw': '(min-width: 1400px)'},
        'large':{'raw': '(min-width: 1050px)'},
        'medium':{'raw': '(min-width: 768px)'},
        'xmedium':{'raw': '(min-width: 950px)'},
        'small':{'raw': '(min-width: 550px)'},
        'msmall':{'raw': '(min-width: 650px)'},
        'mmsmall':{'raw': '(min-width: 500px)'},
        'smaller':{'raw': '(min-width: 450px)'},
        'msmaller':{'raw': '(min-width: 450px)'},
        'xsmaller':{'raw': '(min-width: 350px)'},
        'mxsmaller':{'raw': '(min-width: 400px)'},

          sm:'640px',
          'xsm':'280px',
          md:'768px',
          lg:'1024px',
          xl:'1280px',
          '2xl': '1536px',
      },
  },

  plugins: [],
};
