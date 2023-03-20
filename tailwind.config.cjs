/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  // CSS Clases to keep, i.e classes from dynamically added content
  safelist: [],
  theme: {
    // Overriding Tailwind's default color set.
    // ONLY COLORS DEFINED HERE WILL BE AVAILABLE IN TEMPLATES!!
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      blue: {
        DEFAULT: "#0a93ce",
        dark: "#007AAD",
        medium: "#7FBCD6",
        light: "#D9EDF8",
        breeze: "#F6F9FD"
      },
      pink: {
        DEFAULT: "#DA306B",
        light: "#f8a5c2",
        dark: "#AD325D"
      },
      gray: {
        DEFAULT: "#8d8d8d",
        light: "#c1c1c1",
      },
      basis: "#333333",
      success: "#92B758",
      info: "#7FBCD6",
      warning: "#ffc107",
      danger: "#E81B1A",
      light: "#f8f9fa",
      dark: "#161718",

    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px',
      },
    },
    fontFamily: {
      sans: ["Verdana", "Geneva", "sans-serif"],
      serif: ["Constantia", "Lucida Bright", "Lucida Serif", "Liberation Serif", "Georgia", "serif"],
    },
    screens: {
      xs: "376px",
      // => @media (min-width: 376px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        xm: "0.8125rem" // 13px
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
        "input": "10px",
      },
      height: {
        'fifty': '50px',
      },
      minHeight: {
        'fifty': '50px',
      },
      borderRadius: {
        'input': "5px",
        'xs': '0.125rem',
        'sm': '0.25rem',
        DEFAULT: '0.275rem',
        "4xl": "2rem",
      }
    },
  },
}
