/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          light: '#163A5F',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B59428',
        },
        chrome: {
          DEFAULT: '#E8E8E8', // approximate metallic silver
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // using Playfair for that "Luxe" feel
      },
      backgroundImage: {
        'gradient-chrome': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }
    },
  },
  plugins: [],
}
