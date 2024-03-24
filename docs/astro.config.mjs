import { defineConfig } from "astro/config"
import astropi from "astropi"

// https://astro.build/config
export default defineConfig({
  integrations: [
    astropi({
      projectName: "Astropi",
      archetypes: [
        {
          path: "learn",
          name: "Learn",
          collection: "blog",
          type: "blog-content",
        },
        {
          path: "docs",
          name: "Docs",
          collection: "docs",
          type: "docs-content",
        },
        {
          path: "changelog",
          name: "Changelog",
          collection: "changelog",
          type: "blog-content",
        },
      ],
    }),
  ],
})
