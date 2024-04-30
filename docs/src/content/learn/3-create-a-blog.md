---
title: "Create a blog"
---

First, create a collection with the Blog Content zod shema. In `/src/content/config.ts` :

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
      path: "blog", // Dsed in the URL
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

Run `npm run dev` and go to `http://localhost:4321/blog/my-first-blog-post` to see your blog post.

