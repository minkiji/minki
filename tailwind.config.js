/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html", "./docs/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightblue: '#e3f2ff',
        lightpink: '#fae0f0',
        lightgreen: '#ccf7df',
        lightyellow: '#fcf2d8',

        strongyellow: '#f5db99',
        strongblue: '#b7ddff',
        strongpink: '#ffb6e3',
        stronggreen: '#76e0a6',

        pencil: '#7c7c7c',
        borderlight: '#bbbbbb',
        minkidark: '#000000',
        minkidarkprimary: '#111111',
        darkborder: '#252525',
        darklinks: '#505050',
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      transitionDuration: {
        300: "300ms",
        400: "400ms",
        500: "500ms",
      },
    },
    fontFamily: {
      sans: ['Raleway', 'Poppins', 'Noto Sans KR', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('not-hover', '&:not(:hover)');
    },
  ],
};
