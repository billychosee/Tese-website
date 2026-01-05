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
        // Brand Colors
        primary: {
          green: "#22C55E", // Growth, money, empowerment
          yellow: "#F59E0B", // Opportunity, energy
          red: "#EF4444", // African identity, urgency
        },
        // Standard Yellow Colors
        yellow: {
          50: "#fefce8",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#FFD700", // Gold yellow
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        // Neutral Colors
        background: {
          light: "#FFFFFF",
          dark: "#0F172A", // Slate 900
          gray: "#F8FAFC", // Slate 50
        },
        text: {
          primary: "#0F172A", // Slate 900
          secondary: "#64748B", // Slate 500
          muted: "#94A3B8", // Slate 400
          white: "#FFFFFF",
        },
        border: {
          light: "#E2E8F0", // Slate 200
          dark: "#1E293B", // Slate 800
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
          "linear-gradient(135deg, #22C55E 0%, #FFD700 50%, #EF4444 100%)",
        "gradient-green-yellow":
          "linear-gradient(135deg, #22C55E 0%, #FFD700 100%)",
        "gradient-red-yellow":
          "linear-gradient(135deg, #EF4444 0%, #FFD700 100%)",
        "gradient-green-red":
          "linear-gradient(135deg, #22C55E 0%, #EF4444 100%)",
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
