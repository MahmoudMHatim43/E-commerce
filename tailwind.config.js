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
        // Light Theme Colors
        light_bg: "#f9fafb",
        light_t1: "#1f2937",
        light_t2: "#4b5563",
        blue_l: "#1768AC",
        gray_l1: "#D1D5DB",
        gray_l2: "#9CA3AF",
        // Dark Theme Colors
        dark_bg: "#1f2937",
        dark_t1: "#ffffff",
        dark_t2: "#9ca3af",
        blue_d: "#1D2D44",
        gray_d1: "#4B5563",
        gray_d2: "#111827",
        orange_c: "#F86624",
      },
    },
  },
  plugins: [],
};
