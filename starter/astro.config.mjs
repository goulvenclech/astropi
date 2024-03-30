import { defineConfig } from "astro/config"
import astropi from "astropi"

// https://astro.build/config
export default defineConfig({
  integrations: [
    astropi({
      projectName: "Astropi",
      archetypes: [
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
