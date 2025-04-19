/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {},
      animation: {
        float: "float 20s linear infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-out",
        slideIn: "slideIn 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      fontFamily: {
        mincho: ['var(--font-shippori)', 'serif'],
      }
    },
  },
  plugins: [],
};
