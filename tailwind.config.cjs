module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Custom Colors
    colors: {
      transparent: "transparent",

      // View / Component Backgrounds
      page: {
        DEFAULT: "hsl(var(--color-page) / <alpha-value>)",
        offset: "hsl(var(--color-page-offset) / <alpha-value>)",
      },

      // Border Color
      border: "hsl(var(--color-border) / <alpha-value>)",

      // Body Color
      body: "hsl(var(--color-body) / <alpha-value>)",

      // Muted Color
      muted: "hsl(var(--color-muted) / <alpha-value>)",

      // Primary Color
      primary: {
        DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
        dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
      },
    },

    fontSize: {
      xs: ["var(--font-size-xs)", "1.7em"],
      sm: ["var(--font-size-sm)", "1.7em"],
      base: ["var(--font-size-base)", "1.7em"],
      lg: ["var(--font-size-lg)", "1.5em"],
      xl: ["var(--font-size-xl)", "1.375em"],
      "2xl": ["var(--font-size-2xl)", "1.3em"],
      "3xl": ["var(--font-size-3xl)", "1.2em"],
    },

    // Container
    container: {
      center: true,
      padding: "var(--container-padding)",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "106.25rem", // max 1700px
      },
    },

    extend: {
      // Custom Font
      fontFamily: {
        sans: ["Sora, san-serif"],
      },

      // Transition Duration Default
      transitionDuration: {
        DEFAULT: "300ms",
      },

      // Custom Line Height
      lineHeight: {
        relaxed: "1.8",
      },

      // Custom Border Radius
      borderRadius: {
        "4xl": "min(6vw, 3.125rem)", // max 50px
        "5xl": "min(7vw, 6.25rem)", // max 100px
      },
    },
  },
  plugins: [],
};
