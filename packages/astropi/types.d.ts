/**
 * UserConfig is passed by the user in `astro.config.mjs` through the `astropi()` integration.
 * */
interface AstropiUserConfig {
  projectName: string
  archetypes: Array<Archetype>
}
// We generate collections based on the user's archetypes configuration.
type Archetype = {
  name: string
  path: string
  collection: any
  type: "blog-content" | "docs-content" | "docs-openapi"
}
// Used by "./virtual-user-config.ts"
declare module "virtual:astropi-user-config" {
  export const userConfig: AstropiUserConfig
}
