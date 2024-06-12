---
slug: "getting-started/add-existing-project"
title: "Add to an existing project"
---

Because Astropi is an Astro integration, you can easly add Astropi to your existing Astro project:

```bash
# If you use pnpm
pnpm astro add @goulvenclech/astropi
# If you use npm
npx astro add @goulvenclech/astropi
# If you use yarn
yarn astro add @goulvenclech/astropi
```

Then, add Astropi integration to your Astro configuration file `astro.config.mjs`:

```ts
import { astropi } from "@goulvenclech/astropi";

// [...]

export default defineConfig({
  // Other Astro configuration
  integrations: [
    astropi({
      projectName: "Your project name", // Add your project name
      archetypes: [],
    }),
  ],
};
```