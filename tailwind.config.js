/** @type {import('tailwindcss').Config} */
export default {
  // See -> https://tailwindcss.com/docs/dark-mode
  darkMode: "class",
  // See -> https://docs.astro.build/en/guides/integrations-guide/tailwind/
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
}
