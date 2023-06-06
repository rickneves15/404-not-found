/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-space-mono)',
        alt: 'var(--font-inconsolata)',
        footer: 'var(--font-montserrat)',
      },
      colors: {
        gray: {
          400: '#BDBDBD',
          800: '#4F4F4F',
          900: '#333333',
        }
      }
    },
  },
  plugins: [],
}
