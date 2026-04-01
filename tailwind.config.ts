import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Axtrelis AI Consulting - Pure Black + Purple
        'background-primary': '#000000',
        'background-secondary': '#000000',
        'background-card': '#0a0a0a',
        'accent-primary': '#9d4edd',
        'accent-secondary': '#c77dff',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0b0',
        'text-muted': '#6b6b7b',
        'border': '#1a1a1a',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(157, 78, 221, 0.4)',
        'glow-strong': '0 0 35px rgba(157, 78, 221, 0.6)',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #2a1a3e 100%)',
        'gradient-text': 'linear-gradient(90deg, #c77dff 0%, #9d4edd 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
