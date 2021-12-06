module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blogger: "#007bffc7",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
