import type { AstroIntegration } from "astro"
import vitePluginAstropiUserConfig from "./utils/virtual-user-config"
import {
  generateCollections,
  blogContentCollection,
  docsContentCollection,
  docsOpenApiCollection,
} from "./utils/collections"
/**
 * UNDERSTANDING ASTRO INTEGRATIONS API
 * Astropi isn't a "starter" Astro project, where the user has to clone a whole project
 * and build on top of it. Instead, it's an Astro integration that can be added to any
 * existing Astro project, or used as a "template" when creating a new Astro project.
 * The Astro Integration API allows us to hook into the Astro build process and inject
 * our own custom logic, like adding routes, modifying the Astro config, etc.
 * This way, the user can have a fully functional Astro project with a single command,
 * and just has to configure it to their needs / add their own content.
 * See reference -> https://docs.astro.build/en/reference/integrations-reference
 */
export default function AstropiIntegration(
  userConfig: AstropiUserConfig
): AstroIntegration {
  // Get what we need from the user Config
  const { archetypes } = userConfig
  return {
    name: "astropi",
    hooks: {
      // This hooks run on initialization, before either the Vite or Astro config have resolved.
      // We use this hook to modify the Astro config, and inject our custom routes.
      "astro:config:setup": async ({ injectRoute, updateConfig }) => {
        // Inject a route for the homepage
        injectRoute({
          pattern: "/",
          entrypoint: "astropi/pages/index.astro",
          prerender: true,
        })
        generateCollections(injectRoute, archetypes)
        // Update the Astro config
        updateConfig({
          vite: {
            plugins: [vitePluginAstropiUserConfig(userConfig)],
          },
        })
      },
    },
  }
}
/**
 * This are the default collections provided by Astropi. Users can use or extend them
 * in their `config.ts` file.
 * See how we parse them -> packages/astropi/utils/collections.ts
 */
export { blogContentCollection, docsContentCollection, docsOpenApiCollection }
