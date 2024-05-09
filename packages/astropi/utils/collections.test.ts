// Test packages/astropi/utils/collections.ts exported functions
import { describe, it, expect, vi } from "vitest"
import { generateCollections } from "./collections"

describe("generateCollections", () => {
  it("should generate collections based on the user's configuration", () => {
    const archetypes: Archetype[] = [
      {
        name: "blog",
        path: "blog",
        collection: "blog",
        type: "blog-content",
      },
      {
        name: "docs",
        path: "docs",
        collection: "docs",
        type: "docs-content",
      },
      {
        name: "docs-reference",
        path: "reference",
        collection: "reference",
        type: "docs-openapi",
      },
    ]
    const injectRoute = vi.fn()
    generateCollections(injectRoute, archetypes)
    expect(injectRoute).toHaveBeenCalledTimes(6)
    expect(injectRoute).toHaveBeenCalledWith({
      pattern: "/blog",
      entrypoint: "@goulvenclech/astropi/pages/blog.astro",
      prerender: true,
    })
    expect(injectRoute).toHaveBeenCalledWith({
      pattern: "/blog/[...slug]",
      entrypoint: "@goulvenclech/astropi/pages/[...blog].astro",
      prerender: true,
    })
    expect(injectRoute).toHaveBeenCalledWith({
      pattern: "/docs",
      entrypoint: "@goulvenclech/astropi/pages/docs-content.astro",
      prerender: true,
    })
    expect(injectRoute).toHaveBeenCalledWith({
      pattern: "/docs/[...slug]",
      entrypoint: "@goulvenclech/astropi/pages/[...docs-content].astro",
      prerender: true,
    })
    expect(injectRoute).toHaveBeenCalledWith({
      pattern: "/reference",
      entrypoint: "@goulvenclech/astropi/pages/docs-openapi.astro",
      prerender: true,
    })
    expect(injectRoute).toHaveBeenCalledWith({
      pattern: "/reference/[...slug]",
      entrypoint: "@goulvenclech/astropi/pages/[...docs-openapi].astro",
      prerender: true,
    })
  })
})
