/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tese Brand Colors
        independence: "#1A1A1A", // Primary Text, Backgrounds - Structure, bold authority
        "harvest-green": "#2E7D32", // Success States, Call-to-Action - Growth, money, land
        "gold-standard": "#F9A825", // Highlights, Accents - Wealth, minerals, optimism
        "heartbeat-red": "#C62828", // Errors, Alerts, "Live" Badges - Passion, urgency, sacrifice
        "off-white": "#F5F5F5", // Backgrounds - Cleanliness, clarity (avoids harsh pure white)
        
        // Extended color palette for flexibility
        primary: {
          DEFAULT: "#2E7D32", // Harvest Green
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#2E7D32",
          600: "#2E7D32",
          700: "#1B5E20",
          800: "#117D11",
          900: "#00695C",
        },
        accent: {
          DEFAULT: "#F9A825", // Gold Standard
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#F9A825",
          600: "#F57C00",
          700: "#EF6C00",
          800: "#E65100",
          900: "#BF360C",
        },
        danger: {
          DEFAULT: "#C62828", // Heartbeat Red
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#C62828",
          600: "#B71C1C",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
        },
        neutral: {
          DEFAULT: "#1A1A1A", // Independence (Black)
          50: "#F5F5F5", // Off-White
          100: "#E0E0E0",
          200: "#BDBDBD",
          300: "#9E9E9E",
          400: "#757575",
          500: "#424242",
          600: "#212121",
          700: "#1A1A1A",
          800: "#121212",
          900: "#000000",
        },
        background: {
          DEFAULT: "#F5F5F5", // Off-White
          light: "#FFFFFF",
          dark: "#1A1A1A", // Independence
        },
        text: {
          primary: "#1A1A1A", // Independence
          secondary: "#424242",
          muted: "#757575",
          white: "#FFFFFF",
        },
        border: {
          light: "#E0E0E0",
          dark: "#424242",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        medium:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        hard: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #2E7D32 0%, #F9A825 50%, #C62828 100%)",
        "gradient-harvest-gold":
          "linear-gradient(135deg, #2E7D32 0%, #F9A825 100%)",
        "gradient-heartbeat-gold":
          "linear-gradient(135deg, #C62828 0%, #F9A825 100%)",
        "gradient-harvest-heartbeat":
          "linear-gradient(135deg, #2E7D32 0%, #C62828 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
