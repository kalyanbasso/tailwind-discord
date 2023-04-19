/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sidebar1': '#202225',
        'sidebar2': '#2E3036',
        'main': '#37393F',
        'bg-icon': '#36393F',
        'chat': '#4F545C',
        'voice': '#292B2F',
        'input': '#40444B',
      }
    },
  },
  plugins: [],
}
