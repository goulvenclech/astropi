/**
 * Contains utility functions for working with Archetypes.
 */
import { userConfig } from "virtual:astropi-user-config"
/**
 * For a given URL location, get the current Archetype.
 * @param location - the current URL location.
 */
export function getCurrentArchetype(location: URL): Archetype {
  const currentArchetype = userConfig.archetypes.find(
    (archetype) => archetype.path === location.pathname.split("/")[1]
  )
  if (!currentArchetype) {
    throw new Error(
      `Astropi: No archetype found for the path: ${location.pathname.split("/")[1]}`
    )
  }
  return currentArchetype
}
