/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    darkMode: "media",
    extend: {
      fontSize: {
        "logo-name": "clamp(1.75rem, 4vw, 2.5rem)",
        "heading-xl": "clamp(2rem, 5vw, 3.5rem)",
        "heading-lg": "clamp(1.75rem, 4vw, 3rem)",
        "heading-md": "clamp(1.5rem, 3vw, 2.5rem)",
        "card-title": "clamp(1.25rem, 2.5vw, 2rem)",
        "body-text": "clamp(1rem, 2vw, 1.1rem)",
        "small-text": "clamp(0.875rem, 1.5vw, 1rem)",
      },
      fontFamily: {
        Nuntio: ["Nunito", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
        Caveat: ["Caveat", "cursive"],
      },
      colors: {
        // light:
        "light-smoke": "#F2F3F4",
        "light-flash": "#EFEFEF",
        "light-peach": "#FFE5B4",
        "light-t1": "#111111",
        "light-t2": "#646464",
        // dark:
        "dark-smoke": "#100C08",
        "dark-erie": "#1B1B1B",
        "dark-rich": "#010B13",
        "dark-t1": "#eeeeee ",
        "dark-t2": "#d0d0d0",
        // other:
        "orange-cstm": "#FF5800",
      },
    },
  },
  plugins: [],
};
