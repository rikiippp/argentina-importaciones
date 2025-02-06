/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smoky': '#0A0903',
        'orange': {
          DEFAULT: '#FFA81C',
          hover: '#ff9903'  // Una versión más oscura para hover
        },
        'mint': '#ACEB98',
        'moonstone': '#00B2CA',
        'indigo': '#958AC5',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        akira: ['Akira Expanded', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        buttonGlow: 'buttonGlow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

