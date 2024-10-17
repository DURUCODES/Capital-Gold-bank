/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "2px": "2px",
      },
      lineHeight: {
        custom: "2.5",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Change to -100% for full scroll
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 60s linear infinite",
      },
    },
  },
  plugins: [],
};
