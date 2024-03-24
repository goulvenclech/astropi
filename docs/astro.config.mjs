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
          title: "Learn",
          collection: "blog",
          type: "blog-content",
        },
        {
          path: "changelog",
          title: "Changelog",
          collection: "changelog",
          type: "blog-content",
        },
      ],
    }),
  ],
})
