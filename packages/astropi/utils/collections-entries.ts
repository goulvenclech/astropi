/**
 * COLLECTIONS ENTRIES UTILS
 * This module contains functions to generate or get collections entries.
 */
import { getCollection } from "astro:content"
import { userConfig } from "virtual:astropi-user-config"

/**
 * For a given collection type, get all the collection entries.
 * @param type - An Astropi collection type, see "collections-schemas.ts"
 */
export async function getCollectionTypeEntries(type: string) {
  // Get the collection archetypes created by the user
  const { archetypes } = userConfig
  // Get every Astropi collections from the archetypes
  const allAstropiCollectionsEntries = await Promise.all(
    archetypes.map(async (archetype) => {
      const collection = await getCollection(archetype.collection)
      return collection
    })
  )
  // Filter the collections for a given type
  const allBlogContentEntries = allAstropiCollectionsEntries
    .flat()
    .filter((entry) => entry.data.type === type)
  // Finnaly, return the params and props for each entry
  return allBlogContentEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }))
}

/**
 * For a given collection, get all the collection entries
 * @param collection - The collection to get the entries from
 */
export async function getCollectionEntries(collection: string) {
  // Get the collection archetypes created by the user
  const { archetypes } = userConfig
  // Get every Astropi collections from the archetypes
  const allAstropiCollectionsEntries = await Promise.all(
    archetypes.map(async (archetype) => {
      const collection = await getCollection(archetype.collection)
      return collection
    })
  )
  // Filter the collections for a given collection
  const allBlogContentEntries = allAstropiCollectionsEntries
    .flat()
    .filter((entry) => entry.collection === collection)
  console.log(allBlogContentEntries)
  return allBlogContentEntries
}
