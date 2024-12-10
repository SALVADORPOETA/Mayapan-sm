/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Jungle: '#2E8B57',
        Turquoise: '#40E0D0',
        Terracotta: '#D2691E',
        Goldenrod: '#DAA520',
        Beige: '#F5F5DC',
      },
      fontFamily: {
        cinzel: ['cinzel', 'serif'],
        ebGaramond: ['ebGaramond', 'serif'],
      },
    },
  },
  plugins: [],
}
