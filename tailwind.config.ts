import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1220",
        slate: "#121A2B",
        graphite: "#1B2438",
        teal: "#19E3B1",
        amber: "#F5A524",
        red: "#E5484D",
        "text-primary": "#E6EDF7",
        "text-secondary": "#9BA6C2",
        "text-disabled": "#58627A",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "h1": ["40px", { fontWeight: "600" }],
        "h2": ["28px", { fontWeight: "600" }],
        "h3": ["20px", { fontWeight: "600" }],
        "h4": ["16px", { fontWeight: "600" }],
        "body": ["15px", { fontWeight: "400" }],
        "caption": ["13px", { fontWeight: "400" }],
        "mono-md": ["14px", { fontWeight: "500" }],
      },
      spacing: {
        "4pt": "4px",
        "8pt": "8px",
        "16pt": "16px",
        "24pt": "24px",
        "32pt": "32px",
        "40pt": "40px",
        "48pt": "48px",
        "64pt": "64px",
      },
      transitionDuration: {
        "150": "150ms",
        "200": "200ms",
        "220": "220ms",
        "260": "260ms",
        "280": "280ms",
      },
      animation: {
        "fade-in": "fadeIn 280ms ease-out",
        "slide-up": "slideUp 260ms ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
