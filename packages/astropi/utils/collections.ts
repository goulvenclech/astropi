import { z } from "astro/zod"
/**
 * Used by index.ts to generate collections based on User configuration.
 */
export function generateCollections(
  // TODO: how to type injectRoute?
  injectRoute: any,
  archetypes: Array<Archetype>
) {
  archetypes.forEach((archetype) => {
    injectRoute({
      pattern: `/${archetype.path}`,
      entrypoint: getEntryPoint(archetype),
      prerender: true,
    })
  })
}
/**
 * Get the entrypoint for a given archetype, based on the archetype's type.
 */
function getEntryPoint(archetype: Archetype): string {
  switch (archetype.type) {
    case "blog-content":
      return "astropi/pages/blog.astro"
    case "docs-content":
      return "astropi/pages/docs-content.astro"
    case "docs-openapi":
      return "astropi/pages/docs-openapi.astro"
    default:
      return "astropi/pages/index.astro"
  }
}

/**
 * Default collection for a blog based on MDX files.
 */
export const blogContentCollection = {
  type: "content",
  schema: z.object({
    type: z.literal("blog-content"),
    title: z.string(),
  }),
}

/**
 * Default collection for a documentation based on MDX files.
 */
export const docsContentCollection = {
  type: "content",
  schema: z.object({
    type: z.literal("docs-content"),
    title: z.string(),
  }),
}

/**
 * Default collection for a documentation based on OpenAPI yaml files.
 */
export const docsOpenApiCollection = {
  type: "content",
  schema: z.object({
    type: z.literal("docs-openapi"),
    title: z.string(),
  }),
}
