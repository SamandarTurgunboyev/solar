/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      barlowBlack: 'barlow-black, sans-serif',
      barlowExtraBold: 'barlow-extrabold, sans-serif',
      barlowBold: 'barlow-bold, sans-serif',
      barlowSemiBold: 'barlow-semibold, sans-serif',
      barlowMedium: 'barlow-medium, sans-serif',
      barlowRegular: 'barlow-regular, sans-serif',
      tahomaRegular: 'tahoma-regular, sans-serif'
    },
    extend: {
      colors: {
        blue: '#273968',
        red: '#dc3545',
        yellow: '#FFCD1E'
      }
    },
  },
  plugins: [],
}
