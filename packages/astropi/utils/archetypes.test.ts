import { describe, expect, it } from "vitest"
import { vi } from "vitest"
import { getCurrentArchetype } from "./archetypes"

vi.mock("virtual:astropi-user-config", () => {
  const userConfig = {
    projectName: "Astropi Project",
    archetypes: [
      {
        name: "Blog",
        path: "blog",
        collection: "blog",
        type: "blog-content",
      },
      {
        name: "Changelog",
        path: "changelog",
        collection: "changelog",
        type: "blog-content",
      },
      {
        name: "Docs",
        path: "docs",
        collection: "docs",
        type: "docs-content",
      },
    ],
  }
  return { userConfig }
})

describe("getCurrentArchetype", () => {
  it("should return the current archetype based on the URL location", () => {
    const location = new URL("https://astro.build/blog")
    const archetype = getCurrentArchetype(location)
    expect(archetype).toEqual({
      name: "Blog",
      path: "blog",
      collection: "blog",
      type: "blog-content",
    })
  })
})
