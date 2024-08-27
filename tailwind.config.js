/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    darkMode: "media",
    extend: {
      fontSize: {
        "logo-name": "clamp(1.75rem, 3.5vw + 0.5rem, 2.5rem)",
        "heading-section": "clamp(2rem, 4.5vw + 0.5rem, 3rem)",
        "heading-lg": "clamp(1.75rem, 4vw + 0.25rem, 3rem)",
        "heading-md": "clamp(1.5rem, 3.5vw + 0.25rem, 2.5rem)",
        "card-title": "clamp(1.25rem, 2.5vw + 0.25rem, 2rem)",
        "body-text": "clamp(1rem, 2vw + 0.25rem, 1.2rem)",
        "small-text": "clamp(0.875rem, 1.75vw, 1rem)",
      },
      fontFamily: {
        Nuntio: ["Nunito", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
        Caveat: ["Caveat", "cursive"],
      },
      colors: {
        // light:
        "light-main": "#F2F3F4",
        "light-second": "#EFEFEF",
        "light-t1": "#111111",
        "light-t2": "#646464",
        // dark:
        "dark-main": "#121212",
        "dark-second": "#0D0D0D",
        "dark-t1": "#e1e1e1 ",
        "dark-t2": "#d0d0d0",
        // other:
        "orange-cstm": "#FF5800",
      },
    },
  },
  plugins: [],
};
