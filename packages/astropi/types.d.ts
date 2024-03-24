/**
 * UserConfig is passed by the user in `astro.config.mjs` through the `astropi()` integration.
 * */
interface AstropiUserConfig {
  projectName: string
}
// Used by "./virtual-user-config.ts"
declare module "virtual:astropi-user-config" {
  export const config: AstropiUserConfig
}
