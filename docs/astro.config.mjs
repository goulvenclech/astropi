import { defineConfig } from "astro/config"
import astropi from "@goulvenclech/astropi"

// https://astro.build/config
export default defineConfig({
  integrations: [
    astropi({
      projectName: "Astropi",
      archetypes: [
        {
          path: "learn",
          name: "Learn",
          collection: "learn",
          type: "blog-content",
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
