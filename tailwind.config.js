const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/sada/layouts/**/*.html",
    // Include any other directories where Tailwind classes are used
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        dark1: "#202124",
        dark2: "#2a2b2e",
        dark3: "#3c4043",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.green.800"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.green.800"),
                textDecoration: "underline",
              },
            },
            p: {
              marginBottom: "0em",
              lineHeight: "1.5em",
              marginTop: "0.25em",
            },
            h2: {
              marginBottom: "1em",
              marginTop: "0",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            p: { color: theme("colors.gray.200") },
            h1: { color: theme("colors.gray.200") },
            h2: { color: theme("colors.gray.200") },
            h3: { color: theme("colors.gray.200") },
            h4: { color: theme("colors.gray.200") },
            h5: { color: theme("colors.gray.200") },
            h6: { color: theme("colors.gray.200") },
            code: { color: theme("colors.gray.200") },
            strong: { color: theme("colors.gray.200") },
            td: { color: theme("colors.gray.200") },
            blockquote: { color: theme("colors.gray.200") },
            a: {
              color: theme("colors.yellow.500"),
              "&:hover": { color: theme("colors.yellow.300") },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
