/**
 * Contains utility functions to generate navigations.
 */
import type { CollectionEntry, CollectionKey } from "astro:content"
import Path from "path"
/**
 * Generate a collection navigation based on the collection entries.
 * Group entries by their category (folder) and sort them alphabetically.
 * @param entries Collection entries to group.
 * @returns Grouped collection entries.
 */
export const generateCollectionNavigation = (
  entries: Array<CollectionEntry<CollectionKey>>
): Record<string, CollectionEntry<CollectionKey>[]> => {
  // List categories (folders) in the collection
  const categories = entries.filter(
    (entry) => Path.parse(entry.id).name === "index"
  )
  const grouped = entries.reduce(
    (acc, entry) => {
      // Get the category of the entry and use its title as the key
      const category = categories.find((cat) =>
        entry.id.startsWith(Path.parse(cat.id).dir)
      )
      const key = category ? category.data.title : ""
      // Initialize the category array if it doesn't exist
      if (!acc[key]) acc[key] = []
      // Group entries by category and remove category indexes
      if (Path.parse(entry.id).name !== "index") acc[key].push(entry)
      return acc
    },
    {} as Record<string, CollectionEntry<CollectionKey>[]>
  )
  // Sort alphabetically, but keep the no-category entries first
  return Object.fromEntries(
    Object.entries(grouped).sort(([a], [b]) => {
      if (a === "") return -1
      if (b === "") return 1
      return a.localeCompare(b)
    })
  ) as Record<string, CollectionEntry<CollectionKey>[]>
}
