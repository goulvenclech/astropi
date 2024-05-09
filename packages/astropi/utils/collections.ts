/**
 * COLLECTIONS UTILS
 * This module contains functions for generating collections based on the user's configuration.
 * Also exports default collections Zod schemas.
 */
/**
 * Used by index.ts to generate collections based on User configuration.
 * Generate both static (collection index) and dynamic (collection entry) routes.
 * @param injectRoute - Function to inject a route into the Astro config.
 * @param archetypes - Array of archetypes provided by the user.
 */
export function generateCollections(
  // TODO: how to type injectRoute?
  injectRoute: any,
  archetypes: Array<Archetype>
) {
  archetypes.forEach((archetype) => {
    // Inject a route for each archetype index
    injectRoute({
      pattern: `/${archetype.path}`,
      entrypoint: getEntryPoint(archetype),
      prerender: true,
    })
  })
  archetypes.forEach((archetype) => {
    // Inject a route for each archetype dynamic route
    injectRoute({
      pattern: `/${archetype.path}/[...slug]`,
      entrypoint: getDynamicEntryPoint(archetype),
      prerender: true,
    })
  })
}

/**
 * Get the static entrypoint for a given archetype, based on the archetype's type.
 * @param archetype - The archetype to get the static entrypoint for.
 */
function getEntryPoint(archetype: Archetype): string {
  switch (archetype.type) {
    case "blog-content":
      return "@goulvenclech/astropi/pages/blog.astro"
    case "docs-content":
      return "@goulvenclech/astropi/pages/docs-content.astro"
    case "docs-openapi":
      return "@goulvenclech/astropi/pages/docs-openapi.astro"
  }
}

/**
 * Get the dynamic entrypoint for a given archetype, based on the archetype's type.
 * @param archetype - The archetype to get the dynamic entrypoint for.
 */
function getDynamicEntryPoint(archetype: Archetype): string {
  switch (archetype.type) {
    case "blog-content":
      return "@goulvenclech/astropi/pages/[...blog].astro"
    case "docs-content":
      return "@goulvenclech/astropi/pages/[...docs-content].astro"
    case "docs-openapi":
      return "@goulvenclech/astropi/pages/[...docs-openapi].astro"
  }
}
