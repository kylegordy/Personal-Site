/* Utilities */
const rem = (px, base = 16) => `${px / base}rem`;

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Custom Colors
    colors: {
      // View / Component Backgrounds
      page: "hsl(var(--color-page) / <alpha-value>)",

      // Body Color
      body: "hsl(var(--color-body) / <alpha-value>)",

      // Primary Color
      primary: {
        DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
        dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
      },
    },

    // Container
    container: {
      center: true,
      padding: "var(--container-padding)",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: rem(1600),
      },
    },

    extend: {
      // Custom Font
      fontFamily: {
        sans: ["Sora, san-serif"],
      },

      // Custom Line Height
      lineHeight: {
        relaxed: "1.8",
      },
    },
  },
  plugins: [],
};
