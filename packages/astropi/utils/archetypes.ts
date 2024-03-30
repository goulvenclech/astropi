/**
 * Contains utility functions for working with Archetypes.
 */
import { userConfig } from "virtual:astropi-user-config"
/**
 * For a given URL location, get the current Archetype.
 * @param location - the current URL location.
 */
export function getCurrentArchetype(location: URL): Archetype | undefined {
  const currentArchetype = userConfig.archetypes.find(
    (archetype) => archetype.path === location.pathname.split("/")[1]
  )
  return currentArchetype
}
