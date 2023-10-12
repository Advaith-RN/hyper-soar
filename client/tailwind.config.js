/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'integral': ['IntegralCF', 'sans-serif']
      },
      colors: {
        'blue':'#6A7FDB',
        'pink': '#B6174B',
        'bg-majorelle-blue': 'hsl(249, 95%, 63%)',
        'bg-ocean-blue' : 'hsl(249, 63%, 54%)',
        'white':'#F8FAF8',
        'black':'#000000',
        'dark-gray':'#161516',
        'green':'#2DE1C2',
      },
      boxShadow: {
        'shadow-1' : '0 2px 10px hsla(209, 40%, 14%, 10%)',
        'shadow-2' : '0 5px 10px hsla(249, 95%, 63%, 25%)',
      },
      animation: {
        'dropShadow': ' dropShadow 800ms ease-in-out infinite alternate',
        'slideIn': 'slideIn 500ms ease forwards'
      },
      keyframes: {
        'dropShadow': {
          '0%': { width: '40%' },
          '100%': { width: '80%' }
        },
        'slideIn': {
          '0%': { transform: 'translateY(-100px)'},
          '100%': { transform: 'translateY(0px)'}
        }
      }
    },
    animation: {
      'spin-slow': 'spin 5s linear infinite',
    }
  },
  plugins: [],
}

