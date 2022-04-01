const plugin = require('tailwindcss/plugin')

module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './public/**/*.{svg,png,jpg,ico}',
   ],
   theme: {
      aspectRatio: {
         auto: 'auto',
         square: '1 / 1',
         video: '16 / 9',
         1: '1',
         2: '2',
         3: '3',
         4: '4',
         5: '5',
         6: '6',
         7: '7',
         8: '8',
         9: '9',
         10: '10',
         11: '11',
         12: '12',
         13: '13',
         14: '14',
         15: '15',
         16: '16',
      },
      extend: {
         animation: {
            ripple: 'ripple 0.3s linear infinite',
            hidden: 'hidden 0.5s linear 1',
            fadeIn: 'fadeIn 0.3s',
         },
         backgroundImage: {
            login: 'url("/images/bg-login.jpg")',
            'not-found': 'url("/images/p404.png")',
         },
         boxShadow: {
            dash: '0 -8px 0',
         },
         fontSize: {},
         keyframes: {
            ripple: {
               '0%': {
                  width: '0px',
                  height: '0px',
               },
               '100%': {
                  width: '500px',
                  height: '500px',
               },
            },
            hidden: {
               '0%': {
                  opacity: 1,
               },
               '100%': {
                  opacity: 0,
               },
            },
            fadeIn: {
               '0%': {
                  opacity: 0,
               },
               '100%': {
                  opacity: 1,
               },
            },
         },
         lineHeight: {
            12: '48px',
         },
         minHeight: {
            12: '48px',
         },
      },
      screens: {
         tablet: '640px', // * => @media (min-width: 640px) { ... }
         laptop: '1024px', // * => @media (min-width: 1024px) { ... }
         desktop: '1280px', // * => @media (min-width: 1280px) { ... }
      },
      variants: {
         extends: {},
      },
   },
   plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/typography'),
   ],
}
