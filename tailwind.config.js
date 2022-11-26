/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php', './storage/framework/views/*.php', './resources/views/**/*.blade.php', './resources/js/**/*.jsx', './resources/ts/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        sweetly_scentedregular: ['sweetly_scentedregular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  //   plugins: [require("@tailwindcss/forms")],
});
