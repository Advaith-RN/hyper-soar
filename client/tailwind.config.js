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
        'pink':'#B6174B',
        'white':'#F8FAF8',
        'black':'#000000',
        'dark-gray':'#161516',
        'green':'#2DE1C2',
      }
    },
    animation: {
      'spin-slow': 'spin 5s linear infinite',
    }
  },
  plugins: [],
}

