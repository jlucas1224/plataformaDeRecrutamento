/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#ff5e00',
        // ...
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        // ...
      },
      fontSize: {
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        // ...
      },
    },
  },
  plugins: [
  ],
}
