---
slug: "archetypes/docs-content"
title: "Content documentation"
---

A content documentation is a collection based on markdown files that are displayed in the UI as a documentation. This archetype is perfect for creating a documentation for your project.

## How to create a content documentation

First, create a collection with the Docs Content zod shema. In `/src/content/config.ts`:

```ts
import { docsContentCollection } from "@goulvenclech/astropi"

export const collections = {
  docs: docsContentCollection,
}
```

Then, create an Astropi archetype based on this collection. In `docs/astro.config.mjs` , add an object to the `archetypes` array, like this one:

```ts
  archetypes: [
    {
      path: "docs", // Used in the URL
      name: "Docs", // Displayed in the UI
      collection: "docs", // The collection name (see above)
      type: "docs-content", // Don't change this
    },
  ],
```

Finally, create a new file in `/src/content/docs/` (change `docs` by your collection name) with the following content:

```md
---
title: "Hello world!"
---

Welcome to my documentation, this is my first page!
```

If you want to hide your doc page in production, add a `status: "draft"` field in the frontmatter. In development mode, you will still be able to access your draft through the URL, but it won't be displayed in the UI.

## Docs categories

Create a new folder in `/src/content/docs/` with the name of your category. Then, create a new file `index.md` in this folder with the following content:

```md
---
title: "Your category title"
---

This is the category description.
```

Then, create documentation pages in this folder, and they will be displayed in the UI under the category title.

## Order your pages

In Astro, pages are ordered alphabetically based on their file name. So you can prefix your file names with numbers to order them as you wish. For example:

```
docs/
├─ 01-first-no-category-page.md
├─ 02-second-no-category-page.md
├─ 01-first-category/
│  ├─ 01-first-page.md
│  └─ 02-second-page.md
├─ 02-second-category/
│  ├─ 01-first-page.md
│  └─ 02-second-page.md
```

Then, if you want any number to be displayed in your URL, you can use the `slug` field in the frontmatter to override the default URL. For example:

```md
---
title: "Your page title"
slug: "your-page"
---
```
