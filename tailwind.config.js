/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spider: {
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc1c1',
          300: '#ff9494',
          400: '#ff5757',
          500: '#f7262f',
          600: '#d91a22',
          700: '#b3141b',
          800: '#8c1117',
          900: '#5e0b10',
        },
        web: {
          50: '#eef4ff',
          100: '#dbe7ff',
          200: '#bdd3ff',
          300: '#8fb5ff',
          400: '#5b8dfb',
          500: '#2f6bf0',
          600: '#1d52d6',
          700: '#1a41ad',
          800: '#1b388a',
          900: '#1a2f6e',
        },
        gold: {
          100: '#fef6c7',
          300: '#fde047',
          500: '#facc15',
          600: '#ca8a04',
        },
        ink: {
          50: '#f8f9fb',
          100: '#f0f2f6',
          200: '#dde1ea',
          300: '#b8bdcb',
          400: '#8a91a4',
          500: '#5a6175',
          600: '#353b4d',
          700: '#222735',
          800: '#151821',
          900: '#0c0e14',
          950: '#07080c',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'web-pulse': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'web-pulse': 'web-pulse 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
