/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08b2e3",
        secondary: "#fb5012",
        "text-main": "#272727",
        "text-alt": "#747474",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      padding: {
        container: '10%',
        'container-md': '2%', // px-container md:px-container-md
      },
      animation: {
        fadeInRotate: 'fadeIn 4s ease-in-out forwards, rotate 24s linear infinite', 
        fadeIn: 'fadeIn 3s ease-in-out forwards', 
        fadeInLong: 'fadeIn 3.5s ease-in-out forwards',
        rotate: 'rotate 16s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'textgradient': 'linear-gradient(to bottom, #121212, #08b2e3)',
      },
      foregroundImage: {
        'foregradient': 'linear-gradient(to top, #121212, #08b2e3)',
      },
    },
  },
  plugins: [],
};
