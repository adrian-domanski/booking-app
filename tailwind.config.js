module.exports = {
  purge: [],
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/components/**/*.{js,ts,jsx,tsx}',
    './styles/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: '#9f91d8',
        themeDarker: '#8477bc',
        transparent: 'transparent',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
