/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
