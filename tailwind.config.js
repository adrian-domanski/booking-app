const plugin = require('tailwindcss/plugin');

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
        themeBlue: '#7c72d0',
        themeBlueDarker: '#59519a',
        transparent: 'transparent',
      },
    },
  },
  variants: {
    extend: {
      padding: ['important'],
      backgroundColor: ['important'],
      fontSize: ['important'],
      height: ['important'],
      width: ['important'],
      margin: ['important'],
      textAlign: ['important'],
      textColor: ['important'],
      borderRadius: ['important'],
      display: ['important'],
      flex: ['important'],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
