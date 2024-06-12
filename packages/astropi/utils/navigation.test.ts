// Test packages/astropi/utils/navigation.ts exported functions
import { describe, it, expect, vi } from "vitest"
import { generateCollectionNavigation } from "./navigation"

const exampleCollectionEntries = [
  {
    id: "99-no-category-entry",
    slug: "no-category-entry",
    body: "",
    collection: "doc",
    data: {
      type: "docs-content",
      title: "No category entry",
      status: "published",
    },
    render: [],
  },
  {
    id: "1-first-category/index.md",
    slug: "first-category",
    body: "",
    collection: "doc",
    data: {
      type: "docs-content",
      title: "First category",
      status: "published",
    },
    render: [],
  },
  {
    id: "2-second-category/index.mdx",
    slug: "second-category",
    body: "",
    collection: "doc",
    data: {
      type: "docs-content",
      title: "Second category",
      status: "published",
    },
    render: [],
  },
  {
    id: "1-first-category/1-first-category-entry",
    slug: "first-category/first-category-entry",
    body: "",
    collection: "doc",
    data: {
      type: "docs-content",
      title: "First category entry",
      status: "published",
    },
    render: [],
  },
  {
    id: "1-first-category/2-second-category-entry",
    slug: "first-category/second-category-entry",
    body: "",
    collection: "doc",
    data: {
      type: "docs-content",
      title: "Second category entry",
      status: "published",
    },
    render: [],
  },
  {
    id: "2-second-category/1-first-category-entry",
    slug: "second-category/first-category-entry",
    body: "",
    collection: "doc",
    data: {
      type: "docs-content",
      title: "First category entry",
      status: "published",
    },
    render: [],
  },
  {
    id: "2-second-category/2-second-category-entry",
    slug: "second-category/second-category-entry",
    body: "",
    collection: "doc",
    data: {
      type: "docs-content",
      title: "Second category entry",
      status: "published",
    },
    render: [],
  },
]

describe("generateNavigation", () => {
  it("should generate a navigation based on the collection entries", () => {
    const navigation = generateCollectionNavigation(exampleCollectionEntries)
    console.log(navigation)
    expect(navigation).toEqual({
      "": [
        {
          id: "99-no-category-entry",
          slug: "no-category-entry",
          body: "",
          collection: "doc",
          data: {
            type: "docs-content",
            title: "No category entry",
            status: "published",
          },
          render: [],
        },
      ],
      "First category": [
        {
          id: "1-first-category/1-first-category-entry",
          slug: "first-category/first-category-entry",
          body: "",
          collection: "doc",
          data: {
            type: "docs-content",
            title: "First category entry",
            status: "published",
          },
          render: [],
        },
        {
          id: "1-first-category/2-second-category-entry",
          slug: "first-category/second-category-entry",
          body: "",
          collection: "doc",
          data: {
            type: "docs-content",
            title: "Second category entry",
            status: "published",
          },
          render: [],
        },
      ],
      "Second category": [
        {
          id: "2-second-category/1-first-category-entry",
          slug: "second-category/first-category-entry",
          body: "",
          collection: "doc",
          data: {
            type: "docs-content",
            title: "First category entry",
            status: "published",
          },
          render: [],
        },
        {
          id: "2-second-category/2-second-category-entry",
          slug: "second-category/second-category-entry",
          body: "",
          collection: "doc",
          data: {
            type: "docs-content",
            title: "Second category entry",
            status: "published",
          },
          render: [],
        },
      ],
    })
  }),
    it("should return an empty object if no entries are provided", () => {
      const navigation = generateCollectionNavigation([])
      expect(navigation).toEqual({})
    }),
    it("should always return the no-category entries first", () => {
      const navigation = generateCollectionNavigation(exampleCollectionEntries)
      const keys = Object.keys(navigation)
      expect(keys[0]).toEqual("")
    })
})
