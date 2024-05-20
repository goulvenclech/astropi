// TDD getSidebarNavigation
//   ✓ should return an empty array when no entries are found
//   ✓ should return an array of categories, with their entries when entries are found

import { describe, it, expect, vi } from "vitest"
import { getSidebarNavigation } from "./navigations.ts"

describe("getSidebarNavigation", () => {
  it("should return an empty array when no entries are found", async () => {
    const collection = "blog"
    const sidebarNavigation = await getSidebarNavigation(collection)
    expect(sidebarNavigation).toEqual([])
  })
})
