import { defineConfig } from "astro/config"
import astropi from "@goulvenclech/astropi"

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      themes: {
        // TODO: should be changed to "one-light" when Astro will support it
        light: "one-dark-pro",
        dark: "one-dark-pro",
      },
    },
  },
  integrations: [
    astropi({
      projectName: "Astropi",
      archetypes: [
        {
          path: "learn",
          name: "Learn",
          collection: "learn",
          type: "docs-content",
        },
        {
          path: "blog",
          name: "Blog",
          collection: "blog",
          type: "blog-content",
        },
      ],
    }),
  ],
})
