/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
    blue: '#1900D5',
    lime: '#C1EF00',
    green: '#A9FFA7',
    orange: '#E8502F',
    black: '#000000',
    darkGray: '#3C3C3C',
    gray: '#7C7C7C',
    white: '#fff'
  }
};
export const plugins = [require("daisyui")];
export const daisyui = {
  themes: [
    {
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        "neutral": "#FFF",
        "neutral-content": '#000',
        "base-content": '#000',
        "base-100": "#F7F7F7",
        "base-200": "#d1d1d1",
        "base-300": "#7C7C7C",

        "primary": '#FFF',
        "primary-focus": '#1900D5'
      },
    },
  ],
};









