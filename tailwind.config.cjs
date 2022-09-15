/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        site: '#8667f0',
        main: '#000',
        letter: '#848484',
        grayinput: '#3b4453',
        level: {
          10: '#009fe3',
          20: '#009c3d',
          40: '#98c21d',
          60: '#feca00',
          100: '#d76328',
        }
      }
    },
  },
  plugins: [],
}