import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "to-front": {
          "0%": {
            transform: "rotate(3deg) translateX(0.5rem) translateY(0.5rem)",
            opacity: "50%",
          },
          "50%": {
            transform: "rotate(-12deg) translateX(-3.5rem) translateY(-3.5rem)",
            opacity: "50%",
          },
          "100%": {
            transform: "rotate(0deg) translateX(0rem) translateY(0rem)",
            opacity: "100%",
          },
        },
        "to-middle": {
          "0%": {
            transform: "rotate(0deg) translateX(0rem) translateY(0rem)",
          },
          "50%": {
            transform: "rotate(12deg)",
          },
          "100%": {
            transform: "rotate(3deg) translateX(0.5rem) translateY(0.5rem)",
          },
        },
        "fade-out": {
          "0%": {
            transform: "rotate(0deg) translateX(0rem) translateY(0rem)",
            opacity: "100%",
          },
          "50%": {
            transform: "rotate(12deg) translateX(2rem) translateY(2rem)",
            opacity: "10%",
          },
          "100%": {
            transform: "rotate(0deg) translateX(0rem) translateY(0rem)",
            opacity: "0%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "to-front": "to-front 0.3s linear",
        "to-middle": "to-middle 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
      },
      userDrag: {
        none: {
          WebkitUserDrag: "none", // For Safari
          userDrag: "none", // For modern browsers
        },
      },
    },
  },

  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/typography"),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      addUtilities({
        ".no-drag": {
          "-webkit-user-drag": "none", // Disable drag on Webkit browsers
          "-webkit-touch-callout": "none", // Disable long press menu on iOS Safari
          "user-drag": "none", // Disable drag on other browsers
        },
      });
    },
  ],
} satisfies Config;

export default config;
