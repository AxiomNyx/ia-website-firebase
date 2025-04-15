/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}", // Added ui directory
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core Semantic Colors (mapped to CSS variables)
        background: 'hsl(var(--background))', // Using HSL for better opacity control if needed later
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))', // For text on primary bg
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // Your Custom Palette (mapped to CSS variables)
        'vaporwave-pink': 'hsl(var(--vaporwave-pink))',
        'light-naturewave-purple': 'hsl(var(--light-naturewave-purple))',
        'cyber-green': 'hsl(var(--cyber-green))',
        'synthblue': 'hsl(var(--synthblue))',
        'robotic-fluid-orange': 'hsl(var(--robotic-fluid-orange))',
        'neon-blue': 'hsl(var(--neon-blue))',
        'naturewave-yellow': 'hsl(var(--naturewave-yellow))',
        'space-blue': 'hsl(var(--space-blue))',
        'moon-eggs': 'hsl(var(--moon-eggs))',
        'captain-sisko-black': 'hsl(var(--captain-sisko-black))',

        // Keep existing groups if still needed, map to new vars or remove
        // 'neon': { ... },
        // 'nature': { ... },
        // 'sunset': { ... },
      },
      borderRadius: { // Adding shadcn/ui defaults
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Ubuntu", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "JetBrainsMono NFP", "ui-monospace", "monospace"],
        legend: ["Legend", "sans-serif"],
      },
      maxWidth: {
        '8xl': '1600px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: { // Adding shadcn/ui defaults
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Keep existing keyframes
        spin: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        gridMove: { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '40px 40px' } },
        pulse: { '0%, 100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        'pulse-slow': { '0%': { opacity: '0.2', transform: 'scale(1)' }, '50%': { opacity: '0.3', transform: 'scale(1.03)' }, '100%': { opacity: '0.2', transform: 'scale(1)' } },
        'pulse-slower': { '0%': { opacity: '0.1', transform: 'scale(1)' }, '50%': { opacity: '0.2', transform: 'scale(1.02)' }, '100%': { opacity: '0.1', transform: 'scale(1)' } },
        float: { '0%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(-20px) rotate(5deg)' }, '100%': { transform: 'translateY(0px) rotate(0deg)' } },
        'float-reverse': { '0%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(-15px) rotate(-5deg)' }, '100%': { transform: 'translateY(0px) rotate(0deg)' } },
        'pulse-glow': { '0%': { opacity: '0.4', filter: 'blur(8px)' }, '50%': { opacity: '0.8', filter: 'blur(12px)' }, '100%': { opacity: '0.4', filter: 'blur(8px)' } },
        glow: { '0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.4)' }, '50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.8), 0 0 80px hsl(var(--primary) / 0.6)' } },

      },
      animation: { // Adding shadcn/ui defaults
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Keep existing animations
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
        'pulse-slower': 'pulse-slower 8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        gridMove: 'gridMove 20s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Added tailwindcss-animate for shadcn
};
