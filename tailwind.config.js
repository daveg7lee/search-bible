module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or false or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        header: 'minmax(0, 1fr) minmax(550px, 1fr) minmax(0, 1fr)',
      },
      colors: {
        bgColor: '#E0E0E0',
        darkBgColor: '#2F3437',
        headerColor: '#F7F6F3',
        darkHeaderColor: '#373C3F',
        buttonColor: '#0472B9',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
