module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        header: '200px minmax(800px, 1fr) 200px',
      },
      colors: {
        bgColor: '#E0E0E0',
        headerColor: '#F7F6F3',
        buttonColor: '#2CAADC',
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
