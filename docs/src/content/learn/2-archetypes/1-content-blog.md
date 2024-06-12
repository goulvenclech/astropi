---
slug: "archetypes/content-blog"
title: "Content blog"
---

A content blog is a collection based on markdown files that are displayed in the UI as a blog. This archetype is perfect for creating a blog for your project.

## How to create a content blog

First, create a collection with the Blog Content zod shema. In `/src/content/config.ts`:

```ts
import { blogContentCollection } from "@goulvenclech/astropi"

export const collections = {
  blog: blogContentCollection,
}
```

Then, create an Astropi archetype based on this collection. In `docs/astro.config.mjs` , add an object to the `archetypes` array, like this one:

```ts
  archetypes: [
    {
      path: "blog", // Used in the URL
      name: "Blog", // Displayed in the UI
      collection: "blog", // The collection name (see above)
      type: "blog-content", // Don't change this
    },
  ],
```

Finally, create a new file in `/src/content/blog/` (change `blog` by your collection name) with the following content:

```md
---
title: "Hello world!"
date: 2024-04-30
abstract: "This is an example of a blog post."
---

Welcome to my blog, this is my first post!
```

If you want to hide your blog post in production, add a `status: "draft"` field in the frontmatter. In development mode, you will still be able to access your draft through the URL, but it won't be displayed in the UI.
