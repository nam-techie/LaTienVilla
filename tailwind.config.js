/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f4f1ed',
          200: '#efebe5',
          300: '#e5ddd3',
          400: '#d4c4b0',
          500: '#c4a882',
          600: '#a68b5b',
          700: '#8b6f47',
          800: '#623e2a',
          900: '#4a2e1f',
        },
        secondary: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fafafa',
          300: '#f7f7f7',
          400: '#f1f1f1',
          500: '#e8e8e8',
          600: '#d1d1d1',
          700: '#b4b4b4',
          800: '#8a8a8a',
          900: '#5c5c5c',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
