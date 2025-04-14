/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Keep this
  theme: {
    extend: {
      colors: {
        // Theme colors mapped from CSS variables
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--card-bg) / <alpha-value>)',
          border: 'rgb(var(--card-border) / <alpha-value>)',
        },
        text: {
          DEFAULT: 'rgb(var(--text-primary) / <alpha-value>)',
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        },
        glass: {
          bg: 'rgb(var(--glass-bg) / <alpha-value>)',
          border: 'rgb(var(--glass-border) / <alpha-value>)',
        },
        // Accurate Neon/Nature Palette
        neon: {
          yellow: 'rgb(var(--neon-yellow) / <alpha-value>)',
          pink: 'rgb(var(--neon-pink) / <alpha-value>)',
          blue: 'rgb(var(--neon-blue) / <alpha-value>)',
          purple: 'rgb(var(--neon-purple) / <alpha-value>)', // Added neon-purple
        },
        nature: {
            green: 'rgb(var(--nature-green) / <alpha-value>)',
            orange: 'rgb(var(--nature-orange) / <alpha-value>)',
            purple: 'rgb(var(--nature-purple) / <alpha-value>)',
        },
        sunset: {
          orange: 'rgb(var(--sunset-orange) / <alpha-value>)',
          pink: 'rgb(var(--sunset-pink) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ["Ubuntu", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "JetBrainsMono NFP", "ui-monospace", "monospace"],
        legend: ["Legend", "sans-serif"], // Keep Legend font
      },
      maxWidth: {
        '8xl': '1600px', // Keep max-w-8xl for 1600px
      },
      // Keep existing backgroundImage, keyframes, etc.
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Keyframes and animations can be kept if defined correctly in globals.css @layer utilities
    },
  },
  plugins: [],
};
