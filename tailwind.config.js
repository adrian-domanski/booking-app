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
      boxShadow: {
        custom: '0 0 10px -2px #c7c7c7',
      },
      colors: {
        theme: '#9f91d8',
        themeDarker: '#8477bc',
        themeBlue: '#7c72d0',
        themeGreen: '#47a64c',
        themeGreenDarker: '#39913d',
        themeBlueDarker: '#59519a',
        transparent: 'transparent',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['important', 'importantHover'],
      padding: ['important'],
      fontSize: ['important'],
      height: ['important'],
      width: ['important'],
      margin: ['important'],
      textAlign: ['important'],
      textColor: ['important'],
      borderRadius: ['important'],
      display: ['important'],
      flex: ['important'],
      maxWidth: ['important'],
      maxHeight: ['important'],
      position: ['important'],
      inset: ['important'],
      borderColor: ['important'],
      borderWidth: ['important'],
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
    plugin(function ({ addVariant }) {
      addVariant('importantHover', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\hover\\:\\!${rule.selector.slice(1)}:hover`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
