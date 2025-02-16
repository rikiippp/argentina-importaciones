/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'smoky': '#0A0903',
        'orange': {
          DEFAULT: '#FFA81C',
          hover: '#ff9903'
        },
        'mint': '#ACEB98',
        'moonstone': '#00B2CA',
        'indigo': '#958AC5',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        akira: ['Akira Expanded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

