/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      th: ["kanit"],
    },
    extend: {
      colors: {
      'card-bg' : '#E3E7E0',
      'ms-gold' : '#AE8F4E',
      'ms-green' : '#31A172',
      'ms-gray' : '#767676',
      'ms-bg' : '#f0f4ee'
    }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f3f5f2",
        },
      },
    ],
  },
};
